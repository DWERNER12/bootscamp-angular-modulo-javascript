// Faça um program para calcular o valor de uma viagem.

// Você terá 3 variáveis.Sendo elas:
// 1 - Preço gasolina;
// 2 - Preço Etanol;
// 3 - O tipo de Combustivel que está no seu carro; 
// 1 - Gasto médio de combustivel do carro  por MediaKeyMessageEvent;
// 3 - Distenacia em Km da viagem;

const precoGasolina = 5.35;
const precoEtanol = 3.75;
const tipoDeCombustivel = 'Etanol';
const kmPorLitro = 12;
const distancia = 1580;

let litrosConsumidos = distancia / kmPorLitro;

if (tipoDeCombustivel === 'Etanol') {
    
    let valorViagem = precoEtanol * litrosConsumidos;
    console.log(valorViagem.toFixed(2));
    
} else {
    
    let valorViagem = precoGasolina * litrosConsumidos;
    console.log(valorViagem.toFixed(2));
    
}