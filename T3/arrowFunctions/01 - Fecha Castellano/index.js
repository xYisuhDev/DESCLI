const fecha = new Date();

const fechaCastellano = fecha.toLocaleDateString("es-ES", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

const resultado = document.getElementById("resultado");
const texto =
  fechaCastellano.charAt(0).toUpperCase() + fechaCastellano.slice(1);

resultado.textContent = texto;
console.log(texto);
