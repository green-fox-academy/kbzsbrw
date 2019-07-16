"use strict";

import { Animal } from "./zoo";

class Reptile extends Animal {
  territory: string;
  ifLooseTale: boolean;
  diet: string;

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
export { Reptile };
