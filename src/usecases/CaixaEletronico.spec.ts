import {caixaEletronico} from './CaixaEletronico'

describe('Teste Caixa Eletronico Dojo', () => {

    test('dado que valor passado -10 deve retornar que o valor é inválido', () => {
        const VALOR_SAQUE = -10;
        const sacado = caixaEletronico(VALOR_SAQUE);
        expect(sacado).toEqual('Valor inválido.');
    })

    test('verifica se valor passado é multiplo de 10', () => {
        const VALOR_SAQUE = 15;
        const sacado = caixaEletronico(VALOR_SAQUE);
        expect(sacado).toEqual('Ná há notas disponíveis para o valor informado.')
    })

    test('ao sacar 10 deve retornar 10', () => {
        const VALOR_SAQUE = 10;
        const sacado = caixaEletronico(VALOR_SAQUE);
        expect(sacado).toEqual(`Entregar 1 nota de R$ 10,00.`);
    });

    test('dado que valor passado 110 deve retornar 1 nota de 100 e uma de 10', () => {
        const VALOR_SAQUE = 110;
        const sacado = caixaEletronico(VALOR_SAQUE);
        expect(sacado).toEqual('Entregar 1 nota de R$ 100,00 e 1 nota de R$ 10,00.');
    })

    test('dado que valor passado 380 deve retornar uma combinação de notas de 100, 50, 20, 10', () => {
        const VALOR_SAQUE = 380;
        const sacado = caixaEletronico(VALOR_SAQUE);
        expect(sacado).toEqual('Entregar 3 notas de R$ 100,00 e 1 nota de R$ 50,00 e 1 nota de R$ 20,00 e 1 nota de R$ 10,00.');
    })
})
