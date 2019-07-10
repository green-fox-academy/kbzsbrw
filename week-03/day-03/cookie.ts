"use strict";

class Cookie {
  shape: string;
  hasSparkles: boolean;
  flavor: string;
  private status: string = "raw";

  constructor(shape: string, hasSparkles: boolean, flavor?: string) {
    this.shape = shape;
    this.hasSparkles = hasSparkles;
    this.flavor = flavor;
  }
  bakeMe() {
    this.status = "baked to the perfection";
  }
  checkMyStatus() {
    return this.status;
  }
  static howAreYouToday(mood: string) {
    return `I am doing ${mood}`;
  }
}

let myFirstCookie: Cookie = new Cookie("elephant", false);
let mySecondCookie: Cookie = new Cookie("spider", true, "chocolate");
// console.log(myFirstCookie);
myFirstCookie.bakeMe();
// myFirstCookie.howAreYouToday('good');
console.log(Cookie.howAreYouToday("fine"));
myFirstCookie.flavor = "cinnamon";
// console.log(myFirstCookie);
console.log(myFirstCookie.checkMyStatus());
console.log(mySecondCookie.checkMyStatus());
