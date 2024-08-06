// Genero número entre 1 y 6
function lanzarDado() {
    return Math.floor(Math.random() * 6) + 1;
}

// Lanza los dados
const dado1 = lanzarDado();
const dado2 = lanzarDado();

// Calcular la suma
const suma = dado1 + dado2;

// Imprimimos los valores obtenidos
console.log(`Valor dado 1: ${dado1}`);
console.log(`Valor dado 2: ${dado2}`);
console.log(`Suma de los dados: ${suma}`);
