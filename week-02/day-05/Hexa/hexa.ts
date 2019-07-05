"use strict";

const myHeight = 400;
const myWidth = 400;
const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
function drawHexa(size: number) {
  let r: number = size * (3 ** (1 / 2) / 2);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(size, 0);
  ctx.lineTo((3 / 2) * size, r);
  ctx.lineTo(size, r * 2);
  ctx.lineTo(0, 2 * r);
  ctx.lineTo((-1 / 2) * size, r);
  ctx.lineTo(0, 0);
  ctx.stroke();
}
function drawLotHexas(size: number) {
  let hexaHeight: number = 3 ** (1 / 2) * size;
  let hexaWidth: number = 1.5 * size;
  ctx.translate(myWidth / 2 - hexaWidth, myHeight / 2 + 3 * hexaHeight);
  let r: number = size * (3 ** (1 / 2) / 2);
  for (let j: number = 0; j < 4; j++) {
    for (let i: number = 0; i < 4 + j; i++) {
      drawHexa(size);
      ctx.translate(0, -(3 ** (1 / 2)) * size);
    }
    ctx.translate(hexaWidth, (4.5 + j) * hexaHeight);
  }
  ctx.translate(0, -hexaHeight);
  for (let j: number = 2; j >= 0; j--) {
    for (let i: number = 0; i < 4 + j; i++) {
      drawHexa(size);
      ctx.translate(0, -(3 ** (1 / 2)) * size);
    }
    ctx.translate(hexaWidth, (4.5 + j - 1) * hexaHeight);
  }
}

// for (let i: number = 0; i<4; i++){
//   drawHexa(x,x,size);
//   ctx.translate(0,-(3**(1/2))*size);
// }
drawLotHexas(30);
