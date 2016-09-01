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

var racer = new JSRacer(["A", "B", "C"], 25, [0, 0, 0]);
function runwei(){
  setTimeout(function(){
    if(!racer.run()) runwei();
  }, 1000);
}
runwei();
/*
var term = require('terminal-kit').terminal;
var progressBar, progress = 0;

function doProgress(){
    // Add random progress
    progress += Math.random() / 10;
    progressBar.update(progress);
    if(progress >= 1){
        // Cleanup and exit
        setTimeout(function(){ term('\n');
          process.exit();
        }, 200);
    } else {
        console.log("asd");
        setTimeout(doProgress , 100 + Math.random() * 400 );
    }
}


progressBar = term.progressBar({
    width:80 ,
    title:'Serious stuff in progress:',
    eta:true ,
    percent:true
});

doProgress();
*/
