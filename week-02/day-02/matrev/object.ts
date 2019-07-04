"use strict";

export = {};

let person = {
  name: "John",
  address: "",
  age: 21,
  friends: [],
  greeting: function() {
    console.log("Hi my name is John:))");
  },
  wtf: {
    name: "Zsolt",
    age: 28,
    friends: ["Liza", "phöge"],
    greeting: function() {
      console.log("Hi my name is Ysolt:))");
    }   
  }
};

console.log(person.name);

person.greeting();
person.wtf.greeting();

console.log(Object.keys(person));
// this will give you back a boolean if can manage to find a key with the same "number or string"
console.log("this is it"+person.hasOwnProperty("name"));

if (person.hasOwnProperty("address")) {
    console.log(person.address);
} else {
    console.log("person has no address");
}

let personCopyWithReference = person;

console.log(personCopyWithReference);
person.name = " new Name";
console.log(personCopyWithReference);
//this will create a whole new object with the same keys and values, and will have no connection to the original object
let wholeNewPersonWithTheInitialValues = {...person};