'use strict';

let canvasSide: number = 800;
const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

class Triangle {
    startX: number;
    startY: number;
    side: number;
    constructor (x: number, y: number, side: number) {
        this.startX = x;
        this.startY = y;
        this.side = side;
    }

    drawTriangle(startX: number, startY: number) {
        ctx.translate(startX,startY)
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(-startX / 2, ((startX * 3 ** (1 / 3)) / 2));
        ctx.lineTo(startX/2, ((startX * 3 ** (1 / 3)) / 2));
        ctx.lineTo(0, 0);
        ctx.stroke();
        ctx.transform(1, 0, 0, 1, 0, 0);
    }


}
let tri1: Triangle = new Triangle(canvasSide/2,0,canvasSide/2);
tri1.drawTriangle(canvasSide/2,0);