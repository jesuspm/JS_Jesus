document.addEventListener("DOMContentLoaded", function() {
    // CONSTANTES
    const puntuacionMasAlta = document.getElementById("puntuacionMasAlta");
    const puntosActuales = document.getElementById("puntosJugador");
    const nombreObj = document.getElementById("nombreJugador");
    const botonInstrucciones = document.getElementById("instrucciones");
    const cerrarNormas = document.getElementById("cerrarNormas");
    
    // Obtener la preferencia de navegador de sessionStorage
    const browser = sessionStorage.getItem('browser');

    // Aplicar un color de fondo diferente según el navegador
    if (browser === 'firefox') {
        document.body.style.backgroundColor = '#f08b19'; // Color para Firefox
    } else {
        document.body.style.backgroundColor = '#008F39'; // Color para otros navegadores
    }
    // VARIABLES
    let puntos = 0;
    let seleccionados = [];
    let revelados = 0; // Contador de parejas encontradas
    let ventana;
    let normas;
    
    // Asocia el evento click al botón
    botonInstrucciones.addEventListener("click", mostrarNormas);
    
    // Define la función mostrarNormas
    function mostrarNormas() {
        const normas = window.open("normas.html", "Normas", "width=600,height=700"); // Abrirá una nueva ventana
    }



    //
    // Función para obtener el valor de una cookie por su nombre
    function obtenerCookie(nombre) {
        const cookies = document.cookie.split("; ");
        for (let cookie of cookies) {
            const [key, value] = cookie.split("=");
            if (key === nombre) {
                return decodeURIComponent(value);
            }
        }
        return null;
    }

    // Función para mostrar el valor de la cookie "Nombre" en el elemento HTML
    function mostrarCookie() {
        const nombreCookie = obtenerCookie("Nombre");
        if (nombreCookie) {
            nombreObj.textContent = `${nombreCookie}`;
            puntuacionMasAlta.textContent = `JUGADOR: ${nombreCookie} PUNTOS: ${puntos} puntos`;
        } else {
            nombreObj.textContent = "No se encontró la cookie 'Nombre'.";
        }
    }

    // Llamar a la función para mostrar la cookie
    mostrarCookie();

    // Logica del juego
    const letras = "ABCDEFGHIJ"; // Letras que usaremos para 10 pares
    const pares = letras.repeat(2).split(''); // Crea una lista con pares ordenados

    const cuadraditos = document.querySelectorAll(".cuadradito");

    // Asignar cada letra a un cuadradito y agregar evento de clic
    cuadraditos.forEach((cuadrado, index) => {
        cuadrado.dataset.letra = pares[index]; // Asignación ordenada, no aleatoria

        cuadrado.addEventListener("click", function() {
            if (cuadrado.classList.contains("revelado") || seleccionados.length === 2) {
                return; // Evita clic en un cuadrado ya revelado o cuando hay dos seleccionados
            }

            // Revelar el cuadrado y mostrar la letra
            cuadrado.classList.add("revelado");
            cuadrado.textContent = cuadrado.dataset.letra;
            seleccionados.push(cuadrado);

            // Si hay dos seleccionados, verificar si son pareja
            if (seleccionados.length === 2) {
                setTimeout(compararSeleccionados, 1000); // Espera 1 segundo antes de comparar
            }
        });
    });

    function compararSeleccionados() {
        const [cuadrado1, cuadrado2] = seleccionados;

        if (cuadrado1.dataset.letra === cuadrado2.dataset.letra) {
            // Son pareja correcta
            puntos += 10; // Sumar 10 puntos por una pareja correcta
            revelados += 2; // Incrementar el contador de parejas reveladas

            if (revelados === cuadraditos.length) {
                ventana = window.open("victoria.html","PartidaWin","width=600,height=700"); //Abrirá una nueva ventana

            }
        } else {
            // No coinciden, ocultar nuevamente
            puntos -= 3; // Restar 3 puntos si no coinciden
            cuadrado1.classList.remove("revelado");
            cuadrado2.classList.remove("revelado");
            cuadrado1.textContent = "";
            cuadrado2.textContent = "";
        }

        // Actualizar puntos en la pantalla
        puntosActuales.textContent = `PUNTOS: ${puntos}`;
        seleccionados = []; // Reiniciar la selección
    }
});
