/*/variables y entradas
var numero, sumatoria = 0;

//logica
do {
    numero = Number(prompt("Ingresa un número para continuar o un negativo para finalizar"));
    if(numero > 0)
    {sumatoria = sumatoria + numero;}
} while(numero > 0)

//salidas

alert(`La sumatoria de los número es ${sumatoria}`);


while(){

}
*/

//variables y entradas
var jugador1, jugador2, tirada1, tirada2, winner, control = 0;

//logica
jugador1 = prompt("Jugador 1, ¿cuál es tu nombre?");
jugador2 = prompt("Jugador 2, ¿cuál es tu nombre?");

while(control < 1){
    tirada1 = prompt(`${jugador1}, ¿piedra, papel o tijera?`);
    tirada2 = prompt(`${jugador2}, ¿piedra, papel o tijera?`);
    
    if(tirada1.toUpperCase() === "PIEDRA" && tirada2.toUpperCase() === "PAPEL"){
        winner = jugador2;
        control = 1;
    }else if(tirada1.toUpperCase() === "PIEDRA" && tirada2.toUpperCase() === "TIJERA"){
        winner = jugador1;
        control = 1;
    }else if(tirada1.toUpperCase() === "PAPEL" && tirada2.toUpperCase() === "PIEDRA"){
        winner = jugador1;
        control = 1;
    }else if(tirada1.toUpperCase() === "PAPEL" && tirada2.toUpperCase() === "TIJERA"){
        winner = jugador2;
        control = 1;
    }else if(tirada1.toUpperCase() === "TIJERA" && tirada2.toUpperCase() === "PAPEL"){
        winner = jugador1;
        control = 1;
    }else if(tirada1.toUpperCase() === "TIJERA" && tirada2.toUpperCase() === "PIEDRA"){
        winner = jugador2;
        control = 1;
    }else{
        alert("Empate, tira de nuevo");
        control = 0;
    }
}

//salidas
alert(`El ganador es ${winner}`);