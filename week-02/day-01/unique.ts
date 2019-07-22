//  Create a function that takes a list of numbers as a parameter
//  Returns a list of numbers where every number in the list occurs only once
let ar1: number[] = [1, 11, 34, 11, 52, 61, 1, 34];
function unique(array: number[]): number[] {
  let uniqueArray: number[] = ar1.sort();
  for (let i: number = 0; i < uniqueArray.length; i++) {
    if (uniqueArray[i] === uniqueArray[i + 1]) {
      uniqueArray.splice(i, 1);
      i--;
    }
  }

  return uniqueArray;
}

//  Example
console.log(unique(ar1));
//  should print: `[1, 11, 34, 52, 61]`
