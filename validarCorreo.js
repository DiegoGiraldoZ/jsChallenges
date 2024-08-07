
let email = prompt("ingrese el correo electronico electronico"); // variable para almacenar la dirección de correo electrónico

// Validar la dirección de correo electrónico
function esmailValido(email) {
    const comprueba = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //valida el formtaro del email.
    return comprueba.test(email);
}

// mensajes para comprobación.
if (esmailValido(email)) {
    console.log("La dirección de correo electrónico es válida.");
} else {
    console.log("La dirección de correo electrónico no es válida.");
}
