const faker = require('faker');

const axios = require('axios');

for (let i = 0; i < 1000; i++) {
  const data = JSON.stringify([{ title: faker.fake('{{lorem.sentence}}') }]);

  const config = {
    method: 'post',
    url: 'http://ec2-3-138-169-148.us-east-2.compute.amazonaws.com:3001/awstry',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
  };
  console.log('hi');
  axios(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
}
