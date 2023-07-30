//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

//Restam 7 parcelas de R$ 100

const valorParcelasEmReais = (valorDoProduto / quantidadeDoParcelamento /100)

const parcelasPagas = valorPago / valorParcelasEmReais;

console.log(`Restam ${quantidadeDoParcelamento - parcelasPagas} parcelas de R$ ${valorParcelasEmReais.toFixed(2)}`);