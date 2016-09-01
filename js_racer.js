"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length, sides) {
    this.players_number = players
    this.length = lengt
    this.sides = sides
  }
  print_board() {
    for(var i = 0; i < this.players.length; i++){
      let board = this.players[i]
      for(var j = 0; j < this.lengt; j++){
        board += "| "
      }
      console.log(board);
    }

  }
  print_line(player, pos) { //print posisi tiap player saat itu

  }
  advanced_player(player) { //buat tambah posisi player - panggil dice
    let dice = new Dice(this.sides);
    console.log(dice.roll());
  }
  finished() { //kondisi kapan permainan berhenti

  }
  winner() { //mengembalikan nilai siapa yg menang

  }
  reset_board() {
    console.log("\x1B[2J")
  }
}

var game = new JSRacer((["T","K","O"]),40,6)
game.print_board();

export default JSRacer
