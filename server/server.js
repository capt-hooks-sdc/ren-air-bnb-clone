require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./database');

const app = express();
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({ origin: process.env.PROXY_ORIGIN }));

// app.use(express.static(__dirname + '/../client/public'));
app.use('/', express.static(`${__dirname}/../client/public`));
app.use('/bundle', cors(), express.static(`${__dirname}/../client/public/bundle.js`));

const PORT = process.env.PORT || 3001;

app.get('/lodge', (req, res) => {
  console.log(`req.query.id ${req.query.id}`);
  const { id } = req.query;

  console.log(db);

  db.getLodgingById(id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get('/bundleren', (req, res) => {
  const config = {
    method: 'get',
    url: 'http://ec2-52-87-237-8.compute-1.amazonaws.com:3001/bundle',
    headers: { },
  };

  axios(config)
    .then((response) => {
      res.send(response.data);
    })
    .catch((error) => {
      res.send(`An error occured ${error}`);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
