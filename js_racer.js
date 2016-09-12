"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length, sides) {
    this._players = players
    this._length = length
    this._sides = sides
    this._winner = false
    this._start =  false
    this._finished = false
  }
  set players(value){
    this._players =value
  }
  get players(){
    return this._players
  }
  set length(value){
    this._length = value
  }
  get length(){
    return this._length
  }
  set sides(value){
    this._sides = value
  }
  get sides(){
    return this._sides
  }

  print_board() {
    if(!this._winner){
      this.reset_board()
      for (var i = 0; i < this.players.length; i++) {
        if(this.sides[i] >= this.length){
          this._winner = true
          this._finished = true
        }
          this.print_line(this.players[i], this.sides[i])
          if (this._start) this.sides[i] += dice.roll()
      }
    }
    return this._winner
  }
  print_line(player, pos) {
    let lineLength = ""
    for (var i = 0; i < this.length; i++) {
      let posText = " "
      if(i == pos){
        posText = player
      }
      lineLength += "|" + posText
    }
    if (this._winner && this._finished) {
      lineLength += player + " Winner"
      this._finished = false
    }
    console.log(lineLength)
  }
  run(){
    return this.print_board()
  }
  reset_board() {
    console.log("\x1B[2J")
        this._start = true;
    }
  }
  // advanced_player(player) {
  //
  // }
  // finished() {
  //
  // }
  // winner() {
  //
  // }
let dice = new Dice();
export default JSRacer
