"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;;

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// draw a box that has different colored lines on each edge.

ctx.beginPath();
ctx.strokeStyle = " lime";
ctx.moveTo(10, 10);
ctx.lineTo(110, 10);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = " green";
ctx.moveTo(110, 10);
ctx.lineTo(110, 110);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = " blue";
ctx.moveTo(110, 110);
ctx.lineTo(10, 110);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = " black";
ctx.moveTo(10, 110);
ctx.lineTo(10, 10);
ctx.stroke();
