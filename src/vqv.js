/* eslint-disable no-unused-vars */

/*
  Use template literals para escrever uma função que,
  recebe seu nome e sua idade e retorna o parágrafo descrito abaixo.
  Caso a função seja chamada sem nenhum parâmetro, o valor undefined deve ser retornado.

  Parâmetros:
    - Uma string;
    - Um número.
  Comportamento:
    vqv(Tunico, 30) // Retorna:
      'Oi, meu nome é Tunico!
      Tenho 30 anos,
      trabalho na Trybe e mando muito em programação!
      #VQV!'
*/

//* This file may have parts of it written by @Jean Paulo Silva Vasconcelos

const vqv = (name, yold) => {
  if (name && yold) {
    return `Oi, meu nome é ${name}!
Tenho ${yold} anos,
trabalho na Trybe e mando muito em programação!
#VQV!`;
  }
  return undefined;
};

module.exports = vqv;
