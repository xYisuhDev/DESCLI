const alumnos = [
  { nombre: "Ana", "1t": 7, "2t": 8, "3t": 9 },
  { nombre: "Luis", "1t": 4, "2t": 5, "3t": 6 },
  { nombre: "Marta", "1t": 3, "2t": 4, "3t": 2 },
  { nombre: "Pablo", "1t": 9, "2t": 10, "3t": 9 },
  { nombre: "Sara", "1t": 5, "2t": 4, "3t": 6 },
];

const tabla = document.getElementById("t-body");
const formAlumno = document.getElementById("form-alumno");
const aprobado = (nota) => nota >= 5;
const claseNota = (nota) => (aprobado(nota) ? "aprobado" : "suspenso");

function renderizarTabla() {
  tabla.innerHTML = "";

  alumnos.forEach((a) => {
    const media = (a["1t"] + a["2t"] + a["3t"]) / 3;
    let calificacion;
    if (media < 5) {
      calificacion = "Insuficiente";
    } else if (media >= 5 && media < 6) {
      calificacion = "Suficiente";
    } else if (media >= 6 && media <= 7) {
      calificacion = "Bien";
    } else if (media >= 7 && media < 9) {
      calificacion = "Notable";
    } else if (media >= 9 && media <= 10) {
      calificacion = "Sobresaliente";
    }

    tabla.innerHTML += `
      <tr class="tabla-alumno ${claseNota(media)}">
        <td>${a.nombre}</td>
        <td class="${claseNota(a["1t"])}">${a["1t"]}</td>
        <td class="${claseNota(a["2t"])}">${a["2t"]}</td>
        <td class="${claseNota(a["3t"])}">${a["3t"]}</td>
        <td class="${claseNota(media)}">${media.toFixed(2)}</td>
        <td>${calificacion}</td>
      </tr>
    `;
  });
}

function contarAprobados() {
  return alumnos.filter((alumno) =>
    aprobado((alumno["1t"] + alumno["2t"] + alumno["3t"]) / 3),
  ).length;
}

function mejorNota() {
  return Math.max(
    ...alumnos.flatMap((alumno) => [alumno["1t"], alumno["2t"], alumno["3t"]]),
  );
}

function mediaTrimestre(trimestre) {
  return (
    alumnos.reduce((total, alumno) => total + alumno[trimestre], 0) /
    alumnos.length
  );
}

function buscarAlumno(nombre) {
  const posicion = alumnos.findIndex(
    (alumno) => alumno.nombre.toLowerCase() === nombre.trim().toLowerCase(),
  );

  if (posicion === -1) {
    return null;
  }

  const alumno = alumnos[posicion];
  const media = (alumno["1t"] + alumno["2t"] + alumno["3t"]) / 3;
  return { alumno, media, posicion: posicion + 1 };
}

function anadirAlumno(evento) {
  evento.preventDefault();

  const nombre = document.getElementById("form-nombre").value.trim();
  const nota1 = Number(document.getElementById("form-nota-1t").value);
  const nota2 = Number(document.getElementById("form-nota-2t").value);
  const nota3 = Number(document.getElementById("form-nota-3t").value);

  alumnos.push({ nombre, "1t": nota1, "2t": nota2, "3t": nota3 });
  renderizarTabla();
  formAlumno.reset();
}

renderizarTabla();
formAlumno.addEventListener("submit", anadirAlumno);

document
  .getElementById("btn-contar-aprobados")
  .addEventListener("click", () => {
    document.getElementById("resultado-aprobados").textContent =
      `Hay ${contarAprobados()} alumnos aprobados.`;
  });

document.getElementById("btn-mejor-nota").addEventListener("click", () => {
  document.getElementById("resultado-mejor-nota").textContent =
    `La mejor nota es ${mejorNota().toFixed(2)}.`;
});

document.getElementById("btn-media-trimestre").addEventListener("click", () => {
  const trimestre = document.getElementById("trimestre-consulta").value;
  document.getElementById("resultado-media-trimestre").textContent =
    `La media del ${trimestre} es ${mediaTrimestre(trimestre).toFixed(2)}.`;
});

document.getElementById("btn-buscar-alumno").addEventListener("click", () => {
  const resultado = document.getElementById("resultado-alumno");
  const busqueda = buscarAlumno(
    document.getElementById("alumno-consulta").value,
  );

  if (!busqueda) {
    resultado.textContent = "No se ha encontrado ese alumno.";
    return;
  }

  const { alumno, media, posicion } = busqueda;
  resultado.textContent =
    `Posición: ${posicion}. Notas: 1ºT ${alumno["1t"]}, ` +
    `2ºT ${alumno["2t"]}, 3ºT ${alumno["3t"]}. Media: ${media.toFixed(2)}.`;
});
