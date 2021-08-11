import {caixaEletronico} from './CaixaEletronico'

describe('Teste Caixa Eletronico Dojo', () => {

    test('ao sacar 10 deve retornar 10', () => {
        const VALOR_SAQUE = 10;
        const sacado = caixaEletronico(VALOR_SAQUE);
        expect(sacado).toEqual('Entregar 1 nota de:10 ');
    });

    test('verifica se valor passado é multiplo de 10', () => {
        const VALOR_SAQUE = 15;
        const sacado = caixaEletronico(VALOR_SAQUE);
        expect(sacado).toEqual('Ná há notas disponíveis para o valor informado.')
    })

    test('dado que valor passado 110 deve retornar 1 nota de 100 e uma de 10', () => {
        const VALOR_SAQUE = 110;
        const sacado = caixaEletronico(VALOR_SAQUE);
        console.log(sacado)
        expect(sacado).toEqual('Entregar 1 nota de:100 1 nota de:10')
    })

})
