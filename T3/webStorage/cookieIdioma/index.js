const cookieIdioma = "idioma=es; max-age=604800; path=/";

document.cookie = cookieIdioma;

function leerCookie(cookieName) {
  const pares = document.cookie.split("; ");
  console.log(pares);
  let valor = null;

  pares.forEach((element) => {
    const partes = element.split("=");

    if (partes[0] == cookieName) {
      valor = decodeURIComponent(partes[1]);
    }
  });

  return valor;
}

console.log(leerCookie("idioma"));
