const request = require('superagent');

function getExistObject() {
  return request
    .get('https://exist.io/api/1/users/$self/attributes/')
    .set('Authorization', `Token ${process.env.TOKEN}`)
    .then(res => console.log(res))
    .catch();
}

module.exports = getExistObject;
