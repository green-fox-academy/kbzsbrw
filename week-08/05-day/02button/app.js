'use strict';

const pets = document.querySelector('form[action="/pet"]');
const dog = document.querySelector('#dog');
const cat = document.querySelector('#cat');
const signUpButton = document.querySelector("button[type='submit']");
const catFact = document.querySelector('#yes');
const loveCatsButton = document.querySelector("button[type='button']");

pets.addEventListener('change', e => {
  if (cat.checked || dog.checked) {
    signUpButton.disabled = false;
  } else {
    signUpButton.disabled = true;
  }
});

catFact.addEventListener('change', e => (loveCatsButton.disabled = false));
