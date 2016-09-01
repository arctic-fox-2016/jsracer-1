"use strict"

class Dice {
  constructor(sides) {
    this.sides = sides
  }

  get sides(){
    return this.sides
  }

  set sides(value){
      this.sides = value
  }

  roll() {
    return Math.floor((Math.random() * 6) + 1);
  }
}

export default Dice
