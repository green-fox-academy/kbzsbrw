"use strict";

function createPTag(textContent, inWhichClass, count) {
  let p1 = document.createElement("p");
  p1.textContent = textContent;
  p1.className = count;
  document.querySelector(inWhichClass).appendChild(p1);
}
function createButton(content) {
  let b1 = document.createElement("button");
  b1.textContent = content;
  document.querySelector(".buttons").appendChild(b1);
}

let firstWindowDiv = document.createElement("div");
firstWindowDiv.className = "first-window";
document.body.appendChild(firstWindowDiv);

let buttonDiv = document.createElement("div");
buttonDiv.className = "buttons";
document.body.appendChild(buttonDiv);

let secondWindowDiv = document.createElement("div");
secondWindowDiv.className = "second-window";
document.body.appendChild(secondWindowDiv);

createPTag("bread", ".first-window", "first");
createPTag("milk", ".first-window", "second");
createPTag("orange", ".first-window", "third");
createPTag("tomato", ".first-window", "fourth");
createButton("up");
createButton(">");
createButton("X");
createButton("down");
createPTag("placeholder", ".second-window");
document.body.style.display = "flex";
firstWindowDiv.style.border = "1px solid black";
secondWindowDiv.style.border = "1px solid black";
buttonDiv.style.display= "flex";
buttonDiv.style.flexDirection = "column";
