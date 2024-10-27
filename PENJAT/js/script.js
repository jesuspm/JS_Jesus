//OBJETOS
const inputObj = document.getElementById("palabraOculta");
const botonComençaPartida = document.getElementById("botonStart");
const palabraSecretaChange = document.getElementById("palabraSecretaTexto");
const letraOn = document.getElementById("boton_1");

//VARIABLES
let palabraIntroduia;
let palabraSecreta = [];

let deshabilitarBoton;
let deshabilitarInput;
let deshabilitarLetra;
let letrasAbarraBaja;

let palabraActual = [];
let contador = 10;


deshabilitarBtn();
//Funcion para comenzar partida, funciona OK.
function start(){
    habilitarBtn();
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
    
    if (palabraSecreta.includes(lletraJugada)) {
        for(let i = 0; i < palabraSecreta.length; i++){
            if (palabraSecreta[i] === lletraJugada) {
                palabraActual[i] = lletraJugada;
                
                obj.disabled = true;
                obj.style.borderWidth = "1px";
                obj.style.borderStyle = "solid";
                obj.style.borderColor = "red"; // deshabilitas la letra cuando la usas.
                
                //AÑADIR LA LETRA EN EL ARRAY DE LAS
                enviarLetraAlHTML();
            }
        }
        
    }else if (!palabraSecreta.includes(lletraJugada)) {
        alert("Letra erronea!") // AÑADIR LO DE LAS IMAGENES POR CADA FALLO.
        obj.disabled = true; //Deshabilita la letra cuando la usas.
        
        obj.style.borderWidth = "1px";
        obj.style.borderStyle = "solid";
        obj.style.borderColor = "red";
        //Decrementamos el contador cuando fallamos una letra.
        contador--;
    
        //Filtro para cuando el contador llega a 0 y quiero que ejecute la funcion de verificarDerrota()
        if (contador == 0) {
            verificarDerrota();
        }

        // REVISAR: Lo hace bien, pero si seguimos dandole click a letras que no son sigue decrementando
    }

    //Si acierta todas las letras llamará a la siguiente función.
    verificarVictoria();
}

function enviarLetraAlHTML(){
    //Aqui obtenemos nuevamente el objeto palabraSecretaTexto que seria en el caso de introducir
    //CASA si pulsamos la A enviaLetra.textContent -> _A_A y con el .join ya que esto añade la letra al array.
    let enviaLetra = document.getElementById("palabraSecretaTexto");
    
    enviaLetra.textContent = palabraActual.join(' ');
}

// Verificar si el jugador ha ganado (si ya no hay "_")
function verificarVictoria() {
    if (palabraActual.join('') === palabraSecreta.join('')) {
        // Cambiar el color de fondo del h1 al acertar la palabra
        const h1Elemento = document.getElementById('palabraSecretaTexto');
        h1Elemento.style.backgroundColor = "lightgreen"; // Cambia el color de fondo del h1
        alert("¡Has acertado la palabra!");
    }
}

//Funcion para pintar el h1 cuando pierde la partida.
function verificarDerrota(){
     
    alert("Se han terminado las oportunidades!")
    const h1ElementoRojo = document.getElementById('palabraSecretaTexto');
    h1ElementoRojo.style.backgroundColor = "red";
    
}

//Funcion para deshabilitar los botones una vez comience la partida.
function deshabilitaboto(){
    deshabilitarBoton = botonComençaPartida.disabled = true;
    deshabilitarInput = inputObj.disabled = true;
}

function estiloLetras(){
    //Aqui aplicamos los estilos al darle a comenzar partida:
    obj.style.color = "black";
    obj.style.borderColor = "black";
}


// //Falta por implementar
// function imagenesColgado(){
//     let fotosColgado = document.getElementById('imagenesColgado')
// }

//Funcion para recorrer los botones de uno en uno mediante la id
function deshabilitarBtn(){
    //Creamos una constante con la parte que nunca cambia de la ID.
    const literslFijo = "boton_";

    //Luego haremos un bucle for que irá desde el 1 hasta el 27(que son la cantidad de boton_ 
    //que hay como id en el html y lo sumaremos de 1 en 1)
    for(let numObj = 1; numObj < 28; numObj++){
        //Concatenamos el "boton_" + 1 , "boton_"+2 etc..
        let literalObj = literslFijo + numObj;
        let button = document.getElementById(literalObj);
        button.disabled = true;
 
        //Estilos.        
        button.style.backgroundColor = "greenyellow";
        button.style.borderWidth = "1px";
        button.style.borderStyle = "solid";
        button.style.borderColor = "red";

    }
}
function habilitarBtn(){
    //Creamos una constante con la parte que nunca cambia de la ID.
    const literslFijo = "boton_";

    //Luego haremos un bucle for que irá desde el 1 hasta el 27(que son la cantidad de boton_ 
    //que hay como id en el html y lo sumaremos de 1 en 1)
    for(let numObj = 1; numObj < 28; numObj++){
        //Concatenamos el "boton_" + 1 , "boton_"+2 etc..
        let literalObj = literslFijo + numObj;

        let button = document.getElementById(literalObj);
        
        //Estilos
        button.style.backgroundColor = "greenyellow";
        button.style.borderWidth = "1px";
        button.style.borderStyle = "solid";
        button.style.borderColor = "black"

        //Lo deshabilitamos 1 a 1.
        button.disabled = false;
    }
}