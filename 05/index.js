const alturaEmCm = 185;

const classificacao = (alturaEmCm < 185 ? "Reprovado!" : "Aprovado!");

console.log(classificacao);

// outra forma de fazer, nao sendo a forma resumida do ternario.
//if (alturaEmCm < 185) {
//    console.log("Reprovado!");
//} else if (alturaEmCm >= 185) {
//   console.log("Aprovado!")
//}
