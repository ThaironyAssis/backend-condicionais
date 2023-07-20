const jogada1 = "pedra"
const jogada2 = "tesoura"
const jogada3 = "papel"

//seu código aqui

if (jogada1 !== jogada2 ) {
     console.log("pedra"); 
}

else if (jogada1 !== jogada3){
    console.log("voce perdeu");
} 

else if (jogada1 === jogada1){
    console.log("empate")
} 

else if (jogada2 === jogada1 ) {
      console.log("voce perdeu"); 
} 

else if (jogada2 !== jogada3){
    console.log("tesoura");
} 

else if (jogada2 === jogada2){
    console.log("empate");
}

else if (jogada3 !== jogada2 ) {
    console.log("voce perdeu"); 
}

else if (jogada3 === jogada3){
    console.log("empate");
}

else if (jogada3 !== jogada1)
    console.log("papel");