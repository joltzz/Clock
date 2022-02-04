const relogio = document.querySelector(".relogio");
let intervalo = null;

function aumentarContagem() {
  if(parseInt(relogio.innerHTML) === 5) {
    clearInterval(intervalo);
  } else {
    relogio.innerHTML = parseInt(relogio.innerHTML) + 1; 
  }
}
intervalo = setInterval(aumentarContagem, 1000);
