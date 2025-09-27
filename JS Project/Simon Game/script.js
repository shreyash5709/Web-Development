let gameSeq = [];
let userSeq = [];
let color = ["red", "green", "yellow", "blue"];
let level = 0;
let gameStart = false;

let h2 = document.querySelector("h2");
let body = document.querySelector("body");
body.addEventListener('keypress', ()=>{
    if(gameStart==false){
        levelUp();
        gameStart = true;
    }
});

function levelUp(){
    userSeq = [];
    level++;
    h2.innerHTML = `Level ${level}`
    let x = Math.floor(Math.random()*4)
    let clr = color[x];
    let btn = document.querySelector(`.${clr}`);
    gameSeq.push(clr);
    gameFlash(btn);
}

function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(()=>{
        btn.classList.remove("gameFlash");
    },300);
}

let btns = document.querySelectorAll(".shape");
for(btn of btns){
    btn.addEventListener('click', btnPress);
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    let clr = btn.getAttribute("id");
    userSeq.push(clr);
    checkAns(userSeq.length-1);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(()=>{
        btn.classList.remove("userFlash");
    },200);
}

function checkAns(idx){
    if(gameSeq[idx]===userSeq[idx]){
        if(gameSeq.length==userSeq.length){
            setTimeout(levelUp, 200);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your score : <b>${level}</b> <br> Press any key to start again.`
        reset();
    }
}

function reset(){
    highScore();
    body.classList.add("error");
    setTimeout(()=>{
        body.classList.remove("error");
    },200);
    level = 0;
    gameStart = false;
    gameSeq = [];
    userSeq = [];
}

let newh2 = document.createElement("h2");
let hiScore = level
function highScore(){
    if(hiScore<level) hiScore = level;
    newh2.innerHTML = `High Score : ${level}`;
    h2.before(newh2);
}

/*
let gameSeq = [];
let userSeq = [];
let level = 0;
let gameStart = false;
let color = ["red", "green", "yellow", "blue"];

let h2 = document.querySelector("h2");
let body = document.querySelector("body")

body.addEventListener('keypress', ()=>{
    if(gameStart == false){
        gameStart = true;
        levelUp();
    }
});

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let x = Math.floor(Math.random()*4);
    let clr = color[x];
    let btn = document.querySelector(`.${clr}`);
    gameSeq.push(clr);
    gameFlash(btn);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(()=>{
        btn.classList.remove("userflash");
    }, 200);
}

let btns = document.querySelectorAll(".shape");
for(btn of btns){
    btn.addEventListener('click', btnPress);
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    let userClr = btn.getAttribute("id");
    userSeq.push(userClr);
    checkAns(userSeq.length-1);
}

function gameFlash(btn){
    btn.classList.add("gameflash");
    setTimeout(()=>{
        btn.classList.remove("gameflash");
    }, 200);
}

function checkAns(idx){
    if(gameSeq[idx] === userSeq[idx]){
        if(gameSeq.length==userSeq.length){
            setTimeout(levelUp,500);
        }
    }
    else{
        h2.innerHTML = `Game Over ! <b>Your score is ${level}</b>. <br> Press any key to start again.`;
        reset();
    }
}

function reset(){
    body.classList.add("error");
    setTimeout(()=>{
        body.classList.remove("error");
    }, 200);
    highScore();
    gameStart = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

let newh2 =  document.createElement("h2");
h2.before(newh2);
function highScore(){
    let maxLevel = level;
    newh2.innerHTML = `Highest Score - ${maxLevel}`;
    if(level>maxLevel) maxLevel = level;
}
*/