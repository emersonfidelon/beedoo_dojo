import {caixaEletronico} from './CaixaEletronico'

describe('Teste Caixa Eletronico Dojo', () => {

    test('ao sacar 10 deve retornar 10', () => {
        const VALOR_SAQUE = 10;
        const sacado = caixaEletronico(VALOR_SAQUE);
        expect(sacado).toEqual('Entregar 1 nota de R$10,00.');
    });
    
    test('verifica se valor passado é multiplo de 10', () => {
        const VALOR_SAQUE = 15;
        const sacado = caixaEletronico(VALOR_SAQUE);
        expect(sacado).toEqual('Ná há notas disponíveis para o valor informado.')
    })
    
    test('verifica se o saque negativo é bloqueado', () => {
        const VALOR_SAQUE = -10;
        const sacado = caixaEletronico(VALOR_SAQUE);
        expect(sacado).toEqual('Não é possível sacar um valor negativo.')
    })

    test('dado que valor passado 110 deve retornar 1 nota de 100 e uma de 10', () => {
        const VALOR_SAQUE = 110;
        const sacado = caixaEletronico(VALOR_SAQUE);
        expect(sacado).toEqual('Entregar 1 nota de R$100,00 e 1 nota de R$10,00.')
    })

    test('dado que valor passado 380 deve retornar 2 notas de 100, 3 nota de 50, uma nota de 20 e uma de 10', () => {
        const VALOR_SAQUE = 380;
        const sacado = caixaEletronico(VALOR_SAQUE);
        expect(sacado).toEqual('Entregar 2 notas de R$100,00, 3 notas de R$50,00, 1 nota de R$20,00 e 1 nota de R$10,00.')
    })

})