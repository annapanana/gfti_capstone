
'use strict';

const express = require('express');
const router = express.Router();
// const knex = require('../knex');

const aws = require('aws-sdk');
require('dotenv').config();

const S3_BUCKET = process.env.S3_BUCKET;

// NOTE: I just made this a post request, was a get request
router.post('/', (req, res, next) => {
  const s3 = new aws.S3();
  const fileName = req.body.file_name;
  const fileType = req.body.file_type;

  const s3Params = {
    Bucket: S3_BUCKET,
    Key: fileName,
    Expires: 60,
    ContentType: fileType,
    ACL: 'public-read'
  };

  s3.getSignedUrl('putObject', s3Params, (err, data) => {
    if(err){
      // console.log(err);
      // return res.end();
      res.send(err);
    }
    const returnData = {
      signedRequest: data,
      url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    };
    // res.write(JSON.stringify(returnData));
    // res.end();
    res.send(returnData);
  });
});

module.exports = router;
