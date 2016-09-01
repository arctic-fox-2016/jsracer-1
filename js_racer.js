"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length, sides) {
this.players = players;
this.length = length;
this.sides = sides;
  }
  print_board() {

    let kotak = [];
    for (var i = 0; i < 20; i++) {
      if (i%2==0) {
        kotak[i]="|"//indeks genap
      }
    }

    // for(var i=0;i<kotak.length;i++)
    // {
    //     kotak[i] = " ";
    //     console.log("<br>");
    //     console.log(kotak[i]);
    // }
    //
    // for(var i=0;var <= kotak.length; var++)
    // {
    //   console.log();
    // }
  }
  print_line(player, pos) {
    for (var i = 0; i < 20; i++) {
      if (i%2!==0) {
        kotak[dice.step*i]="a"//indeks genap
      }
    }
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
