"use strict";

import { Flyable } from "./flyable";
import { Animal } from "../02zoo/zoo";

class Bird extends Animal implements Flyable {
  name: string;
  constructor(name: string) {
    super(name);
  }
  breed(): string {
    return "egg";
  }
  getName(): string {
    return this.name;
  }
  land(): string {
    return "wherever";
  }
  fly(): string {
    return "with wings";
  }
  takeoff(): string {
    return "yeah, birds can take off, too";
  }
}
