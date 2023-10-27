var timer=30;
let score=0;
let rn=0;
function getScore(){
    score=score+10;
    document.querySelector("#Scoreval").textContent=score;

}


function makeBubble(){
    var clutter="";
for(var i=1;i<=140;i++){
     var rn=Math.floor(Math.random()*10);
     clutter=clutter+`<div class="bubble">${rn}</div>`;


}
document.querySelector("#pbot").innerHTML=clutter;
}


function runTimer(){
    var timerint=setInterval(function(){
        if(timer>0){
            timer--;
        document.querySelector("#timervalue").textContent=timer

        }
        else{
            clearInterval(timerint)
            document.querySelector("#pbot").innerHTML=" ";
        }
        
        

    },1000);

}

function getHitVal(){
     rn=Math.floor(Math.random()*10);
    document.querySelector("#gethitvalue").textContent=rn;
    
}
document.querySelector("#pbot").addEventListener("click",function(details){
   var clickednumber=(Number(details.target.textContent));
   if(rn===clickednumber){
    getScore();
    makeBubble();
getHitVal();
   }

})
runTimer();
makeBubble();
getHitVal();

