import CashOutService from "./CashOutService";

describe("CashOutService", () => {
  test("When withdrawing, 10 must return 10", () => {
    const cashOutService = new CashOutService();

    const WITHDRAWAL_VALUE = 10;
    const drawn = cashOutService.execute(WITHDRAWAL_VALUE);
    expect(drawn).toEqual(10);
  });

  test("Check if value entered is multiple of 10", () => {
    const cashOutService = new CashOutService();
    const WITHDRAWAL_VALUE = 15;
    const drawn = cashOutService.execute(WITHDRAWAL_VALUE);
    expect(drawn).toEqual("Não há notas disponíveis para o valor informado.");
  });

  test("Given that the entered value 110 should return 1 note of 100 and one of 10", () => {
    const cashOutService = new CashOutService();

    const WITHDRAWAL_VALUE = 110;
    const drawn = cashOutService.execute(WITHDRAWAL_VALUE);
    expect(drawn).toEqual("Entregar 1 nota de R$100,00 e 1 nota de R$ 10,00.");
  });
});
