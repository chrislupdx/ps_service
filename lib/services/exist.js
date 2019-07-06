const request = require('superagent');

function getToken() {
  return request
    .post('https://exist.io/api/1/auth/simple-token/')
    .set('Content-Type', 'application/json')
    .send(
      '{"username":"", "password" : ""}'
    )
    .then(res => console.log(res));

}

module.exports = getToken;
