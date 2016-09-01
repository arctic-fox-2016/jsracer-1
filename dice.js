"use strict"

class Dice {
  constructor(player,pos = 1) {
    this.player = player;
    this.pos = pos;
    // this.max = 10;
  }

  playerA(name,pos)
  {
    this.player = name;
    this.pos = pos;
    return this.player;
  }

  playerB(name,pos)
  {
    this.player = name;
    this.pos = pos;
    return this.player;
  }

  playerC(name,pos)
  {
    this.player = name;
    this.pos = pos;
    return this.player;
  }

  rollA()
  {
        let step = Math.floor((Math.random ()*3)+1);
        this.pos += step;
        let total = this.pos;
        if(total >= this.max)
        {
          console.log("Race Over"+this.player+"Win");
        }
        return this.pos;
  }
  rollB()
  {
        let step = Math.floor((Math.random ()*3)+1);
        this.pos += step;
        let total = this.pos;
        if(total >= this.max)
        {
          console.log("Race Over"+this.player+"Win");
        }
        return this.pos;
  }
  rollC()
  {
        let step = Math.floor((Math.random ()*3)+1);
        this.pos += step;
        let total = this.pos;
        if(total >= this.max)
        {
          console.log("Race Over"+this.player+"Win");
        }
        return this.pos;
  }
}

let dice = new Dice();
let maxStep = 20;
let numberA;
let numberB;
let numberC;
let totalA = 0;
let totalB = 0;
let totalC = 0;

for(var i=0;i<=maxStep;i++){
console.log(dice.playerA("A ",0)+"Pos: "+dice.rollA());
console.log(dice.playerB("B ",0)+"Pos: "+dice.rollB());
console.log(dice.playerC("C ",0)+"Pos: "+dice.rollC());
numberA = dice.rollA();
numberB = dice.rollB();
numberC = dice.rollC();
totalA += numberA;
totalB += numberB;
totalC += numberC;
}
console.log("Player A "+totalA+" step");
console.log("Player B "+totalB+" step");
console.log("Player C "+totalC+" step");

if(totalA > totalB  && totalA > totalC)
{
  console.log("Race Over \n"+dice.playerA("Player A ",0)+"Win");
}else if (totalB > totalA && totalB > totalC)
{
    console.log("Race Over \n"+dice.playerB("Player B ",0)+"Win");
}else if(totalC > totalA && totalC > totalB)
{
    console.log("Race Over \n"+dice.playerC("Player C ",0)+"Win");
}


//
// console.log(dice.roll());
// console.log(dice.roll());
// console.log(dice.roll());



//export default Dice
