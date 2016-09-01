"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, panjang , sides) {
    this.players = players;
    this.panjang = panjang;
    this.sides = sides;
      }

  print_board() {
    for (var i = 0; i < this.players.length; i++) {
      let papan = this.players[i]
      for (var i = 0; i < this.panjang; i++) {
        papan += "|";
      }
    }
    console.log(papan);
  }
  print_line(player, pos) {
    // for (var i = 0; i < 20; i++) {
    //   if (i%2!==0) {
    //     kotak[dice.step*i]="a"//indeks genap
    //   }
    // }
  }
  advanced_player(player) {
      this.player = player;
  }
  finished() {

  }
  winner() {

  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

export default JSRacer
