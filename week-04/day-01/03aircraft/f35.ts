"use strict";

import { Aircraft } from "./aircraft";

export class F35 extends Aircraft {
  constructor(
    name: string,
    maxAmmo: number = 12,
    damage: number = 50,
    type: string = "F35",
    priority: boolean = true
  ) {
    super(name, maxAmmo, damage, type, priority);
  }
}
