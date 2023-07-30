const rendaMensalEmCentavos = 3500000;
const mesesDecorridos = 12;
const totalJaPagoPeloAluno = 1000000;

if (mesesDecorridos < 60) {
    console.log('Voce nao deve nada para cubos');
} else if ( totalJaPagoPeloAluno >= 1800000){
    console.log('Voce ja quitou todas as parcelas');
} else if (rendaMensalEmCentavos < 200000) {
    console.log('O valor da parecela desse mes e de RS 0 reais. Nehum valor devido pois a renda do estudando esta abaixo do valor minimo devido de R$ 2000 reais.')
} else {
    const valorParcela = rendaMensalEmCentavos / 100 * 18/100;
    console.log(`O valor da parcela desse mes e R$ ${valorParcela} reais`);
}