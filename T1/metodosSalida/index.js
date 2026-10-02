
const alerta = document.getElementById("alerta")
const consola = document.querySelector("#consola")
const dom = document.querySelector("#dom")
const write = document.querySelector("#write")
const parrafo = document.querySelector("#parrafo") 

alerta.addEventListener('click', () => {
    alert("Esto es una alerta!")
})

consola.addEventListener('click', () => {
    console.log("Esto es un mensaje de consola!")
})

dom.addEventListener('click', () => {
    parrafo.innerHTML = "Has cambiado el DOM!"
})

write.addEventListener('click', () => {
    document.write("<h1>Has usado la función write!</h1>")
})
