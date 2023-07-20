const jogada1 = "pedra";
const jogada2 = "tesoura";
const jogada3 = "papel";

if (jogada1 === jogada2 && jogada2 === jogada3) {
    console.log("Empate!");
} else if (
    (jogada1 === "pedra" && jogada2 === "tesoura" && jogada3 === "tesoura") ||
    (jogada1 === "papel" && jogada2 === "pedra" && jogada3 === "pedra") ||
    (jogada1 === "tesoura" && jogada2 === "papel" && jogada3 === "papel")
) {
    console.log("Jogada 1 venceu!");
} else if (
    (jogada2 === "pedra" && jogada1 === "tesoura" && jogada3 === "tesoura") ||
    (jogada2 === "papel" && jogada1 === "pedra" && jogada3 === "pedra") ||
    (jogada2 === "tesoura" && jogada1 === "papel" && jogada3 === "papel")
) {
    
    console.log("Jogada 2 venceu!");
} else {
    console.log("Jogada 3 venceu!");
}
