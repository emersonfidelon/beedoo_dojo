import { escreverFrase } from './EscreverFrase'

describe('Teste Caixa Eletronico Dojo', () => {
    test('dado que valor passado 110 deve retornar 1 nota de 100 e uma de 10', () => {
        const notas = [
          { valor: 100, quantidade: 1 },
          { valor: 50, quantidade: 0 },
          { valor: 20, quantidade: 1 },
          { valor: 10, quantidade: 1 }
        ];
        const sacado = escreverFrase(notas);
        expect(sacado).toEqual('Entregar 1 nota de R$100,00 e 1 nota de R$20,00 e 1 nota de R$10,00.')
    })

})
