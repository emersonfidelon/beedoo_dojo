import { Tenis } from './Tenis';

const game = new Tenis();

describe('', () => {

    test('O jogo deve começar com o placar 0 - 0', () => {
        expect(game.displayPlacar()).toEqual('0 - 0')
    })

    test('Testa jogador 1 com zero pontos marca ponto deve ficar com 15', () => {
        game.pontuar('jogador1');
        expect(game.displayPlacar()).toEqual('15 - 0')
    })

    test('Deve retornar vantagem para o jogador', () => {
        game.definirPlacar('40 - 40');
        game.pontuar('jogador2');
        expect(game.displayPlacar()).toEqual('ADVANTAGE JOGADOR 2');
    })

    test('Deve retornar empate se der empate (40 pontos)', () => {
        game.definirPlacar('40 - 30');
        game.pontuar('jogador2');
        expect(game.displayPlacar()).toEqual('DEUCE');
    })

    test('Deve retornar o jogador 1 vencedor', () => {
        game.definirPlacar('40 - 40');
        game.pontuar('jogador1');
        game.pontuar('jogador1');
        expect(game.displayPlacar()).toEqual('JOGADOR 1 VENCEU');
    })

    test('Verifica se o placar é válido', () => {
        game.definirPlacar('0 - 0');
        expect(game.displayPlacar()).toEqual('0 - 0');

        game.definirPlacar('15 - 0');
        expect(game.displayPlacar()).toEqual('15 - 0');

        game.definirPlacar('30 - 15');
        expect(game.displayPlacar()).toEqual('30 - 15');

        game.definirPlacar('40 - 30');
        expect(game.displayPlacar()).toEqual('40 - 30');

        game.definirPlacar('banana');
        expect(game.displayPlacar()).toEqual('0 - 0');
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
// Se um jogador estiver em vantagem e o outro ganhar a bola, volta a ocorrer o empta (deuce) ADVANTAGE.