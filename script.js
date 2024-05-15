// script.js

function makeBubble(){
    
var clutter="";
for(var i = 1;i <= 100;i++)
{
var rn=Math.floor(Math.random() * 10);
clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML= clutter;
}
var timer=60;
function runTimer(){
    var intervalId=setInterval(function(){
    timer--;  
    document.querySelector("#timerValue").textContent=timer;
    if(timer<1){
        clearInterval(intervalId);
    }
    },1000);
    }

var hit=0;
function hitItem(){
hit=Math.floor(Math.random()*10);
document.querySelector("#hit").textContent=hit;
} 

var score=0;
function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent=score;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickedNum=Number(dets.target.textContent);
    if(clickedNum === hit){
        increaseScore();
        makeBubble();
        hitItem();
    }
    else{
        alert("wrong bubble");
    }
});

makeBubble();
runTimer();
hitItem();




   
