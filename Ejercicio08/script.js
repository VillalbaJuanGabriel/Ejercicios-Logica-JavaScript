// Función donde se utiliza el Metodo Includes para determinar si en la Lista está el Nombre Ingresado o no:

function buscarNombre(listaNombres, ingresoNombre){
    let listaNombresLower = listaNombres.map(nombre => nombre.toLowerCase());
    return listaNombresLower.includes(ingresoNombre.toLowerCase());
}

// Array de la Lista de Nombres Pre-Armada:

let listaNombres = ["Juan", "Gabriel", "Marianella", "Clara,", "Valentina", "Damián", "Aldo", "Yoel", "Yuthiel"];

// Ingreso de Nombre:

let ingresoNombre = prompt("Ingrese un Nombre: ");

// Invocación de la Función:

let estaElNombre = buscarNombre(listaNombres, ingresoNombre);

// Condicional para Determinar Si está o No está el Nombre ingresado:

if(estaElNombre == true){
    alert(`El nombre ${ingresoNombre} está en la Lista.`);
} else {
    alert(`El nombre ${ingresoNombre} NO está en la Lista.`);
}