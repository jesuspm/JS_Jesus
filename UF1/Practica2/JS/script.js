function ejercicio1(){
   let numero = prompt("Introdueix un numero");
    
   if(Number(numero)){
       console.log("Es un numero"); 
    }else{
        console.log("No es un numero");
    }
}

// Aquí le paso por parametro x que más hacia adelante le aplicaremos un valor.
function ejercicio2(x){    
    if (Number.isInteger(x)){
        return 'Es entero';
    }else{
        return 'Tiene decimales'
    }
}

//Aquí lo que hacemos es hacer un console.log llamando a la funcion "ejercicio2" y pasandole por 
// parametro un numero, en el caso de que sea entero retornará un String o en el caso de que sea
//un numero con decimales retornará el String asociado.
console.log(ejercicio2(0.1)); // entrará en el else y retornará el string.
console.log(ejercicio2(10)); //Entrará en el if y retornará el string.

function ejercicio3(){
    let input = prompt("Introduce el valor que quieras convertir");
    let operacionDeCaF = input * 9 / 5 + 32;
    console.log("El valor: ºC " + input + " de ºC a ºF es -> " + operacionDeCaF);
    
}

function ejercicio3n(){
    let input = prompt("Introduce el valor que quieras convertir");
    let operacionDeFaC = input-32;
    let operacionDeFaC2 = operacionDeFaC * 5 /9;
    console.log("El valor: ºF " + input + " de ºF a ºC es -> " + operacionDeFaC2);
}

function ejercicio4(){
    let precioPorMinuto = 0.05;
    let precioInicialPorConexion = 0.10;  

    let minutos = prompt("Introduce los minutos totales de la llamada"); // -> 10
    let segundos = prompt("Introduce los segundos totales de la llamada"); // ->60

    //Aqui coniverto los valores del prompt que por defecto son STRING los convierto a numeros.
    minutos = parseInt(minutos);
    segundos = parseInt(segundos);
    
    //Aqui hago el calculo de segundos a minutos
    let calculoDeSegundoAMinutos = minutos + (segundos / 60); // 10 + 60/60 = 11
        
    //Y aquí calculamos el precio total de la llamada aplicando los precios que nos indica el enunciado.
    let precioTotalLlamada = (calculoDeSegundoAMinutos * precioPorMinuto) + precioInicialPorConexion; // 11 * 0.05 + 0.10 = 0.65
    console.log("Duración llamada: " + minutos + " Minutos " + "Precio a pagar: " + precioTotalLlamada + " €");

}

function ejercicio5(){
    
    let entrada = prompt("introduce 5 numeros");
    
    entrada = parseInt(entrada);
    
    let numerosArray = [];
    entrada.push(numerosArray);

    console.log(numerosArray);
}