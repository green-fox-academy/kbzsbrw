'use strict';

function power(base: number, n: number): number {
    if (n=== 1) {
return base;
    } else {
return base*power(base, n-1);
    }
}
console.log(power(2,10));