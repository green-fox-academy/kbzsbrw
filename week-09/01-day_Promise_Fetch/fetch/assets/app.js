'use strict';

const button = document.querySelector('button');
const buttonAsync = document.querySelector('.async');
const div = document.querySelector('div');
const url = 'http://api.icndb.com/jokes/randomsi'

function fetchJoke() {
  let p = document.createElement('p');
  fetch(url)
    .then(response => response.json())
    .then(data => {
      p.innerText = data.value.joke;
    })
    .catch(error => console.log(error));
  div.appendChild(p);
}
async function fetchJokeAsync() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    let p = document.createElement('p');
    p.innerText = data.value.joke;
    div.appendChild(p);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
button.addEventListener('click', () => {
  event.preventDefault();
  fetchJoke();
});
buttonAsync.addEventListener('click', () => {
  event.preventDefault();
  fetchJokeAsync();
});
