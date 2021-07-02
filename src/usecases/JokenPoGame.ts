import JokenPoJuiz from './JokenPoJuiz'

const jokenPoJuiz = new JokenPoJuiz;

function JokenPoGame() {
  const jogador1 = 'Pedra';
  const jogador2 = 'Tesoura';

  return jokenPoJuiz.verificar(jogador1, jogador2);
}

console.log(JokenPoGame());