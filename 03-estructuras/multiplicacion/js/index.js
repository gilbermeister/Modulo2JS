let numero1, numero2;
let resultado = 0;

numero1 = Number(prompt("Dame el primer numero a multiplicar"));
numero2 = Number(prompt("Dame el segundo numero a multiplicar"));

for(i = 0; i < numero1; i++){
    resultado = resultado + numero2;
}

document.write(resultado);