"use strict";

const button = document.createElement("button");
button.innerText = "Click me";
document.getElementById("root").appendChild(button);
//never use the onclick from now on
button.onclick(alert(1));
function listener() {
  console.log("Hello");
}

button.addEventListener("click", listener);
button.removeEventListener("click", listener);

document.querySelector("a").addEventListener("click", function(ev) {
  ev.preventDefault();
  console.log("Hello world");
});
//this will console log the event
// check out the mdn mouse click (It's a class)
//ev.target mostly usefull
div.addEventListener("click", function(ev) {
    
  const postID = ev.target.getAttribute("data-post-id");
});
document.body.addEventListener("click", function(ev) {
  console.log(ev.cur);
});

