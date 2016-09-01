"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players = 3, length = 30, sides = 6) {
    this._players_number = players;
    this._length = length;
    this._sides = sides;
    this._players_name = [];
    this._board = [];
  }

  create_player() {
    for (let i = 0; i< this.players_number ; i++ ) {
      players_name.push(i.toString())
    }
  }

  create_board() = {
    for (let i=0; i<this.players_number ;i++) {
      for (let j=0; j<this)
    }
  }

  get length() {
    return this._length
  }

  get players_number() {
    return this._players_number

  }
  get sides(){
    if (this._sides > 6 ) {
      return 6
    } else {
      return this._sides
    }
  }

  print_board() {

  }
  print_line(player, pos) {

  }
  advanced_player(player) {

  }
  finished() {

  }
  winner() {

  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

let players = new JSRacer([a,b,c], 30, 6);


export default JSRacer
