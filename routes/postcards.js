
'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
var fs = require('fs');

const lobFactory = require('../node_modules/lob/lib/index.js');
const lob = new lobFactory('test_97f0caa8c52f230f7bef2daef8b58e70f81');
var front = fs.readFileSync(__dirname + '/../public/front.html', { encoding: 'utf-8' });

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

  const {title, search_word, maker, notes, greetings_subtext, is_location, template_id, color_id, theme_id} = req.body;
  const newCard = {title, search_word, maker, notes, greetings_subtext, is_location, template_id, color_id, theme_id};

  const {html_body} = req.body;
  const design = {html_body};

  const {send_to} = req.body;
  var to = send_to;

  const {send_from} = req.body;
  var from = send_from;

  const {message} = req.body;
  const msg = message;

  // console.log("to", to);
  // console.log("from", from);
  // console.log("message", message);

  // NOTE: These are temporarily hard coded
  to = {
    name: 'anna',
    address_line1: '1260 kalmia ave',
    address_line2: 'apartment 17',
    address_city: 'Boulder',
    address_state: 'CO',
    address_zip: '80304'
  };

  from = {
    name: 'anna',
    address_line1: '1260 kalmia ave',
    address_line2: 'apartment 17',
    address_city: 'Boulder',
    address_state: 'CO',
    address_zip: '80304'
  };

  // TODO server side validation of newCard object
  // console.log(req.body);
  knex('postcards')
    .insert(newCard, '*')
    .then((result) => {

      lob.postcards.create({
        to: to,
        from: from,
        size: '4x6',
        front: front,
        message: msg
      }, function (err, postcard) {
        console.log("err", err);
        console.log("pc", postcard);
        if (err) {
          res.send(err);
        }
        console.log('Postcard to ' + postcard.to.name + ' sent! View it here: ' + postcard.url);
        res.status(200).send(postcard);
        // return res.send("postcard sent!", postcard);
      });
    });
});

// router.patch('/:id/', (req, res, next) => {
//   const { title, description, price, item_image } = req.body;
//   const newPost = { title, description, price, item_image };
//   knex('postcards')
//     .where('id', req.params.id)
//     .update(newPost, '*')
//     .then((result) => {
//       result[0].date = result[0].updated_at;
//       delete result[0].created_at;
//       delete result[0].updated_at;
//       res.send(result[0]);
//     });
// });

// router.delete('/:id/', (req, res, next) => {
//   knex('postcards')
//     .where('id', req.params.id)
//     .then((result) => {
//       const post = result[0];
//       knex('classifieds')
//         .where('id', req.params.id)
//         .del()
//         .then(() => {
//           delete result[0].created_at;
//           delete result[0].updated_at;
//           res.send(post);
//         });
//     });
// });

module.exports = router;
