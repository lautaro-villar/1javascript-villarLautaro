let nombreIngresado = prompt("Ingrese su nombre")

if (nombreIngresado == "") {
    nombreIngresado = alert("Error, ingresar un nombre")
    nombreIngresado = prompt("Ingrese su nombre")
    alert("Bienvenido " + nombreIngresado + "! " + "Haremos una prueba de tu conocimiento en biologia!")
} else if (true) {
     alert("Bienvenido " + nombreIngresado + "! " + "Haremos una prueba de tu conocimiento en biologia!")
} 

   



let pregunta1 = prompt(nombreIngresado + ", cual de los siguientes animales es un felino? \n tortuga \n perro \n gato ")

switch (pregunta1) {
    case gato:
        alert("correcto, pasemos a la siguiente pregunta!")
        break;
    case tortuga:
    case perro:
alert("incorrecto, pasemos a la siguiente pregunta")
        break;
    default:
}

let pregunta2 = prompt("cual de los siguientes animales es un reptil? \n escorpion \n conejo \n serpiente")



