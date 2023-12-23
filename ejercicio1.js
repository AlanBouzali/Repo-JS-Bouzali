// Declaro las variables y constantes.
let nombre = 'Homero';
let apellido = 'Simpson';
let edad = 37;
let direccion = 'Av Siempre viva 1234'
let ciudad = 'Springfield'
const dni = 23654897

// Concateno las var y const.
let carnet = nombre + apellido + '\n' + 'DNI' + dni 
+ '\n' + 'Dirección: ' + direccion;

// Se visualizan en la consola. 
console.group('-------');
console.log ( nombre + ' ' + apellido + '\n' + edad );


console.group('-------');

console.log( carnet);

// Las visualiza en una ventana de alerta.

alert( carnet)



/* De esta foma los datos los refleja en la etiqueta seleccionada (H1)
document.querySelector('h1'). innerText = carnet */
