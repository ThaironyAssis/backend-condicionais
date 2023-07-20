const caractere = "E";

// Verificar se é vogal maiúscula
if (caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U") {
  
 
console.log("Vogal maiúscula");
}
// Verificar se é vogal minúscula
else if (caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u") {
  
 
console.log("Vogal minúscula");
}
// Verificar se é número
else if (!isNaN(caractere)) {
  console.log("Número");
}
// Se não é vogal nem número, é consoante
else {
  console.log("Consoante");
}