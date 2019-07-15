const request = require('superagent');

function getExistObject() {
  return request
    .get('https://exist.io/api/1/users/$self/attributes/productive_min')
    .set('Authorization', `Token ${process.env.TOKEN}`)
    .then(res => console.log(res.body))
    .catch();
}

module.exports = getExistObject;
