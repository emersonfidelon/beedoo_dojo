import {caixaEletronico} from './CaixaEletronico'
import CurrencyFormatter from '../formatters/Currency';

describe('Teste Caixa Eletronico Dojo', () => {

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

    test('dado que valor passado 110 deve retornar 1 nota de 100 e uma de 10', () => {
        const VALOR_SAQUE = 110;
        const sacado = caixaEletronico(VALOR_SAQUE);
        expect(sacado).toEqual(`Entregar 1 nota de ${CurrencyFormatter.format(100)} e 1 nota de ${CurrencyFormatter.format(10)}.`)
    })

    test('dado que valor passado 280 deve retornar 2 notas de 100, uma de 50, uma nota de 20 e 1 nota de 10', () => {
        const VALOR_SAQUE = 280;
        const sacado = caixaEletronico(VALOR_SAQUE);
        expect(sacado).toEqual(`Entregar 2 notas de ${CurrencyFormatter.format(100)}, 1 nota de ${CurrencyFormatter.format(50)}, 1 nota de ${CurrencyFormatter.format(20)} e 1 nota de ${CurrencyFormatter.format(10)}.`)
    })

    test('dado que valor passado 90 deve retornar 1 nota de 50, e duas notas de 20', () => {
        const VALOR_SAQUE = 90;
        const sacado = caixaEletronico(VALOR_SAQUE);
        expect(sacado).toEqual(`Entregar 1 nota de ${CurrencyFormatter.format(50)} e 2 notas de ${CurrencyFormatter.format(20)}.`)
    })

})
