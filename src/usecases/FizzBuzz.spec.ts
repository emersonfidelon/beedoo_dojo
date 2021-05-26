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

  test('retorna "Fizz" quando o numero contem o algarismo 3 e nao e divisivel por 3 ou 5', ()=>{
    const numDivisivel = 23;
    const fizzBuzz = new FizzBuzz()
    const fizzbuzz = fizzBuzz.verificaNumeroDivisivel(numDivisivel);
    expect(fizzbuzz).toEqual('Fizz');
  });

  test('retorna "Buzz" quando o numero contem o algarismo 5 e nao e divisivel por 3 ou 5', ()=>{
    const numDivisivel = 58;
    const fizzBuzz = new FizzBuzz()
    const fizzbuzz = fizzBuzz.verificaNumeroDivisivel(numDivisivel);
    expect(fizzbuzz).toEqual('Buzz');
  });

  test('retorna "BuzzFizz" quando o numero contem os algarismo 3 e 5 e nao e divisivel por 3 ou 5 e o 5 vem primeiro', ()=>{
    const numDivisivel = 53;
    const fizzBuzz = new FizzBuzz()
    const fizzbuzz = fizzBuzz.verificaNumeroDivisivel(numDivisivel);
    expect(fizzbuzz).toEqual('BuzzFizz');
  });

  test('retorna "FizzBuzz" quando o numero contem o algarismo 3 e 5 e nao e divisivel por 3 ou 5 e o 3 vem primeiro', ()=>{
    const numDivisivel = 353;
    const fizzBuzz = new FizzBuzz()
    const fizzbuzz = fizzBuzz.verificaNumeroDivisivel(numDivisivel);
    expect(fizzbuzz).toEqual('FizzBuzz');
  });
})  

// Neste problema, você deverá exibir uma lista de 1 a 100, um em cada linha, com as seguintes exceções:

// Números divisíveis por 3 deve aparecer como 'Fizz' ao invés do número;
// Números divisíveis por 5 devem aparecer como 'Buzz' ao invés do número;
// Números divisíveis por 3 e 5 devem aparecer como 'FizzBuzz' ao invés do número'.

// Após resolver o problema do FizzBuzz acrescente a seguintes 
// regra: - Números contendo o algarismo 3 devem aparecer como 'Fizz'. 
// - Números contendo o algarismo 5 devem aparecer como 'Buzz'. 
// - Números contendo ambos os algarismos devem aparecer como 'FizzBuzz', se o 3 vier antes do 5 
// ou 'BuzzFizz' caso contrário. Obs.: Vale lembrar que as 3 regras do primeiro problema continuam valendo.