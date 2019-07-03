"use strict";
export = {};

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

function purpleSteps3d(parameter: number) {
    let x: number = parameter;
  for (let i: number = 0; i < parameter; i++) {
    ctx.fillStyle = "violet";
    ctx.fillRect(x, x, x, x);
    ctx.strokeStyle = "black";
    ctx.strokeRect(x, x, x, x);
    x = x*2;
  }
}
purpleSteps3d(10);
