const tipoDePagamento = "Credito";

const valorDoProduto = 13000;

let valorComDesconto = 0

if (tipoDePagamento === "Credito") {
    valorComDesconto = valorDoProduto * 95 / 100;
} else if (tipoDePagamento === "Cheque") {
    valorComDesconto = valorDoProduto * 97 / 100;
} else {
    valorComDesconto = valorDoProduto * 90 / 100;
}

console.log(`o valor a ser pago : R$ ${(valorComDesconto / 100).toFixed(2)}`);