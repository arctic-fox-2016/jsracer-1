"use strict"

import Dice from "./dice.js"
//import Runner from "./runner.js"


class JSRacer {
  constructor(players, length, sides) {
    this._players = players
    this._length = length
    this._sides = sides
    // this._player_name = ["","A","B","C"]
    this.board = []
    this.index = []
  }

  assignIndex() {
    var k=[]
    for(var i=1;i<=this._players;i++)
    {
      k.push(0)
    }
    return k
  }

  print_board() {

    for (let i=1;i<=this._players;i++){
      this.board.push(this.player_line(i))
    }
    return this.board
  }

  player_maju(){
    this.print_board()
    this.index = this.assignIndex()
    var isFinished = false
    //while(this.index[0]<=this._length){
    while(true){
      for(let i=0;i<=this._players-1;i++){
          this.board[i][this.index[i]] = " "
          this.index[i]+=this.roll()
          this.board[i][this.index[i]] = i
          if(this.index[i]>=this._length){
            this.index[i] = this._length;
          }
          this.reset_board()
          console.log(this.board);
          this.sleep(300)
        if (this.index[i]>=this._length-1){
            isFinished = true
            console.log("Player "+i+" is the winner")
            return false
        }
      }
    }
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

  player_line(j){
    let line = []
    for (let i=1;i<=this._length; i++){
      if(i==1) line.push(j-1)
      else line.push(" ");
    }
    return line
  }

  roll() {
    return Math.floor((Math.random() * 3) + 1);
  }

  sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds) {
        break;
      }
    }
  }

}

// let jsRacer = new JSRacer(3,10,2)
// jsRacer.player_maju();


export default JSRacer
