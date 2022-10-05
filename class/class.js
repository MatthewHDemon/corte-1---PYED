let animales=[
    "jirafa", "perro", "gato", "ganso", "escorpion", "puma", "leon", "cerdo", "tortuga", "hormiga",
     "cocodrilo", "camaleón", "conejo", "venado", "cabra", "toro", "koala", "gallina", "elefante"
]



function mostrarAnimales() {
    for (let i = 0; i < animales.length; i++) {
        const animal= animales[i];
        let contenedor=document.querySelector("#animales");
        let li=document.createElement('li');
        li.textContent= animal;
        contenedor.appendChild(li);
    }

}

mostrarAnimales()


let objetosAnimales=[
    {
        nombre:"Gato",
        imagen:"https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/social_share_large/public/01_%C2%BFQu%C3%A9-puedo-hacer-si-mi-gato-est%C3%A1-triste-.png?itok=w67Nhubc",
        peso_promedio:"de 4 a 5 kg",
        número_de_patas: 4,
        color_predominante:"Marrón",
        alimentación: "Carnívoro"
    },
    {
        nombre:"Perro",
        imagen:"https://www.webconsultas.com/sites/default/files/styles/wc_adaptive_curiosidad__small/public/articulos/perro-infecciones.jpg",
        peso_promedio:"de 14 a 27 kg",
        número_de_patas:4,
        color_predominante:"Marrón",
        alimentación: "Omnívoro"
    },
    {
        nombre:"Jirafa",
        imagen:"https://conceptodefinicion.de/wp-content/uploads/2016/03/Jirafa2.jpg",
        peso_promedio:"de 800 a 1.900 kg ",
        número_de_patas:"4",
        color_predominante:"Amarillo",
        alimentación: "herbívoros y rumiantes"
    },
    {
        nombre:"Elefante",
        imagen:"https://static.nationalgeographic.es/files/styles/image_3200/public/01-wildlife-watch-elephant-hides-africa.jpg?w=1900&h=1256",
        peso_promedio:"6.000 kg",
        número_de_patas:"4",
        color_predominante:"Gris",
        alimentación: "raíces, hierba, fruta y corteza"
    },
    {
        nombre:"Cocodrilo",
        imagen:"https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2022/02/18/16452027893540.jpg",
        peso_promedio:"730 kg.",
        número_de_patas:"4",
        color_predominante:"Verde",
        alimentación: "antílopes, cebras, facóqueros, animales domésticos grandes y humanos"
    },
    {
        nombre:"Venado",
        imagen:"https://extincionanimal.org/wp-content/uploads/2020/05/venado-cola-blanca-1.jpg",
        peso_promedio:"22 a 215 Kg",
        número_de_patas:"4",
        color_predominante:"Marrón",
        alimentación: "37.73% arbustivas, 23.44% gramíneas, 18.26% suculentas, 17.21% arbóreas y 3.35% herbáceas"
    },
    {
        nombre:"Escorpion",
        imagen:"https://t1.ev.ltmcdn.com/es/posts/1/0/4/tipos_de_escorpiones_3401_orig.jpg",
        peso_promedio:"Hasta 30 gr",
        número_de_patas:"8",
        color_predominante:"negro",
        alimentación: "Animales más pequeños que él, principalmente insectos, como por ejemplo grillos, langostas o cucarachas"
    },
    {
        nombre:"Burro",
        imagen:"https://1.bp.blogspot.com/-O2XzEGpk-IM/YCPFALi26iI/AAAAAAACXM0/AkclSTUH_Jo9jh64DGgobNX5Dit0kdiBgCLcBGAsYHQ/s976/b.jpg",
        peso_promedio:" de 80 a 480 kg",
        número_de_patas:"4",
        color_predominante:"Gris",
        alimentación: "plantas ricas en fibra en pequeñas cantidades"
    },
    {
        nombre:"Gallina",
        imagen:"https://t2.ea.ltmcdn.com/es/posts/8/0/5/por_que_las_gallinas_no_vuelan_24508_orig.jpg",
        peso_promedio:"1,8 kg las hembras y 2,0 kg los machos",
        número_de_patas:"2",
        color_predominante:"Blanco",
        alimentación: "trigo, arroz, maíz, cebada, avena, sorgo, coracán y panizo de Daimiel o salvado de arroz y de otros granos"
    },
    {
        nombre:"Cerdo",
        imagen:"https://media.istockphoto.com/photos/cute-pig-leaning-on-railing-of-his-cot-picture-id140462837?k=20&m=140462837&s=612x612&w=0&h=PM_57ox9n_WE_1Q7JdgNeg7kK5SI4Y8C8Z3UYM1m_JY=",
        peso_promedio:"50 kg",
        número_de_patas:"4",
        color_predominante:"Rosa",
        alimentación: "granos de cereales, ya sean de maíz blanco o amarillo, sorgo, arroz, trigo, cebada o quinoa"
    },
    {
        nombre:"Tortuga",
        imagen:"https://www.nationalgeographic.com.es/medio/2021/04/22/ejemplar-de-tortuga-boba-caretta-caretta_8c21f662_800x800.jpg",
        peso_promedio:"60 Kg",
        número_de_patas:"4",
        color_predominante:"Verde",
        alimentación: "algas marinas, camarones y cangrejos"
    }

];

function buscarAnimales(){
    let contenedor = document.querySelector("#animales-busqueda");
    let textBuscador = document.querySelector("#buscador").value;
    let acumulador="";
    objetosAnimales.forEach(animal => {
        if(animal.nombre.toLowerCase().startsWith(textBuscador.toLowerCase()) && textBuscador !=="") {
            acumulador= acumulador + `<img src="${animal.imagen}" width="400"><h3>${animal.nombre}</h3><h4>Peso promedio: ${animal.peso_promedio}</h4><h4>Número de patas: ${animal.número_de_patas}</h4><h4>Color predominante: ${animal.color_predominante}</h4><h4>Alimentación: ${animal.alimentación}</h4>`;
        }
    });
    contenedor.innerHTML=acumulador;
};

