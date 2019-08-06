'use strict';

let newContent = ['apple', 'banana', "cat", "dog"]
let liNodelist = document.querySelectorAll("li");
console.log(liNodelist);
for (let i =liNodelist.length-1; i>=0; i--) {
liNodelist[i].innerHTML=newContent[i]
}

let ulTag = document.querySelector("ul");
console.log(ulTag);
ulTag.setAttribute("style", "background-color: red" )
console.log(ulTag);