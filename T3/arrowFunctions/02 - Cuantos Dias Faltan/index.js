const fechaInput = document.getElementById("fecha");
const boton = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

const diasHasta = (fecha) => {
  const hoy = new Date();
  const destino = new Date(fecha);

  hoy.setHours(0, 0, 0, 0);
  destino.setHours(0, 0, 0, 0);

  const diferencia = destino - hoy;
  return Math.ceil(diferencia / (1000 * 60 * 60 * 24));
};

const hoy = new Date();
hoy.setDate(hoy.getDate() + 10);
fechaInput.value = hoy.toISOString().split("T")[0];

boton.addEventListener("click", () => {
  const valor = fechaInput.value;

  if (!valor) {
    resultado.textContent = "Debes seleccionar una fecha.";
    return;
  }

  const dias = diasHasta(valor);

  if (dias === 0) {
    resultado.textContent = "¡Hoy es ese día!";
  } else if (dias > 0) {
    resultado.textContent = `Faltan ${dias} días para esa fecha.`;
  } else {
    resultado.textContent = `Ese día ya pasó hace ${Math.abs(dias)} días.`;
  }
});

console.log(diasHasta("2026-12-25"));
