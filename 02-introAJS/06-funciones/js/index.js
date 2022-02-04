/*function unaFuncion(){
    console.log(1);
    console.log(2);
    console.log(3);
    return 'Hola Mundo';
}

var mensaje = unaFuncion();
console.log(mensaje);*/

// console.log("2 x 0 =", 2 * 0);
// console.log("2 x 1 =", 2 * 1);
// console.log("2 x 2 =", 2 * 2);
// console.log("2 x 3 =", 2 * 3);
// console.log("2 x 4 =", 2 * 4);
// console.log("2 x 5 =", 2 * 5);
// console.log("2 x 6 =", 2 * 6);
// console.log("2 x 7 =", 2 * 7);
// console.log("2 x 8 =", 2 * 8);
// console.log("2 x 9 =", 2 * 9);
// console.log("2 x 10 =", 2 * 10);

//función multiplicar
// var i = 0;

// function tablaDelDos(){
//     for(i = 0; i <= 10; i++){
//         console.log("2 x ", i, " = ", 2*i);
//     }
// }
// tablaDelDos();

// function suma(num1,num2){
//     var resultado = num1 + num2;
//     alert("El resultado es: " + resultado);
// }

// suma(5,30);

// function sumatoria(num1,num2){
//     var total = num1 + num2;
//     return 'La sumatoria es: ' + total;
// }
// alert(sumatoria(9,8));

// -------- this.
// var nombre, edad;

// function saludo (nombre, edad){
//     this.nombre = nombre;
//     this.edad = edad;
//     console.log("Hola, yo soy " + this.nombre, "mi edad es: " + this.edad);
// }

// saludo("gilberto","34");

// ---- 

// function diaActual(){
//     var fecha = new Date();
//     alert("Hoy es: " + fecha.getDate());
// }

// diaActual();

// determinar si es palindromo 
var texto;

texto = prompt("Escribe tu palabra para verifiar si es un palindromo");

function palindromo(texto){
    
  return texto.split("").reverse().join("");
}


if(palindromo(texto) === texto){
    alert("Tu palabra es un palíndromo");
} else {
    alert("Tu palabra no es un palíndromo");
}
// devuelva como cadena de texto si es par o impar
var number, resultado;

number = prompt("Ingresa un número para verificar si es par o impar");

function parOimpar(number){
    resultado = number % 2;
    return resultado;
}

if(parOimpar(number) === 0){
    alert("Tu número es par");
}else{
    alert("Tu número es impar");
}