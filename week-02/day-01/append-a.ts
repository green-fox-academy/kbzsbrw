'use strict';

let animals: string[] = ["koal", "pand", "zebr"].map(function(item){
    return item+="a";
})

    console.log(animals);
/*
animals.forEach (function(name) {
        name+="a";
})

let odds: number[] = [1,2,3,4,5].filter(function(item) {
    return item % 2 !== 0;
})
*/