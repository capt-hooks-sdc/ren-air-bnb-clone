/* eslint-disable vars-on-top */
/* eslint-disable no-var */
const stringify = require('csv-stringify');
const fs = require('fs');
const { MongoClient } = require('mongodb');
const { exec } = require('child_process');
const faker = require('faker');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'scarebnb';

var lodgesdata = [];
var hostsdata = [];
var reservsdata = [];

const data = [];
const columns = {
  id: 'id',
  lodge_id: 'lodge_id',
  date_in: 'date_in',
  date_out: 'date_out',
  guest_id: 'guest_id',
};

for (let i = 4; i < 10000000; i++) {
  const b = Math.floor(Math.random() * 14) + 10;
  reservsdata.push({
    id: ((1000005 * 1) + i), lodge_id: Math.ceil(i / 10), date_in: `${Math.floor(Math.random() * 20 + 2000)}-0${Math.floor(Math.random() * 9)}-${b}19:23:45`, date_out: `${Math.floor(Math.random() * 20 + 2000)}-0${Math.floor(Math.random() * 9)}-${b + 2}19:23:45`, guest_id: 1,
  });
}

stringify(reservsdata, { header: true, columns }, (err, output) => {
  if (err) throw err;
  fs.writeFile('my.csv', output, (err) => {
    if (err) throw err;
    console.log('my.csv saved.');
  });
});

MongoClient.connect(url, (err, client) => {
  console.log('Connected successfully to server');

  const db = client.db(dbName);
  const collec = db.collection('lodges');

  reservsdata = [];

  for (let i = 4; i < 50000; i++) {
    const b = Math.floor(Math.random() * 14) + 10;

    collec.insertOne({
      id: i, city: faker.fake('{{address.city}}'), country: faker.fake('{{address.country}}'), description: faker.fake('{{lorem.sentence}}'), state: faker.fake('{{address.state}}'), state_abbrv: faker.fake('{{address.stateAbbr}}'), longitude: Math.floor(Math.random() * 68), latitude: Math.floor(Math.random() * 47), guests: Math.floor(Math.random() * 6), bedrooms: Math.floor(Math.random() * 6), beds: Math.floor(Math.random() * 6), baths: Math.floor(Math.random() * 6), price: Math.floor(Math.random() * 568), host_id: Math.floor(Math.random() * 10000), rating: Math.floor(Math.random() * 5), img_url: faker.fake('{image.imageUrl}'),
    }).catch((e) => console.log(e));
  }

  client.close();
});

MongoClient.connect(url, (err, client) => {
  console.log('Connected successfully to server');

  const db = client.db(dbName);
  const collec = db.collection('hosts');

  reservsdata = [];

  for (let i = 4; i < 10000; i++) {
    const b = Math.floor(Math.random() * 14) + 10;

    collec.insertOne({
      id: i, name: faker.fake('{{lorem.word}}'), image_url: faker.fake('{{image.imageUrl}}'), superhost: faker.fake('{{random.boolean}}'),
    }).catch((e) => console.log(e));
  }

  client.close();
});
