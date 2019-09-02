'use strict';

const button = document.querySelector('button');
const div = document.querySelector('div');
function fetchJoke() {
  let p = document.createElement('p');
  fetch('http://api.icndb.com/jokes/random')
    .then(response => response.json())
    .then(data => {
      p.innerText = data.value.joke;
    })
    .catch(error => console.log(error));
  div.appendChild(p);
}
button.addEventListener('click', () => {
  event.preventDefault();
  fetchJoke();
});
