"use strict";

interface Reservationy {
  getDowBooking(): string;
  getCodeBooking(): string;
}
let letters: string = "ABCDEFGHIJKLMNOPQRSTUXYZ0123456789";
let longOfLetters: number = letters.length;
let dow: string[] = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

class Reservation implements Reservationy {
  code: string;
  dow: string;

  constructor() {
    let code: string = "";
    for (let i = 0; i < 8; i++) {
      code += letters.charAt(Math.floor(Math.random() * longOfLetters));
    }
    this.code = code;
    let dowIndex: number = Math.floor(Math.random() * 7);
    this.dow = dow[dowIndex];
  }
  getCodeBooking(): string {
    return this.code;
  }
  getDowBooking(): string {
    return this.dow;
  }

  booking(): void {
      console.log(
        "Booking# " +
          `${this.getCodeBooking()}` +
          " for " +
          `${this.getDowBooking()}`
      );
  }
}
export { Reservation };
