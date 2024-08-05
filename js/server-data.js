const REMOTE_URL = 'https://32.javascript.htmlacademy.pro/kekstagram/data';

const remoteData = fetch(REMOTE_URL)
  .then((response) => response.json())
  .then((posts) => console.log(posts));

console.log(remoteData);
