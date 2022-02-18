var cuentas = [
    { nombre:"Mali", saldo: 200, password: 'helloworld'},
    { nombre:"Gera", saldo: 290, password: 'l33t'},
    { nombre:"Maui", saldo: 67, password: '123'}
]

var nombreCliente, passCliente, access, parametro,index, monto;
var cliente = {};
var count = 0;

function CapturaCliente(){
    nombreCliente = document.getElementById('nombreCuenta').value;
    passCliente = document.getElementById('passwordCuenta').value;
    access = false;

    for(i = 0; i < cuentas.length; i++){
        if(nombreCliente === cuentas[i].nombre){
            if(passCliente === cuentas [i].password){
                access = true;
                index = i;
                console.log("Access granted"); 
                document.getElementById('greeting').innerText = "Bienvenido " + nombreCliente;
                cliente = {
                    nombre: cuentas[i].nombre,
                    saldo: cuentas[i].saldo
                }
            }else{
                count = count + 1;
            }
    }
}
if(access === false && count < 3){
    alert("La contraseña es incorrecta, intenta nuevamente.");
}else if(access === false){
    alert("Superaste el máximo número de intentos");
    document.getElementById("enviar").disabled = true;
}
return cliente;
}

function CapturarDatos(id){
    //variables locales
    let imprimirTotal = document.getElementById('total');
    let operaciones = document.getElementById('operaciones');
    let array = [];
    let total;
    if(id==="saldo"){
        document.getElementById("saldo").innerText = "Tu saldo es: "+cuentas[index].saldo;
        parametro="";
    }else if(id==="ingresar"){
        document.getElementById("saldo").innerText = "Captura el monto a ingresar y da Enter";
        parametro = "ingresar"
    }else if(id==="retirar"){
        document.getElementById("saldo").innerText = "Captura el monto a retirar y da Enter";
        parametro = "retirar"
    }else if(id==="enter"){
        switch(parametro){
            case "ingresar":
                monto = Number(imprimirTotal.innerText);
                cuentas[index].saldo = cuentas[index].saldo + monto;
                if(cuentas[index].saldo>=10 && cuentas[index].saldo<=990){
                    document.getElementById("saldo").innerText = "Monto ingresado: "+monto+" Nuevo saldo: "+cuentas[index].saldo;
                    imprimirTotal.innerText = 0;
                }else{
                    alert("Tu operación no puede ser procesada con ese monto");
                    cuentas[index].saldo = cuentas[index].saldo - monto;
                    imprimirTotal.innerText = 0;
                }    
                break;
            case "retirar":
                monto = Number(imprimirTotal.innerText);
                cuentas[index].saldo = cuentas[index].saldo - monto;
                if(cuentas[index].saldo>=10 && cuentas[index].saldo<=990){
                    document.getElementById("saldo").innerText = "Monto retirado: "+monto+" Nuevo saldo: "+cuentas[index].saldo;
                    imprimirTotal.innerText = 0;
                }else{
                    alert("Tu operación no puede ser procesada con ese monto");
                    cuentas[index].saldo = cuentas[index].saldo + monto;
                    imprimirTotal.innerText = 0;
                }
                break;
            default:
                break;
        }

    }else if(id==="C"){
        operaciones.innerText = '';
        imprimirTotal.innerText = 0;
    }else if(id==="salir"){
        document.getElementById('greeting').innerText = "¡Hasta pronto!";
        document.getElementById("saldo").innerText = "";
        operaciones.innerText = '';
        imprimirTotal.innerText = 0;
        document.getElementById("enviar").disabled = true;
    }else{
        numero = Number(id);
        if(imprimirTotal.innerText === '0' || operador ===1){
            imprimirTotal.innerText=numero;
            operador = 0;
        }else{
        imprimirTotal.innerText=imprimirTotal.innerText + numero;
        }
    }
}