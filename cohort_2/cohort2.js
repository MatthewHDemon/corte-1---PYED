
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

// arrays

let colores = ["Azul", "Amarillo", "Negro", "Blanco"]

colores[2] //Negro

let auto = {
    "brand": "BMW",
    "tyres": 4,
    "circulation": true,
    "owner": null
}

auto.tyres // 4

let vehiculs= [
    {
        "brand":"audi",
    },
    {
        "brand":"chevrolet",
    }
]

let animals= [
    {
        "animal":"bird"
    },
    {
        "animal":"tiger"
    },
    {
        "animal":"fox"
    },
    {
        "animal":"whale"
    },
    {
        "animal":"elephant"
    }
]

let countries= [
    {
        "name": "Colombia" ,
        "capital": "Bogotá" ,
        "kilometers": 1139000,
        "language": "Español",
        "PIB": 271.3
    },
    {
        "name": "Canada" ,
        "capital": "Ottawa" ,
        "kilometers": 9985,
        "language": "Ingles" ,
        "PIB": 1682.943,
    }
]


let singers= [
    {
        "name": "Ed Sheeran",
        "nacionality": "Halifax, Reino Unido",
        "musical_genre": "Pop",
        "songs": [
            {
                "name": "Photograph",
                "views": "15704439"
            },
            {
                "name": "Thinking Out Loud",
                "views": "3496943672"
            },
            {
                "name": "Shape of You",
                "views": "5805662660"
            },
        ]
    },
    {
        "name": "Donald Glover ",
        "nacionality": "American",
        "musical_genre": "hip-hop/rap",
        "songs": [
            {
                "name": "Redbone",
                "views": "577327853"
            },
            {
                "name": "This Is America",
                "views": "852552728"
            },
            {
                "name": "3005",
                "views": "223163311"
            },
        ]
    },
    {
        "name": "Rihana",
        "nacionality": "Barbadense",
        "musical_genre": "Electronic dance",
        "songs": [
            {
                "name": "This Is What You Came For",
                "views": "2595159842 "
            },
            {
                "name": "Diamonds",
                "views": "2000463062"
            },
            {
                "name": "Man Down",
                "views": "875346598"
            }
        ]
    }
]

console.log(singers)


