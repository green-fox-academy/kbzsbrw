// Create a PostIt a class that has
// a backgroundColor
// a text on it
// a textColor
// Create a few example post-it objects:
// an orange with blue text: "Idea 1"
// a pink with black text: "Awesome"
// a yellow with green text: "Superb!"

"use strict";

class PostIT {
  backgroundColor: string;
  text: string;
  textColor: string;

  constructor(background: string, text: string, textColor: string) {
    this.backgroundColor = background;
    this.text = text;
    this.textColor = textColor;
  }
}

let post1: PostIT = new PostIT("", "", "");
let post2: PostIT = new PostIT("pink", "black", "Awesome!");
let post3: PostIT = new PostIT("yellow", "green", "Superb!");
post1.backgroundColor = "orange";
post1.text = "Idea 1";
post1.textColor = "blue";
