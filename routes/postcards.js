
'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
var fs = require('fs');
require('dotenv').config();

const lobFactory = require('../node_modules/lob/lib/index.js');
const lob = new lobFactory('test_97f0caa8c52f230f7bef2daef8b58e70f81');
// const lob = new lobFactory('live_3e3aea15166b16c9a0b009c6ed266d858c1');


const STRIPE_KEY = process.env.STRIPE_KEY;
const stripe = require('stripe')(STRIPE_KEY);

router.get('/', (req, res, next) => {
  knex('postcards')
    .then((result) => {
      result = result.map((r) => {
        r.date = r.updated_at;
        delete r.created_at;
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

  const {composition_settings} = req.body;
  const newCard = composition_settings;

  const {to} = req.body;
  var send_to = to;
  const {from} = req.body;
  var send_from = from;

  const {message} = req.body;
  const msg = message;

  const {payment_info} = req.body;
  const payment = payment_info;
  console.log(payment);
  const {color_hex} = req.body;
  const color = color_hex;

  // Retrieve html template
  let postcard_front = fs.readFileSync(__dirname + `/../public/postcard_templates/${newCard.template_name}`, { encoding: 'utf-8' });
  let postcard_back = fs.readFileSync(__dirname + `/../public/postcard_templates/postcard_back.html`, { encoding: 'utf-8' });

  // Add zip to db for data viz
  newCard.from_zip = send_from.address_zip;

  // CHARGE USER
  stripe.customers.create({
    email: payment.email
  }).then(function(customer){
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
    // console.log("source", source);
    return stripe.charges.create({
      amount: 150,
      currency: 'usd',
      customer: source.customer
    });
  }).then(function(charge) {
    // New charge created on a new customer
    console.log("Charge Succeeded!");
    // CREATE POSTCARD
    lob.postcards.create({
      to: send_to,
      from: send_from,
      size: '4x6',
      front: postcard_front,
      back: postcard_back,
      data: {
        image_url: newCard.image_url,
        greetings_subtext: newCard.greetings_subtext,
        color: color,
        message: msg
        // frame: frame_url
      }
    }, function (err, postcard) {
      if (err) {
        // TODO switch statement to send different errors
        return res.send(err);
      }

      // console.log("card", postcard);
      newCard.order_id = postcard.id;
      newCard.image_processed = false;

      console.log("ORDER", postcard.id);
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

  router.patch('/:id', (req, res, next) => {
    let id = req.params.id;
    const {card_name, card_notes, thumbnail} = req.body;
    var name = card_name;
    var notes = card_notes;
    var thumb = thumbnail;

    knex('postcards')
      .where('postcards.id', id)
      .then((result) => {
        result[0].name = name;
        result[0].notes = notes;
        result[0].thumbnail_url = thumb;

        knex('postcards')
          .where('postcards.id', id)
          .update(result[0], '*')
          .then((updatedResult) => {
            res.send(updatedResult);
          })
          .catch((err) => {
            res.send(err);
          });

      })
      .catch((err) => {
        res.send(err);
      });
  });


});

module.exports = router;
