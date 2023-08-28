const idade = 18;
const possuiPatologia = true;
const altura = 180;
const ehEstudante = false;

if (idade <= 12 | idade > 65 | possuiPatologia === true | altura < 150) {
    console.log("ACESSO NEGADO!")
} else if (idade > 12 && idade < 18) {
    console.log("10 Reais!");
} else {
    console.log(" 20 Reais.")
}