
var forward = 0;
function abc() {


  var character = document.getElementById("character");
  if(event.keyCode === 39){
    forward = forward + 10;
    character.style.left = forward + "px"
  }
  if(event.keyCode === 37){
    forward = forward - 10;
    character.style.left = forward + "px"
  }
  if(event.keyCode === 38){
     character.style.width = "139px"
    character.style.height = "347px"
    character.src = "images/ken-jumpu.gif"
  
  }
  if(event.keyCode === 40){
    character.style.width = "158px"
    character.style.height = "131px"
    character.src = "images/ken-cstance.gif"
    
  } 
  if(event.keyCode === 65){
  character.style.width = "530px"
    character.style.height = "226px"
    character.src = "images/ken-cvs-hadou1.gif"
  }
  if(event.keyCode === 83){
    character.style.width = "447px"
    character.style.height = "480px"    
    character.src = "images/ken-shoryu-ts.gif"
  }
  if(event.keyCode === 90){
    character.style.width = "209px"
    character.style.height = "221px"    
    character.src = "images/ken-walkf.gif"
  }
  if(event.keyCode === 88){
    character.style.width = "337px"
    character.style.height = "255px"    
    character.src = "images/ken-spinkick123.gif"
  }
  
  var character = document.getElementById("charactert");

    if(event.keyCode === 76){ 
      forward += 10;
      character.style.left = forward + "px";
      character.style.transform = "scaleX(-1)";
    }
    if(event.keyCode === 74){
      forward -= 10;
      character.style.left = forward + "px";
   
          character.style.width = "160px"
    character.style.height = "234px"
    
      character.style.transform = "scaleX(-1)";
      character.src = "images/evilryu-sfa-walk.gif"


    
    }
    if(event.keyCode === 73){ 

       character.src = "images/evilryu-sfa-standhp2.gif"
       character.style.width = "250px"
       character.style.height = "280px"

    }
    if(event.keyCode === 75){ 
      character.src = "images/ryu-cvs-evilhadou.gif"
          character.style.width = "427px"
    character.style.height = "262px"
    
    }
 
  
} 
window.onkeydown = abc;