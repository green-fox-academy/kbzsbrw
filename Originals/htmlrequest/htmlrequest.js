"use strict";

function sendGetRequest(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        callback(JSON.parse(xhr.responseText));
      } else {
        console.log("something went wrong");
      }
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

HTMLELEMENT.addEventListener('submit', e => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status >= 200 && xhr.status < 300) {
        alert('sent!!');
      } else {
        console.log('oh noes 😢');
      }
    }
  };
  xhr.open('POST', '/send');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({ username: username.value }));
  form.reset();
});
