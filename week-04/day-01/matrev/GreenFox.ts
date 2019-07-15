"use strict";
// import greenfoxstudent from "./greenfoxstudent";
import GreenFoxStudent from "./greenfoxstudent";
export default class GreenFoxClass {
  members: GreenFoxStudent[];
  constructor() {
    this.members = [];
  }

  registerStudents(student: GreenFoxStudent) {
    this.members.push(student);
  }
}

