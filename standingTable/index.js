function calculaPontos(jogador){
    var pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
  }
  
  var jogadores = []
  
  exibirJogadoresNaTela(jogadores)
  
  function exibirJogadoresNaTela(jogadores){
    var html = ""
    for (var i = 0; i < jogadores.length; i++){
      html += "<tr><td>" + jogadores[i].nome + "</td>"
      html += "<td>" + jogadores[i].vitorias + "</td>"
      html += "<td>" + jogadores[i].empates + "</td>"
      html += "<td>" + jogadores[i].derrotas + "</td>"
      html += "<td>" + jogadores[i].pontos + "</td>"
      html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
      html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
      html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
    } 
    var tabelaJogadores = document.getElementById('tabelaJogadores')
    tabelaJogadores.innerHTML = html
  }
  
  function adicionarVitoria(i){
    var jogador = jogadores[i]
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibirJogadoresNaTela(jogadores);
  }
  
  function adicionarEmpate(i){
    var jogador = jogadores[i]
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibirJogadoresNaTela(jogadores);
  }
  
  function adicionarDerrota(i){
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibirJogadoresNaTela(jogadores);
  }
  
  function adicionarJogador(){
    var nomeTabela = document.getElementById('nomeJogador');
    var nome = nomeTabela.value
    if(nome !=""){
      var novoJogador = {
        nome: nome,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0
      }
      jogadores.push(novoJogador)
    }
    nomeTabela.value = "";
    exibirJogadoresNaTela(jogadores)
  }
  
  function reiniciarTabela(){
    for(var i = 0; i < jogadores.length; i++){
      jogadores[i].vitorias = 0
      jogadores[i].empates = 0
      jogadores[i].derrotas = 0
      jogadores[i].pontos = 0
    }
    exibirJogadoresNaTela(jogadores);
  }
  
  function limparNomes(){
    jogadores.length = 0
    var html = "";
    var tabelaJogadores = document.getElementById('tabelaJogadores');
    tabelaJogadores.innerHTML = html;
  }
  