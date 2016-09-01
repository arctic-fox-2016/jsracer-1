"use strict"

//import Dice from "./dice.js"

class JSRacer {
  constructor(players, length, sides) {
    this.players = players
    this.length = length
    this.sides  = sides
    this.boards = []
    this.playerPos = [0,0,0,0]
  }
  print_board() {
    for (var j = 0; j < this.players.length; j++) {
      let board = this.players[j]
      for (var i = 0; i < this.length; i++) {
        board += "| "
      }
      this. boards.push(board)
      console.log(board);
    }

  }
  print_line(player, pos) {
    this.boards[player] = this.boards[player].split("").splice(pos,1,players[player])
    console.log(this.boards[0])
    console.log(this.boards[1])
    console.log(this.boards[2])
    console.log(this.boards[3])
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

export default JSRacer
//game.print_board()
//game.reset_board()
