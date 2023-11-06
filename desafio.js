// Use if para especificar um bloco de código a ser executado, se uma condição especificada for verdadeira.
// Use else para especificar um bloco de código a ser executado, se a mesma condição for falsa.
// Use else if para especificar uma nova condição a ser testada, se a primeira condição for falsa.
// && retorna true se os dois operandos forem true , caso contrário, retorna false.

let NickName = "Herão"
let xp = 999999999999999999999999999999
let medalha = ""


if (xp <= 1000) {
    medalha = "FERRO"
}
else if (xp >= 1001 && xp <= 2000){
    medalha = "BRONZE"
}
else if (xp >= 2001 && xp <= 5000){
    medalha = "PRATA"
}
else if (xp >= 5001 && xp <= 7000){
    medalha = "OURO"
}
else if (xp >= 7001 && xp <= 8000){
    medalha = "PLATINA"
}
else if (xp >= 8001 && xp <= 9000){
    medalha = "ASCENDENTE"
}
else if (xp >= 9001 && xp <= 10000){
    medalha = "IMORTAL"
}
else {
    medalha = "DIVINO"
}



console.log(NickName + " está na medalha... " + medalha)
 