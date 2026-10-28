const tema = localStorage.getItem("tema");

if (tema === null) {
  localStorage.setItem("tema", "claro");
}

function cambiarTema(t) {
  t === "claro"
    ? localStorage.setItem("tema", "oscuro")
    : localStorage.setItem("tema", "claro");
}
console.log(tema);
cambiarTema(tema);
console.log(tema);
