const jogada1 = "pedra"

const jogada2 = "tesoura"

if (jogada1 === jogada2){
    console.log("empate");
}else {
    if (jogada1 === "pedra"){
        if(jogada2 === "tesoura")
        console.log("pedra ganhou")
    }else {
        console.log("papel ganhou")
    }
}   if( jogada1 === "tesoura") {
    if(jogada2 === "pedra") {
        console.log("pedra ganhou");
    } else {
        console.log("tesoura ganhou")
    }
} else {
    if(jogada2 === "pedra") {
        console.log("papel ganhou");
    } else {
        console.log("tesouro ganhou")
    }
}