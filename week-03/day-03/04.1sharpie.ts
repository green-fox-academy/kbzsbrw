import { Sharpie } from "./04sharpie";

class SharpieSet {
  sharpies: Sharpie[] = [];
  constructor() {}
  countUsable() {
    let count: number = 0;
    for (let i: number = 0; i < this.sharpies.length; i++) {
      if (this.sharpies[i].inkAmount > 0) {
        count++;
      }
    }
    return count;
  }
  removeTrash() {
    let count: number = 0;
    for (let i: number = 0; i < this.sharpies.length; i++) {
      if (this.sharpies[i].inkAmount === 0) {
        this.sharpies.splice(i,1); 
      }
    }
  }
}
let sharpie1: Sharpie = new Sharpie("green", 40, 10);
let sharpie2: Sharpie = new Sharpie("purple", 80, 10);
let sharpie3: Sharpie = new Sharpie("red", 40, 40);

let SharpieSet1: SharpieSet = new SharpieSet();

SharpieSet1.sharpies.push(sharpie1);
SharpieSet1.sharpies.push(sharpie2);
SharpieSet1.sharpies.push(sharpie3);
console.log(SharpieSet1);

console.log(SharpieSet1.countUsable());

SharpieSet1.sharpies[0].use(10);
SharpieSet1.sharpies[2].use(40);
console.log(SharpieSet1.countUsable());
SharpieSet1.removeTrash();
console.log(SharpieSet1);
