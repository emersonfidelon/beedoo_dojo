
// Dado uma lista de números inteiros, agrupe a lista em um conjunto de intervalos

// Exemplo:

// Entrada: 100, 101, 102, 103, 104, 105, 110, 111, 113, 114, 115, 150
// Saída: [100-105], [110-111], [113-115], [150]

import { GroupNumbers } from './GroupNumbers'

const sut = new GroupNumbers()

describe('░▒▓█ Teste da classe GroupNumbers | metodo handle com for:', () => {
  test('Deve retornar a propria lista com o elemento unico = 0.', () => {
    const list = [0]
    const result = sut.handle(list)
    expect(result).toEqual(list)
  })
  test('Deve retornar a propria lista com um elemento somente.', () => {
    const list = [7]
    const result = sut.handle(list)
    expect(result).toEqual(list)
  })
  test('Deve retornar a propria lista caso esteja na sequencia correta.', () => {
    const list = [1, 2, 3, 4, 5]
    const result = sut.handle(list)
    expect(result).toEqual(list)
  })

  test('Deve retornar duas listas caso nao esteja na sequencia correta.', () => {
    const list = [1, 2, 3, 4, 5, 7, 8, 9]
    const result = sut.handle(list)
    expect(result.length).toBe(2)
  })

  test('Deve retornar tres listas caso nao esteja na sequencia correta.', () => {
    const list = [1, 2, 3, 1, 1, 2]
    const result = sut.handle(list)
    expect(result.length).toEqual(3)
  })
})

describe('░▒▓█ Teste da classe GroupNumbers | metodo handle2 com reduce:', () => {
  test('Deve retornar a propria lista com o elemento unico = 0.', () => {
    const list = [0]
    const result = sut.handle2(list)
    expect(result).toEqual(list)
  })
  test('Deve retornar a propria lista com um elemento somente.', () => {
    const list = [7]
    const result = sut.handle2(list)
    expect(result).toEqual(list)
  })

  test('Deve retornar a propria lista caso esteja na sequencia correta.', () => {
    const list = [1, 2, 3, 4, 5]
    const result = sut.handle2(list)
    expect(result).toEqual(list)
  })

  test('Deve retornar duas listas caso nao esteja na sequencia correta.', () => {
    const list = [1, 2, 3, 4, 5, 7, 8, 9]
    const result = sut.handle2(list)
    expect(result.length).toBe(2)
  })

  test('Deve retornar tres listas caso nao esteja na sequencia correta.', () => {
    const list = [1, 2, 3, 1, 1, 2]
    const result = sut.handle2(list)
    expect(result.length).toEqual(3)
  })
})
