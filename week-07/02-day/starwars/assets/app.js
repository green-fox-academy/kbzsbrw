'use strict';

const apiURL = 'https://swapi.co/api/people/';
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const inputText = document.querySelector('input[type="text"]');

async function createCharacterList() {
  try {
    const api = await fetch(apiURL);
    const result = await api.json();
    const characters = Array.from(result.results);
    characters.forEach(character => {
      let li = document.createElement('li');
      li.innerText = character.name;
      ul.appendChild(li);
    });
  } catch (error) {
    console.log(error.message);
  }
}
async function createMovieList(URL) {
  try {
    const api = await fetch(URL);
    const result = await api.json();
    const characters = Array.from(result.results);
    characters.forEach(character => {
      let li = document.createElement('li');
      li.innerText = character.name;
      ul.appendChild(li);
    });
  } catch (error) {
    console.log(error.message);
  }
}
window.onload = createCharacterList();
form.addEventListener('submit', e => {
  console.log(inputText.value);
  e.preventDefault();
  fetch(apiURL).then(console.log);
});
