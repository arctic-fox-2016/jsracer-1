"use strict"

class Dice {
  constructor(side) {
    this.side = side
  }
  roll() {
    return Math.floor((Math.random() * 6) + 1);
  }
}

export default Dice
