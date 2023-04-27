function run(){
const p1ScoreDisplay = document.getElementById('p1Score');
const p2ScoreDisplay = document.getElementById('p2Score');
const wScoreDisplay = document.querySelector('p span');
const inputScore = document.getElementById('inputScore');
const p1Btn = document.getElementById('p1Btn');
const p2Btn = document.getElementById('p2Btn');
const resetBtn = document.getElementById('resetBtn'); 
let p1Score = 0;
let p2Score = 0;
let winingScore = 5;
let gameOver = false;
p1Btn.addEventListener('click',() => {   
    if (!gameOver) {
    p1Score++;
    if (p1Score === winingScore) {
    gameOver = true;
    p1Btn.setAttribute('disabled','disabled');
    p2Btn.setAttribute('disabled','disabled');
    }
}
    p1ScoreDisplay.textContent = p1Score;
})
p2Btn.addEventListener('click',()=>{
    if(!gameOver) {
    p2Score++;
    if(p2Score === winingScore) {
    gameOver = true;
    p1Btn.setAttribute('disabled','disabled');
    p2Btn.setAttribute('disabled','disabled');
    }
    p2ScoreDisplay.textContent = p2Score;
    }
});
inputScore.addEventListener('change',() =>{
    console.log(typeof inputScore.value);
    winingScore= Number(inputScore.value);
    wScoreDisplay.textContent=inputScore.value;

})
resetBtn.addEventListener('click',()=>{
    p1Score=0;
    p2Score=0;
    gameOver= false;
    p1ScoreDisplay.textContent =0;
    p2ScoreDisplay.textContent =0;
    p1Btn.removeAttribute('disabled','disabled');
    p2Btn.removeAttribute('disabled','disabled');
})
}
run();
