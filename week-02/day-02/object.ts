"use strict";

export = {};

let person = {
  name: "John",
  age: 21,
  friends: [],
  greeting: function() {
    console.log("Hi my name is John:))");
  },
  wtf: {
    name: "John",
    age: 21,
    friends: [],
    greeting: function() {
      console.log("Hi my name is Ysolt:))");
    }   
  }
};

console.log(person.name);

person.greeting();
person.wtf.greeting();

console.log(Object.keys(person));