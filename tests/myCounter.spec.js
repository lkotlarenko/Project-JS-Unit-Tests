const myCounter = require('../src/myCounter');

/*
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array.
  Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.
  Corrija o código abaixo para que a função retorne o array correto.
  Atenção: não remova os `for`s da função e sim corrija os erros presentes.

  Parâmetros:
  - Nenhum.

  Comportamento:
  myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('8 - Implemente a função `myCounter`', () => {
  it('Verifica se a função `myCounter` funciona como o esperado', () => {
    const expectedOutput = [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
    expect(myCounter()).toEqual(expectedOutput);
  });
});
