'use strict';
const myHeight = 400;
const myWidth = 600;

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with a rainbow of colored squares.
let colors: string[] = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
function coloredCube (parameter: number) {
    let x: number = Math.floor(myHeight/parameter)*7+1;
   for (let j: number = 0; j<Math.floor(myHeight/x)+1; j++) {
        for (let i: number = 0; i<Math.floor(myWidth/x)+1; i++) {  
            ctx.fillStyle= colors[j];
            ctx.fillRect((x*i),x*j,x,x);
            }
   }    
}
coloredCube(50);