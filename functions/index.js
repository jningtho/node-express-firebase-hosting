const functions = require('firebase-functions');
const express = require('express');
const path = require('path');
const fs = require('fs');
const ejs = require('ejs');

const app = express();

// const firebaseApp = firebaseApp.initializeApp(functions.config().firebase);
// app.engine('ejs', './views');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ejs.registerPartial('partial', fs.readFileSync(__dirname + '/views/partials/*.ejs', 'utf8'));

app.get('/timestamp', (req, res) => {
    res.send(`${Date.now()}`);
  });

exports.app = functions.https.onRequest(app);
