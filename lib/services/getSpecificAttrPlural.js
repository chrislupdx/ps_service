const request = require('superagent');

function getExistProductiveObject() {
  return request
    .get('https://exist.io/api/1/users/$self/attributes/productive_min')
    .set('Authorization', `Token ${process.env.TOKEN}`)
    .then(res => console.log(res.body))
    .catch();
}
function getExistCommitObject() {
  return request
    .get('https://exist.io/api/1/users/$self/attributes/commits')
    .set('Authorization', `Token ${process.env.TOKEN}`)
    .then(res => console.log(res.body))
    .catch();
}
function getExistsleepObject() {
  return request
    .get('https://exist.io/api/1/users/$self/attributes/sleep')
    .set('Authorization', `Token ${process.env.TOKEN}`)
    .then(res => console.log(res.body))
    .catch();
}
function getExistTrackCountObject() {
  return request
    .get('https://exist.io/api/1/users/$self/attributes/tracks')
    .set('Authorization', `Token ${process.env.TOKEN}`)
    .then(res => console.log(res.body))
    .catch();
}

module.exports = { getExistProductiveObject, getExistCommitObject, getExistsleepObject, getExistTrackCountObject, getObjsPromise, getObjs };
