let numero = Math.floor(Math.random() * 10) + 1;
console.log(numero);
var i = 0;

function adivina(){
    i = i + 1;
    let guess = Number(document.getElementById("number").value);
    if(guess === numero){
        document.getElementById("respuesta").innerText = "Felicidades, acertaste";
    }else{
        document.getElementById("respuesta").innerText = "Te la pelas";
    }
    if(i === 3){
        document.getElementById("boton").disabled=true;
    }
}