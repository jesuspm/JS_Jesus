//Variables
let palabraSecreta;

//OBJETOS


function showPassword(){
    let x = document.getElementById("palabraOculta");
    console.log(x);
    if (x.type === "password") {
        x.type = "text";
    }else {
        x.type = "password";
    }
}

//Funcion para comenzar partida
function start(){
    palabraSecreta = inpuObj.value;

    if (palabraSecreta) {
        if (palabraSecreta.length > 3) {
            console.log(palabraSecreta);
            console.log(palabraSecreta.split(""));
        }else{
            alert("Has de introduïr una paraula amb més de 3 lletres.")
        }
    }else{
        alert("No has introduït cap paraula");
    }
}
