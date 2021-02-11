/* eslint-disable prefer-destructuring */
require('dotenv').config();
require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// const compression = require('compression');
const awsdy = require('./mongodatabases/awsdd.js');

const db = require('./mongodatabases/tester.js');

const app = express();

// app.use(compression());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
// app.use(cors({ origin: process.env.PROXY_ORIGIN }));

// app.use(express.static(__dirname + '/../client/public'));
// app.use('/', express.static(`${__dirname}/../client/public`));
// app.use('/bundle', cors(), express.static(`${__dirname}/../client/public/bundle.js`));

const PORT = process.env.PORT || 3001;

app.get('/lodge', cors(), (req, res) => {
  console.log(`req.query.id ${req.query.id}`);
  const id = req.query.id;

  // console.log(Number(id));

  db.findit(Number(id))
    .then((result) => res.send(result));
  // console.log(g);
});
app.get('/awstry', (req, res) => {
  awsdy.searchMovies(req, res);
});
app.post('/awstry', (req, res) => {
  awsdy.addMovie(req, res);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
/* .then((data) => {
  res.json(data);
})
.catch((err) => {
  res.json(err);
}); */
