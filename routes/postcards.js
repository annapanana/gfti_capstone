
'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
var fs = require('fs');

const lobFactory = require('../node_modules/lob/lib/index.js');
const lob = new lobFactory('test_97f0caa8c52f230f7bef2daef8b58e70f81');
// var postcard = fs.readFileSync(__dirname + '/../public/front_noimg.html', { encoding: 'utf-8' });

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
  const {settings} = req.body;
  const newCard = settings;

  const {to} = req.body;
  var send_to = to;
  const {from} = req.body;
  var send_from = from;
  const {message} = req.body;
  const msg = message;

  let postcard = fs.readFileSync(__dirname + `/../public/postcard_templates/${newCard.template_name}`, { encoding: 'utf-8' });
  // TODO server side validation of newCard object

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
});

module.exports = router;
