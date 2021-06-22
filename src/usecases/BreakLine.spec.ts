import { BreakLine } from "./BreakLine";

describe('Break Line', () => {
  let quebraDeLinhas;
  let frasesComQuebraDeLinha;

  test('Verifica se a entrada esta correta', () => {
    const frase = 'teste um dois tres';
    const colunas = 20;
    const quebraDeLinhas = new BreakLine(frase, colunas); 
    expect(quebraDeLinhas).toBeInstanceOf(BreakLine);
  });

  test('Retorna erro com uma frase vazia', () => {
    const frase = '';
    const colunas = 20;
    expect(() => {new BreakLine(frase, colunas)}).toThrow(new Error('A frase deve conter ao menos um caractere'));
  });

  test('Retorna erro quando colunas for menor que 1', () => {
    const frase = 'teste um dois tres';
    const colunas = 0;
    expect(() => {new BreakLine(frase, colunas)}).toThrow(new Error('A quantidade de coluna deve ser maior do que zero'));
  });

  test('Retorna erro quanto o numero de colunas nao for um inteiro', () => {
    const frase = 'teste um dois tres';
    const colunas = 12.2;
    expect(() => {new BreakLine(frase, colunas)}).toThrow(new Error('A quantidade de coluna deve ser um inteiro'));
  });

  test('Número de linhas deve ser igual a 3', () => {
    const frase = 'Um pequeno jabuti xereta viu dez cegonhas felizes.';
    const colunas = 20;
    const breakLine = new BreakLine(frase, colunas)
    const linhas = breakLine.handle().split(/\r\n|\r|\n/)
    expect(linhas.length).toBe(3)
  })

  test('Número de linhas deve ser igual a 4', () => {
    const frase = 'Gostaria de saber se deseja um café..';
    const colunas = 12;
    const breakLine = new BreakLine(frase, colunas)
    const linhas = breakLine.handle().split(/\r\n|\r|\n/)
    expect(linhas.length).toBe(4)
  })

  test('Número de linhas deve ser igual a 2', () => {
    const frase = 'Muita sorte para a nova etapa!';
    const colunas = 18;
    const breakLine = new BreakLine(frase, colunas)
    const linhas = breakLine.handle().split(/\r\n|\r|\n/)
    expect(linhas.length).toBe(2)
  })
  
  test.each([[`um cinco`, 10],[`frase um`, 8]]
  )(`Valida se a frase %p contem menos que %p colunas`, (firstArg, expectedResult) => {
    expect(firstArg.length).toBeLessThanOrEqual(expectedResult);
  });

})

// Escreva um programa em que dado uma frase e a quantidade de colunas que podem ser exibidas na tela, faça a quebra de linhas sem quebrar as palavras.

// Por exemplo, se passarmos a frase "Um pequeno jabuti xereta viu dez cegonhas felizes." e pedirmos para ela ser exibida em 20 colunas, teremos como resposta:

// Um pequeno jabuti

// xereta viu dez

// cegonhas felizes.