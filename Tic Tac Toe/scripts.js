let turno = '';
let arr = [2][2];
var t1 = document.getElementById("t1");
var t2 = document.getElementById("t2");
var t3 = document.getElementById("t3");
var t4 = document.getElementById("t4");
var t5 = document.getElementById("t5");
var t6 = document.getElementById("t6");
var t7 = document.getElementById("t7");
var t8 = document.getElementById("t8");
var t9 = document.getElementById("t9");

function checkWin(){
  
  if(t1.innerHTML == t2.innerHTML == t3){
    if(turno == 'x'){
      console.log("winns X");
    } else {
      console.log("winns O");
    }
  }
}



function reset(){
  for(let i = 1 ; i<10 ; i++){
    var x = document.getElementById("x"+i);
    var y = document.getElementById("o"+i);
    x.style.display = "none";
    y.style.display = "none";
  }
}


function determinarTurno(){
   if (turno == 'x'){
    turno = 'o';
   } else {
    turno = 'x';
   }
}

function show_unshow(i) {
  var y = document.getElementById("o"+i);
  var x = document.getElementById("x"+i);
  if(x.style.display == "none" && y.style.display == "none"){
    if(turno == 'x' ){
        if (x.style.display == "none") {  x.style.display = "block";  }
    } else {
        if (y.style.display == "none") {  y.style.display = "block";  } 
    }
    determinarTurno();
    checkWin();
  }
}


reset();

