import { FizzBuzz } from './FizzBuzz'

describe('verificaNumeroDivisivel', () => {
  it('retorna Fizz quando recebe numero divivel por 3', () => {
    
    const numDivisivel = 3; 
    const fizzBuzz = new FizzBuzz()
    const fizz = fizzBuzz.verificaNumeroDivisivel(numDivisivel);

    expect(fizz).toEqual('Fizz');
  });

  test('retorna Buzz quando recebe numero divivel por 5', () => {
    const numDivisivel = 5;
    const fizzBuzz = new FizzBuzz()
    const buzz = fizzBuzz.verificaNumeroDivisivel(numDivisivel);
    expect(buzz).toEqual('Buzz');
  });

  test('retorna FizzBuzz quando recebe numero divivel por 3 e 5', () => {
    const numDivisivel = 30;
    const fizzBuzz = new FizzBuzz()
    const fizzbuzz = fizzBuzz.verificaNumeroDivisivel(numDivisivel);
    expect(fizzbuzz).toEqual('FizzBuzz');
  });

  test('retorna o próprio número quando ele não é divisível por 3 ou 5', ()=>{
    const numDivisivel = 7;
    const fizzBuzz = new FizzBuzz()
    const fizzbuzz = fizzBuzz.verificaNumeroDivisivel(numDivisivel);
    expect(fizzbuzz).toEqual(numDivisivel);
  });
})  

// Neste problema, você deverá exibir uma lista de 1 a 100, um em cada linha, com as seguintes exceções:

// Números divisíveis por 3 deve aparecer como 'Fizz' ao invés do número;
// Números divisíveis por 5 devem aparecer como 'Buzz' ao invés do número;
// Números divisíveis por 3 e 5 devem aparecer como 'FizzBuzz' ao invés do número'.
