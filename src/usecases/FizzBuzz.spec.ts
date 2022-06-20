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

describe('FizzBuzz Testes', () => {
  test('Verifica se a funcao verificaNumeroDivisivel retorna Buzz quando recebe um múltiplo de 5', () => {
    
    //Gera um número aleatório multiplo de 5 mas não multiplo de 3
    let random = Math.floor(Math.random() * 10 + 1);
      random = random % 3 === 0 ? random + 1 : random;
    
    const numDivisivel = 5 * random,
      buzz = verificaNumeroDivisivel(numDivisivel);

    expect(buzz).toBe('Buzz');
  });
})

describe('FizzBuzz Testes', () => {
  test('Verifica se a funcao verificaNumeroDivisivel retorna FizzBuzz quando recebe um múltiplo de 3 e 5', () => {
    
    //Gera um número aleatório multiplo de 3 e de 5
    const numDivisivel = 3 * 5 * Math.floor(Math.random() * 10 + 1),
      fizzBuzz = verificaNumeroDivisivel(numDivisivel);

    expect(fizzBuzz).toBe('FizzBuzz');
  });
})

describe('FizzBuzz Testes', () => {
  test('Verifica se a funcao verificaNumeroDivisivel retorna o  próprio número quando recebe um não múltiplo de 3 ou 5', () => {
    
    //Gera um número aleatório não multiplo de 3 ou de 5
    const numDivisivel = (3 * 5 * Math.floor(Math.random() * 10 + 1)) 
      + [1, 2, 4][Math.floor(Math.random() * 3)],
      fizzBuzz = verificaNumeroDivisivel(numDivisivel);

    expect(fizzBuzz).toBe(numDivisivel);
  });
})
  

describe('FizzBuzz Testes', () => {
  test('Retorna uma lista de 1 a 100 com as regras abaixo \n\tMúltiplos de 3 serão subtituidos por Fizz e múltiplos de 5 por Buzz', () => {
    
    const fizzBuzz = new FizzBuzz(), 
      //Números de elementos contidos na lista
      numberOfElements = 100,    

      //Lista de inteiros maiores que 0
      lista1a100 = Array.from(Array(numberOfElements+1).keys()).slice(1,numberOfElements+1);

    let listaToPrint = lista1a100.map(element => fizzBuzz.verificaNumeroDivisivel(element));
    
    console.log(listaToPrint);
  });
})


console.log("Código para processo seletivo do BeeDoo \nFeito por Letícia Figueiredo \nMaio de 2021")


// Neste problema, você deverá exibir uma lista de 1 a 100, um em cada linha, com as seguintes exceções:

// Números divisíveis por 3 deve aparecer como 'Fizz' ao invés do número;
// Números divisíveis por 5 devem aparecer como 'Buzz' ao invés do número;
// Números divisíveis por 3 e 5 devem aparecer como 'FizzBuzz' ao invés do número'.
