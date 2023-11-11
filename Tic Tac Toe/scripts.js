let turno = '';


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
  if(x.style.display == "none" && y.style.display == "none"){
    if(turno == 'x' ){
        var x = document.getElementById("x"+i);
        if (x.style.display == "none") {
        x.style.display = "block";
        }
    } else {
        var y = document.getElementById("o"+i);
        if (y.style.display == "none") {
        y.style.display = "block"; 
        } 
    }
    determinarTurno();
  }
}


reset();

