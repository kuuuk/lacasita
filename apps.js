const especialidades = {

    pizza: {

titulo: "Pizzas Artesanales",
    descripcion: "Masa de larga fermentación...",
    imagenes: [
        {
            src: "assets/img/pizza.jpg",
            titulo: "Pizza especial",
            descripcion: "Jamón, palmitos, morrones..."
        },
        {
            src: "assets/img/pizza2.png",
            titulo: "Pizza de rúcula",
            descripcion: "Jamón crudo, rúcula y parmesano..."
        }
    ]

    },
    
empanadas: {

    imagenes: [
        {
            src: "assets/img/empanadas.jpg",
            titulo: "Empanadas Caseras",
            descripcion: "Variedades clásicas y especiales elaboradas artesanalmente con ingredientes frescos."
        }
    ]

},
    
ahumados: {

    imagenes: [
        {
            src: "assets/img/ahumados2.jpg",
            titulo: "Ahumados",
            descripcion: "Ahumados de blablabla."
        }
    ]
},
cervezas: {

    imagenes: [
        {
            src: "assets/img/cervezas2.jpg",
            titulo: "Cervezas Artesanales",
            descripcion: "Cervezas artesanales marca blablabiribiri."
        }
    ]

}   
};

const imgEspecialidad = document.getElementById("especialidad-img");
const tituloEspecialidad = document.getElementById("especialidad-titulo");
const descripcionEspecialidad = document.getElementById("especialidad-descripcion");

const botonPrev = document.querySelector(".especialidad-prev");
const botonNext = document.querySelector(".especialidad-next");

let imagenActual = 0;
let especialidadActual = "pizza";

function cargarEspecialidad(tipo){
    
    especialidadActual = tipo;
    imagenActual = 0;

    mostrarImagen();
}

function mostrarImagen(){

    const data = especialidades[especialidadActual];
    const imagen = data.imagenes[imagenActual];

    imgEspecialidad.src = imagen.src;
    tituloEspecialidad.textContent = imagen.titulo;
    descripcionEspecialidad.textContent = imagen.descripcion;
}
botonPrev.addEventListener("click", () => {

    const imagenes = especialidades[especialidadActual].imagenes;

    imagenActual--;

    if (imagenActual < 0) {
        imagenActual = imagenes.length - 1;
    }

    mostrarImagen();
});


botonNext.addEventListener("click", () => {

    const imagenes = especialidades[especialidadActual].imagenes;

    imagenActual++;

    if (imagenActual >= imagenes.length) {
        imagenActual = 0;
    }

    mostrarImagen();
});

cargarEspecialidad("pizza");
document.querySelectorAll(".categorias button").forEach(boton => {

    boton.addEventListener("click", () => {
        document.querySelector(".categorias .activo")?.classList.remove("activo");

    boton.classList.add("activo");
        cargarEspecialidad(boton.dataset.tipo);

    });

});

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {

    menu.classList.toggle("activo");

});

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("activo");

    });

});

