const nombreObj = document.getElementById("nombre");

const nombreStorage = localStorage.getItem("nombre")

nombreObj.textContent = nombreStorage;