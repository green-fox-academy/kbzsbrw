'use strict';

export class Plant {
    name: string;
    waterAmount: number;

    constructor(name: string, waterAmount: number) {
        this.waterAmount = waterAmount;
        this.name = name;
      }
}