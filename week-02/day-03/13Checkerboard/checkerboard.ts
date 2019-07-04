'use strict';
const myHeight = 400;
const myWidth = 600;

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Fill the canvas with a checkerboard pattern.

function checkerboard() {
    let x: number = myHeight/8;
    for (let j: number = 0; j<8; j++){
        if (j % 2 === 0){
        for (let i: number=0; i<4; i++) {
            ctx.fillStyle = 'black';
            ctx.fillRect(x*(2*i+1),x*j,x,x);
        }} else {
            for (let i: number=0; i<4; i++) {
                ctx.fillStyle = 'black';
                ctx.fillRect(x*(2*i),x*j,x,x);
        }

    }    
}
}
checkerboard();