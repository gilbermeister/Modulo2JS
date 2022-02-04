//variables y entradas
var cantidad, nota = 0;

cantidad = Number(prompt("Ingrese la cantidad de notas a promediar"));

//logica
for(var i = 1; i <= cantidad; i++)
{
    nota = nota + Number(prompt(`Ingrese la nota ${i}`));
}

var promedio = nota / cantidad;
//salidas

alert(`El promedio de las ${cantidad} notas es: ${promedio}`)

/*
for(var i = 1; i <= cantidad; i++)
{
notas.push(Number(prompt(`Ingresa la nota ${i}`)));
sumatoria = sumatoria + notas[i-1];
}

*/