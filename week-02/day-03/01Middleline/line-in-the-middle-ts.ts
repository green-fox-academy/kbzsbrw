"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a red horizontal line to the canvas' middle.
// draw a green vertical line to the canvas' middle.
ctx.strokeStyle = "red";
ctx.beginPath();
ctx.moveTo(0, 200);
ctx.lineTo(600, 200);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(300, 0);
ctx.lineTo(300, 400);
ctx.strokeStyle = "green";
ctx.stroke();

/*ctx.strokeStyle = 'green';
ctx.beginPath();
ctx.moveTo(310, 310);
ctx.lineTo(400, 400);
ctx.stroke();
ctx.strokeStyle = 'red';
ctx.beginPath();
ctx.moveTo(10, 10);
ctx.lineTo(300, 300);
ctx.stroke();*/