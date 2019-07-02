"use strict";

let List_A: string[] = ["Apple", "Avocado", "Blueberries", "Durian", "Lychee"];

let List_B = [...List_A];
console.log(List_B);
console.log(List_A.indexOf("Durian"));
let durian = List_B.indexOf("Durian");
List_B.splice(durian, 1);
console.log(List_B);

List_A.push("Kiwifruit");

if (List_A > List_B) {
  console.log("List A is bigger");
} else {
  console.log("list B is bigger");
}

console.log(List_A.indexOf("Avocado"));
console.log(List_B.indexOf("Durian"));
List_B.push("Passion Fruit", "Pomelo");
console.log(List_B);
console.log(List_A[2]);
