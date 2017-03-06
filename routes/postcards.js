
'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
var fs = require('fs');
require('dotenv').config();

const lobFactory = require('../node_modules/lob/lib/index.js');
const LOB_KEY = process.env.LOB_KEY;
const lob = new lobFactory(LOB_KEY);

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

  const {postcard_data} = req.body;
  const {payment_data} = req.body;
  const token = payment_data.token;
  const email = payment_data.email;
  console.log("from stripe", req.body.stripeToken);

  const newCard = postcard_data.composition_settings;

  var send_to = postcard_data.to;
  var send_from = postcard_data.from;

  const msg = postcard_data.message;

  const color = postcard_data.color_hex;
  const font = postcard_data.font_family;
  const size = postcard_data.font_size;
  const filter = postcard_data.filter_name;

  // Retrieve html template
  let postcard_front = fs.readFileSync(__dirname + `/../public/postcard_templates/${newCard.template_name}`, { encoding: 'utf-8' });
  let postcard_back = fs.readFileSync(__dirname + `/../public/postcard_templates/postcard_back.html`, { encoding: 'utf-8' });
  console.log("token", token);
  // Add zip to db for data viz
  newCard.from_zip = send_from.address_zip;
  // CHARGE USER
  stripe.customers.create({
    email: email
  }).then(function(customer){
    return stripe.customers.createSource(customer.id, {
      source: token.card
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
    console.log("Charge Succeeded!", charge);
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
        font_family: font,
        font_size: size,
        color: color,
        message: msg,
        image_scale: newCard.image_scale,
        image_pos_x: newCard.image_pos_x,
        image_pos_y: newCard.image_pos_y,
        image_filter: filter
      }
    }, function (err, postcard) {
      if (err) {
        // TODO switch statement to send different errors
        return res.send(err);
      }

      // newCard.order_id = postcard.id;
      // newCard.image_processed = false;
      newCard.thumbnail_url = postcard.thumbnails[0].large;
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
    console.log(name, notes);
    console.log(id);
    knex('postcards')
      .where('postcards.id', id)
      .then((result) => {
        result[0].name = name;
        result[0].notes = notes;
        result[0].is_saved = true;
        console.log(result);
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
