let nombreIngresado = prompt("Ingrese su nombre")

//inicio
if (nombreIngresado == "") {
    nombreIngresado = alert("Error, ingresar un nombre")
    nombreIngresado = prompt("Ingrese su nombre")
    alert("Bienvenido " + nombreIngresado + "! " + "Haremos una prueba de tu conocimiento en biologia!")
} else if (true) {
    alert("Bienvenido " + nombreIngresado + "! " + "Haremos una prueba de tu conocimiento en biologia!")
}
//inicio

//pregunta 1
let pregunta1 = prompt(nombreIngresado + ", cual de los siguientes animales es un felino? \n tortuga \n perro \n gato ")
switch (pregunta1) {
    case "gato":
        alert("correcto, pasemos a la siguiente pregunta!")
        break;
    case "tortuga":
    case "perro":
        alert("incorrecto, pasemos a la siguiente pregunta")
        break;
    default:
        if (pregunta2 =!tortuga || perro || gato) {
            alert("ingrese un animal")
        }
}
//pregunta 1

//pregunta 2
let pregunta2 = prompt("cual de los siguientes animales es un reptil? \n escorpion \n conejo \n serpiente")
switch (pregunta2) {
    case "serpiente":
        alert("correcto, pasemos a la siguiente ADIVINANZA!")
        break;
    case "conejo":
    case "escorpion":
        alert("incorrecto, pasemos a la siguiente ADIVINANZA")
        break;
    default:
        if (pregunta2 = !escorpion || conejo || serpiente) {
            alert("ingrese un animal")
        }
}
//pregunta 2

//adivinanza 1
alert("recuerda solo escribir el nombre del animal!")
let adivinanza1 = prompt("antes huevecito, despues capullito, mas tarde como un pajarito, quien soy?")
let respuesta1 = "mariposa"

do {
     //let adivinanza1 = prompt("antes huevecito, despues capullito, mas tarde como un pajarito, quien soy?")
     if (adivinanza1 == respuesta1) {
        alert("correcto, pasemos a la segunda y ultima adivinanza!")
     } else {
        alert("incorrecto, pasemos a la segunda y ultima adivinanza")
      }
 }while (adivinanza1 !== respuesta1);
//adivinanza 1

 //adivinanza 2
 alert("recuerda solo escribir el nombre del animal!")
let adivinanza2 = prompt("canto en la orilla, vivo en el agua, no soy pescado ni cigarra, quien soy?")
let respuesta2 = "sapo"

do {
    // let adivinanza2 = prompt("canto en la orilla, vivo en el agua, no soy pescado ni cigarra, quien soy?")
     if (adivinanza2 == respuesta2) {
        alert("correcto, haz terminado el examen!")
     } else {
        alert("incorrecto, haz terminado el examen!")
      }
 }while (adivinanza2 == respuesta2);
//adivinanza 2




