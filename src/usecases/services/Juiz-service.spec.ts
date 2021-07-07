import { JuizService } from "./Juiz-service";

describe("Juiz", () => {
  test("Retornar Jogada Pedra Ganhou", () => {
    const juiz = new JuizService();
    expect(juiz.parecer("Pedra", "Tesoura")).toEqual(
      "Pedra ganhou"
    );
  });

  test("Retornar Jogada Papel Ganhou", () => {
    const juiz = new JuizService();
    expect(juiz.parecer("Papel", "Pedra")).toEqual(
      "Papel ganhou"
    );
  });

  test("Retonar Jogada Tesoura ganhou", () => {
    const juiz = new JuizService();
    expect(juiz.parecer("Tesoura", "Papel")).toEqual(
      "Tesoura ganhou"
    );
  });

  test("Retonar Jogada inválida", () => {
    const juiz = new JuizService();
    expect(juiz.parecer("asd", "Papel")).toEqual(
      "Jogada Inválida"
    );
  });

  test("Retonar Empate", () => {
    const juiz = new JuizService();
    expect(juiz.parecer("Papel", "Papel")).toEqual("Empate");
  });
});
