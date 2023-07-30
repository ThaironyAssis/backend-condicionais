const rendaMensalEmCentavos = 3000000;
const mesesDecorridos = 12;
const totalJaPagoPeloAluno = 1000000;

if (mesesDecorridos < 60) {
    console.log('Voce nao deve nada para cubos');
} else {
    const valorParcela = rendaMensalEmCentavos / 100 * 18/100;
    console.log(`O valor da parcela desse mes e R$ ${valorParcela} reais`);
}