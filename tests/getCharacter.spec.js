/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const getCharacter = require('../src/getCharacter');

//* This file has parts of it written by @Jean Paulo Silva Vasconcelos

describe('9 - Implemente os casos de teste da função `getCharacter`', () => {
  it('Verifica se a função `getCharacter` retorna o objeto do personagem corretamente.', () => {
    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    expect(getCharacter()).toBeUndefined();
    // Teste se a função retorna o objeto correto para o parâmetro 'Arya',
    expect(getCharacter('Arya')).toMatchObject({
      name: 'Arya Stark',
      class: 'Rogue',
      phrases: ['Not today', 'A girl has no name.'],
    });
    // Teste se a função retorna o objeto correto para o parâmetro 'Brienne',
    // outra forma de fazer:
    expect(getCharacter('Brienne')).toEqual({
      name: 'Brienne Tarth',
      class: 'Knight',
      phrases: [
        'Im No Lady, Your Grace.',
        'I, Brienne Of Tarth, Sentence You To Die.',
      ],
    });
    // Teste se a função retorna o objeto correto para o parâmetro 'Melissandre',
    expect(getCharacter('Melissandre')).toMatchObject({
      name: 'Melissandre',
      class: 'Necromancer',
      phrases: [
        'Death By Fire Is The Purest Death.',
        'For The Night Is Dark And Full Of Terrors.',
      ],
    });
    // Teste se os parâmetros não são Case Sensitive.
    expect(getCharacter('melissandre')).toEqual(getCharacter('Melissandre'));
    // Teste se ao passar um nome que não está na tabela, a função retorna undefined.
    expect(getCharacter('Atanes')).toBeUndefined();
  });
});
