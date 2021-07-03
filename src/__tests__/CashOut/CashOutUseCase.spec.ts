import {cashOut} from '../../usecases/CashOutUseCase/CashOutUseCase'

describe('Teste Caixa Eletronico Dojo', () => {

    test('Should return 10 when withdrawing 10.', () => {
        const VALUE_TO_WITHDRAW = 10;
        const withdrawnValue = cashOut(VALUE_TO_WITHDRAW);
        expect(withdrawnValue).toEqual(10);
    });

    test('verifica se valor passado é multiplo de 10', () => {
        const VALUE_TO_WITHDRAW = 15;
        const withdrawnValue = cashOut(VALUE_TO_WITHDRAW);
        expect(withdrawnValue).toEqual('Ná há notas disponíveis para o valor informado.')
    })

    test('dado que valor passado 110 deve retornar 1 nota de 100 e uma de 10', () => {
        const VALUE_TO_WITHDRAW = 110;
        const withdrawnValue = cashOut(VALUE_TO_WITHDRAW);
        expect(withdrawnValue).toEqual('Entregar 1 nota de R$100,00 e 1 nota de R$ 10,00.')
    })

})
