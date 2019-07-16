"use strict";

abstract class Instrument {
  readonly name: string;

  constructor (name: string) {
    this.name = name;

  }

  abstract play(): void;
}

abstract class StringedInstrument extends Instrument {
  numberOfStrings: number;

  abstract sound(): void;
}

class ElectricGuitar extends StringedInstrument {
  constructor(numberOfString: number = 6) {
    super("Electric Guitar");
    this.numberOfStrings = numberOfString;
  }
  sound(): string {
    return "wang";
  }
  play() {
    console.log(this.name+" ,a "+this.numberOfStrings+"-stringed instrument, that goes "+this.sound());
  }
}
class BassGuitar extends StringedInstrument {
  constructor(numberOfString: number = 4) {
    super("BassGuitar");
    this.numberOfStrings = numberOfString;
  }
  sound() {
    return "Duum-duum-duum";
  }
  play() {
    console.log(this.name+" ,a "+this.numberOfStrings+"-stringed instrument, that goes "+this.sound());
  }
}
class Violin extends StringedInstrument {
  constructor(numberOfString: number = 4) {
    super("Violin");
    this.numberOfStrings = numberOfString;
  }
  sound() {
    return "Screech";
  }
  play() {
    console.log(this.name+" ,a "+this.numberOfStrings+"-stringed instrument, that goes "+this.sound());
  }
}

export { ElectricGuitar, BassGuitar, Violin };
