// Ingreso de la Fecha:

let fecha = prompt("Ingrese una Fecha: ", "mm/dd/yyyy");

// Se crea una Variable de Tipo Fecha:

let fechaAEvaluar = new Date(fecha);

// Se crea una Variable para Obtener el Nombre del Día de la Semana:

let diaDeLaSemana = fechaAEvaluar.getDay();

// Condicional Switch para Determinar el Día de la Semana que Corresponda:

switch (diaDeLaSemana) {
    case 0: alert("Domingo."); break;
    case 1: alert("Lunes."); break;
    case 2: alert("Martes."); break;
    case 3: alert("Miércoles."); break;
    case 4: alert("Jueves."); break;
    case 5: alert("Viernes."); break;
    case 6: alert("Sábado."); break;

    default: alert("Fecha Inválida."); break;
}
