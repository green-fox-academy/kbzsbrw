'use strict';
import GreenFoxClass from "./GreenFox";
import GreenFoxStudent from "./greenfoxstudent";





const create: GreenFoxClass = new GreenFoxClass();

const szabolcs: GreenFoxStudent = new GreenFoxStudent(
  "Szabolcs",
  36,
  186,
  "szzszed"
);
const agi: GreenFoxStudent = new GreenFoxStudent("Agi", 80, 170, "volunteer");
create.registerStudents(szabolcs);
create.registerStudents(agi);
create.registerStudents(new GreenFoxStudent('Zsolt', 28, 184, "kbzsbrw"));

console.log(create.members);