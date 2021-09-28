var numeroSecreto = parseInt(Math.random() * 21);
var tentativas = 3
console.log("Secret: ",numeroSecreto);


function enviarNumero(){
    var listaNumeros = document.querySelector('#listaNumeros');
    var campoNumero = document.querySelector('#numero');
    var chuteNumero = campoNumero.value;
    while(tentativas > 0){
        if (numeroSecreto == chuteNumero){
        listaNumeros.innerHTML = null;  
        listarAcerto(chuteNumero);
        break 
        }
        else if (chuteNumero > numeroSecreto){
        listaNumeros.innerHTML = "";
        listarMenor(chuteNumero);
        return;
        }
        else if (chuteNumero < numeroSecreto){
        listaNumeros.innerHTML = "";
        listarMaior(chuteNumero);
        return;
        }
    }
    if(chuteNumero != numeroSecreto){
      listaNumeros.innerHTML = "";
      listarGameOver(chuteNumero);
    } 
}

function listarAcerto(numero){   
  var listaNumeros = document.querySelector('#listaNumeros');
  var elementoNumeros = ("<h2>Congratz, you win xD</h2>");
  listaNumeros.innerHTML = listaNumeros.innerHTML + elementoNumeros;
}
function listarMenor(numero){ 
  var listaNumeros = document.querySelector('#listaNumeros');
  var elementoMenor = ("<h2>You missed, the secret number is smaller, tries remaining: " + tentativas + "</h2>");
  tentativas--;
  listaNumeros.innerHTML = listaNumeros.innerHTML + elementoMenor;
}
function listarMaior(numero){
  var listaNumeros = document.querySelector('#listaNumeros');
  var elementoMaior = ("<h2>You missed, the secret number is higher, tries remaining: " + tentativas + "</h2>");
  tentativas--;
  listaNumeros.innerHTML = listaNumeros.innerHTML + elementoMaior;
}
function listarGameOver(numero){
  var listaNumeros = document.querySelector('#listaNumeros');
  var elementoGO = ("<h2>Game Over, the secret number was " + numeroSecreto + "</h2>");
  listaNumeros.innerHTML = listaNumeros.innerHTML + elementoGO;
}
