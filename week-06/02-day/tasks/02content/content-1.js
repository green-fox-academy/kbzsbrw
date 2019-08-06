"use strict";
//this is with only text
// let content = document.querySelector(".animals").textContent;
// let classes = [".apple", ".balloon", ".cat"];
// let appleClass = document.querySelector(".apple");
// appleClass.textContent=content;

let content = document.querySelector(".animals").innerHTML;
let classes = [".apple", ".balloon", ".cat"];
let appleClass = document.querySelector(".apple");
appleClass.innerHTML=content;


