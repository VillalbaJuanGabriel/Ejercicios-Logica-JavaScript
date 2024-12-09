// Array para los Nombres:

let nombresPokemon = ["Charmander", "Pikachu", "Bulbasaur", "Squirtle"];

// Matriz para sus Habilidades:

let habilidades = [
    [80, 75, 90],
    [65, 55, 65],
    [80, 70, 65],
    [85, 90, 79]
];

// Función para Calcular los Promedios de Habilidades:

function calcularPromedioHabilidades(habilidades){
    let promedios = [];

    for(let i = 0; i < habilidades.length; i++){
        let fila = habilidades[i];
        let suma = fila.reduce((total, habilidad) => total + habilidad, 0);
        promedios[i] = suma/fila.length;
    }
    return promedios;
}

// Función para Evaluar las Aptitudes:

function evaluarAptitudPokemon(nombresPokemon, promedios){
    
    for(let i = 0; i < promedios.length; i++){
        if(promedios[i] >= 70){
            console.log(`El Pokemon ${nombresPokemon[i]} supera el Promedio con: ${promedios[i]}.`);
        } else {
            console.log(`El Pokemon ${nombresPokemon[i]} NO supera el Promedio con: ${promedios[i]}.`);
        }
    }
}

// Se invocan a las funciones y se muestran los Resultados por Consola.

let promedios = calcularPromedioHabilidades(habilidades);
evaluarAptitudPokemon(nombresPokemon, promedios);
