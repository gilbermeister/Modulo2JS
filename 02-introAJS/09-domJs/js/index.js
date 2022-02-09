let txtNombre, añoNac, edad, añoActual, mesNac, mesActual, meses;

function capturaNombre(){
    txtNombre = document.getElementById('nombre');
    alert('Tu nombre es ' + txtNombre.value);
}

function calcularEdad(){
    let fecha = new Date();
    añoNac = Number(document.getElementById("fecha").value.slice(0,4));
    añoActual = fecha.getFullYear();
    mesNac = Number(document.getElementById("fecha").value.slice(5,7));
    //console.log(document.getElementById("fecha").value);
    mesActual = fecha.getMonth()+1;
    //console.log(fecha.getMonth());
    if(añoActual < añoNac){
        alert('Elige un año de nacimiento valido');
    }else if(mesNac>mesActual){
        edad = añoActual - añoNac -1;
        meses = 12 - 4 + mesActual;
        document.getElementById("edad").innerText = 'Tu edad es ' + edad + ' con ' + meses + ' meses';
    }else{
        
        edad = añoActual - añoNac;
        meses = mesActual - mesNac;
        document.getElementById("edad").innerText = 'Tu edad es ' + edad + ' con ' + meses + ' meses';
    }
    
}

document.getElementById("calcular").addEventListener('click', calcularEdad);

let control = 0;
function cambiarColor(){
    if(control == 0){
    document.getElementById("cuerpo").style.backgroundColor = "#b2dfdb";
    control = 1;
}else{
    document.getElementById("cuerpo").style.backgroundColor = "#90caf9";
    control = 0;
}
}