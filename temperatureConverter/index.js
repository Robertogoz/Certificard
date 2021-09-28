const botao = document.querySelector('button')

let convert = () => {
  
  var valorEmCelsius = Number(document.querySelector('input').value.replace(',','.'))
  
  document.querySelector('h2').innerHTML = (valorEmCelsius * 9 / 5 + 32).toFixed(1) + "° F"
  
}

           