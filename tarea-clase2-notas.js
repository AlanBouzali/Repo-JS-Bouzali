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
    if( (nota >= 1) && (nota <= 10) && !isNaN (nota) ){
        return true;
    }
    else{
        return false;
    }
}

const validarNombre = (nombre) =>{
    if( (nombre == '') || (nombre.length >3) || isNaN(nombre) ){
        return false;
    }
    else{
        return true;
    }
}



/* inicio de programa */

listaEstudiantes = parseInt ( prompt('Ingrese el número de estudiantes del curso'))

for ( let i=1; i<= listaEstudiantes; i++){

    do {
        estudiante = prompt ('Ingrese Nombre y Apellido');

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
        nota1 = prompt ( 'Ingrese la nota del parcial 1');
        if ( ! validarNota (nota2)){
            alert ('La nota ingresada no es válida');
        }
    }
    while( ! validarNota(nota2) )

    do {
        nota1 = prompt ( 'Ingrese la nota del parcial 1');
        if ( ! validarNota (nota3)){
            alert ('La nota ingresada no es válida');
        }
    }
    while( ! validarNota(nota3) )

    promedio = calularPromedio(nota1, nota2, nota3);
    evaluacion = sistemaEvaluacion(promedio)

    let mensaje = estudiante + ' obtuvo las siguientes notas: ' + ' - ' + nota1 + ' - ' + nota2 + ' - ' + nota3 + '\n Logrando un promedio de: ' + promedio.toFixed(2)  

    console.log(mensaje)

/*     if (prompt("Escriba \"SI\" si desea ingresar otro estudiante").toLowerCase() != "si"){
        ciclo = 0;
    } */

}

/* 
    nota2 = parseFloat ( prompt ( 'Ingrese la nota del parcial 2'));
    nota3 = parseFloat ( prompt ( 'Ingrese la nota del parcial 3'));
    promedio = ( nota1 + nota2 + nota3) /3


     {  
    alert ( 'El estudiante ' + estudiante + ' promociona')
    }
       
    alert ( 'El estudiante ' + estudiante + ' aprobó')
    } 
    {    
    alert ( 'El estudiante ' + estudiante + ' desaprobó' )
    }
    else if (promedio < 0 || (promedio > 10)){
        alert ( 'Ingrese una nota entre 0 y 10')
    } */

//    alert ( 'El estudiante '+ estudiante + '\n' + 'obtuvo un ' + promedio.toFixed(2) )

