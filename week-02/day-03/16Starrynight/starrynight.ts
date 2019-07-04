"use strict";
const myHeight: number = 400;
const myWidht: number = 600;

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw the night sky:
//  - The background should be black
//  - The stars should be small squares
//  - The stars should have random positions on the canvas
//  - The stars should have random color (some shade of grey)

ctx.fillRect(0, 0, myWidht, myHeight);
function makeStars() {
    for (let i: number = 0; i < 999; i++) {
        ctx.fillStyle = 'white';
        let color: number = Math.random()*105+149;
        ctx.fillStyle = "rgb("+color+", "+color+", "+color+")";
        ctx.fillRect(Math.random() * myWidht, Math.random() * myHeight, 2, 2);
  }
}

makeStars();