const request = require('superagent');

function getAttr() {
  return request
    .get('https://exist.io/api/1/users/$self/attributes/steps_distance')
    .set('Authorization', `Token ${process.env.TOKEN}`)
    .then(res => console.log(res))
    .catch();
}

module.exports = getAttr;
