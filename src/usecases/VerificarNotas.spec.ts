import { verificarNotas } from './VerificarNotas'

describe('Teste Caixa Eletronico Dojo', () => {

    test('ao sacar 480 deve retornar 4 de 100, 1 de 50, 1 de 20 e 1 de 10', () => {
        const VALOR_SAQUE = 480;
        const NOTAS_DISPONIVEIS = [100, 50, 20, 10];
        const notas = verificarNotas(NOTAS_DISPONIVEIS, VALOR_SAQUE);
        expect(notas).toEqual([
          { valor: 100, quantidade: 4 },
          { valor: 50, quantidade: 1 },
          { valor: 20, quantidade: 1 },
          { valor: 10, quantidade: 1 }
        ]);
    });
})
