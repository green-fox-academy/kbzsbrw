'use strict';

const mainContent = document.querySelector('main');

fetch('/proba')
  .then(res => res.text())
  .then(content => {
    mainContent.innerHTML = content
  });