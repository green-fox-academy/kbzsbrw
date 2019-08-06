'use strict';

let newContent = ['apple', 'banana', "cat", "dog"]
let liNodelist = document.querySelectorAll("li");
console.log(liNodelist);
for (let i =liNodelist.length-1; i>=0; i--) {
liNodelist[i].innerHTML=newContent[i]
}