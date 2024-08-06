function juegoAdivianza() {
    const intentos = 3;
    let contadorIntentos = 0;
    const numAletatorio = Math.floor(Math.random() * 10) + 1;
    let numIngresado = prompt("Adivina el número. Escribe una opción(entre 1 al 10):");

    while (contadorIntentos < intentos) {
        contadorIntentos++;
        numIngresado = parseInt(numIngresado, 10);

        if (numIngresado === numAletatorio) {
            console.log("¡Bien, adivinaste!");
            return;
        } else if (numIngresado > numAletatorio) {
            if (contadorIntentos < intentos) {
                numIngresado = prompt("El número ingresado es más alto. Inténtalo de nuevo:");
            }
        } else {
            if (contadorIntentos < intentos) {
                numIngresado = prompt("El número ingresado es más bajo. Inténtalo de nuevo:");
            }
        }
    }

    console.log(`¡Has perdido! El número era ${numAletatorio}.`);
}


juegoAdivianza();
