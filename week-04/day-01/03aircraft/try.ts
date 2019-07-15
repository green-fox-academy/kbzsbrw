"use strict";

import { Aircraft } from "./aircraft";
import { F35 } from "./f35";
import { F16 } from "./f16";
import { Carrier } from "./carrier"

const Carrier1: Carrier = new Carrier("MotherOfJesusCarrier", 2800, 9000);
const Carrier2: Carrier = new Carrier("SoulEaterCarrier", 4500, 7500);


Carrier1.add(new F35("St.Peter"));
Carrier1.add(new F35("HolyGhost"));
Carrier1.add(new F35("St.Jonah"));
Carrier1.add(new F16("Maria"));
Carrier1.add(new F16("Abraham"));
console.log(Carrier1);
Carrier2.add(new F35("Lucifer"));
Carrier2.add(new F35("Snake"));
Carrier2.add(new F16("Fire"));
Carrier2.add(new F16("Sulfur"));
Carrier2.add(new F16("Imp"));
console.log(Carrier2);



