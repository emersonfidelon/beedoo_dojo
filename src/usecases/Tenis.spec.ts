import {Tenis} from './Tenis';

describe('', () => {

    test('Testa jogador 1 com zero pontos marca ponto deve ficar com 15', () => {
        const jogador1 = 0;
        const pontuacaoEsperada = 15;
        const game = new Tenis();
        
        game.pontuar(jogador1);
        
        const [placar] = game.placar;
        expect(pontuacaoEsperada).toEqual( placar)
        
    })

    test('Deve retornar empate se der empate (40 pontos)', () => {
        const jogador1 = 0;
        const jogador2 = 1;
        const pontuacaoEsperada = 40;
        const game = new Tenis();
        game.pontuar(jogador1);     
        expect(pontuacaoEsperada).toEqual('deuce');
    })

})


// As regras de um jogo de tênis tem diversos detalhes, mas para simplificar o problema, 
// você deve implementar apenas as regras de um game:

// Em uma game cada jogador pode ter a seguinte pontuação: 0, 15, 30, ou 40;
// Os jogadores sempre começam com 0 pontos;
// Se o jogador possui 40 pontos e ganha a disputa, ele vence o game;
// Se ambos jogadores atingem 40 pontos, ocorre um empate (deuce);
// Estando em empate, o jogador que ganhar a bola seguinte está em vantagem (advantage);
// Se um jogador em vantagem ganha novamente a bola, ele vence o game;
// Se um jogador estiver em vantagem e o outro ganhar a bola, volta a ocorrer o empta (deuce).