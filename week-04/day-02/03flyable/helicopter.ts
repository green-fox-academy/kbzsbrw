"use strict";

import { Flyable } from "./flyable";
import { Vehicle } from "./Vehicle";

class Helicopter extends Vehicle implements Flyable {
  name: string;
  constructor(name: string) {
    super();
    this.name = name;
  }

  land(): string {
    return "on the spot";
  }
  fly(): string {
    return "with rotors";
  }
  takeoff(): string {
    return "yeah, helicopters can take off";
  }
}
