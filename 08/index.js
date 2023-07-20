const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

if (possuiPatologia || idade < 12 || altura < 180){
    console.log("ACESSO NEGADO")
}else if (ehEstudante || idade < 18){
    console.log ("10 R$ (meia entrada)")
}else {
    console.log ("20 R$")
}