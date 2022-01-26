//1. Datos de entrada que necesito
//nombre apellido fecha de nacimiento y año actual, mostrar nombre y edad de la persona
var nombre;
var apellido;
var nacimiento;
var year;
var edad;
var mitad;
// var nombre, apellido, nacimiento, year, edad;
nombre = prompt('¿Cuál es tu nombre');
apellido = prompt('¿Cuál es tu apellido?'); 
nacimiento = prompt('¿Cuál es tu año de nacimiento?');//nacimiento = Number(prompt('¿Cuál es tu año de nacimiento?'));
year = prompt('¿Cuál es el año actual?')

//2. Qué tengo que hacer con esos datos
edad = year - nacimiento;
mitad = nacimiento / year;
//3. Cómo y qué tengo que mostrar
document.write('Hola ',nombre,' ',apellido,', tu edad es de ',edad,' años', ' la división arroja ',mitad);
//document.write(`Hola ${nombre} ${apellido} tu edad es de ${edad} años`)