function transformText() {
    let text=document.querySelector("#text").value;
    console.log(text)

    let container=document.querySelector("#container");
    container.innerHTML= mayusculas(text);
    console.log("longitud", contarLongitud(text))
    console.log("tercerCaracter", obtenerCaracter(text, 2));
    console.log("Extracción", extraer(text));
    console.log("Reemplazar", reemplazar(text));
    console.log("Palabras", dividir(text));
}

function mayusculas(txt) {
    return txt.toUpperCase();
}

function calcular() {
    let high=document.querySelector("#High").value;
    let weight=document.querySelector("#Weight").value;
    let indice=Number(weight)/Number(high)*Number(high);
    let contenedor=document.querySelector("#imc");
    contenedor.innerHTML= indice;
}

function contarLongitud(text) {
    return text.lenght;
}

function obtenerCaracter(txt, position) {

    if(txt.charAt(position)=="") {
        return "No existe";
    }
    else {
        return txt.charAt(position);
    }

}

function extraer(txt) {
    return txt.substring(2,5)
}

function reemplazar(txt) {
    return txt.replace("u", "i")
}

function dividir(txt) {
    return txt.split(" ")
}