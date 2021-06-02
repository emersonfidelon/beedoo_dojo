import { GroupNumbers } from "./GroupNumbers";

describe('GroupNumbers', () => {
  test('Deve retornar a propria lista caso esteja na sequencia correta', ()=>{
    const sut = new GroupNumbers();
    const list = [1,2,3,4,5];
    const result = sut.handle(list)
    expect(list).toEqual(result)
  });

  test('Deve retornar a duas listas caso nao esteja na sequencia correta', ()=>{
    const sut = new GroupNumbers();
    const list = [1, 2, 3, 4, 5, 7, 8, 9];
    const result = sut.handle(list)
    expect(result.length).toBe(2)
  });
})  

// Dado uma lista de números inteiros, agrupe a lista em um conjunto de intervalos

// Exemplo:

// Entrada: 100, 101, 102, 103, 104, 105, 110, 111, 113, 114, 115, 150
// Saída: [100-105], [110-111], [113-115], [150]

