function printTime(){
var current_date = new Date();
var hour = current_date.getHours();
var minutes = current_date.getMinutes();
var seconds = current_date.getSeconds();

document.getElementById("hours").innerHTML= hour;
document.getElementById("minutes").innerHTML= minutes;
document.getElementById("seconds").innerHTML= seconds;
}

setInterval(printTime,1000)