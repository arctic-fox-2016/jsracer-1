"use strict"

class Dice {
  constructor(dice) {
    this.dice = dice
  }
  roll() {
    return Math.floor((Math.random() * this.dice) + 1);
  }
}


export default Dice
