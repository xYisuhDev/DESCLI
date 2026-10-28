const fecha = new Date(2025, 5, 15);
const mes = fecha.getMonth() + 1;
const anio = fecha.getFullYear();

document.write(`<p>Mes: ${mes}</p>`);
document.write(`<p>Año: ${anio}</p>`);
