const request = require('superagent');

const fields = ['steps_distance', 'productive_min', 'commits', 'sleep', 'tracks'];

const field = 'commits';
// const map1 = array1.map(x => x * 2);

function getSpecificAttrPlural() {
  callExist();
}

function callExist() {
  return request
    .get(`https://exist.io/api/1/users/$self/attributes/${field}`)
    .set('Authorization', `Token ${process.env.TOKEN}`)
    .then(res => console.log(res.body));
}

module.exports = getSpecificAttrPlural;

