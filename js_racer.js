"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, panjang, sides) {
    this.players = players
    this.panjang = panjang
    this.sides = sides
  }

  print_board() {
    for (var i = 0; i < this.players.length; i++) {
      let papan = this.players[i];
      for (var j = 0; j < this.panjang; j++) {
        papan += " | "
      }
      console.log(papan);
    }
  }

  print_line(player, pos) {

  }

  advanced_player(player) {
    let dice = new Dice(this.sides)
    console.log(dice.roll())
  }

  finished() {

  }

  winner() {

  }
    reset_board() {
      console.log("\x1B[2J")
    }
  }
    let test = new JSRacer(["a","b","c"],20,3);
    test.print_board();
    export default JSRacer
