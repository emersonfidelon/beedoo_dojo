import {caixaEletronico} from './CaixaEletronico'

describe('Teste Caixa Eletronico Dojo', () => {

    test('verifica se o valor de saque é maior que zero', () => {
        const VALOR_SAQUE = 0;
        const sacado = caixaEletronico(VALOR_SAQUE);

        expect(sacado).toEqual('Valor de saque precisa ser maior que 0')
    })

    test('ao sacar 10 deve retornar 10', () => {
        const VALOR_SAQUE = 10;
        const sacado = caixaEletronico(VALOR_SAQUE);
        expect(sacado).toEqual(10);
    });

    test('verifica se valor passado é multiplo de 10', () => {
        const VALOR_SAQUE = 15;
        const sacado = caixaEletronico(VALOR_SAQUE);
        expect(sacado).toEqual('Ná há notas disponíveis para o valor informado.')
    })

    test('dado que valor passado é 110, deve ser retornado 1 nota de 100 e uma de 10', () => {
        const VALOR_SAQUE = 110;
        const sacado = caixaEletronico(VALOR_SAQUE);
        expect(sacado).toEqual('Entregar 1 nota de R$ 100,00 e 1 nota de R$ 10,00.')
    })

})
