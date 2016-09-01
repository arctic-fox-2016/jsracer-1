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
let race = new JSRacer(5,30,6);

while (!race._isFinished) {
  race.print_board();
  sleep(1000);
  race.advanced_player();
}
