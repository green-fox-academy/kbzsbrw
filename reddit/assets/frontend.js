'use strict';
const mainContent = document.querySelector('main');
const submitButton = document.querySelector('aside > button');
const submit = document.querySelector('input[type="submit"');

fetch('/api/result')
  .then(res => res.text())
  .then(content => (mainContent.innerHTML = content));

submitButton.addEventListener('click', e => {
  e.preventDefault();
  submitButton.style.display = 'none';
  fetch('/submit')
    .then(res => res.text())
    .then(content => (mainContent.innerHTML = content))
    .then(() => {
      let submitPostButton = document.querySelector('input[type="submit"');
      const form = document.querySelector('form');
      submitPostButton.addEventListener('submit', e => {
        console.log(e);
        e.preventDefault();
        console.log(form);
        let data = { title: form[0].value.title, url: form[0].value.url };
        fetch(postURL, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(res => res.json())
          .then(console.log)
          .catch(err => console.log(err));
      });
    });
});
