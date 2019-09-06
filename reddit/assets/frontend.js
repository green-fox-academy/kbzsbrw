'use strict';
const mainContent = document.querySelector('main');
  
fetch('/api/result')
  .then(res => res.text())
  .then(content => mainContent.innerHTML = content);
