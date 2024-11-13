//DECLARAR OBJETOS
//BOTONES
const botonPartida = document.getElementById("botonPartida");
const botonBorrar = document.getElementById("botonBorrar");
const firefox = navigator.userAgent.toLowerCase().includes('firefox');

if(firefox){
    sessionStorage.setItem('browser', 'firefox');
}else{
    sessionStorage.setItem('browser', 'chrome');
}


//NOMBRES
const inputNombreJugador = document.getElementById("nombreJugador");


//INFO
const infoNavegadorObj = document.getElementById("infoNavegador");
const infoUrlObj = document.getElementById("infoUrl");
const infoPartidaActual = document.getElementById("infoPartida");
//DECLARAR EVENTOS

//La funciones en eventos van sin () ya que no estoy
//ejecutando la funcion solo la estamos llamando
botonPartida.addEventListener("click", comienzaPartida);
botonBorrar.addEventListener("click", borrarPartida);

//DECLARAR VARIABLES Y CONSTANTES
let finestra;
let puntos = 0;

let valorNombreJugador = inputNombreJugador.value;
let inforPartida = infoPartidaActual.value;


//<-- COOKIES -->

//Le pasamos tres parametros
function setCookie(nombre, valor, dias) {
    //Creamos una nueva instancia de la fecha actual para que quede reflejado cuando se ha creado la cookie.
    let fecha = new Date();
    //Aqui calculamos la fecha de expiración de la cookie
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000)); // Convierte días a milisegundos
    //convertimos la fecha de expiración en String
    let expiracion = "expires=" + fecha.toUTCString();
    //Creamos la cookie con la propiedad document.cookie
    document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/;samesite=Strict";
    
    //EJEMPLO de crearla con los parametros de la función:
    // setCookie("Nombre", valorNombreJugador, 7)
}

//Aquí para borrar la cookie le pasaremos simplemente el nombre que le hemos assignado en nuestro caso -> "Nombre"
function deleteCookie(nombre) {
    //Utilizaremos la propiedad de document.cookie y le pasaremos una fecha pasada para borrarla.
    document.cookie = nombre + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; secure; samesite=Strict";
    
}

function comienzaPartida(){
    if(inputNombreJugador.value){

        valorNombreJugador = inputNombreJugador.value;
        //Aqui abrimos juego.html con window.open para jugar en otra ventana.
        finestra = window.open("juego.html","juego","width=600,height=700"); //Abrirá una nueva ventana
        
        //Aqui creamos nuestra cookie, que tendra Como nombre: Nombre, Como valor: ValorNombreJugador y caducará en 7 dias.
        setCookie("Nombre", valorNombreJugador, 1);
        
        //Aqui le cambiamos el contenido a la id="infoPartida" para imprimir lo siguiente.
        infoPartidaActual.textContent = "NOM: " + valorNombreJugador + ", PUNTS: "+ puntos + ", ESTAT PARTIDA: En joc";
        
        
    }
    else{
        //En el caso de que no le pasemos ningún nombre en el input saldrá este alert.
        alert("Has de introduir un nom d'un jugador");
    }
}

function borrarPartida(){
    deleteCookie("Nombre");
    if (finestra) {
        finestra.close("juego.html");
    }
    infoPartidaActual.textContent = "No hi ha cap partida en joc";
    
    

}


//INFO NAVEGADOR, URL
function infoNavegador(){
    infoNavegadorObj.textContent = navigator.userAgent;

}
infoNavegador();

function infoURL(){
    const url = location.origin;
    console.log("Path", location.pathname);
    console.log("Origin", location.origin);
    console.log("Location",location.host);
    console.log("Href",location.href);
    
    infoUrlObj.textContent = location.origin;
}
infoURL();


