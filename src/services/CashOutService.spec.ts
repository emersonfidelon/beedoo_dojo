import CashOutService from "./CashOutService";

describe("CashOutService", () => {
  test("ao sacar 10 deve retornar 10", () => {
    const cashOutService = new CashOutService();

    const WITHDRAWAL_VALUE = 10;
    const drawn = cashOutService.execute(WITHDRAWAL_VALUE);
    expect(drawn).toEqual(10);
  });

  test("verifica se valor passado é multiplo de 10", () => {
    const cashOutService = new CashOutService();
    const WITHDRAWAL_VALUE = 15;
    const drawn = cashOutService.execute(WITHDRAWAL_VALUE);
    expect(drawn).toEqual("Ná há notas disponíveis para o valor informado.");
  });

  test("dado que valor passado 110 deve retornar 1 nota de 100 e uma de 10", () => {
    const cashOutService = new CashOutService();

    const WITHDRAWAL_VALUE = 110;
    const drawn = cashOutService.execute(WITHDRAWAL_VALUE);
    expect(drawn).toEqual("Entregar 1 nota de R$100,00 e 1 nota de R$ 10,00.");
  });
});
