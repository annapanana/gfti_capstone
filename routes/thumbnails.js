'use strict';

const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
  let responseTest = {
    body: req.body,
    params: req.params
  };
  res.send(responseTest);
});

module.exports = router;
