"use strict";

let listOfNames: string[] = [];
console.log(listOfNames.length);
listOfNames.push("William");
console.log(listOfNames.length > 0);
listOfNames.push("John", "Amanda");
console.log(listOfNames.length);
console.log(listOfNames[2]);
listOfNames.forEach(function(names) {
  console.log(names);
});
for (let i: number = 0; i < listOfNames.length; i++) {
  console.log(i + 1 + ". " + listOfNames[i]);
}
listOfNames.splice(1, 1);
listOfNames.reverse().forEach(function(revnames) {
  console.log(revnames);
});
listOfNames.splice(0, listOfNames.length);
console.log(listOfNames);
