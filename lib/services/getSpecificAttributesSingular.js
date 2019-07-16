const request = require('superagent');

const fields = ['steps_distance', 'productive_min', 'commits', 'sleep', 'tracks'];

function getSpecificAttrPlural() {

  fields.map(field =>
    callExist(field)
  );
}

function callExist(field) {
  return request
    .get('https://exist.io/api/1/users/$self/attributes/' + field)
    .set('Authorization', `Token ${process.env.TOKEN}`)
    .then(res => console.log(res.body));
}

module.exports = getSpecificAttrPlural;

