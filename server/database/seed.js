require('dotenv').config();
const mysql = require('mysql');
const fs = require('fs');
const path = require('path');

const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  multipleStatements: true,
});

const sql = fs.readFileSync(path.join(__dirname, './dataSeed.sql')).toString();

// console.log(sql);

con.connect((err) => {
  if (err) throw err;
  con.query(sql, (err, result, fields) => {
    if (err) throw err;

    console.log('Data Seeded!');

    con.end();
  });
});
