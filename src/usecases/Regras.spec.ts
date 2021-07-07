import { Regras } from "./regras";
  describe("Regras", () => {
    test("vericar empate entre dois jogadores", () => {
      const jogada1 = 'Pedra'
      const jogada2 = 'Pedra'
      const resultado = Regras(jogada1, jogada2);
      expect(resultado).toEqual("Empate");
    });

    test("vericar jogada inválida", () => {
      const jogada1 = "Pedrinha";
      const jogada2 = "Pedra";
      const resultado = Regras(jogada1, jogada2);
      expect(resultado).toEqual("Jogada Inválida");
    });

    test("Pedra Ganha", () => {
      const jogada1 = "Pedra";
      const jogada2 = "Tesoura";
      const resultado = Regras(jogada1, jogada2);
      expect(resultado).toEqual("Pedra ganhou");
      const jogada3 = "Tesoura";
      const jogada4 = "Pedra";
      const resultado2 = Regras(jogada3, jogada4);
      expect(resultado2).toEqual("Pedra ganhou");
    });

    test("Papel Ganha", () => {
      const jogada1 = "Papel";
      const jogada2 = "Pedra";
      const resultado = Regras(jogada1, jogada2);
      expect(resultado).toEqual("Papel ganhou");
      const jogada3 = "Pedra";
      const jogada4 = "Papel";
      const resultado2 = Regras(jogada3, jogada4);
      expect(resultado2).toEqual("Papel ganhou");
    });

    test("Tesoura Ganha", () => {
      const jogada1 = "Tesoura";
      const jogada2 = "Papel";
      const resultado = Regras(jogada1, jogada2);
      expect(resultado).toEqual("Tesoura ganhou");
      const jogada3 = "Papel";
      const jogada4 = "Tesoura";
      const resultado2 = Regras(jogada3, jogada4);
      expect(resultado2).toEqual("Tesoura ganhou");
    });
  });

