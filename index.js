import carros from "./carro.js";

let carroAtual = 0;
let idSlideShow;
document.getElementById("imgCarro").addEventListener("mouseenter", pauseSlideShow); 
document.getElementById("imgCarro").addEventListener("mouseout", playSlideShow);
function exibirCarro(){
    document.getElementById("imgCarro").src = `img/${carros[carroAtual].src}`
    document.getElementById("nome").innerHTML = carros[carroAtual].nome
    document.getElementById("potencia").innerHTML = carros[carroAtual].potencia
}
function atualizarCarro(){
    exibirCarro();

    if (carroAtual < carros.length - 1) carroAtual++;
    else carroAtual =  0;
    exibirCarro();
}
function playSlideShow(){
  idSlideShow =  setInterval(atualizarCarro, 1000);
}
function main(){
    exibirCarro();
    playSlideShow();
}

function pauseSlideShow(){
    clearInterval(idSlideShow)
}

main();
