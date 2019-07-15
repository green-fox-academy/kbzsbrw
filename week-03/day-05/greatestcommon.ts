'use strict';

let oszto: number = 1;
function greatestCommonDiviser(a: number, b: number) {
    if( a % oszto === 0 && b % oszto ===0 ) {
        oszto++;
        return greatestCommonDiviser(a/oszto,b/oszto);
    } else {
        return oszto;
    }
}
console.log(greatestCommonDiviser(54,24));





// if (25 % 4 === 0) {
//     console.log("ok");
// } else {
//     console.log("nem ok");
// }