import { Jogador } from './Jogadores'

describe('Jogador', () => {
    test("Verificar Jogada Pedra", () => {
        const jogador1 = new Jogador();
        expect(jogador1.jogadasValidas.includes('Pedra')).toEqual(true);
    });

    test("Verificar Jogada Papel", () => {
      const jogador1 = new Jogador();
      expect(jogador1.jogadasValidas.includes("Papel")).toEqual(true);
    });

    test("Verificar Jogada Tesoura", () => {
      const jogador1 = new Jogador();
      expect(jogador1.jogadasValidas.includes("Tesoura")).toEqual(true);
    });

    test("Verificar Jogada Invalida", () => {
      const jogador1 = new Jogador();
      expect(jogador1.jogadasValidas.includes("Pedrinha")).toEqual(false);
    });
})