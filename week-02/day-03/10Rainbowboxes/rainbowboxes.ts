'use strict';
const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');
const myHeight = 400;
const myWidth = 600;


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

/*that's from somebody else to try
const canvasWidth = 600;
const canvasHeigth = 400;

function calcColor(min, max, val) {
   let minHue = 240, maxHue = 0;
   let curPercent = (val - min) / (max - min);
   let color = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ", 100%, 50%)";
   return color;
}

for (var i = 400; i > 0; i -= 1) {
   ctx.fillStyle = calcColor(240, 0, i);
   ctx.fillRect(canvasWidth / 2 - i / 2, canvasHeigth / 2 - i / 2, i, i);
}*/