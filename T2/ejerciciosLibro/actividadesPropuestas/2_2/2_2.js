let personas = [
  { Nombre: "Dimas", Edad: 28, Altura: 185 },
  { Nombre: "Pepe", Edad: 24, Altura: 168 },
  { Nombre: "María", Edad: 21, Altura: 165 },
];

const personasContainer = document.getElementById("personasContainer");

personas.forEach((persona) => {
  console.log(
    `El usuario ${persona.Nombre}, tiene ${persona.Edad} años y mide ${persona.Altura}cm`,
  );
  let nuevoH4 = document.createElement("h4");

  nuevoH4.textContent = `El usuario ${persona.Nombre}, tiene ${persona.Edad} años y mide ${persona.Altura}cm`;
  personasContainer.appendChild(nuevoH4);
});
