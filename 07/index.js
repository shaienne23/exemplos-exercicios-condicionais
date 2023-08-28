const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000001; //emCentavos

if (aposentada === true) {
    console.log("ISENTO");
} else if (portadoraDeDoenca === true) {
    console.log('Isento');
} else if (totalDeRendimentos <= 3000000) {
    console.log(" VAZA LEAO! JA TA DIFICIL SEM VOCE")
} else if (totalDeRendimentos >= 3000000) {
    console.log(" PEGA LEÃO!");
} 