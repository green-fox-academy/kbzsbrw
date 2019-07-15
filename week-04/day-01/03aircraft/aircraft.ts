"use strict";

export class Aircraft {
  name: string;
  maxAmmo: number;
  damage: number;
  type: string;
  storage: number;
  priority: boolean;

  constructor(
    name: string,
    maxAmmo: number,
    damage: number,
    type: string,
    proirity: boolean,
    storage: number = 0
  ) {
    this.name = name;
    this.maxAmmo = maxAmmo;
    this.damage = damage;
    this.type = type;
    this.storage = storage;
    this.priority = proirity;
  }
  fight(): number {
    let storage: number = 0;
    storage = this.storage;
    this.storage = 0;
    return storage * this.damage;
  }
  refill(parameter: number): number {
    let ammoNeed: number = this.maxAmmo - this.storage;
    if (parameter > ammoNeed) {
      this.storage = this.storage + ammoNeed;
      return parameter - ammoNeed;
    } else {
      this.storage = this.storage + parameter;
      return 0;
    }
  }
  getType(): string {
    return this.type;
  }
  //   Type F35, Ammo: 10, Base Damage: 50, All Damage: 500
  getStatus() {
    console.log(
      "Type " +
        this.type +
        " , Ammo: " +
        this.storage +
        ", Base Damage: " +
        this.damage +
        ", All Damage " +
        this.damage * this.storage
    );
  }
}

// let proba: Aircraft = new Aircraft("proba", 12, 50, "f35", true, 2);
// // proba.getStatus();
// // console.log(proba.fight());
// // console.log(proba.getType());
// proba.getStatus();
// console.log(proba.refill(100));
// proba.getStatus();
