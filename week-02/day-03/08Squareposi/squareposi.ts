'use strict';

const myHeight: number = 400;
const myWidth: number = 600;

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that draws one square and takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.


function drawSquare(x: number, y: number) {
    for (let i: number = 0; i< 3; i++) {
        ctx.strokeRect(x+(i*51),y+(i*51),50,50);
    }

}
drawSquare(0,0);
