import JokenPoJuiz from './JokenPoJuiz'

const jokenPoJuiz = new JokenPoJuiz();

describe('JokenPo', () => {
  test('vericar empate entre dois jogadores', () => {
    const jogador1 = 'Tesoura';
    const jogador2 = jogador1;
    expect(jokenPoJuiz.verificar(jogador1, jogador2)).toEqual('Empate');
  });

  test('não é uma jogada inválida', () => {
    const jogador1 = 'asdf';
    const jogador2 = 'Pedra';
    expect(jokenPoJuiz.verificar(jogador1, jogador2)).toEqual('Jogada Inválida');
  })

  test('Pedra ganha de Tesoura', () => {
    const jogador1 = 'Pedra';
    const jogador2 = 'Tesoura';
    expect(jokenPoJuiz.verificar(jogador1, jogador2)).toEqual('Pedra ganhou');
    expect(jokenPoJuiz.verificar(jogador2, jogador1)).toEqual('Pedra ganhou');
  })

  test('Tesoura ganha de papel', () => {
    const jogador1 = 'Papel';
    const jogador2 = 'Tesoura';
    expect(jokenPoJuiz.verificar(jogador1, jogador2)).toEqual('Tesoura ganhou');
    expect(jokenPoJuiz.verificar(jogador2, jogador1)).toEqual('Tesoura ganhou');
  })

  test('Papel ganha de pedra', () => {
    const jogador1 = 'Pedra';
    const jogador2 = 'Papel';
    expect(jokenPoJuiz.verificar(jogador1, jogador2)).toEqual('Papel ganhou');
    expect(jokenPoJuiz.verificar(jogador2, jogador1)).toEqual('Papel ganhou');
  })

})

// Jokenpo é uma brincadeira japonesa, onde dois jogadores escolhem um dentre três possíveis itens: Pedra, Papel ou Tesoura.

// O objetivo é fazer um juiz de Jokenpo que dada a jogada dos dois jogadores informa o resultado da partida.

// As regras são as seguintes:

// Pedra empata com Pedra e ganha de Tesoura
// Tesoura empata com Tesoura e ganha de Papel
// Papel empata com Papel e ganha de Pedra
