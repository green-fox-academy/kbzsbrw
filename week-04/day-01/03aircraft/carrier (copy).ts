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

  fill(): void {
    try {
      for (let i: number = 0; i < this.planes.length; i++) {
        let ammoLeftAfterFill = this.planes[i].refill(this.ammoStorage);
        if ((this.planes[i].priority = true && this.ammoStorage !== 0)) {
          this.planes[i].refill(this.ammoStorage);
          this.ammoStorage = ammoLeftAfterFill;
        } else {
          throw new Error("There is no more ammo mate");
        }
      }
    } catch (error) {
      console.log(error);
    }
    try {
      for (let i: number = 0; i < this.planes.length; i++) {
        let ammoLeftAfterFill = this.planes[i].refill(this.ammoStorage);
        if ((this.planes[i].priority = false && ammoLeftAfterFill !== 0)) {
          this.planes[i].refill(this.ammoStorage);
          this.ammoStorage = ammoLeftAfterFill;
        } else if (ammoLeftAfterFill === 0) {
          throw new Error("no more ammo, mates");
        }
      }
    } catch (error) {
      console.log(error);
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
