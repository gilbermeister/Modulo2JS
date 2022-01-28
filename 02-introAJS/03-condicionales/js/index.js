//variables
var nombreCompleto, nacimiento, year, edad, msg, cantidadCaracteres;
nombreCompleto = prompt('Ingresa tu nombre completo').toUpperCase().trim(); //trim corta los espacios en los extremos del string
nacimiento = Number(prompt('Ingresa tu año de nacimiento'));
year = Number(prompt('Ingresa el año actual'));

//cantidad de caracteres 
cantidadCaracteres = nombreCompleto.length;
console.log(cantidadCaracteres);

if(nacimiento > year){
    msg = "El año de nacimiento no puede ser mayor al actual";
} else {
if(nombreCompleto != '' && nacimiento != 0 && year != 0){



//Proceso lógico
edad =  year - nacimiento;
if(edad>=18){
    document.write(`Hola ${nombreCompleto}, eres mayor de edad`);
} else {
    document.write(`Hola ${nombreCompleto}, NO eres mayor de edad`);
}

//Anidados
if(edad<=12){
    msg = `Hola ${nombreCompleto}, eres un niño`;
} else if(edad > 12 && edad < 18){
    msg = `Hola ${nombreCompleto}, eres un adolescente`;
} else if(edad >= 18 && edad <=65){
    msg = `Hola ${nombreCompleto}, eres un adulto`;
} else {
    msg = `Hola ${nombreCompleto}, eres un anciano`;
}
}
else{
    msg = 'No ingresaste correctamente los datos';
}
}

//salida de datos
alert(msg);

var verduras = ["cebolla", "perejil", "tomate", "calabaza", "broccoli"];
alert(verduras.slice(1,3));