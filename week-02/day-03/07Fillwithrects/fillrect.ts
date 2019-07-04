"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Draw four different size and color rectangles.
// Avoid code duplication.

function drawRects(x, y) {
  let a: number = 0;
  let b: number = 0;
  for (let i: number = 0; i < 4; i++) {
    a = i * 50;
    ctx.strokeStyle = "rgb(" + a + ",0, 0)";
    ctx.strokeRect(x + i * 50, y + i * 50, x + i * 10, y + i * 20);
  }
}
drawRects(20, 20);
