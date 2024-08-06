//Objeto para almacenar los contactos de la agenda.
const agenda = {};

// Añado algunos contactos.
agenda['Juan Giraldo'] = '3002105652';
agenda['Ana Camacho'] = '3005678901';
agenda['Pepe Sierra'] = '3048794567';
agenda['Diego Giraldo'] = '3048794567';

// Contacto para buscar en la agenda.
let contactoABuscar = prompt("Escriba el nombre para buscar ");

// Buscar el contacto en la agenda
if (agenda[contactoABuscar]) {
    console.log(`El teléfono de ${contactoABuscar} es ${agenda[contactoABuscar]}.`);
} else {
    console.log(`El contacto ${contactoABuscar} no está registrado en la agenda.`);
}
