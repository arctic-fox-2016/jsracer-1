"use strict"

import Dice from "./dice.js"

var dadu = new Dice();

class JSRacer {
  constructor(players, length, sides){
    this._players = players
    this._length = length
    this._sides = sides
    this._win = false;
    this._finished = false;

    this._start = false;
    this._start_index = 0;
    this._start_count = 3;
  }

  set players(value){ this._players = value; }
  get players(){ return this._players; }
  set length(value){ this._length = value; }
  get length(){ return this._length; }
  set sides(value){ this._sides = value; }
  get sides(){ return this._sides; }

  reset_board() {
    //console.log("\x1B[2J")
    for(let idx = 0; idx < 50; idx++){ console.log("\n"); }
    let title = "$$$ ahyanarizky-digachandra NASCAR $$$";
    let tagline = ["", "Go go go!!", "Vroom Vroom.."];

    if(!this._start){
      tagline = ["Ready", "Set", "Go"];
      if(this._start_index < this._start_count){
        title += " " + tagline[this._start_index];
        this._start_index += 1;
      } else {
        this._start = true;
      }
    } else {
      title += "       " + tagline[Math.floor(Math.random()*tagline.length)];
    }
    console.log(title);
  }

  print_board() {
    if(!this._win){
      this.reset_board();
      for(let idx = 0; idx < this.players.length; idx++){
        if(this.sides[idx] >= this.length){
          this._win = true;
          this._finished = true;
        }

        this.print_line(this.players[idx], this.sides[idx])
        if(this._start) this.sides[idx] += dadu.roll();
      }
    }
    return this._win;
  }

  print_line(player, pos) {
    let line_length = "";
    for(let idy = 0; idy < this.length; idy++){
      let pos_text = " ";
      if(idy == pos){
        pos_text = player;
      }
      line_length += " | " + pos_text;
    }
    if(this._win && this._finished){
      line_length += player + " Win!!";
      this._finished = false;
    }
    console.log(line_length);
  }

  run(){
    return this.print_board();
  }
}


export default JSRacer
