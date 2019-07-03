"use strict";
const myWidht = 600;
const myHeight = 400;

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas.
// Fill the canvas with lines from the edges, every 20 px, to the center.

function clock() {
  for (let i: number = 0; i < myWidht/20+1; i++) {
    ctx.beginPath();
    ctx.moveTo(i*20, 0);
    ctx.lineTo(myWidht / 2, myHeight / 2);
    ctx.stroke();
  }
  for (let i: number = 0; i < myWidht/20+1; i++) {
    ctx.beginPath();
    ctx.moveTo(i*20, myHeight);
    ctx.lineTo(myWidht / 2, myHeight / 2);
    ctx.stroke();
  }
  for (let i: number = 0; i < myHeight/20+1; i++) {
    ctx.beginPath();
    ctx.moveTo(0, i*20,);
    ctx.lineTo(myWidht / 2, myHeight / 2);
    ctx.stroke();
  }
  for (let i: number = 0; i < myHeight/20+1; i++) {
    ctx.beginPath();
    ctx.moveTo(myWidht, i*20,);
    ctx.lineTo(myWidht / 2, myHeight / 2);
    ctx.stroke();
  }
}
clock();