//DECLARAR OBJETOS
//BOTONES
const botonPartida = document.getElementById("botonPartida");
const botonBorrar = document.getElementById("botonBorrar");

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
let valorNombreJugador = inputNombreJugador.value;
let puntos = 0;
let inforPartida = infoPartidaActual.value;


//FUNCIONABILIDAD
function comienzaPartida(){
    if(inputNombreJugador.value){
        finestra = window.open("juego.html","juego","width=400,height=400"); //Abrirá una nueva ventana
        
        //Guardamos el nombre en localStorage
        localStorage.setItem("Nombre",valorNombreJugador);

        //Aqui mostramos el nombre en el <p id="infoPartida">
        infoPartidaActual.textContent = "NOM: " + valorNombreJugador + ", PUNTS: "+ puntos + ", ESTAT PARTIDA: En joc";
       
    }
    else{
        alert("Has de introduir un nom d'un jugador");
    }
}

function borrarPartida(){
    //Para eliminar el localStorage cuando le demos al boton borrarPartida
    localStorage.removeItem("Nombre");
    finestra.close("juego.html");
    infoPartidaActual.textContent = "No hi ha cap partida en joc";


}

function infoNavegador(){
    const color = "orange";

    const usrAgent = navigator.userAgent;
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
