"use strict";

const myCanvasWidth: number = 600;
const myCanvasHeigth: number = 400;

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws a single line and takes 2 parameters:
// the x and y coordinates of the line's starting point
// and draws a 50 long horizontal line from that point.
// Draw at least 3 lines with that function using a loop.

function line50Width(x: number, y: number) {
  for (let i: number = 1; i < 4; i++) {
    ctx.beginPath();
    ctx.moveTo(x + i * 10, y + i * 20);
    ctx.lineTo(x +i*10+ 50, y + i * 20);
    ctx.stroke();
  }
}

line50Width(10, 10);
