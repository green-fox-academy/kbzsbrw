"use strict";

import Person from "./person";

class GreenFoxStudent extends Person {
  gitHubUsername: string;
  fustrationLevel: number =100;

  constructor (name: string, age: number, height: number, git: string){
      super(name, age, height);
  }
}
