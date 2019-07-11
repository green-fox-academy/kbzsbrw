"use strict";
// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well
import { Thing } from "./thing";
import { Fleet } from "./fleet";

class FleetOfThings {
  fleet: Fleet = new Fleet();
  constructor() {
    this.fleet = new Fleet();
    this.fleet.add(new Thing("Get milk"));
    this.fleet.add(new Thing("Remove the obstacles"));
    this.fleet.add(new Thing("Stand up"));
    this.fleet.add(new Thing("Eat lunch"));
  }
  //   print(): string {
  //     let result: string = "";
  //     FleetOfThings
  //     return result;
  //   }
}

let FleetOfThings1: FleetOfThings = new FleetOfThings();
FleetOfThings1.fleet.getThings()[2].complete();
FleetOfThings1.fleet.getThings()[3].complete();
// console.log(FleetOfThings1.fleet);
// console.log(FleetOfThings1.print());
function print() {
  for (let i: number = 0; i < FleetOfThings1.fleet.getThings().length; i++) {
    let xIfTrue: string= " ";
    if (FleetOfThings1.fleet.getThings()[i].getCompleted()) {
      xIfTrue = "x";
    }
    console.log(
      i +
        1 +
        ". [" +
        xIfTrue +
        "] " +
        FleetOfThings1.fleet.getThings()[i].getName()
    );
  }
}
print();
