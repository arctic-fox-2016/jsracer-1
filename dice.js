"use strict"

class Dice {
  constructor(sides) { 
    this._sides = sides
  }

  get sides(){
    return this._sides
  }

  set sides(value){
    this._sides = value
  }

  roll() {
    let result = Math.floor(Math.random() * 10);
    if (result > 6) {
      result = 6;
    }
    return result;
  }
}

export default Dice
