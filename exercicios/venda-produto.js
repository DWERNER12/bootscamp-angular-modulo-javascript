const precoProduto = 100;
const formaDePagamento = 4;

let porcentagem = 0;
let valorDesconto = (precoProduto / 100) * porcentagem; 
let precoFinalProduto = 0;
switch (formaDePagamento) {
    case 1:
        porcentagem = 10;
        valorDesconto = (precoProduto / 100) * porcentagem;
        precoFinalProduto = precoProduto - valorDesconto;
        console.log(`Pagando no Debito você recebe ${porcentagem}% de Desconto e seu produto irá sair R$ ${precoFinalProduto.toFixed(2)}`);
        break;
    case 2:
        porcentagem = 15;
        valorDesconto = (precoProduto / 100) * porcentagem;
        precoFinalProduto = precoProduto - valorDesconto;
        console.log(`Pagando no Dinheiro ou PIX você recebe ${porcentagem}% de Desconto e seu produto irá sair R$ ${precoFinalProduto.toFixed(2)}`);
        break;
    case 3:
        precoFinalProduto = precoProduto / 2;
        console.log(`Pagando no Credito em até 2x de R$ ${precoFinalProduto.toFixed(2)} sem Juros`);
        break;
    case 4:
        porcentagem = 10;
        valorDesconto = (precoProduto / 100) * porcentagem;
        precoFinalProduto = precoProduto + valorDesconto;
        console.log(`Pagando no Credito acima de 2x o produtos terá Juros de ${porcentagem}% e seu produto irá custar R$ ${precoFinalProduto.toFixed(2)}`);
        break;

    default:
        break;
}