const firebase = require('firebase');
const functions = require('firebase-functions');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const fs = require('fs');
const ejs = require('ejs');

const app = express();

// const firebaseApp = firebaseApp.initializeApp(functions.config().firebase);
// app.engine('ejs', 'views');

// app.set('views', 'views');
// app.set('view engine', 'ejs');

// setup static folder
app.use(express.static('public'));
app.use(express.static('public/css'));
app.use(express.static('public/fonts'));
app.use(express.static('public/img'));
app.use(express.static('public/js'));

app.engine('html', ejs.renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');


// app.use(express.static(path.join(__dirname + 'public')));

// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

// app.use(express.static(path.join(__dirname + './public')));

// ejs.registerPartial('partial', fs.readFileSync(__dirname + '/views/partials/', 'utf8'));

app.get('/', (req, res) => {
    res.render('index.ejs');
  });

app.get('/timestamp', (req, res) => {
    res.send(`${Date.now()}`);
  });

app.get('/about', (req, res) => {
    res.render('about.ejs');
  });

//404
app.get('*', (req, res, next) => {
    res.render('404.ejs');
  });

exports.app = functions.https.onRequest(app);

//initiate server
// var port = process.env.PORT || 5000;
// app.listen(port, function () {
//     console.log('Server listening on port ' + port + '...');
//   });
const server = app.listen(5000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log(`App listening at http://${host}:${port}`);
});