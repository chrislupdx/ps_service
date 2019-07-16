const request = require('superagent');

const fields = ['steps_distance', 'productive_min', 'commits', 'sleep', 'tracks'];

const field = 'commits';
// const map1 = array1.map(x => x * 2);

function getSpecificAttrPlural() {
//fields can be accessed here
//pull fields apart and put it into the get
  fields.map(field =>
    callExist(field)
  );
}

//build a url constructor function
//foreach in fields, make an an array of urls ready to get fed into get in callExist
//

function callExist(field) {
  return request
    .get('https://exist.io/api/1/users/$self/attributes/' + field)
    .set('Authorization', `Token ${process.env.TOKEN}`)
    .then(res => console.log(res.body));
}

function callExistinterp() {
  return request
    .get(`https://exist.io/api/1/users/$self/attributes/${field}`)
    .set('Authorization', `Token ${process.env.TOKEN}`)
    .then(res => console.log(res.body));
}

module.exports = getSpecificAttrPlural;

