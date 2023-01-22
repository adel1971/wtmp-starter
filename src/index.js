

let guessLeft=10;
let guesscount = 0;

let targetNum;
targetNum = Math.floor((Math.random()*100)+1);
console.log(targetNum);
const startTime = Math.round(Date.now()/1000);
const guessBt = document.getElementById("submit");
const numberGuess = new Set();
guessBt.onclick = () =>{

    guesscount++;
    let result = parseInt($(".inputNumber").val());

    numberGuess.add(result);
  if(result>targetNum){
    $("#result").css("color","red");
    $("#result").text("Very Bad Not Even Close");
  } else if(result < targetNum){
    $("#result").css("color","blue");
    $("#result").text("Almost There!");
  } else if(result == targetNum){
    const endTime = Math.round(Date.now()/1000 );

    const timeguess = endTime - startTime;
    $("#result").css("color","green");
    $("#result").text(" Very good at guessing! The number was: " + targetNum +
    " total number of guesses: " + guesscount + "  total time spent guessing: " + timeguess +" sec" ) ;
  } else {
    $("#result").text("Please re input with an actual number -_-");
  }

  guessLeft--;
  if (guessLeft >= 0) {

      if (result === targetNum) {
        alert("Winner winner!");
        console.log(numberGuess);

      }else if (result > targetNum) {

        alert("Please guess lower. You have " + guessLeft + " guesses remaining.");

      }else{

        alert("Please guess higher. You have " + guessLeft + " guesses remaining.");
      }

    }else{
      alert("MUh hahahahah you lose!");
    }
};
