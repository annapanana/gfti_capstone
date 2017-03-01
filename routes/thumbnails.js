'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.post('/', (req, res, next) => {

  const order_id = req.body.order_id;
  knex('postcards')
    .where('postcards.order_id', order_id)
    .then((result) => {
      console.log("lob callback", result); // heroku logs
      // res.send(responseTest);
      // socket.broadcast.to('room').emit('order status', message)
      // socket.emit('order status', result);
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
