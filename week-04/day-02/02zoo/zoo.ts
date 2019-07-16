"use strict";

abstract class Animal {
  name: string;
  age: number;
  cage: number;
  sponsor: string;
  origin: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract getName(): string;
  abstract breed(): string;
}
export { Animal };
