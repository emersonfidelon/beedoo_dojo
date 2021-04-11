import { ConversorDeNumeroRomano } from './ConversorDeNumeroRomano'

describe('ConversorDeNumeroRomano Testes', () => {
  test('Deve retornar 1 para algarismo romano I', () => {
    
    const romano = new ConversorDeNumeroRomano().converter("I");

    expect(romano).toBe(1);
  });
});