"use strict";

import { Aircraft } from "./aircraft";
import { F35 } from "./f35";
import { F16 } from "./f16";

export class Carrier {
  name: string;
  planes: Aircraft[];
  ammoStorage: number;
  hp: number;

  constructor(name: string, ammoStorage: number, hp: number) {
    this.planes = [];
    this.name = name;
    this.ammoStorage = ammoStorage;
    this.hp = hp;
  }

  add(aircraft: Aircraft): void {
    this.planes.push(aircraft);
  }
  //THIS IS NOT FINISHED!!!!!!
  fill(): void {
    // let ammoNeeded: number = 0;
    // for (let i: number = 0; i < this.planes.length; i++) {
    //   ammoNeeded =
    //     ammoNeeded + (this.planes[i].maxAmmo - this.planes[i].storage);
    // }

    for (let i: number = 0; i < this.planes.length; i++) {
      let ammoLeftAfterFill = this.planes[i].refill(this.ammoStorage);
      if ((this.planes[i].priority = true && this.ammoStorage !== 0)) {
        this.planes[i].refill(this.ammoStorage);
        this.ammoStorage = ammoLeftAfterFill;
      } else if (this.ammoStorage === 0) {
        console.log("no more ammo, mates");
      }
    }
    for (let i: number = 0; i < this.planes.length; i++) {
      let ammoLeftAfterFill = this.planes[i].refill(this.ammoStorage);
      if ((this.planes[i].priority = false && ammoLeftAfterFill !== 0)) {
        this.planes[i].refill(this.ammoStorage);
        this.ammoStorage = ammoLeftAfterFill;
      } else if (ammoLeftAfterFill === 0) {
        console.log("no more ammo, mates");
      }
    }
  }
  fight() {
    this.planes.forEach(function(fightingPlane) {
      fightingPlane.fight();
    });
  }
}
const proba: Carrier = new Carrier("MotherOfJesusCarrier", 35, 9000);

proba.add(new F35("St.Peter"));
proba.add(new F16("HolyGhost"));
console.log(proba);
proba.fill();
console.log(proba);
proba.fight();
proba.fill();
console.log(proba);
proba.fill();

// console.log(proba);
// proba.fill();
