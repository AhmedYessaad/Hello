let seconds = 0;
let seconds2 = 0; 
let pcn1 = document.getElementById('pcn1');
let int ;
let isRunning = true;
let isRunning2 = true;

let startBtn1 = document.getElementById('team1Btn');
let startBtn2 = document.getElementById('team2Btn');
let pauseBtn = document.getElementById('pauseBtn');
let doneBtn = document.getElementById('doneBtn');




startBtn1.onclick = function(){
    if (isRunning == false) {
        clearInterval(int);
    }
    int =  setInterval(resultfx, 1000);
    isRunning = true;
    isRunning2 = false;
    
}


startBtn2.onclick = function(){
    if (isRunning2 == false) {
        clearInterval(int);
    }
    int = setInterval(resultfx, 1000);
    isRunning2 = true;
    isRunning = false;
}

pauseBtn.onclick = function(){
        if (isRunning == true || isRunning2 == true) {
            clearInterval(int);
            isRunning = false;
            isRunning2 = false;
        }
}
doneBtn.onclick = function(){
        clearInterval(int);
        pcn1.innerHTML=`00.00%`;
        pcn2.innerHTML=`00.00%`;
        seconds = 0;
        seconds2 = 0;
        isRunning = false;
        isRunning2 = false;

}



function resultfx(){

    if (isRunning == true && isRunning2 == false) {
        seconds++;  
        let r = 0;
        let result = (seconds*100)/3600;
        let reslt = result.toFixed(2);
        r = reslt < 10 ? "0"+ reslt: reslt;    
        pcn1.innerHTML = `${r} %`;
        
    }else if(isRunning2 == true && isRunning == false){
        seconds2++ ;  
        let result2 = (seconds2*100)/3600;
        let reslt2 = result2.toFixed(2);
        let r = reslt2 < 10 ? "0"+ reslt2: reslt2;    
        pcn2.innerHTML = `${r} %`
    }
    
}

