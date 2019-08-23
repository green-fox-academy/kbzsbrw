'use strict';

const pets = document.querySelector('form[action="/pet"]');
const dog = document.querySelector('#dog');
const cat = document.querySelector('#cat');
const fish = document.querySelector('#fish');
const signUpButton = document.querySelector("button[type='submit']");
const catFactYes = document.querySelector('#yes');
const catFactNo = document.querySelector('#no');
const loveCatsButton = document.querySelector("button[type='button']");
const buttons = document.querySelectorAll('.button');

pets.addEventListener('change', e => {
  if (cat.checked || dog.checked) {
    signUpButton.disabled = false;
  } else {
    signUpButton.disabled = true;
  }
});
catFactYes.addEventListener('change', e => {
  if (catFactYes.checked) {
    loveCatsButton.disabled = false;
  } else {
    loveCatsButton.disabled = true;
  }
});

buttons.forEach(button => {
  button.addEventListener('click', e => {
    if (loveCatsButton.disabled) {
      alert('Sigh, we still added you to the cat facts list');
    } else {
      alert("Thank you, you've successfully signed up for cat facts");
    }
  });
});

document.body.addEventListener('click', e => {
  if (fish.checked && catFactNo.checked) {
    signUpButton.disabled = false;
  } else {
    signUpButton.disabled = true;
  }
});
