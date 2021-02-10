const AWS = require('aws-sdk');
const config = require('./configdd.js');
// const uuidv1 = require('uuid/v1');

const getMovies = function (req, res) {
  AWS.config.update(config.aws_remote_config);

  const docClient = new AWS.DynamoDB.DocumentClient();

  const params = {
    TableName: config.aws_table_name,
  };

  docClient.scan(params, (err, data) => {
    if (err) {
      console.log(err);
      res.send({
        success: false,
        message: err,
      });
    } else {
      const { Items } = data;
      res.send({
        success: true,
        movies: Items,
      });
    }
  });
};

const addMovie = function (req, res) {
  AWS.config.update(config.aws_remote_config);
  const docClient = new AWS.DynamoDB.DocumentClient();
  const Item = { ...req.body };
  Item.id = 101;
  const params = {
    TableName: config.aws_table_name,
    Item,
  };

  // Call DynamoDB to add the item to the table
  docClient.put(params, (err, data) => {
    if (err) {
      res.send({
        success: false,
        message: err,
      });
    } else {
      res.send({
        success: true,
        message: 'Added movie',
        movie: data,
      });
    }
  });
};

module.exports = {
  getMovies,
  addMovie,
};
