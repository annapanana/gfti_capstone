'use strict';

const express = require('express');
const app = express();
const postcards = require('./routes/postcards');
const photobucket = require('./routes/photobucket');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended:false
}));

app.use(bodyParser.json());
app.use(express.static('./public'));
app.use('/postcards', postcards);
app.use('/photobucket', photobucket);

app.use('/jquery', express.static('node_modules/jquery/dist'));
app.use('/bootstrap', express.static('node_modules/bootstrap/dist/js'));
app.use('/angular', express.static('node_modules/angular'));
app.use('/ui-bootstrap', express.static('node_modules/ui-bootstrap/'));
app.use('/angular-ui-router', express.static('node_modules/angular-ui-router/release'));
app.use('/angular-slick', express.static('node_modules/angular-slick/dist'));
app.use('/slick-carousel', express.static('node_modules/slick-carousel/slick'));

const port = process.env.PORT || 3000;

app.get('/', (req, res, next) => {
  console.log("Hello World");
});

app.listen(port, () => {
  console.log('Listening on port', port);
});

module.exports = app;
