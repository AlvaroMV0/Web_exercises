function  closeDiv(x){
    let divMod = document.getElementById(x);
    divMod.classList.add('closed');
    document.querySelector('button[title=">"]').classList.remove('closed');
}

function  openDiv(x){
    let divMod = document.gete
    divMod.classList.remove('closed');
}