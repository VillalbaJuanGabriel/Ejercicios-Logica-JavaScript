// Ingreso de los Dos Números:

let num1 = parseInt(prompt("Ingrese un Número: "));
let num2 = parseInt(prompt("Ingrese otro Número: "));

// Cálculo de la Resta:

let resta = num1 - num2;

// Condicional para determinar si el Número es Mayor o Menor Igual a 0, y si es Par o Impar:

if(resta > 0){
    alert("Es Mayor a 0.");
    if(resta % 2 == 0){
        alert("Es Par.");
    } else {
        alert("Es Impar.");
    }
} else {
    alert("Es Menor o Igual a 0.");
}
