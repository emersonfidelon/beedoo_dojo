import CashOutUseCase from "../../usecases/CashOutUseCase/CashOutUseCase";

describe("CashOutUseCase", () => {

   const cashOutUseCase = new CashOutUseCase()

    test('Deve retornar 1 nota de R$ 10 quando estiver sacando  10.', () => {

        const valueToWithdraw = 10;
        const withdrawActionResult = cashOutUseCase.execute(valueToWithdraw);

        expect(withdrawActionResult).toEqual('Entregar 1 nota de R$ 10,00.');
    });

    test('verifica se valor passado é multiplo de 10', () => {

        const valueToWithdraw = 15;

        expect(()=>cashOutUseCase.execute(valueToWithdraw)).toThrow('Não há notas disponíveis para o valor informado.')
    })

    test('dado que valor passado 110 deve retornar 1 notas de 100 e uma de 10', () => {

        const valueToWithDraw = 110;
        const withdrawActionResult = cashOutUseCase.execute(valueToWithDraw);
        
        expect(withdrawActionResult).toEqual('Entregar 1 nota de R$ 100,00 e 1 nota de R$ 10,00.')
    })

    test('dado que valor passado 410 deve retornar 4 notas de 100 e uma de 10', () => {

        const valueToWithDraw = 410;
        const withdrawActionResult = cashOutUseCase.execute(valueToWithDraw);

        expect(withdrawActionResult).toEqual('Entregar 4 notas de R$ 100,00 e 1 nota de R$ 10,00.')
        
    })
});
