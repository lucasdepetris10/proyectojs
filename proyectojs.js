function calcularInteres(monto , cuotas){

    if( cuotas == 6){
        let interes = monto * 0.20;
        return interes
    }
    else if( cuotas == 12){
        let interes = monto * 0.70;
        return interes
    }
    else if( cuotas == 24){
        let interes = monto * 1.20;
        return interes
    }

}

let nombreCliente = prompt("Hola, nos gustaria que ingreses tu nombre:");

alert ("Te damos la bienvenida " + nombreCliente + " a nuestro sitio calculador de prestamos personales");

let seguirCalculando = "Si";

while (seguirCalculando == "Si"){
    for (let i=0; i<5; i=i+1){
    let monto = prompt("Ingrese el monto que desearias solicitar");
    monto = parseInt(monto);

    alert ("El monto que desear solicitar es " + monto)
    let cuotas = prompt("Ingrese la cantidad de cuotas: 6, 12 o 24");
    cuotas = parseInt(cuotas);

    alert ("La cantidad de cuotas seleccionada es " + cuotas)
    let total = monto + calcularInteres(monto , cuotas);

alert ("Tu prestamo quedaria " + total);

    seguirCalculando = prompt ("¿Quieres seguir calculando? Ingresa Si para volver a calcular o cualquier otro valor para salir.");
    break
    }
}

alert ("Muchas gracias por utilizar nuestro servicio!");


