"use strict";
let row: number[] = [0, 0, 0, 0, 0, 0];

for (let i=row.length; i>0; i--){
    row[i-1]++;
    console.log(row);
    row[i-1]=0;
}
