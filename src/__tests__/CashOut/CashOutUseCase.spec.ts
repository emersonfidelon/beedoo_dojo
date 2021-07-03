import CashOutUseCase from "../../usecases/CashOutUseCase/CashOutUseCase";

describe("CashOutUseCase", () => {

   const cashOutUseCase = new CashOutUseCase()

    test('Should return 10 when withdrawing 10.', () => {

        const valueToWithDraw = 10;
        const withdrawActionResult = cashOutUseCase.execute(valueToWithDraw);

        expect(withdrawActionResult).toEqual('Entregar 1 nota de R$ 10,00.');
    });

    test('verifica se valor passado é multiplo de 10', () => {

        const valueToWithDraw = 15;
        const withdrawActionResult = cashOutUseCase.execute(valueToWithDraw);

        expect(withdrawActionResult).toEqual('Não há notas disponíveis para o valor informado.')
    })

    test('dado que valor passado 110 deve retornar 1 nota de 100 e uma de 10', () => {

        const valueToWithDraw = 110;
        const withdrawActionResult = cashOutUseCase.execute(valueToWithDraw);
        
        expect(withdrawActionResult).toEqual('Entregar 1 nota de R$100,00 e 1 nota de R$ 10,00.')
    })
});
