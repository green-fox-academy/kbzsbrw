'use strict';

const realPets = document.querySelectorAll('.real-pet');
const signUpButton = document.querySelector("button[type='submit']");

realPets.forEach(radio => {
  radio.addEventListener('change', e => {
    signUpButton.disabled = false;
  });
});
