"use strict";

abstract class Animal {
  name: string;
  age: number;
  cage: number;
  sponsor: string;
  origin: string;

  constructor(
    name: string,
    age: number,
    cage: number,
    sponsor: string,
    origin: string
  ) {
    this.name = name;
    this.age = age;
    this.cage = cage;
    this.sponsor = sponsor;
    this.origin = origin;
  }

  abstract getName(): string;
  abstract breed(): string;
}
export { Animal };
