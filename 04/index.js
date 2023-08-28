const ladoA = 6;
const ladoB = 0;

if (ladoA === ladoB) {
    if (ladoA === 0) {
        console.log(" Sim, é uma bucha Branco!");
    } else if (ladoA === 1) {
        console.log(" Sim, é uma bucha Ás!");
    } else if (ladoA === 2) {
        console.log(" Sim, é uma bucha Duque");
    } else if (ladoA === 3) {
        console.log(" Sim, é uma bucha Terno");
    } else if (ladoA === 4) {
        console.log(" Sim, é uma bucha Quadra");
    } else if (ladoA === 5) {
        console.log(" Sim, é uma bucha Quina");
    } else if (ladoA === 6) {
        console.log(" Sim, é uma bucha Sena");
    }
} else {
    console.log(" Não é uma bucha!");
};