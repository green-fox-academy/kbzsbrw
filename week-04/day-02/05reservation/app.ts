"use strict";

import { Reservation } from "./reservation";

let reservations: Reservation[] = [];
const numberOfReservations: number = 10;

for (let i = 0; i < numberOfReservations; i++) {
  reservations.push(new Reservation());
}

for (let item of reservations) {
  item.booking();
}
