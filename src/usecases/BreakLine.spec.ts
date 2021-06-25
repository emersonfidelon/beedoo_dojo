import { BreakLine } from "./BreakLine";

describe('Break Line', () => {
  let quebraDeLinhas;
  let frasesComQuebraDeLinha;

  test('Verifica se a entrada esta correta', () => {
    const frase = 'teste um dois tres';
    const colunas = 20;
    const quebraDeLinhas = new BreakLine({
      colunas,
      frase
    });
    expect(quebraDeLinhas).toBeInstanceOf(BreakLine);
  });

  test('Retorna erro com uma frase vazia', () => {
    const frase = '';
    const colunas = 20;
    expect(() => {
      new BreakLine({
        colunas,
        frase
      })
    }).toThrow(new Error('A frase deve conter ao menos um caractere'));
  });

  test('Retorna erro quando colunas for menor que 1', () => {
    const frase = 'teste um dois tres';
    const colunas = 0;
    expect(() => {
      new BreakLine({
        colunas,
        frase
      })
    }).toThrow(new Error('A quantidade de coluna deve ser maior do que zero'));
  });

  test('Retorna erro quanto o numero de colunas nao for um inteiro', () => {
    const frase = 'teste um dois tres';
    const colunas = 12.2;
    expect(() => {
      new BreakLine({
        colunas,
        frase
      })
    }).toThrow(new Error('A quantidade de coluna deve ser um inteiro'));
  });

  //const getArray = new BreakLine('teste um dois tres', 4).handle().split('\n')

  test.each([[`um cinco`, 10], [`frase um`, 8]]
  )(`Valida se a frase %p contem menos que %p colunas`, (firstArg, expectedResult) => {
    expect(firstArg.length).toBeLessThanOrEqual(expectedResult);
  });

})

// Escreva um programa em que dado uma frase e a quantidade de colunas que podem ser exibidas na tela, faça a quebra de linhas sem quebrar as palavras.

// Por exemplo, se passarmos a frase "Um pequeno jabuti xereta viu dez cegonhas felizes." e pedirmos para ela ser exibida em 20 colunas, teremos como resposta:

// Um pequeno jabuti

// xereta viu dez

// cegonhas felizes.