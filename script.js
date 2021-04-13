let person = "";
let robot = "";

let robotWin = 0;
let personWin = 0;

document.getElementById('robotScore').innerHTML = + robotWin;
document.getElementById('personScore').innerHTML = + personWin;
document.getElementById("rockText").innerHTML = "";
document.getElementById("paperText").innerHTML = "";
document.getElementById("scissorsText").innerHTML = "";""
//===============================================
function computerloop(){
  setTimeout(() => {
    document.getElementById("robotChoice").innerHTML = "Rock";

  }, 400);
  setTimeout(() => {
    document.getElementById("robotChoice").innerHTML = "Paper";

  }, 500);
  setTimeout(() => {
    document.getElementById("robotChoice").innerHTML = "Scissor";

  }, 600);
  setTimeout(() => {
    document.getElementById("robotChoice").innerHTML = "Rock";

  }, 700);
  setTimeout(() => {
    document.getElementById("robotChoice").innerHTML = "Paper";

  }, 800);
  setTimeout(() => {
    document.getElementById("robotChoice").innerHTML = "Scissor";

  }, 900);
}
function rock() {
  
if (robotWin < 3 && personWin < 3) {
  
  document.getElementById("result").innerHTML = "";
  document.getElementById("robotChoice").innerHTML = "";
  computerloop()
  setTimeout(game("Rock"),5000);
  document.getElementById("rockText").innerHTML = "Rock";
  document.getElementById("paperText").innerHTML = "";
  document.getElementById("scissorsText").innerHTML = "";
  document.getElementById("rockopacity").style.opacity = "1";
  document.getElementById("paperopacity").style.opacity = "0.5";
  document.getElementById("scissorsopacity").style.opacity = "0.5";
  document.getElementById("rockopacity").classList.add("boxshadow")
  document.getElementById("paperopacity").classList.remove("boxshadow")
  document.getElementById("scissorsopacity").classList.remove("boxshadow")
  
}
}

function paper() {

if (robotWin < 3 && personWin < 3){
    
  document.getElementById("result").innerHTML = "";
  document.getElementById("robotChoice").innerHTML = "";
  computerloop()
  game("Paper")
  document.getElementById("paperText").innerHTML = "Paper";
  document.getElementById("rockText").innerHTML = "";
  document.getElementById("scissorsText").innerHTML = "";
  document.getElementById("rockopacity").style.opacity = "0.5";
  document.getElementById("paperopacity").style.opacity = "1";
  document.getElementById("scissorsopacity").style.opacity = "0.5";
  document.getElementById("paperopacity").style.filter = "drop-shadow (0 0 3rem white)";
  document.getElementById("rockopacity").classList.remove("boxshadow")
  document.getElementById("paperopacity").classList.add("boxshadow")
  document.getElementById("scissorsopacity").classList.remove("boxshadow")
}
}
function scissors() {
 


if (robotWin < 3 && personWin < 3){
  document.getElementById("result").innerHTML = "";
  document.getElementById("robotChoice").innerHTML = "";
  computerloop()
  game("Scissors")
  document.getElementById("scissorsText").innerHTML = "Scissors";
  document.getElementById("rockText").innerHTML = "";
  document.getElementById("paperText").innerHTML = "";
  document.getElementById("rockopacity").style.opacity = "0.5";
  document.getElementById("paperopacity").style.opacity = "0.5";
  document.getElementById("scissorsopacity").style.opacity = "1";
  document.getElementById("scissorsopacity").style.filter = "drop-shadow (0 0 3rem white)";
  document.getElementById("rockopacity").classList.remove("boxshadow")
  document.getElementById("paperopacity").classList.remove("boxshadow")
  document.getElementById("scissorsopacity").classList.add("boxshadow")
  
}

}
//===============================================
function robocop(){
  
  number = Math.floor(Math.random() * 3);
 
  switch (number) {
  case 0:
    return "Rock"
    break;

  case 1:
      return "Paper"
      break;
  case 2:
      return "Scissors"
      break;
  default:
    break;
}
}
//===============================================

let message;

function game(person){
  setTimeout(() => {
    
 robot = robocop()
 document.getElementById("robotChoice").innerHTML = robot;

}, 1000);

setTimeout(() => {
if (person == robot) {
  message = "No one win!";
  document.getElementById('blocksystem').style.display='none';
}
else if ((person.length == 4 && robot.length == 5) ||
         (person.length == 5 && robot.length == 8) ||
         (person.length == 8 && robot.length == 4)) {
  message = "Robot win!" ,  robotWin += 1;
  document.getElementById('robotScore').innerHTML =  robotWin;
  document.getElementById('blocksystem').style.display='none';
}
else if ((person.length == 4 && robot.length == 8) ||
         (person.length == 5 && robot.length == 4) ||
         (person.length == 8 && robot.length == 5)) {
  message = "You win!" ,  personWin += 1;
  document.getElementById('personScore').innerHTML =  personWin;
  document.getElementById('blocksystem').style.display='none';
}
else {
  message = "Something get wrong! Please try again!"
  document.getElementById('blocksystem').style.display='none';
}

if (robotWin > 2 || personWin > 2){
  document.getElementById('blocksystem').style.display='none';
  document.getElementById("result").innerHTML = "The game is over!" + " " + message;
  document.getElementById("palyAgain").innerHTML = "Do you want to play again?";
  document.getElementById("buttonsss").style.display = "flex";
}
document.getElementById("result").innerHTML = message;
}, 1500);

}
//===============================================
 function newGame() {
    personWin = 0;
    robotWin = 0;
    document.getElementById("rockText").innerHTML = "";
    document.getElementById("paperText").innerHTML = "";
    document.getElementById("scissorsText").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("palyAgain").innerHTML = "";
    document.getElementById("robotChoice").innerHTML = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("buttonsss").style.display = "none";
    document.getElementById('robotScore').innerHTML = + robotWin;
    document.getElementById('personScore').innerHTML = + personWin;
    document.getElementById("rockopacity").style.opacity = "0.5";
    document.getElementById("paperopacity").style.opacity = "0.5";
    document.getElementById("scissorsopacity").style.opacity = "0.5";
    document.getElementById("rockopacity").classList.remove("boxshadow")
  document.getElementById("paperopacity").classList.remove("boxshadow")
  document.getElementById("scissorsopacity").classList.remove("boxshadow")
    

}


