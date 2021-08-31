import BreakLine from './BreakLine';

describe('# Break Line #', () => {
  test('check if the entry is correct', () => {
    const text = 'teste um dois tres';
    const columns = 20;
    const breakLine = new BreakLine(text, columns);
    expect(breakLine).toBeInstanceOf(BreakLine);
  });

  test('return error when text is empty', () => {
    const text = '';
    const columns = 20;
    expect(() => new BreakLine(text, columns))
      .toThrow(new Error('A frase deve conter ao menos um caractere'));
  });

  test('return error when columns is less than 1', () => {
    const text = 'teste um dois tres';
    const columns = 0;
    expect(() => new BreakLine(text, columns))
      .toThrow(new Error('A quantidade de coluna deve ser maior do que zero'));
  });

  test('return error when columns is not an integer', () => {
    const text = 'teste um dois tres';
    const columns = 12.2;
    expect(() => new BreakLine(text, columns))
      .toThrow(new Error('A quantidade de coluna deve ser um inteiro'));
  });

  test('return formatted text when text has fewer columns than entered', () => {
    const text = 'um cinco';
    const columns = 10;
    const breakLine = new BreakLine(text, columns);
    expect(breakLine.finalText).toBe('um cinco ');
  });

  test('return formatted text when text has more columns than entered', () => {
    const text = 'Um pequeno jabuti xereta viu dez cegonhas felizes.';
    const columns = 20;
    const breakLine = new BreakLine(text, columns);
    expect(breakLine.finalText).toBe(
      'Um pequeno jabuti \nxereta viu dez \ncegonhas felizes. ',
    );
  });
});
