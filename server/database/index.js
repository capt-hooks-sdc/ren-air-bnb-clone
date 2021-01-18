var mysql = require('mysql');


var con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


// Collect a bookings data based on the id
let getLodgingById = function (id) {
  return new Promise((resove, reject) => {
    const q = `SELECT * FROM lodgings l LEFT JOIN hosts h ON l.host_id = h.id WHERE l.id = ${id};`
    con.query(q, (err,rows) => {
      if (err) {
        console.log(`Error Getting Data: ${err}`)
        throw reject(err)
      }

      if(rows.length > 0){
        console.log('Data received from Db:');
        resove(rows);
      } else {
        throw reject('No Data Returned');
      }


    });

  }) // End of Promise Creation

}


// async function getLodgingById(id) {
//   return new Promise((resove, reject) => {
//     const q = `SELECT * FROM lodgings l LEFT JOIN hosts h ON l.host_id = h.id WHERE l.id = ${id};`
//     con.query(q, (err,rows) => {
//       if(err) throw reject(err)

//       if(rows.length > 0){
//         console.log('Data received from Db:');
//         resove(rows);
//       } else {
//         throw reject('No Data Returned');
//       }


//     });

//   }) // End of Promise Creation
// }

// module.exports = {
//   getLodgingById
// }
// module.exports.getLodgingById = getLodgingById;

module.exports = {

    getLodgingById: getLodgingById,

}