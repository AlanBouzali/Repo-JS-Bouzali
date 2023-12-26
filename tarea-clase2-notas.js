// variables

let estudiante;
let nota1;
let nota2;
let nota3;
let promedio;
let evaluacion;
let listaEstudiantes;

// Funciones

const sistemaEvaluacion = (promedio) =>{
    if (( promedio >= 7 ) && ( promedio <= 10 )){
        return 'Promocionó.'
    }
    else if ( promedio >= 4 && ( promedio < 7 )){
        return 'Aprobó.'
    }
    else if ( promedio < 4){
        return 'Deberá recursar.'
    }
} 

const calularPromedio = (nota1, nota2, nota3) =>{
    return ( parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) ) /3;
}

const validarNota = (nota) =>{
    if( (nota >= 1) && (nota <= 10) && !isNaN(nota)){
        return true;
    }
    else{
        return false;
    }
}

const validarNombre = (nombre) =>{
    if( (nombre == '') || (nombre.length <3) ){
        return false;
    }
    else{
        return true;
    }
}

const validarTotalAlumnos = (listaEstudiantes) => {
    if (listaEstudiantes >= 1 && !isNaN(listaEstudiantes)) {
        return true;
    } else {
        return false;
    }
}

/* inicio de programa */

do {
    listaEstudiantes = parseInt(prompt('Ingrese el número de estudiantes del curso'));
    if (!validarTotalAlumnos(listaEstudiantes)) {
        alert('Error! Ingrese un número válido de estudiantes del curso.');
    }
} while (!validarTotalAlumnos(listaEstudiantes));


for ( let i=1; i<= listaEstudiantes; i++){

    do {
        estudiante = prompt ( i + ' - ' + 'Ingrese Nombre y Apellido');

        if( ! validarNombre( estudiante)){
            alert( 'El nombre ingresado no es valido')
        }
    }

    while( ! validarNombre( estudiante) )

    do {
        nota1 = prompt ( 'Ingrese la nota del parcial 1');
        if ( ! validarNota (nota1)){
            alert ('La nota ingresada no es válida');
        }
    }
    while( ! validarNota(nota1) )

    do {
        nota2 = prompt ( 'Ingrese la nota del parcial 2');
        if ( ! validarNota (nota2)){
            alert ('La nota ingresada no es válida');
        }
    }
    while( ! validarNota(nota2) )

    do {
        nota3 = prompt ( 'Ingrese la nota del parcial 3');
        if ( ! validarNota (nota3)){
            alert ('La nota ingresada no es válida');
        }
    }
    while( ! validarNota(nota3) )

    promedio = calularPromedio(nota1, nota2, nota3);
    evaluacion = sistemaEvaluacion(promedio)

    let mensaje = estudiante + ' obtuvo las siguientes notas: ' + '\n' + '- ' + nota1 + ' - ' + nota2 + ' - ' + nota3 + ' - ' + '\n Logrando un promedio de: ' + promedio.toFixed(2) + '\n' + evaluacion 

    console.log(mensaje)
}



