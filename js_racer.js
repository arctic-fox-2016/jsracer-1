"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players = 3, length = 30, sides = 6) {
    this._players_number = players;
    this._length = length;
    this._sides = sides;
    this._one_player = {
      name : "",
      position : 0
    }
    this._players = [];
    this._board = [];
    this.create_board();
    this.create_player();
    this._dice = new Dice(this._sides)
    this._winner = "";
    this._isFinished = false;
  }

  create_player() {
    for (let i = 0; i< this.players_number ; i++ ) {
      this._players.push({
        name : i.toString(),
        position : 0
      });
    }
  }

  create_board() {
    for (let i=0; i<this.players_number ;i++) {
      for (let j=0; j<this.length; j++){
        this._board[i,j] = "|"
      }
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
    let line_board;


    this.reset_board();
    // i adalah nama pemain, j adalah posisi
    for (let i=0; i<this.players_number ;i++) {
      line_board = "";
      for (let j=0; j<this.length; j++){
        if (this._players[i].position != j) {
          line_board += " " + this._board[i,j];
        } else {
          line_board += this._players[i].name + this._board[i,j];
        }
      }
      console.log(line_board);
    }
  }

  print_line(player, pos) {

  }

  advanced_player(player) {
    for (let i=0; i<this._players_number; i++) {
      this._players[i].position += this._dice.roll();
      if (this._players[i].position >= this.length-1 && !this._isFinished) {
        this._players[i].position = this.length-1
        this._isFinished = true
        this._winner = this._players[i].name
        this.finished();
      }
    }
  }

finished() {
  this.print_board()
  console.log("\nThe Winner is " + this._winner);
  console.log("");
}

  // isFinished2() {
  //   for (let i=0; i<this._players_number; i++) {
  //     if (this._players[i].position >= this.length) {
  //       console.log("posisi pemenang : " + this._players[i].position)
  //       this._winner = this._players[i].name
  //       return true
  //     } else {
  //       return false
  //     }
  //   }
  // }

  winner() {

  }

  reset_board() {
    console.log("\x1B[2J")
  }
}


export default JSRacer
