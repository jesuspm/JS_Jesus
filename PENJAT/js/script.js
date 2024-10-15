//OBJETOS
const inputObj = document.getElementById("palabraOculta");
const botonComençaPartida = document.getElementById("botonStart");
const palabraSecretaChange = document.getElementById("palabraSecretaTexto");

//VARIABLES
let palabraSecreta;
let deshabilitarBoton;
let palabraSecretBarraBaja; // TERMINAR DE AÑADIRLA
let palabraActual = [];

//Funcion para comenzar partida
function start(){
    const inputObj = document.getElementById('palabraOculta'); // Obtén el input del DOM
    let palabraSecreta = inputObj.value;

    if (palabraSecreta) {
        // Comprobar si la palabra contiene algún número usando isNaN()
        if (isNaN(palabraSecreta)) { //Controlamos que sea palabra, si es un numero saltará al else, ya que isNaN es False por defecto, y si se cumple siendo TRUE pasará añ else.
            if (palabraSecreta.length > 3) { //Controlamos si la palabra es mayor que 3.
                console.log(palabraSecreta);
                console.log(palabraSecreta.split(""));// con el split lo que hacemos es separar la palabra 
            } else {
                alert("Has de introduïr una paraula amb més de 3 lletres.");
            }
        } else {
            alert("No pots introduir números, només lletres.");
        }
    } else {
        alert("No has introduït cap paraula.");
    }
}

function palabraActualInicial(){
    
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

function jugarLletra(obj){
    let  lletraJugada = obj.textContent;
    console.log(lletraJugada);
}
function deshabilitaboto(){
    const botoA = document.getElementById("boto_A");
    botoA.disabled = true;
}
