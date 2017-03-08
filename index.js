var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static('assets'))
app.use(bodyParser.json())

var messages = ['hi', 'hello', 'how are ya'];

app.get('/messages', function (req, res, next) {
  res.status(200).json({ messages: messages });
});
app.post('/messages', function (req, res, next) {
  messages.push(req.body.message);
  res.status(200).json({ messages: messages });
});

app.listen(3000);
