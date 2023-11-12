let turno = '';
var arr = [['1','2','3'],['4','5','6'],['7','8','9']];
var someOneWin = false;



function checkWin(){
  
  if((arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2]) ||
  (arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0])){
    wins();
    return;
  }else{
    for (let j = 0 ; j < 3 ; j++){
        if((arr[j][0] == arr[j][1] && arr[j][1] == arr[j][2]) ||
        (arr[0][j] == arr[1][j] && arr[1][j] == arr[2][j])) {
          wins();
          return;
      }
    }
  }
}



function wins(){
  if(turno == 'x'){ console.log("winns X"); } else { console.log("winns O"); }
  someOneWin = true;
}



function reset(){
  for(let i = 1 ; i<10 ; i++){
    var x = document.getElementById("x"+i);
    var y = document.getElementById("o"+i);
    x.style.display = "none";
    y.style.display = "none";
  } 
  someOneWin = false;
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
  if (!someOneWin){
  if(x.style.display == "none" && y.style.display == "none"){
    if(turno == 'x' ){
        if (x.style.display == "none") {  x.style.display = "block";  }
    } else {
        if (y.style.display == "none") {  y.style.display = "block";  } 
    }
    upadteBoard(i);
    checkWin();
    determinarTurno();
  }
 }
}



function upadteBoard(i){
  switch(i){
    case 1:
      if(turno == 'x'){arr[0][0] = 'x' ;} else {arr[0][0] = 'o';}
      break;
    case 2:
      if(turno == 'x'){arr[0][1] = 'x' ;} else {arr[0][1] = 'o';} 
      break;
    case 3:
      if(turno == 'x'){arr[0][2] = 'x' } else {arr[0][2] = 'o';}
      break;
    case 4:
      if(turno == 'x'){arr[1][0] = 'x' ;} else {arr[1][0] = 'o';} 
      break;
    case 5:
      if(turno == 'x'){arr[1][1] = 'x' ;} else {arr[1][1] = 'o';} 
      break;
    case 6:
      if(turno == 'x'){arr[1][2] = 'x' ;} else {arr[1][2] = 'o';} 
      break;
    case 7:
      if(turno == 'x'){arr[2][0] = 'x' ;} else {arr[2][0] = 'o';} 
      break;
    case 8:
      if(turno == 'x'){arr[2][1] = 'x' ;} else {arr[2][1] = 'o';} 
      break;
    case 9:
      if(turno == 'x'){arr[2][2] = 'x'  ;} else {arr[2][2] ='o';} 
      break; 
  }
}


reset();