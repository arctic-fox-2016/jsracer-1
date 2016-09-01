"use strict"

import Dice from "./dice.js"

class JSRacer {
  constructor(players, length, sides) {
    this._players = players;  // 3
    this._length = length;    // 30
    this._sides = sides;      // 6
    this._player = [];        // Initiate new player array object
    this._turn = 0;
    this._dice = new Dice(this._sides);
    this._finished = false;
    this._winner = 0;

    for (var i = 0; i < players; i++) {
      this._player.push({
        _playerNum: i,
        _playerSym: String.fromCharCode(65 + i),
        _playerPos: 0
      });
    }
  }

  initiate_board() {
    this.reset_board();
    for (var player = 0; player < this._players; player++) {
      this.print_line(player)
    }
  }

  print_board() {
    // Print player on board
    for (var player = 0; player < this._players; player++) {
      this.print_line(player)
    }
  }

  print_line(player) {
    var tempLine = "";

    // Compile entire length of player line
    for(var len = 0; len < this._length; len++) {
      if (len == this._player[player]._playerPos) {
        tempLine += this._player[player]._playerSym + "|";
      } else {
        tempLine += " |";
      }
    }

    // Print line
    console.log(tempLine);
  }

  advance_player() {
    // Move player forward
    this._player[this._turn]._playerPos += this._dice.roll();
    if (this._player[this._turn]._playerPos >= this._length - 1) {
      this._player[this._turn]._playerPos = this._length - 1;
      this._finished = true;
    }
  }

  update_turn() {
    // Let next player move
    if ((this._turn + 1) % this._players == 0) {
      this._turn = 0;
    } else {
      this._turn++;
    }
  }

  finished() {
    return this._finished;
  }

  winner() {
    this._winner = this._player[this._turn]._playerSym;
    console.log("Winner is " + this._winner);
  }

  reset_board(repeat) {
    for (var i = 0; i < 25; i++) {
      console.log("\x1B[2J");
    }
  }
}

export default JSRacer
