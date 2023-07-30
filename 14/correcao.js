const quantidadeDeAguaIngerida = 2;

if (quantidadeDeAguaIngerida < 1.5) {
    console.log('Risco alto - Voce esta ingerindo pouquissima agua, beba mais agua!');
} else if (quantidadeDeAguaIngerida <= 3 ) {
    console.log('Risco Moderado - Voce esta ingerindo pouca agua, beba mais!')
} else {
    console.log('Risco baixo - Voce esta ingerindo uma boa quantidade de agua, parabens !');
}