// const {MongoClient} = require('mongodb')
const mongoose = require('mongoose');

const { Schema } = mongoose;

const db = mongoose.connect('mongodb://localhost:27017/scarebnb');

const reservations1 = new Schema({
  id: {
    type: Number,
    unique: true,
  },
  lodge_id: Number,
  date_in: Date,
  date_out: Date,
  guest_id: Number,

});

const hosts1 = new Schema({
  id: {
    type: Number,
    unique: true,
  },
  name: String,
  image_url: String,
  superhost: Boolean,

});

const lodgings1 = new Schema({
  id: {
    type: Number,
    unique: true,
  },
  city: String,
  country: String,
  description: String,
  name: String,
  state: String,
  state_abbrv: String,
  longitude: String,
  latitude: String,
  guests: Number,
  bedrooms: Number,
  beds: Number,
  baths: Number,
  price: Number,
  host_id: Number,
  rating: Number,
  img_url: String,

});
const Host = new mongoose.model('Host', hosts1);
const Lodge = new mongoose.model('Lodge', lodgings1);
const Reservation = new mongoose.model('Reservation', reservations1);
async function createNewHosting() {
  const host = new Host({
    id: 2, name: 'new customer', image_url: 'www.localhost/fakeimg', superhost: true,
  }); const result = await host.save(); console.log(result);
}
createNewHosting();

async function createNewLodging() {
  const lodge = new Lodge({
    id: 1, city: 'San Jose', country: 'United States', description: 'great little comfy house', state: 'California', state_abbrv: 'CA', longitude: 69, latitude: 48, guests: 4, bedrooms: 2, beds: 2, baths: 3, price: 249, host_id: 1, rating: 4, img_url: 'localhost:8080/myimage2',
  }); const result = await lodge.save(); console.log(result);
}
createNewLodging();

async function createNewReservation() {
  const reservation = new Reservation({
    id: 1, lodge_id: 1, date_in: '2018-02-25 19:23:45', date_out: '2018-02-27 19:23:45', guest_id: 1,
  }); const result = await reservation.save(); console.log(result);
}
createNewReservation();
