"use strict";

import Person from "./person";

class GreenFoxStudent extends Person {
  gitHubUsername: string;
  fustrationLevel: number = 100;

  constructor(name: string, age: number, height: number, git: string) {
    super(name, age, height);
    this.gitHubUsername = git;
  }
  socialize(){
      console.log("I do not even know my friend's name anymore.")
  }
}

const sandor: GreenFoxStudent = new GreenFoxStudent(
  "Sandor",
  25,
  175,
  "eksandor"
);
const averageJoe = new Person("John", 25, 180);

sandor.socialize();
console.log("that is Joe");
averageJoe.socialize();