import JokenPoJuiz from './JokenPoJuiz'

describe('JokenPo', () => {
  const jokenPoJuiz = new JokenPoJuiz(['Pedra', 'Papel', 'Tesoura']);
  describe('Juiz', () => {

    test('vericar empate entre dois jogadores', () => {
      const jogador1 = 'Tesoura';
      const jogador2 = jogador1;
      const jokenPoJuiz = new JokenPoJuiz(['Pedra', 'Papel', 'Tesoura']);
      const resultado = jokenPoJuiz.verificar(jogador1, jogador2);
      expect(resultado).toEqual('Empate');
    });

    test('não é uma jogada inválida', () => {
      //@ts-ignore
      expect(() => jokenPoJuiz.verificar('Lagarto', 'Papel')).toThrowError(new Error(`Lagarto não é uma jogada válida`))
      //@ts-ignore
      expect(() => jokenPoJuiz.verificar('Pedra', 'Spock')).toThrowError(new Error(`Spock não é uma jogada válida`))
      //@ts-ignore
      expect(() => jokenPoJuiz.verificar('Lagarto', 'Spock')).toThrowError(new Error(`Lagarto e Spock não são jogadas válidas`))
    })

    test('Pedra ganha de Tesoura', () => {
      const jogador1 = 'Pedra';
      const jogador2 = 'Tesoura';
      const resultado1 = jokenPoJuiz.verificar(jogador1, jogador2);
      expect(resultado1).toEqual('Pedra ganhou');
      const jogador3 = 'Tesoura';
      const jogador4 = 'Pedra';
      const resultado2 = jokenPoJuiz.verificar(jogador3, jogador4);
      expect(resultado2).toEqual('Pedra ganhou');
    })

    test('Tesoura ganha de papel', () => {
      const jogador1 = 'Papel';
      const jogador2 = 'Tesoura';
      const resultado1 = jokenPoJuiz.verificar(jogador1, jogador2);
      expect(resultado1).toEqual('Tesoura ganhou');
      const jogador3 = 'Tesoura';
      const jogador4 = 'Papel';
      const resultado2 = jokenPoJuiz.verificar(jogador3, jogador4);
      expect(resultado2).toEqual('Tesoura ganhou');
    })

    test('Papel ganha de pedra', () => {
      const jogador1 = 'Pedra';
      const jogador2 = 'Papel';
      const resultado1 = jokenPoJuiz.verificar(jogador1, jogador2);
      expect(resultado1).toEqual('Papel ganhou');
      const jogador3 = 'Papel';
      const jogador4 = 'Pedra';
      const resultado2 = jokenPoJuiz.verificar(jogador3, jogador4);
      expect(resultado2).toEqual('Papel ganhou');
    })

  })
})

// Jokenpo é uma brincadeira japonesa, onde dois jogadores escolhem um dentre três possíveis itens: Pedra, Papel ou Tesoura.

// O objetivo é fazer um juiz de Jokenpo que dada a jogada dos dois jogadores informa o resultado da partida.

// As regras são as seguintes:

// Pedra empata com Pedra e ganha de Tesoura
// Tesoura empata com Tesoura e ganha de Papel
// Papel empata com Papel e ganha de Pedra
