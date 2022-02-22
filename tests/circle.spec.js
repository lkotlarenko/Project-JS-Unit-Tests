/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const circle = require('../src/circle');

describe('4 - Implemente os casos de teste para a função `circle`', () => {
  it('Verifica se ao receber um raio, a função `circle` retorna um objeto contedos os valores esperados', () => {
    // Teste se circle retorna undefined, caso o parâmetro passado não seja um número.
    expect(circle('number')).toEqual(undefined);
    // Teste se circle retorna um objeto.
    expect(typeof circle(5)).toEqual('object');
    // Teste se o objeto retornado tem 3 propriedades.
    expect(Object.keys(circle(7)).length).toBe(3);
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    expect(circle()).toBeUndefined();
    // Teste que a função retorna, dentro de um objeto, a circunferência correta para um círculo de raio 2.
    expect(circle(2)['circumference']).toEqual(12.56);
    // Teste que a função retorna, dentro de um objeto, a área correta para um círculo de raio 3.
    expect(circle(3)['area']).toBeCloseTo(28.26);
    // Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.
    expect(circle(3)['area']).toBeCloseTo(28.26);
    expect(circle(3)['radius']).toBeCloseTo(3);
    expect(circle(3)['circumference']).toBeCloseTo(18.84);
    // aulas do Jensen ajudaram d+ nessas :D
  });
});
