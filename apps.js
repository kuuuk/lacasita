const especialidades = {

    pizza: {

        titulo: "Pizzas Artesanales",

        descripcion: "Masa de larga fermentación, ingredientes frescos y cocción al horno para lograr pizzas con identidad propia.",

        imagen: "assets/img/pizza.jpg"

    },
    
    empanadas: {

    titulo: "Empanadas Caseras",

    descripcion: "Variedades clásicas y especiales elaboradas artesanalmente con ingredientes frescos.",

    imagen: "assets/img/empanadas.jpg"

    },
    
    ahumados: {

    titulo: "Ahumados",

    descripcion: "Ahumados de blablabla.",

    imagen: "assets/img/ahumados2.jpg"

    },

    cervezas: {

    titulo: "Cervezas Artesanales",

    descripcion: "Cervezas artesanales marca blablabiribiri.",

    imagen: "assets/img/cervezas2.jpg"

    },    
};

const imgEspecialidad = document.getElementById("especialidad-img");

const tituloEspecialidad = document.getElementById("especialidad-titulo");
const descripcionEspecialidad = document.getElementById("especialidad-descripcion");

function cargarEspecialidad(tipo){

    const data = especialidades[tipo];

    imgEspecialidad.src = data.imagen;
    tituloEspecialidad.textContent = data.titulo;
    descripcionEspecialidad.textContent = data.descripcion;

}

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