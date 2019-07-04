'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE

// Create a function that takes 1 parameter:
// A list of [x, y] points
// and connects them with green lines.
// Connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
// Connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
// [120, 100], [85, 130], [50, 100]]

let points: number [][] = [[10, 10], [290,  10], [290, 290], [10, 290]];
let points2: number [][] = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],[120, 100], [85, 130], [50, 100]];

function connectDots(parameter: number[][]) {
    for (let i: number = 0; i<parameter.length+1; i++) {
        ctx.beginPath();
        ctx.moveTo(parameter[i][0],parameter[i][1]);
        ctx.lineTo(parameter[i+1][0],parameter[i+1][1]);
        ctx.stroke();
    }

}
//connectDots(points);
connectDots(points2);