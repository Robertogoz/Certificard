document.write("<h2>For better operation, use images .jpg</h2>")
function adicionarFilme() {
  var campoFilmeFavorito = document.querySelector('#filme') ;
  var filmeFavorito = campoFilmeFavorito.value;
  if(validarcaminho(filmeFavorito)){ 
     listarFilmesNaTela(filmeFavorito); 
  }
  else{ 
    alert("Endereço de imagem invalido, tente novamente ");
  }
  campoFilmeFavorito.value = null ;
}
function listarFilmesNaTela(filme){   
  var listaFilmes = document.querySelector('#listaFilmes');
  var elementoFilme = "<img src=" + filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}
function limparFilmes(){
  listaFilmes.innerHTML = null;
}
function validarcaminho(caminho){
  if(caminho.endsWith('.jpg')){
    return true
  }else{
    return false
  }
}