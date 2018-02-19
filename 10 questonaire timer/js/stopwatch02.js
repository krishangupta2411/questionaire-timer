var myVar;
var minute = 0;
var second = 0;
var millisecond = 0;
var running = false;
var display = false;
var maxTime = 1;
function init() {
    var startbtn = document.getElementById("startbtn");
    //var pausebtn = document.getElementById("pausebtn");
    var stopbtn = document.getElementById("stopbtn");

    startbtn.addEventListener("click", start);
    //pausebtn.addEventListener("click",pause);
    stopbtn.addEventListener("click", stop);

    if (localStorage.minute) {
        minute = localStorage.minute;
    }
    if (localStorage.second) {
        second = localStorage.second;
    }
    if (localStorage.milliseond) {
        millisecond = localStorage.milliseond;
    }

}

window.addEventListener("load", init);
function printCurrentTime() {
    document.getElementById("millisecond").innerHTML = millisecond;
    document.getElementById("second").innerHTML = second;
    document.getElementById("minute").innerHTML = minute;

    localStorage.milliseond = millisecond;
    localStorage.second = second;
    localStorage.minute = minute;


}

function myTimer() {
    if (millisecond == 99) {
        millisecond = 0
        second++;
    }
    if (second == 60) {
        second = 0;
        minute++;

    }
    else {
        millisecond++;
    }
    printCurrentTime();
    if (minute == maxTime) {
        stop();

    }
}

function myStopFunction() {
    clearInterval(myVar);
}

function start() {
    if (minute < 20) {
        if (display == false) {
            if (running == false) {
                display = true;
                running = true;
                //document.getElementById("pausebtn").innerHTML="Pause";
                myVar = setInterval(function () { myTimer() }, 10);

            }
        }
        else if (display == true) {
            if (running == false) {
                running = true;
                myVar = setInterval(function () { myTimer() }, 10);
                //document.getElementById("pausebtn").innerHTML="Pause"; 
            }
        }
    }
}
function stop() {
    document.getElementById("startbtn").disabled = true;
    if (display == true) {
        if (running == true) {
            myStopFunction();
            minute = 0;
            second = 0;
            millisecond = 0;
            running = false;

        }
        else if (running == false) {
            minute = 0;
            second = 0;
            millisecond = 0;
            printCurrentTime();
        }
    }
    else if (display == false) {
        if (running == false) {
            minute = 0;
            second = 0;
            millisecond = 0;
            printCurrentTime();
        }
    }
    // document.getElementById("pausebtn").innerHTML="Pause";     
    localStorage.clear();
    window.location.href = "https://www.google.co.in";
}
        // function pause()
        // {
        //     if(display==true)
        //         {   
        //             if(running==true)
        //                 {
        //                     if(document.getElementById("pausebtn").innerHTML=='Pause')
        //                         {
        //                             document.getElementById("pausebtn").innerHTML="Resume";   
        //                             myStopFunction();
        //                             running=false;
        //                         }
        //                     else if(document.getElementById("pausebtn").innerHTML=='Resume') 
        //                         {
        //                             document.getElementById("pausebtn").innerHTML="Pause";
        //                             myVar = setInterval(function(){ myTimer() }, 10);
        //                             running=true;
        //                         }
        //                 }
        //             else if(running==false)
        //                 {
        //                     if(document.getElementById("pausebtn").innerHTML=='Resume') 
        //                         {
        //                             document.getElementById("pausebtn").innerHTML="Pause";
        //                             myVar = setInterval(function(){ myTimer() }, 10);
        //                             running=true;
        //                         }

        //                 }

        //         }
        // }
