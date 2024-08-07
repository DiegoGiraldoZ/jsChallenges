// Función para invertir una palabra
function invertirPalabra(palabra) {
    let palabraInvertida = '';
    for (let i = palabra.length - 1; i >= 0; i--) {
        palabraInvertida += palabra[i];
    }
    return palabraInvertida;
}

// Función para invertir las palabras en una frase
function invertirPalabras(frase) {
  let palabras = frase.split(' '); // Divide la frase en palabras
    
    // Aquí se invierte cada palabra
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = invertirPalabra(palabras[i]);
    }
    

    return palabras.join(' ');
}


let frase = prompt("Ingrese una frase:");

// Aquí se invierte las palabras en la frase y muestra el resultado
if (frase) {
    let resultado = invertirPalabras(frase);
    console.log("Frase con palabras invertidas:", resultado);
} else {
    console.log("No se ha ingresado ninguna frase.");
}
