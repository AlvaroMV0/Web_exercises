function  closeDiv(x){
    let divMod = document.getElementById(x);
    divMod.classList.add('closed');
}

function  openDiv(x){
    let divMod = document.getElementById(x);
    divMod.classList.remove('closed');
}