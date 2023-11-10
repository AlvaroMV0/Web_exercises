var turno = 0;


function reset(){
  var x = document.getElementsByClassName("x");
  var y = document.getElementsByClassName("y");
  x.style.display = "none";
  y.style.display = "none";
}


function determinarTurno(){

}

function show_unshow() {
  if(turno == 1 ){
  var x = document.getElementById("x1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none"; turno --;
  } 
} else {
  var y = document.getElementById("o1");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";turno ++;
  }
  
}
}

