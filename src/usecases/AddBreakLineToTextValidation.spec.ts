import {AddBreakLineToTextValidation} from './AddBreakLineToTextValidation'

const makeSut = (): AddBreakLineToTextValidation => new AddBreakLineToTextValidation()

describe('AddBreakLineToTextValidation', () => {
  test('Retorna erro com uma frase vazia', () => {
    const frase = '';
    const colunas = 20;
    const addBreakLineToTextValidation = makeSut()
    expect(() => {addBreakLineToTextValidation.validate(frase, colunas)}).toThrow(new Error('A frase deve conter ao menos um caractere'));
  });

  test('Retorna erro quando colunas for menor que 1', () => {
    const frase = 'teste um dois tres';
    const colunas = 0;
    const addBreakLineToTextValidation = makeSut()
    expect(() => {addBreakLineToTextValidation.validate(frase, colunas)}).toThrow(new Error('A quantidade de coluna deve ser maior do que zero'));
  });

  test('Retorna erro quanto o numero de colunas nao for um inteiro', () => {
    const frase = 'teste um dois tres';
    const colunas = 12.2;
    const addBreakLineToTextValidation = makeSut()
    expect(() => {addBreakLineToTextValidation.validate(frase, colunas)}).toThrow(new Error('A quantidade de coluna deve ser um inteiro'));
  });

  test('Não retorna erro se os valores estiverem corretos', () => {
    const frase = 'teste um dois tres';
    const colunas = 12;
    const addBreakLineToTextValidation = makeSut()
    expect(() => {addBreakLineToTextValidation.validate(frase, colunas)}).not.toThrow();
  });
});