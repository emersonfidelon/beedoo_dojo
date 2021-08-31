import BreakLine from './BreakLine';

describe('Break Line', () => {
  test('Verifica se a entrada esta correta', () => {
    const text = 'teste um dois tres';
    const columns = 20;
    const breakLine = new BreakLine(text, columns);
    expect(breakLine).toBeInstanceOf(BreakLine);
  });

  test('Retorna erro com uma frase vazia', () => {
    const text = '';
    const columns = 20;
    expect(() => {
      new BreakLine(text, columns);
    }).toThrow(new Error('A frase deve conter ao menos um caractere'));
  });

  test('Retorna erro quando colunas for menor que 1', () => {
    const text = 'teste um dois tres';
    const columns = 0;
    expect(() => {
      new BreakLine(text, columns);
    }).toThrow(new Error('A quantidade de coluna deve ser maior do que zero'));
  });

  test('Retorna erro quanto o numero de colunas nao for um inteiro', () => {
    const text = 'teste um dois tres';
    const columns = 12.2;
    expect(() => {
      new BreakLine(text, columns);
    }).toThrow(new Error('A quantidade de coluna deve ser um inteiro'));
  });

  test('Retorna texto formatado quando a frase contem menos colunas que o informado', () => {
    const text = 'um cinco';
    const columns = 10;
    const breakLine = new BreakLine(text, columns);
    expect(breakLine.finalText).toBe('um cinco ');
  });

  test('Retorna texto formatado quando a frase contem mais colunas que o informado', () => {
    const text = 'Um pequeno jabuti xereta viu dez cegonhas felizes.';
    const columns = 20;
    const breakLine = new BreakLine(text, columns);
    expect(breakLine.finalText).toBe(
      'Um pequeno jabuti \nxereta viu dez \ncegonhas felizes. ',
    );
  });
});
