
'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
var fs = require('fs');
require('dotenv').config();

const lobFactory = require('../node_modules/lob/lib/index.js');
const lob = new lobFactory('test_97f0caa8c52f230f7bef2daef8b58e70f81');

const STRIPE_KEY = process.env.STRIPE_KEY;
const stripe = require('stripe')(STRIPE_KEY);

router.get('/', (req, res, next) => {
  knex('postcards')
    .then((result) => {
      result = result.map((r) => {
        r.date = r.updated_at;
        delete r.created_at;
        delete r.updated_at;
        return r;
      });
      res.send(result);
    });
});

router.get('/:id/', (req, res, next) => {
  knex('postcards')
    .where('id', req.params.id)
    .then((result) => {
      result[0].date = result[0].updated_at;
      delete result[0].created_at;
      delete result[0].updated_at;
      res.send(result[0]);
    });
});

router.post('/', (req, res, next) => {
  console.log(STRIPE_KEY);
  const {settings} = req.body;
  const newCard = settings;

  const {to} = req.body;
  var send_to = to;
  const {from} = req.body;
  var send_from = from;

  const {message} = req.body;
  const msg = message;

  const {payment_info} = req.body;
  const payment = payment_info;

  // Retrieve html template
  let postcard = fs.readFileSync(__dirname + `/../public/postcard_templates/${newCard.template_name}`, { encoding: 'utf-8' });

  // Add zip to db for data viz
  newCard.from_zip = send_from.address_zip;

  // TODO server side validation of newCard object

  // CHARGE USER
  stripe.customers.create({
    email: payment.email
  }).then(function(customer){
    console.log("customer", customer);
    return stripe.customers.createSource(customer.id, {
      source: {
         object: 'card',
         exp_month: payment.exp_month,
         exp_year: payment.exp_year,
         number: payment.number,
         cvc: payment.cvc
      }
    });
  }).then(function(source) {
    console.log("source", source);
    return stripe.charges.create({
      amount: 150,
      currency: 'usd',
      customer: source.customer
    });
  }).then(function(charge) {
    // New charge created on a new customer
    console.log("Charge Succeeded!");
    console.log("charge", charge);
    // CREATE POSTCARD
    lob.postcards.create({
      to: send_to,
      from: send_from,
      size: '4x6',
      front: postcard,
      message: msg,
      data: {
        image_url: newCard.image_url,
        greetings_subtext: newCard.greetings_subtext
      }
    }, function (err, postcard) {
      if (err) {
        // TODO switch statement to send different errors
        return res.send(err);
      }

      knex('postcards')
        .insert(newCard, '*')
        .then((result) => {
          result[0].postcard = postcard;
          return res.status(200).send(result);
        })
        .catch(err => {
          next(err);
        });
    });
  }).catch(function(err) {
    // TODO switch statement to send different errors
    return res.send(err);
  });


});

module.exports = router;
