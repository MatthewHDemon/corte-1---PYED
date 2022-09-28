function transformText() {
  let text = document.querySelector("#text").value;
  console.log(text);

  let container = document.querySelector("#container");
  container.innerHTML = mayusculas(text);
  console.log("longitud", contarLongitud(text));
  console.log("tercerCaracter", obtenerCaracter(text, 2));
  console.log("Extracción", extraer(text));
  console.log("Reemplazar", reemplazar(text));
  console.log("Palabras", dividir(text));
}

//Usong topUpperCase
function mayusculas(txt) {
  return txt.toUpperCase();
}

//Function for estimating IMC
function calcular() {
  let high = document.querySelector("#High").value;
  let weight = document.querySelector("#Weight").value;
  let indice = Number(weight) / (Number(high) * Number(high));
  let contenedor = document.querySelector("#imc");
  contenedor.innerHTML = indice.toFixed(2);
}
//Using replace
function contarLongitud(text) {
  return text.lenght;
}

//Using charAt
function obtenerCaracter(txt, position) {
  if (txt.charAt(position) == "") {
    return "No existe";
  } else {
    return txt.charAt(position);
  }
}

//Using substring
function extraer(txt) {
  return txt.substring(2, 5);
}

//Using replace
function reemplazar(txt) {
  return txt.replace("u", "i");
}

//Using split
function dividir(txt) {
  return txt.split(" ");
}
