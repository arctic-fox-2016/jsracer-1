"use strict"
  //
  // class Dice {
  //   constructor(step = []) {
  //     this._step = step;
  //     roll();
  //
  //   }
  //   roll() {
  //     return  this._step=Math.floor((Math.random() * 6) + 1) ;
  //   }
  // }

class Player {

  constructor(player,step=0,track=10){
    this._player = player
    this._step = step
    this._track = track
  }

  roll(){
    let random =  Math.floor((Math.random() * 6) + 1) ;
    return this._step += random
  }

  get player() {
    return this._player
  }

  set player(player) {
  return this._player = player
  }
  get step() {
    return this._step
  }

  set step(step) {
  return this._step = step
  }

  get track() {
    return this._track
  }

  set track(track) {
  return this._track = track
  }



}




//
//let dice = new Dice();
// let arrplayer = [];


//let my_acct = new Player("Ivangerard")

var arrplayer= []
arrplayer.push(new Player("Ivan"));
//
 arrplayer.push(new Player("GG"));
//
arrplayer.push(new Player("Gerard"));
//
// arrplayer.push(new Player("BBBB"));



for(var i = 0; i < 15; i++){
  let flag = false;
  for(var j = 0; j < arrplayer.length; j++){
    arrplayer[j].roll();
    console.log(arrplayer);
  }

  if (arrplayer[0]._step > 10){
    console.log ("Player 0 win")
    flag = true;
    break;
  }

  else if (arrplayer[1]._step >= 10){
    console.log ("Player 1 win")
    flag = true;
    break;
  }

  else if (arrplayer[2]._step > 10){
    console.log ("Player 2 win")
    flag = true;
    break;
  }

}


//export default Dice
