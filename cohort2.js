
// alert("Hola");
document.write("Escuela de artes y letras");
console.log("Martes 13");
document.getElementById("cuadro1").innerHTML="nombre";

// Ingresar nombre
let name=prompt("Por favor escriba su nombre");
alert("Hola " + name);

// Ingresar edad
let age=prompt("Escriba su edad");

// Edad en 10 años
let FutureAge=parseInt(age)+10;
// alert("En 10 años tendras: " + FutureAge);

// Edad pasada
let pastAge=parseInt(age)-10;
// alert("hace 5 años tu edad era: " + pastAge);


// Triple edad
let tripleEdad=Number(age)*3;
// alert("Mi edad tiple sería: " + tripleEdad);

// Mitad de edad
let halfAge=Number(age)/2;
// alert("La mitad de mi edad sería: " + halfAge);

//Si su edad es par o impar
if(age % 2==0) {
    alert("Su edad es par")
}
else {
    alert("Su edad es impar")
}

// Si es menor o mayor de edad
if(age > 18) {
    alert("Eres mayor de edad")
}

else {
    alert("Eres menor de edad")
}
