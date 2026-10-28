function añadirTarea(text) {
  const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
  tareas.push(text);
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

function verTareas() {
  console.log(JSON.parse(localStorage.getItem("tareas")) || []);
}

añadirTarea("Arreglar bugs");
verTareas();
