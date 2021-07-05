import JokenPoJuiz from './usecases/JokenPoJuiz'
var readlineSync = require('readline-sync');

const jokenPoJuiz = new JokenPoJuiz;

function capitalize(str){
    return str[0].toUpperCase()+str.slice(1).toLowerCase()
}

function jogada(str){
    return readlineSync.question(`Jogada do ${str} : `, { hideEchoBack: true });
}

function Jogo() {
    let result: string = '';
    var jogador1 = jogada('Jogador1');
    var jogador2 = jogada('Jogador2');

  if (jogador1 && jogador2)
  result = jokenPoJuiz.verificar(capitalize(jogador1), capitalize(jogador2));

  return result;
}

console.log(Jogo()); 
