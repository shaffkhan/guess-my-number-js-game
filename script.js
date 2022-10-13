'use strict';

//to get the text from an element and change it we use this code line
// document.querySelector('.message').textContent="correct answer";
// document.querySelector(".number").textContent = 13;
// document.querySelector('.score').textContent=20
//to get the value from a input field we use value proerpty:

const secretNmuber = Math.trunc((Math.random()*20)+1);
let score=20;
let highscore=0;

//to implement the event listener on a button click:
document.querySelector(".check").addEventListener("click",()=>{
    const guess = Number(document.querySelector(".guess").value);
   
    if (!guess) {
        console.log("no number!!!!");
    }
    
    else if(secretNmuber === guess){
        document.querySelector('.message').textContent="correct answer";
        document.querySelector('.number').textContent=secretNmuber;
        document.querySelector('body').style.backgroundColor = "green";
        document.querySelector('.number').style.width = "30rem"
    }
    
    else if(secretNmuber<guess ){
        if(score>1){
        document.querySelector('.message').textContent="number is high";
      score -=1;
      document.querySelector('.score').textContent=score;
    }else{
        document.querySelector('.message').textContent="you lost the game";
        document.querySelector('.score').textContent="0"
    }
        
}

else if(secretNmuber>guess ){
    if(score>1){
    document.querySelector('.message').textContent="number is low";
    score -=1;
      document.querySelector('.score').textContent=score;

}else{
    document.querySelector('.message').textContent="you lost the game";
    document.querySelector('.score').textContent="0"
}
}
})



document.querySelector(".again").addEventListener("click",()=>{
    const secretNmuber = Math.trunc((Math.random()*20)+1);
    highscore=score;
     score=20;   
    document.querySelector(".message").textContent="start guessing...";
    document.querySelector(".score").textContent=score;
    document.querySelector(".number").textContent="?";
    document.querySelector(".guess").value=" ";
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = "15rem"
    const val = document.querySelector(".highscore").textContent=highscore;
}) 