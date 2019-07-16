const request = require('superagent');

const login =  JSON.parse(`{
  "username": "${process.env.USERNAME}",
  "password" : "${process.env.PASSWORD}"
}`);

function getToken() {
  return request
    .post('https://exist.io/api/1/auth/simple-token/')
    .send(login)
    .catch();
}


module.exports = getToken;
