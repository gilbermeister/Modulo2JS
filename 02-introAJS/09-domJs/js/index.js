let txtNombre, añoNac, edad, añoActual;

function capturaNombre(){
    txtNombre = document.getElementById('nombre');
    alert('Tu nombre es ' + txtNombre.value);
}

function calcularEdad(){
    let fecha = new Date();
    añoNac = Number(document.getElementById("fecha").value.slice(0,4));
    añoActual = fecha.getFullYear();
    if(añoActual<añoNac){
        alert('Elige un año de nacimiento valido');
    }else{
        edad = añoActual - añoNac;
        alert('Su edad es ' + edad + ' años'); 
    }
    
}

document.getElementById("calcular").addEventListener('click', calcularEdad);