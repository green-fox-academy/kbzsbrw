"use strict";
/*let row: number[] = [0, 0, 0, 0, 0, 0];

for (let i=row.length; i>0; i--){
    row[i-1]++;
    console.log(row);
    row[i-1]=0;
}*/
let matrix: number[][] = [];
let size: number = 10;
for (let x = 0; x < size; x++) {
    let row: number[] = [];
    for (let y = 0; y < size; y++) {
        if (size-y-1=== x) {
            row.push(1);
        } else {
            row.push(0);
        }
    }
    matrix.push(row);
  
}
matrix.forEach(function (row){
    console.log(row.join(" "));
})