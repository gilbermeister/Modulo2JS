//variables y entradas
var nombre, apellido1, apellido2, nombreCompleto;
var arrayNombre = []; //inicializo arreglo vacío

nombre = prompt("Ingresa tu nombre");
apellido1 = prompt("Ingresa tu primer apellido");
apellido2 = prompt("Ingresa tu segundo apellido");

//logica
arrayNombre.push(nombre);
arrayNombre.push(apellido1);
arrayNombre.push(apellido2);

nombreCompleto = `Tu nombre es: ${arrayNombre[0]} ${arrayNombre[1]} ${arrayNombre[2]}`;
//salidas
console.log(arrayNombre);
alert(nombreCompleto);

/*Desafío
1. Solicitar nombres completos de los miembros de la familia de la persona, separados por comas
2. Convertir esos nombres a un array y mostrarlo en consola 
3. Combinar los dos arrays en uno solo y reordenarlo de atras para adelante
4. Agregar validaciones necesarias

*/

var miembrosFamilia;
var arrayFamilia = [];
var arrayCombinado = [];

miembrosFamilia = prompt("Escribe los nombres completos de los miembros de tu familia separados por comas");
arrayFamilia = miembrosFamilia.split(',');

console.log(arrayFamilia);

arrayCombinado = arrayNombre.concat(arrayFamilia);
arrayCombinado.reverse();

alert(arrayCombinado);
