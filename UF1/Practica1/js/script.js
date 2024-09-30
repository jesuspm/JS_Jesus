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

//Aquí reiniciamos todos los valores y los dejo por defecto.
function reiniciaPartida(){
    numJugades = NUM_JUGADES;   
    document.getElementById("numComptador").textContent = numJugades;
    document.getElementById("num").value = "";
    
    numeroAleatorio = Math.random() * (NUM_JUGADES);
    numSecret = Math.floor(numeroAleatorio) +1;
    console.log("Nuevo numero secreto -> " + numSecret);
    
    document.getElementById("puntsTotals").textContent = RESET_PUNTS;
    document.getElementById("boxNumero").textContent="?";
    document.getElementById("estadoPartida").style.backgroundColor = "transparent";
    document.getElementById("estadoPartida").textContent = "Comencem la partida";
}

//Aquí es donde almacenaré todos los puntos ganados de cada uno de los numeros secretos.
let contador = 0;

function jugada(){

    //Aqui recoge el numero que introducimos en el input.
    let numInput = document.getElementById("num").value; 
    
    if (numInput){
         
        if (numInput <=0) {
            alert("Introduce un numero valido");
        }
        else if(numInput > numSecret){
            document.getElementById("estadoPartida").textContent = "El numero a encertar es menor!";
            // console.log("El numero a encertar es menor!")
            --numJugades;
        }
        else if(numInput < numSecret){
            document.getElementById("estadoPartida").textContent = "El numero es mes gran!"
            --numJugades;
        }
        else if(numInput == numSecret){
            //Aquí se almacenan los puntos que seran la cantidad de jugadas que sobren despues de cada ronda.
            contador = contador + numJugades;

            //Lo que hacemos aqui es cambiar el contenido del h4 por el string que deseemos.
            document.getElementById("estadoPartida").textContent = "El número és correcte";

            //Aqui le hago el cambio de color(Mirar si se puede hacer por css directamente con el ID al acertar el numero) 
            document.getElementById("estadoPartida").style.backgroundColor = "green";

            //Aquí lo que hago es asignar los puntos del contador en el span con ID puntsTotals.
            document.getElementById("puntsTotals").textContent = contador;

            //Aqui lo que hago es cambiar el signo de ? por el numero secreto una vez que se cumpla la condicion.
            document.getElementById("boxNumero").textContent = numSecret;
            
            //Vuelvo a generar el numero aleatorio.
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