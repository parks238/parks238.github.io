document.getElementById("submit").addEventListener("click",function(){
  var fav_color = document.getElementById("fav_color").value;
  var fav_number = document.getElementById("fav_number").value;
  var greeting = document.getElementById("greeting22");
  if(fav_color == "red"){
    
    greeting.style.background = "red";
    } else if(fav_color == "blue"){
      
      greeting.style.background = "blue";
    } else if(fav_color == "green"){
      
      greeting.style.background = "green";
    } else if(fav_color == "yellow"){
      
      greeting.style.background = "yellow";
    }
  else {
     
     greeting.style.background = "black";
  }
  if(fav_number=="1"){
   greeting.innerHTML="My favorite number is 1 too!"
  }
  else if (fav_number=="2"){
    greeting.innerHTML="I don't like 2"
  }
  else if (fav_number=="4"){
    greeting.innerHTML="I don't like 4"
  }
    else if (fav_number=="7"){
    greeting.innerHTML="My favorite number is 7 too!"
   }
  else{
    greeting.innerHTML="Cool!"
  }
});