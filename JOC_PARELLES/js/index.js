//DECLARAR OBJETOS
const botonPartida = document.getElementById("botonPartida");
const botonBorrar = document.getElementById("botonBorrar");
const nombreJugadorObjeto = document.getElementById("nombreJugador");
const infoNavegadorObj = document.getElementById("infoNavegador");
const infoUrlObj = document.getElementById("infoUrl");
//DECLARAR EVENTOS

// la funcion comienzaPartida sin () ya que no estoy ejecutando la funcion solo la estamos llamando

botonPartida.addEventListener("click", comienzaPartida);
botonBorrar.addEventListener("click", borrarPartida);

//DECLARAR VARIABLES Y CONSTANTES
let finestra;



//FUNCIONABILIDAD

function comienzaPartida(){
    if(nombreJugadorObjeto.value){
       finestra = window.open("juego.html","juego","width=400,height=400"); //Abrirá una nueva ventana
       
       localStorage.setItem("nombre","jesus");
    }
    else{
        alert("Has de introduir un nom d'un jugador");
    }
}

function borrarPartida(){
    finestra.close("juego.html");
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
