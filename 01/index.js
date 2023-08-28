const jogada1 = "papel"
const jogada2 = "tesoura"

if (jogada1 === "pedra" && jogada2 === "tesoura" || jogada1 === "tesoura" && jogada2 === "papel" || jogada1 === "papel" && jogada2 === "pedra") {
    console.log("ganhou!");
} else if (jogada1 === "pedra" && jogada2 === " pedra" | jogada1 === "tesoura" && jogada2 === " tesoura" | jogada1 === "papel" && jogada2 === " papel") {
    console.log("Empate");
} else {
    console.log("Perdeu!")
}

