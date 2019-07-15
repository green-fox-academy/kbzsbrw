"use strict";

import { Aircraft } from "./aircraft";

export class F16 extends Aircraft {
  constructor(
    name: string,
    maxAmmo: number = 8,
    damage: number = 30,
    type: string = "F35",
    priority: boolean = false
  ) {
    super(name, maxAmmo, damage, type, priority);
  }
}
