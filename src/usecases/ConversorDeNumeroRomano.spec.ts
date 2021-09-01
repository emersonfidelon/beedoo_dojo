import { ConversorDeNumeroRomano } from './ConversorDeNumeroRomano'

describe('ConversorDeNumeroRomano Testes', () => {
  test('Deve retornar 1 para algarismo romano I', () => {
    const algarismoRomano:String = "I";
    const romano = new ConversorDeNumeroRomano().converter(algarismoRomano);

    expect(romano).toBe(1);
  });
  test('Deve retornar 5 para algarismo romano V', () => {
    const algarismoRomano:String = "V";
    const romano = new ConversorDeNumeroRomano().converter(algarismoRomano);

    expect(romano).toBe(5);
  });
});