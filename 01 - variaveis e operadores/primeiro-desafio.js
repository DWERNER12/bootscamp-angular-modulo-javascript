// Faça um program para calcular o valor de uma viagem.

// Você terá 3 variáveis.Sendo elas:
// 1 - Preço Combustivel;
// 1 - Gasto médio de combustivel do carro  por MediaKeyMessageEvent;
// 3 - Distenacia em Km da viagem;

const precoCombustivel = 5.35;
const kmPorLitro = 12;
const distancia = 1580;

let litrosConsumidos = distancia / kmPorLitro;
let valorViagem = precoCombustivel * litrosConsumidos;
console.log(valorViagem.toFixed(2));