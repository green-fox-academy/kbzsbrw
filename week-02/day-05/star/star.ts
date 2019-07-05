"use strict";

const myHeight = 600;
const myWidth = 600;
const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
function drawLines(gap: number) {
  for (let i: number = 1; i < myWidth / 2 / gap - 1; i++) {
    ctx.beginPath();
    ctx.strokeStyle = "lime";
    ctx.moveTo(myWidth / 2, gap * i);
    ctx.lineTo(myWidth / 2 - gap * i, myHeight / 2);
    ctx.stroke();
  }
  for (let i: number = 1; i < myWidth / 2 / gap - 1; i++) {
    ctx.beginPath();
    ctx.strokeStyle = "lime";
    ctx.moveTo(myWidth / 2, gap * i);
    ctx.lineTo(myWidth / 2 + gap * i, myHeight / 2);
    ctx.stroke();
  }
  for (let i: number = 1; i < myWidth / 2 / gap - 1; i++) {
    ctx.beginPath();
    ctx.strokeStyle = "lime";
    ctx.moveTo(myWidth / 2, myHeight - i * gap);
    ctx.lineTo(myWidth / 2 - gap * i, myHeight / 2);
    ctx.stroke();
  }
  for (let i: number = 1; i < myWidth / 2 / gap - 1; i++) {
    ctx.beginPath();
    ctx.strokeStyle = "lime";
    ctx.moveTo(myWidth / 2, myHeight - i * gap);
    ctx.lineTo(myWidth / 2 + gap * i, myHeight / 2);
    ctx.stroke();
  }
}
//tried with less lines
// function lessLines(gap) {
//   for (let a: number = -1; a <= 1; a + 2) {
//     for (let b: number = 0; b <= 1; b ++) {
//       for (let c: number = -1; c <= 1; c + 2) {
//         for (let i: number = 1; i < myWidth / 2 / gap - 1; i++) {
//           ctx.beginPath();
//           ctx.strokeStyle = "lime";
//           ctx.moveTo(myWidth / 2, b*myWidth + a * gap * i);
//           ctx.lineTo(myWidth / 2 + c * gap * i, myHeight / 2);
//           ctx.stroke();
//         }
//       }
//     }
//   }
// }
// lessLines(20);
