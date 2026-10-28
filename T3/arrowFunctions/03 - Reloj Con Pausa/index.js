const horaElemento = document.getElementById("hora");
const iniciarBtn = document.getElementById("iniciar");
const pausarBtn = document.getElementById("pausar");

let reloj = null;

const mostrarHora = () => {
  const horaActual = new Date();
  horaElemento.textContent = horaActual.toLocaleTimeString("es-ES");
};

const iniciarReloj = () => {
  if (reloj) return;

  mostrarHora();
  reloj = setInterval(mostrarHora, 1000);
};

const pausarReloj = () => {
  if (!reloj) return;

  clearInterval(reloj);
  reloj = null;
};

iniciarBtn.addEventListener("click", iniciarReloj);
pausarBtn.addEventListener("click", pausarReloj);

mostrarHora();
