//CONSTANTES
const nombreObj = document.getElementById("nombreJugador");
const puntuacionMasAlta = document.getElementById("puntuacionMasAlta");


//LOCAL STORAGE
const nombreStorage = localStorage.getItem("Nombre")

//VARIABLES
let nombreJugadorActual = nombreObj.value;
nombreObj.textContent = nombreStorage;


puntuacionMasAlta.textContent = "JUGADOR: " + "- PUNTS: ";


