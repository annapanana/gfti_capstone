
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

router.get('/orders/:id/', (req, res, next) => {
  knex('postcards')
    .where('order_id', req.params.id)
    .then((result) => {
      // console.log(result);
      let postcardData = {
        pdf_url: result[0].pdf_url,
        delivery_date: result[0].delivery_date
      };
      res.send(postcardData);
    })
    .catch((err) => {
      next(err);
    });
});

router.post('/', (req, res, next) => {
  const postcard_data = JSON.parse(req.body.postcard_data);
  const newCard = postcard_data.composition_settings;

  const token = req.body.stripeToken;
  // console.log(token);
  const send_to = postcard_data.to;
  const send_from = postcard_data.from;
  const msg = postcard_data.message;

  console.log(_dirname);
  console.log();

  // Retrieve html template
  let postcard_front = fs.readFileSync(__dirname + `/../public/postcard_templates/${newCard.template_name}`, { encoding: 'utf-8' });
  let postcard_back = fs.readFileSync(__dirname + `/../public/postcard_templates/postcard_back.html`, { encoding: 'utf-8' });

  // CHARGE USER
stripe.charges.create({
    amount: 150,
    currency: "usd",
    description: "new postcard",
    source: token

  }).then(function(charge) {
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
        font_family: newCard.font_family,
        font_size: newCard.font_size,
        color: newCard.color_hex,
        message: msg,
        text_pos: newCard.text_pos,
        image_scale: newCard.image_scale,
        image_pos_x: newCard.image_pos_x,
        image_pos_y: newCard.image_pos_y,
        image_filter: newCard.filter_name
      }
    }, function (err, postcard) {
      if (err) {
        // TODO switch statement to send different errors
        return res.send(err);
      }

      // These do not get entered into DB, only used for LOB Card Creation
      delete newCard.color_hex;
      delete newCard.font_family;
      delete newCard.filter_name;
      delete newCard.frame_url;

      newCard.thumbnail_url = postcard.thumbnails[0].large;
      newCard.pdf_url = postcard.url;
      newCard.delivery_date = postcard.expected_delivery_date;

      if (newCard.id) {
        delete newCard.id;
      }

      knex('postcards')
        .insert(newCard, '*')
        .then((result) => {
          result[0].postcard = postcard;
          console.log("THIS IS THE SENT POST CARD", postcard);
          res.redirect('/postcard-sent');

          // res.send(result[0])
          // return res.status(200).send(result);
        })
        .catch((err) => {
          next(err);
        });
    });
  }).catch(function(err) {
    // TODO switch statement to send different errors
    res.redirect('/');
    // return res.send(err);
  });

  router.patch('/:id', (req, res, next) => {
    let id = req.params.id;
    const {card_name, card_notes} = req.body;
    var name = card_name;
    var notes = card_notes;
    knex('postcards')
      .where('postcards.order_id', id)
      .then((result) => {
        result[0].name = name;
        result[0].notes = notes;
        result[0].is_saved = true;
        knex('postcards')
          .where('postcards.order_id', id)
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
