//CONSTANTES DEL JUEGO
const NUM_MIN = 1;
const NUM_MAX = 20;
const NUM_JUGADES = 20;
const RESET_PUNTS = 0;

//VARIABLES DEL JUEGO
let numJugades = NUM_JUGADES;

//Lógica para el número random 
let numeroAleatorio = Math.random() * (NUM_JUGADES);
let numSecret = Math.floor(numeroAleatorio) + 1;
console.log(numSecret + " -> Numero secreto");

function reiniciaPartida(){
    numJugades = NUM_JUGADES;   
    document.getElementById("numComptador").textContent = numJugades;
    document.getElementById("num").value = "";
    
    numeroAleatorio = Math.random() * (NUM_JUGADES);
    numSecret = Math.floor(numeroAleatorio) +1;
    console.log("Nuevo numero secreto -> " + numSecret);
    
    document.getElementById("puntsTotals").textContent = RESET_PUNTS;
    
}
let contador = 0;

function jugada(){
    
    //Aqui recoge el numero que introducimos en el input.
    let numInput = document.getElementById("num").value; 
    
    if (numInput){
         
        if (numInput <=0) {
            alert("Introduce un numero valido");
        }
        
        if(numInput > numSecret){
            console.log("El numero a encertar es menor!")
            --numJugades;
        }
        else if(numInput < numSecret){
            console.log("El numero es mes gran")
            --numJugades;
        }
        else if(numInput < NUM_MIN){
            alert("El numero es incorrecto");
            --numJugades;
        }
        else if(numInput == numSecret){
            contador = contador + numJugades;
            document.getElementById("puntsTotals").textContent = contador;
            
            alert("Has encertat el numero secret que es: " + numSecret);
            
            numeroAleatorio = Math.random() * (NUM_JUGADES);
            numSecret = Math.floor(numeroAleatorio) +1;
            console.log("Nuevo numero secreto -> " + numSecret);
            
        }
        
        document.getElementById("numComptador").textContent = numJugades;
    }
    else{
        alert("¡El valor que has introduït no es valid!")
    } 

    
}