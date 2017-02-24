'use strict';
const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res, next) => {
  knex('filters')
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      return res.send(err);
    });
});

module.exports = router;
