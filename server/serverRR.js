/* eslint-disable no-var */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { urlencoded } = require('body-parser');

const app = express();
app.use(cors());

var servNum = 0;
const servList = ['http://localhost:3001/awstry?id=', 'http://ec2-3-138-169-148.us-east-2.compute.amazonaws.com:3001/awstry', 'http://ec2-3-138-169-148.us-east-2.compute.amazonaws.com:3001/awstry'];

app.get('/awstry', (req, res) => {
  servNum++;
  res.redirect(servList[servNum % 3] + req.query.id);
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
