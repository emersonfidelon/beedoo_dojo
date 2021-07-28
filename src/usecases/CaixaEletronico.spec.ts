'strict'

import {CaixaEletronico} from './CaixaEletronico'

let caixa_eletronico: CaixaEletronico;
describe('Teste Caixa Eletronico Dojo', () => {

    beforeEach(() => {
        caixa_eletronico = new CaixaEletronico();
      });

    test('ao sacar 10 deve retornar 10', async () => {
        const VALOR_SAQUE = 10;
        const sacado = await caixa_eletronico.sacar(VALOR_SAQUE);
        expect(sacado).toEqual(10);
    });

    test('verifica se valor passado é multiplo de 10', async () => {
        const VALOR_SAQUE = 15;
        const sacado = await caixa_eletronico.sacar(VALOR_SAQUE);
        expect(sacado).toEqual('Ná há notas disponíveis para o valor informado.')
    })

    test('dado que valor passado 110 deve retornar 1 nota de 100 e uma de 10', async () => {
        const VALOR_SAQUE = 110;
        const sacado = await caixa_eletronico.sacar(VALOR_SAQUE);
        expect(sacado).toEqual('Entregar 1 nota de R$100,00 - 1 nota de R$10,00')
    })

    test('dado que valor passado 230 deve retornar 2 notas de 100 1 de 20 e uma de 10', async () => {
        const VALOR_SAQUE = 230;
        const sacado = await caixa_eletronico.sacar(VALOR_SAQUE);
        expect(sacado).toEqual('Entregar 2 notas de R$100,00 - 1 nota de R$20,00 - 1 nota de R$10,00')
    })

    test('dado que valor passado 270 deve retornar 2 nota de 100, 1 nota de 50 e uma de 20', async () => {
        const VALOR_SAQUE = 270;
        const sacado = await caixa_eletronico.sacar(VALOR_SAQUE);
        expect(sacado).toEqual('Entregar 2 notas de R$100,00 - 1 nota de R$50,00 - 1 nota de R$20,00')
    })

})
