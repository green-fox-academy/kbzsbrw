"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Reproduce this:
// [https://github.com/green-fox-academy/teaching-materials/blob/master/workshop/drawing/assets/r3.png]

function purpleSteps(x: number) {
  for (let i: number = 0; i < x; i++){
      ctx.fillStyle = "violet";
      ctx.fillRect(x*i,x*i,x,x);
      ctx.fillStyle = "black";
      ctx.strokeRect(x*i,x*i,x,x);
  };
}
purpleSteps(15);
