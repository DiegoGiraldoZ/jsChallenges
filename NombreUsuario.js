let nombreUsuario = prompt("Ingresa tu primer nombre");
let apellidoUsuario =prompt("Ingresa tu primer apellido");

function generarNombre() {
    let nombreCortado = nombreUsuario.substring (0,3).toLowerCase();
    let apellidoCortado = apellidoUsuario.substring(0,3).toLowerCase();
    let nombreCorto = (nombreCortado + apellidoCortado);
    return nombreCorto
}

function nummerosAletarios(){
    let numeroAleatorio = Math.floor(Math.random() * 1000);
    return numeroAleatorio
}

let usuarioFinal = generarNombre () + nummerosAletarios ();

alert(usuarioFinal)