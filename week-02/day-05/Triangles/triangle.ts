"use strict";

const myHeight = 400;
const myWidth = 400;
const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
function drawTriangle(side: number) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(side, 0);
  ctx.lineTo(side / 2, -((side * 3 ** (1 / 3)) / 2));
  ctx.lineTo(0, 0);
  ctx.stroke();
}
function drawTriangles(count: number) {
  ctx.translate(0, myHeight);
  let side: number = Math.floor(myWidth / count);
  for (let j: number = 0; j < 10; j++) {
    for (let i: number = 0; i < (myWidth / side)-j; i++) {
      drawTriangle(side);
      ctx.translate(side, 0);
    }
    ctx.translate(-side * (count - j) + side / 2, -((side * 3 ** (1 / 3)) / 2));
    // ctx.fillRect(0, 0, 30, 30);
  }
}
drawTriangles(10);
ctx.transform(1, 0, 0, 1, 0, 0);
// let count: number = 3;
// ctx.translate(100,100);
// drawTriangle(Math.floor(myWidth/count));
