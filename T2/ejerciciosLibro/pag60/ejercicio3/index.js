const dato1 = "Ronaldo" + 5 + 5;
const dato2 = 5 + 5 + " Ronaldo";

document.write(`<p>dato1: ${dato1}</p>`);
document.write(`<p>dato2: ${dato2}</p>`);
document.write(
  `<p>Explicación: primero se concatena "Ronaldo" con 5, y luego con otro 5, mientras que en el segundo caso primero se suman 5 + 5 y después se concatena con " Ronaldo".</p>`,
);
