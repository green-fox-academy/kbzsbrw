"use strict";

import { Animal } from "./zoo";

class Mammal extends Animal {
  numberOfNipples: number;
  ifSweat: boolean;
  diet: string;

  constructor(
    name: string,
    age: number,
    cage: number,
    sponsor: string,
    origin: string,
    ifSweat: boolean,
    diet: string
  ) {
    super(name, age, cage, sponsor, origin);
    this.ifSweat = ifSweat;
    this.diet = diet;
  }

  getName(): string {
    return this.name;
  }
  breed(): string {
    return "liveborn";
  }
}
