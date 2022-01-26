//variables
var nombreCompleto, nacimiento, year, edad;
nombreCompleto = prompt('Ingresa tu nombre completo');
nacimiento = Number(prompt('Ingresa tu año de nacimiento'));
year = Number(prompt('Ingresa el año actual'));

if(nombreCompleto != null && nacimiento != 0 && year != 0){



//Proceso lógico
edad =  year - nacimiento;
if(edad>=18){
    document.write(`Hola ${nombreCompleto}, eres mayor de edad`);
} else {
    document.write(`Hola ${nombreCompleto}, NO eres mayor de edad`);
}

//Anidados
if(edad<=12){
    alert(`Hola ${nombreCompleto}, eres un niño`);
} else if(edad > 12 && edad < 18){
    alert(`Hola ${nombreCompleto}, eres un adolescente`);
} else if(edad >= 18 && edad <=65){
    alert(`Hola ${nombreCompleto}, eres un adulto`);
} else {
    alert(`Hola ${nombreCompleto}, eres un anciano`);
}
}else{
    alert('No ingresaste correctamente los datos')
}