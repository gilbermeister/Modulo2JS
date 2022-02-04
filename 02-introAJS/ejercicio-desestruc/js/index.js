// const animalesTundra = {
//     nombre: "caribú",
//     familia: "cervidae",
//     alimento: "herbívoro"
// };

const animalesTundra = ["caribú","cervidae","herbívoro"];

const [nombre,familia,alimento] = animalesTundra;

console.log(`Este animal es: ${nombre}, de la familia ${familia}, y es ${alimento}`);

// Ejercicio 1
var numAlumnos, ind;
var numNotas = 0;
var nota = 0;
var promedio = 0;
var sumatoria = 0;
var arrayAlumnos = [];
var arrayNotas = [];
var notaAlumno = [];
var arrayAlumnosFinal = [];



numAlumnos = Number(prompt("Ingrese el número de alumnos a calificar:"));
numNotas = Number(prompt("Ingrese el numero de notas a promediar:"));

for(i = 0; i < numAlumnos; i++){
    sumatoria = 0;
    promedio = 0;
    arrayAlumnos[i] = prompt("Ingrese el nombre del alumno:");
        for(ind = 1; ind <= numNotas; ind++){
            nota = Number(prompt("Ingrese la nota " + ind));
            sumatoria = sumatoria + nota;
        }
    promedio = sumatoria / numNotas;    
    arrayAlumnosFinal[i] = arrayAlumnos[i] +" "+promedio;
}

console.log(arrayAlumnosFinal);
alert(arrayAlumnosFinal);

function imprimeResultados(arrayAlumnosFinal){
    var lista = "";
    for(i = 0; i < arrayAlumnosFinal.length; i++){
        lista = lista + arrayAlumnosFinal[i] + "<br>";
    }
    return lista;
}

var imprimir = imprimeResultados(arrayAlumnosFinal);
document.write(imprimir);

let objetoAlumno = {
    print: imprimeResultados(arrayAlumnosFinal)
};

let {print} = objetoAlumno;

alert(print);