//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

let desconto;

if (tipoDePagamento === "credito") {

  desconto = 0.05; // 5% de desconto
} 
else if (tipoDePagamento === "verificar") {
  desconto = 0.03; // 3% de desconto
} else if (tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
  desconto = 0.10; // 10% de desconto
} else {  
console.log("Tipo de pagamento inválido.");
}

const valorFinal = valorDoProduto - (valorDoProduto * desconto);
const valorFinalFormatado = (valorFinal / 100).toFixed(2);

console.log(`O valor final do produto com desconto é R$ ${valorFinalFormatado}.`);