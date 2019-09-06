'use strict';
const mainContent = document.querySelector('main');
const submitButton = document.querySelector('aside > button');

fetch('/api/result')
  .then(res => res.text())
  .then(content => mainContent.innerHTML = content);

submitButton.addEventListener('click', e => {
    e.preventDefault();
    submitButton.style.display = 'none';
    mainContent.innerHTML = '';
    // while (mainContent.firstChild) {
    //     mainContent.removeChild(mainContent.firstChild)
    // }
    fetch('/submit')
  .then(res => res.text())
  .then(content => mainContent.innerHTML = content);

})
