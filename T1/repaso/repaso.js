
// 7.1 - Modifica de forma dinámica el texto de un párrafo utilizando la propiedad InnerHTML al pulsar un botón

const boton = document.getElementById("boton");
const parrafo = document.getElementById("prueba")

if (boton) {
    boton.addEventListener("click", () => {
        parrafo.innerHTML = "¡Cambiando el contenido!"
    })}
else {
    alert("No se encontró el elemento!")
}

// 7.2 - Cambia dinámicamente la ruta de la imágen (atributo src) de un elemento <img> al hacer click sobre él:

const imagen = document.querySelector("#imagen");

if (imagen) {
    imagen.addEventListener("click", () => {
        if (imagen.src.match("green")) {
            imagen.src = "http://myfpschool.com/wp-content/uploads/2016/06/myblack.jpeg"
        } else {
            imagen.src = "http://myfpschool.com/wp-content/uploads/2016/06/mygreen.jpeg"
        }
    })
}