//"use strict"

import JSRacer from "./js_racer"
const readline = require( 'readline' );
let game = new JSRacer((["s","i","f","a"]),35,6)
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "player name?"
});
let players = 1
let playersName = []
// console.log("Who is the players?")
// rl.prompt()
// rl.on('line',(name) => {
//   if(players > 3){
//     console.log(playersName)
//         rl.close()
//
//   } else{
//     playersName.push(name)
//     console.log("welcome "+playersName[players-1])
//     players++
//     rl.setPrompt("player"+ players+" name: ")
//     rl.prompt()
//   }
// });
rl.write('Delete this!');
// Simulate Ctrl+u to delete the line written previously
rl.write(null, {ctrl: true, name: 'u'});
game.reset_board()
process.stdout.cursorTo(0,0);
game.print_board()
sleep()
game.reset_board()
process.stdout.cursorTo(0,0);
game.print_line(19,0)
// rl.moveCursor(1,1)
// rl.clearLine()
