"use strict"

class Dice {
  constructor(sides) {
    this._sides = sides;
  }
  roll() {
    return Math.ceil(Math.random() * this._sides);
  }
}

export default Dice
