'use strict';

const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
  console.log("body : ", req.body);
  console.log("params : ", req.params);
});

module.exports = router;
