import { caixaEletronico } from "./CaixaEletronico";

describe("Teste Caixa Eletronico Dojo", () => {
  test("ao sacar 5 deve retornar não há notas disponíveis", () => {
    const VALOR_SAQUE = 5;
    const sacado = caixaEletronico(VALOR_SAQUE);
    expect(sacado).toEqual("Não há notas disponíveis para o valor informado.");
  });

  test("ao sacar 10 deve retornar 10", () => {
    const VALOR_SAQUE = 10;
    const sacado = caixaEletronico(VALOR_SAQUE);
    expect(sacado).toEqual(10);
  });

  test("dado que valor passado 110 deve retornar 1 nota de 100 e uma de 10", () => {
    const VALOR_SAQUE = 110;
    const sacado = caixaEletronico(VALOR_SAQUE);
    expect(sacado).toEqual(
      "Entregar 1 nota(s) de R$100,00 e 1 nota(s) de R$ 10,00."
    );
  });
  test("ao sacar 105 deve retornar que ainda restam valores do seu saque por falta de notas disponiveis", () => {
    const VALOR_SAQUE = 105;
    const sacado = caixaEletronico(VALOR_SAQUE);
    expect(sacado).toEqual(
      "Entregar 1 nota(s) de R$100,00, Ainda restaram R$5,00 na sua conta"
    );
  });
});
