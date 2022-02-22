/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const numbers = require('../src/numbers');

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it('Verifica se a função `numbers`retorna `true` quando o array contém apenas numeros e falso caso contrário', () => {
    // Escreva um teste em que a função recebe [1, 2, 3, 4, 5] e retorna true
    expect(numbers([1, 2, 3, 4, 5])).toEqual(true);
    // Escreva um teste em que a função recebe [1, 2, '3', 4, 5] e retorna false
    expect(numbers([1, 2, '3', 4, 5])).toEqual(false);
    // Escreva um teste em que a função recebe [1, 'a', 3] e retorna false
    expect(numbers([1, 'a', 3])).toEqual(false);
    // Escreva um teste em que a função recebe [' '] e retorna false
    expect(numbers([' '])).toEqual(false);
  });
});
