//OBJETOS
const inputObj = document.getElementById("palabraOculta");
const botonComençaPartida = document.getElementById("botonStart");
const palabraSecretaChange = document.getElementById("palabraSecretaTexto");

//VARIABLES
let palabraIntroduia;
let palabraSecreta = [];
let deshabilitarBoton;
let deshabilitarInput;
let letrasAbarraBaja;
let palabraActual = [];

//Funcion para comenzar partida, funciona OK.
function start(){
    palabraIntroduia = inputObj.value.toUpperCase();
    
    if (palabraIntroduia) {
        // Comprobar si la palabra contiene algún número
        let contieneNumero = false;
        for (let i = 0; i < palabraIntroduia.length; i++) {
            if (!isNaN(palabraIntroduia[i])) { // Si encuentra un número, establece contieneNumero a true
                contieneNumero = true;
                break;
            }
        }
    
        if (!contieneNumero) { // Si no contiene números
            if (palabraIntroduia.length > 3) { // Controlamos si la palabra es mayor que 3.
                palabraSecreta = palabraIntroduia.split("");
                console.log(palabraSecreta); // Separar la palabra en letras

                palabraActualInicial();


            } else {
                alert("Has de introduïr una paraula amb més de 3 lletres.");
            }
        } else {
            alert("No pots introduir números, només lletres.");
        }
    } else {
        alert("No has introduït cap paraula.");
    }

    //Llamada a la función que cambia las letras a _ _ _ _
    cambioDeLetras();
    //Llamada a la función que deshabilita los botones.
    deshabilitaboto();

}
//Funciona ok
function showPassword(){
    let x = document.getElementById("palabraOculta");
    
    if (x.type === "password") {
        x.type = "text";
    }else {
        x.type = "password";
    }
}

//Transorma la palabra y hace un push al array creado en la global.
function palabraActualInicial(){
    for (let i = 0; i < palabraSecreta.length; i++) {
        palabraActual.push("_");
    }
    console.log(palabraActual);
}

//Cambia el array palabraActual que viene por defecto [_,_,_,] a -> _ _ _ gracias al replaceAll(",", "")
function cambioDeLetras(){
    letrasAbarraBaja = palabraSecretaChange;
    letrasAbarraBaja.textContent = palabraActual.toString().replaceAll(",", "");
}



function jugarLletra(obj){ //le pasamos como parametro obj que hace referencia a cada this de las letras.
    let lletraJugada = obj.textContent; // variable donde almacenamos el contenido de cada boton.
    
    // const aux = palabraSecreta.includes(lletraJugada);
    // console.log(aux);
    
    // const aux2 = palabraSecreta.indexof(lletraJugada);
    // console.log(aux2);

    if (palabraSecreta.includes(lletraJugada)) {
        for(let i = 0; i < palabraSecreta.length; i++){
            if (palabraSecreta[i] === lletraJugada) {
                palabraActual[i] = lletraJugada;
                //FALTA POR AÑADIR LA LETRA EN EL ARRAY DE LAS _ _ _ _ 
            }
        }
        
    }else{
        alert("Letra erronea!") // AÑADIR LO DE LAS IMAGENES POR CADA FALLO.
    }
    
}

//Funcion para deshabilitar los botones una vez comience la partida.
function deshabilitaboto(){
    deshabilitarBoton = botonComençaPartida.disabled = true;
    deshabilitarInput = inputObj.disabled = true;
}
