import {caixaEletronico} from './CaixaEletronico'

describe('Teste Caixa Eletronico Dojo', () => {

    test('ao sacar 10 deve retornar 10', () => {
        const VALOR_SAQUE = 10;
        const sacado = caixaEletronico(VALOR_SAQUE);
        expect(sacado).toEqual('Entregar 1 nota de R$10,00');
    });

    test('verifica se valor passado é multiplo de 10', () => {
        const VALOR_SAQUE = 15;
        const sacado = caixaEletronico(VALOR_SAQUE);
        expect(sacado).toEqual('Ná há notas disponíveis para o valor informado.')
    })

    test('dado que valor passado 110 deve retornar 1 nota de 100 e uma de 10', () => {
        const VALOR_SAQUE = 110;
        const sacado = caixaEletronico(VALOR_SAQUE);
        expect(sacado).toEqual('Entregar 1 nota de R$100,00 e 1 nota de R$ 10,00.')
    })

    test('dado que valor passado 180 deve retornar 1 nota de 100, 1 de 50, 1 de 20 e 1 de 10', () => {
        const VALOR_SAQUE = 180;
        const sacado = caixaEletronico(VALOR_SAQUE);
        expect(sacado).toEqual('Entregar 1 nota de R$100,00, 1 nota de R$ 50,00, 1 nota de R$ 20,00, 1 nota de R$ 10,00.')
    })

    test('dado que valor passado 460 deve retornar 4 notas de 100, 1 de 50, 1 de 10', () => {
        const VALOR_SAQUE = 460;
        const sacado = caixaEletronico(VALOR_SAQUE);
        expect(sacado).toEqual('Entregar 4 notas de R$100,00, 1 nota de R$ 50,00 e 1 nota de R$ 10,00')
    })

})
