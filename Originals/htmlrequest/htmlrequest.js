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

s
