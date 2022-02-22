const myCounter = require('../src/myCounter');

//* This file has parts of it written by @Jean Paulo Silva Vasconcelos

describe('8 - Implemente a função `myCounter`', () => {
  it('Verifica se a função `myCounter` funciona como o esperado', () => {
    const expectedOutput = [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
    expect(myCounter()).toEqual(expectedOutput);
  });
});
