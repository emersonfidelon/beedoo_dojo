import { FizzBuzz } from './FizzBuzz'

const verificaNumeroDivisivel = new FizzBuzz().verificaNumeroDivisivel; 

describe('FizzBuzz Testes', () => {
  test('Verifica se a funcao verificaNumeroDivisivel retorna Fizz quando recebe um múltiplo de 3', () => {
    
      //Gera um número aleatório multiplo de 3 mas não multiplo de 5
      let random = Math.floor(Math.random() * 10 + 1);      
        random = random % 5 === 0 ? random + 1 : random;
    
      const numDivisivel = 3 * random,
        fizz = verificaNumeroDivisivel(numDivisivel);

    expect(fizz).toBe('Fizz');
  });
})

  

// Neste problema, você deverá exibir uma lista de 1 a 100, um em cada linha, com as seguintes exceções:

// Números divisíveis por 3 deve aparecer como 'Fizz' ao invés do número;
// Números divisíveis por 5 devem aparecer como 'Buzz' ao invés do número;
// Números divisíveis por 3 e 5 devem aparecer como 'FizzBuzz' ao invés do número'.
