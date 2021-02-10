
var reservsdata = [];
for (let i = 4; i < 100; i++) {
    const b = Math.floor(Math.random() * 14) + 10;
    reservsdata.push({
      id: ((1000005 * 1) + i), lodge_id: Math.ceil(i / 10), date_in: `${Math.floor(Math.random() * 20 + 2000)}-0${Math.floor(Math.random() * 9)}-${b}19:23:45`, date_out: `${Math.floor(Math.random() * 20 + 2000)}-0${Math.floor(Math.random() * 9)}-${b + 2}19:23:45`, guest_id: 1,
    });
  }
  console.log(reservsdata)