import JokenPoJuiz from './JokenPoJuiz'

const jokenPoJuiz = new JokenPoJuiz();
describe('JokenPoJuiz', () => {

  test('vericar empate entre dois jogadores', () => {
    const jogador1 = 'Tesoura';
    const jogador2 = jogador1;
    const resultado = jokenPoJuiz.verificar(jogador1, jogador2);
    expect(resultado).toEqual('Empate');
  });
  
  test('não é uma jogada inválida', () => {
    const jogador1 = 'asdf';
    const jogador2 = jogador1;
    const resultado = jokenPoJuiz.verificar(jogador1, jogador2);
    expect(resultado).toEqual('Jogada Inválida');
  })
  
  test('Pedra ganha de Tesoura', () => {
    const jogador1 = 'Pedra';
    const jogador2 = 'Tesoura';
    const resultado1 = jokenPoJuiz.verificar(jogador1, jogador2);
    expect(resultado1).toEqual('Pedra ganhou');
    const resultado2 = jokenPoJuiz.verificar(jogador2, jogador1);
    expect(resultado2).toEqual('Pedra ganhou');
  })

  test('Tesoura ganha de papel', () => {
    const jogador1 = 'Papel';
    const jogador2 = 'Tesoura';
    const resultado1 = jokenPoJuiz.verificar(jogador1, jogador2);
    expect(resultado1).toEqual('Tesoura ganhou');
    const resultado2 = jokenPoJuiz.verificar(jogador2, jogador1);
    expect(resultado2).toEqual('Tesoura ganhou');
  })

  test('Papel ganha de pedra', () => {
    const jogador1 = 'Pedra';
    const jogador2 = 'Papel';
    const resultado1 = jokenPoJuiz.verificar(jogador1, jogador2);
    expect(resultado1).toEqual('Papel ganhou');
    const resultado2 = jokenPoJuiz.verificar(jogador2, jogador1);
    expect(resultado2).toEqual('Papel ganhou');
  })
})
// Jokenpo é uma brincadeira japonesa, onde dois jogadores escolhem um dentre três possíveis itens: Pedra, Papel ou Tesoura.

// O objetivo é fazer um juiz de Jokenpo que dada a jogada dos dois jogadores informa o resultado da partida.

// As regras são as seguintes:

// Pedra empata com Pedra e ganha de Tesoura
// Tesoura empata com Tesoura e ganha de Papel
// Papel empata com Papel e ganha de Pedra
