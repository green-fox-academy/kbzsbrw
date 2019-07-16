"use strict";

import { Animal } from "./zoo";

class Bird extends Animal {
  colorOfTale: string;
  canFly: boolean;
  beakType: string;

  constructor(name: string) {
    super(name);
  }

  getName(): string {
    return this.name;
  }
  breed(): string {
    return "egg";
  }
}
export { Bird };
