let equipo1 = prompt('Ingrese equipo 1');
let equipo2 = prompt('Ingrese equipo 2');
let goles1 = parseInt( prompt( 'Ingrese los goles equipo 1'));
let goles2 = parseInt( prompt( 'Ingrese los goles equipo 2'));

console.log( 'El quipo ganador es:');

if ( goles1 > goles2){
    alert ('Gano:' + equipo1)
}

else if ( equipo1 == equipo2){
    alert ('Empataron!')
}
