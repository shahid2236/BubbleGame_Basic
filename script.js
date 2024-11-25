function makeBubble(){
    var clutter = "";

for(var i=1; i<=102 ;i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}
makeBubble();

var timer = 60;
function runTimer(){
   var timerInterval = setInterval(function () {
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }else {
            clearInterval(timerInterval);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over !</h2>`;
        }
    }, 1000);
}
runTimer();


var hitRn = 0;
function getNewHit(){
    hitRn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitRn;
}
getNewHit()

var score = 0;

function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}


document.querySelector("#pbtm").addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.textContent);
    if(clickedNum === hitRn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
} )