for (let i: number=1; i<=100; i++) {
    if ((i/3)<=Math.floor(i/3)&&(i/5)<=Math.floor(i/5)) {
        console.log("FizzBuzz");
    } else if ((i/3)<=Math.floor(i/3)) {
        console.log("Fizz");
    } else if ((i/5)<=Math.floor(i/5)) {
        console.log("Buzz");
    } else {
        console.log(i);
    }}