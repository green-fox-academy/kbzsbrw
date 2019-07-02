"use strict";

import object = require("./matrev/object");

let telephoneBook: any = {
  "William A. Lathan": "405-709-1865",
  "John K. Miller": "402-247-8568",
  "Hortensia E. Foster": "606-481-6467",
  "Amanda D. Newland": "319-243-5613",
  "Brooke P. Askew": "307-687-2982"
};
console.log(telephoneBook);
function searchByName(name: string) {
  console.log("The number of " + name + " is " + telephoneBook[name]);
}
searchByName("John K. Miller");
////

/////
function searchByNumber(number: string) {
  console.log(
    "This number belongs to " +
      Object.keys(telephoneBook)[Object.values(telephoneBook).indexOf(number)]
  );
}
searchByNumber("319-243-5613");
function searchByName2(name: string) {
  if (Object.keys(telephoneBook).indexOf(name) > 0) {
    console.log(
      Object.values(telephoneBook)[Object.keys(telephoneBook).indexOf(name)]
    );
  } else {
    console.log("We do not have this number");
  }
}

searchByName2("Chris E. Myers");
