document.getElementById("submit").addEventListener("click",function(){
  var your_name = document.getElementById("your_name").value;
  var greeting = document.getElementById("greeting22")
  if(your_name == "red"){
    
    greeting.style.background = "red";
    } else if(your_name == "blue"){
      
      greeting.style.background = "blue";
    } else if(your_name == "green"){
      
      greeting.style.background = "green";
    } else if(your_name == "yellow"){
      
      greeting.style.background = "yellow";
    }
  else {
     
     greeting.style.background = "black";
  }
});