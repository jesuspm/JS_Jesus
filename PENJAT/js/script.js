//OBJETOS
const inputObj = document.getElementById("palabraOculta");
const botonComençaPartida = document.getElementById("botonStart");
const palabraSecretaChange = document.getElementById("palabraSecretaTexto");

//VARIABLES
let palabraSecreta;
let deshabilitarBoton;
let deshabilitarInput;
let letrasAbarraBaja;
let palabraActual = [];

//Funcion para comenzar partida, funciona OK.
function start(){
    palabraSecreta = inputObj.value;
    
    if (palabraSecreta) {
        // Comprobar si la palabra contiene algún número
        let contieneNumero = false;
        for (let i = 0; i < palabraSecreta.length; i++) {
            if (!isNaN(palabraSecreta[i])) { // Si encuentra un número, establece contieneNumero a true
                contieneNumero = true;
                break;
            }
        }
    
        if (!contieneNumero) { // Si no contiene números
            if (palabraSecreta.length > 3) { // Controlamos si la palabra es mayor que 3.
                console.log(palabraSecreta.split("")); // Separar la palabra en letras

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
    
    //Deshabilitar boton comença partida y input
    deshabilitarBoton = botonComençaPartida.disabled = true;
    deshabilitarInput = inputObj.disabled = true;

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

function palabraActualInicial(){
    for (let i = 0; i < palabraSecreta.length; i++) {
        palabraActual.push("_");
    }
    console.log(palabraActual);
}

function cambioDeLetras(){
    letrasAbarraBaja = palabraSecretaChange;
    letrasAbarraBaja.textContent = palabraActual.toString().replaceAll(",", "");
}


// function jugarLletra(obj){
//     let  lletraJugada = obj.textContent;
//     const aux = palabraSecreta.includes(lletraJugada);
//     const aux2 = palabraSecreta.indexof(lletraJugada);

//     if (palabraSecreta.includes(lletraJugada)) {
//         for(let i = 0; i < palabraSecreta.length; i++){
//             if (palabraSecreta[i] === lletraJugada) {
//                 palabraActual[i] = lletraJugada;
//             }
//         }
//         cambioDeLetras
//     }
// }
function deshabilitaboto(){
    const botoA = document.getElementById("boto_A");
    botoA.disabled = true;
}
