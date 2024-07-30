// Conversor de temperatura
// Pregunto que conversion quiere hacer
const eligeTemperatura = parseInt(prompt("Para pasar de °C a °F escribe 1 \n Para pasar de °F a °C escribe 2"));

// Reviso si elige 1 o 2 y se hace la respectiva conversion

if (eligeTemperatura === 1) { // convierte Celcius a Fahrenheit
    const temperaturaCelsius = parseFloat(prompt("Ingresa la temperatura en grados °C:"));
    const temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
    alert(`${temperaturaCelsius} °C es igual a ${temperaturaFahrenheit}°F.`);

} else if (eligeTemperatura === 2) { //  convierte Fahrenheit a Celcius
    const temperaturaFahrenheit = parseFloat(prompt("Ingresa la temperatura en °F:"));
    const temperaturaCelsius = (temperaturaFahrenheit - 32) * 5/9;
    alert(`${temperaturaFahrenheit} °F es igual a ${temperaturaCelsius} °C.`);

} else { //si no el;ige 1 o 2 le saldra un mensaje de error.
    alert("Opción no válida. Por favor, ingresa '1' o '2'.");
}
