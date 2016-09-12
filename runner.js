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
  let racer = new JSRacer(["a","b","c"], 30, [0,0,0])
  function play() {
    setTimeout(function() {
      if (!racer.run()) play()

    }, 300)
  }
  play()
