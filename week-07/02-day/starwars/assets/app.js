'use strict';

const apiURL = 'https://swapi.co/api/people/';
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const inputText = document.querySelector('input[type="text"]');
const instruction = document.querySelector('p');

async function createCharacterList() {
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  try {
    const api = await fetch(apiURL);
    const result = await api.json();
    const characters = Array.from(result.results);
    characters.forEach(charachter => {
      let li = document.createElement('li');
      li.innerText = charachter.name;
      ul.appendChild(li);
    });
    instruction.innerText = 'Click on the characther to list movies';
  } catch (error) {
    console.log(error.message);
  }
}
async function createMovieListByCharacter(URL, characterName) {
  try {
    const api = await fetch(`${URL}?search=${characterName}`);
    const result = await api.json();
    const moviesAPI = Array.from(result.results[0].films);
    moviesAPI.forEach(movieAPI => {
      let li = document.createElement('li');
      li.className = "movie";
      fetch(movieAPI)
        .then(result => result.json())
        .then(parsed => (li.innerText = parsed.title))
        .catch(console.log);
      ul.appendChild(li);
    });
    instruction.className = 'back';
  instruction.addEventListener('click', createCharacterList);
  instruction.innerText = 'Click to see charachters';
  } catch (error) {
    console.log(error.message);
  }
}
function onClick(e) {
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  createMovieListByCharacter(apiURL, e.target.innerText);
  ul.removeEventListener('click',e => onClick(e));
}

//APP
window.onload = createCharacterList();

form.addEventListener('submit', e => {
  e.preventDefault();
  while (ul.firstChild) {
    ul.removeChild(ul.firstChild);
  }
  createMovieListByCharacter(apiURL,inputText.value)
});

ul.addEventListener('click', e => onClick(e));
