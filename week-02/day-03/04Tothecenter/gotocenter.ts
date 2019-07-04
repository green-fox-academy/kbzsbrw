"use strict";

const myCanvasWidth: number = 600;
const myCanvasHeigth: number = 400;

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw at least 3 lines with that function using a loop.

function singleLine(x: number, y: number) {
  for (let i: number = 1; i < 4; i++) {
    ctx.beginPath();
    ctx.moveTo(x * i, y * i);
    ctx.lineTo(myCanvasWidth/2, myCanvasHeigth/2);
    ctx.stroke();
  }
}
singleLine(100, 200);
