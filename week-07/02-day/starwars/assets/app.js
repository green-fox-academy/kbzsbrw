'use strict';

const apiURL = 'https://swapi.co/api/';
const form = document.querySelector('form');


form.addEventListener("submit", e => {
    console.log(form);
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status >= 200 && xhr.status < 300) {
          console.log("ok");;
        } else {
          console.log('frontend can send req');
          return;
        }
      }
    };
    xhr.open('POST', '/search');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({"name":name.value}));
    form.reset();
})