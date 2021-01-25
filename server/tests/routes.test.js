const axios = require('axios');

/* eslint-disable no-undef */
describe('Get Lodge Route Exisits', () => {
  it('should test that the api can return data for a lodge with id 1000', () => {
    const config = {
      method: 'get',
      url: '/lodge/?id=1000',
      headers: { },
    };

    axios(config)
      .then((response) => {
        expect(response.data).toHaveProperty('description');
      });
  });
});
