"use strict"

import JSRacer from "./js_racer"

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

// Your code here...
var race = new JSRacer(20, 30, 6);

// Initiate empty board
race.initiate_board();

while (1) {
  // Reset board
  race.reset_board();

  // Let player roll the dice, and update their position
  race.advance_player();

  // Prints board and moves
  race.print_board();

  // Check if there is winner
  if (race.finished() == true) {
    race.winner();
    break
  }

  // Sleep for 200 milliseconds
  sleep(100);

  // Update the race turn
  race.update_turn();
}

export default sleep
