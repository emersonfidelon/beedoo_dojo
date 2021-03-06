import { FizzBuzz } from './FizzBuzz'

describe('FizzBuzz Testes', () => {
  test('Verifica se a funcao verificaNumeroDivisivel retorna Fizz quando recebe 3', () => {
    
    const numDivisivel = 3;  
    const fizz = FizzBuzz.verificaNumeroDivisivel(numDivisivel);

    expect(fizz).toBe(0);
  });
})

  

// Neste problema, você deverá exibir uma lista de 1 a 100, um em cada linha, com as seguintes exceções:

// Números divisíveis por 3 deve aparecer como 'Fizz' ao invés do número;
// Números divisíveis por 5 devem aparecer como 'Buzz' ao invés do número;
// Números divisíveis por 3 e 5 devem aparecer como 'FizzBuzz' ao invés do número'.
