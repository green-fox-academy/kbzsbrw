"use strict";

const myHeight = 400;
const myWidth = 400;
const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
// Math.floor((myHeight-distance)/distance)
function drawEllipseLine(distance: number) {
  for (
    let i: number = 0;
    i < Math.floor((myHeight - distance) / distance);
    i++
  ) {
    ctx.beginPath();
    ctx.strokeStyle = "purple";
    ctx.moveTo(distance + i * distance, 0);
    ctx.lineTo(myWidth, distance + i * distance);
    ctx.stroke();
  }
  for (
    let i: number = 0;
    i < Math.floor((myHeight - distance) / distance);
    i++
  ) {
    ctx.beginPath();
    ctx.strokeStyle = "lime";
    ctx.moveTo(0, distance + i * distance);
    ctx.lineTo(distance + i * distance, myHeight);
    ctx.stroke();
  }
}
function drawMoreEllipse(distance: number, count: number) {
  for (let w: number = 0; w <= count; w++) {
    for (let h: number = 0; h <= count; h++) {
      ctx.translate(myWidth * (w / count), myHeight * (h / count));
      for (
        let i: number = 0;
        i < Math.floor((myHeight / count - distance) / distance);
        i++
      ) {
        ctx.beginPath();
        ctx.strokeStyle = "purple";
        ctx.moveTo(distance + i * distance, 0);
        ctx.lineTo(myWidth / count, distance + i * distance);
        ctx.stroke();
      }
      for (
        let i: number = 0;
        i < Math.floor((myHeight / count - distance) / distance);
        i++
      ) {
        ctx.beginPath();
        ctx.strokeStyle = "lime";
        ctx.moveTo(0, distance + i * distance);
        ctx.lineTo(distance + i * distance, myHeight / count);
        ctx.stroke();
      }
      ctx.setTransform(1, 0, 0, 1, 0, 0);    
    }
  }
}
drawMoreEllipse(5, 6);



