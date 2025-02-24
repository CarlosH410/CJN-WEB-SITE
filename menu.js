// Script para el menú hamburguesa
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active"); // Alternar la clase "active" en el botón
    navLinks.classList.toggle("active"); // Alternar la clase "active" en el menú
});





// Efecto de cambio de color en la barra de navegación al hacer scroll
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


// Script para el carrusel automático infinito con indicadores
const carrusel = document.querySelector(".carrusel-contenedor");
const totalLideres = document.querySelectorAll(".lider").length;
const indicadores = document.querySelectorAll(".indicador");

// Duplicar los líderes para crear un efecto de bucle infinito
const lideres = document.querySelectorAll(".lider");
lideres.forEach(lider => {
    const clon = lider.cloneNode(true); // Clonar cada líder
    carrusel.appendChild(clon); // Agregar el clon al final del carrusel
});

let posicionActual = 0;
const anchoLider = carrusel.clientWidth / 3; // Ancho de cada líder (3 a la vez)

function moverCarrusel() {
    posicionActual++;

    // Si llega al final de los líderes originales, reiniciar sin saltar
    if (posicionActual >= totalLideres) {
        posicionActual = 0;
        carrusel.style.transition = "none"; // Desactivar transición para reiniciar sin saltos
        carrusel.style.transform = `translateX(0)`;
        setTimeout(() => {
            carrusel.style.transition = "transform 0.5s ease"; // Reactivar transición
            moverCarrusel(); // Mover al siguiente líder
        }, 0);
    } else {
        carrusel.style.transform = `translateX(${-posicionActual * anchoLider}px)`;
    }

    // Actualizar indicadores
    actualizarIndicadores();
}

// Actualizar los indicadores circulares
function actualizarIndicadores() {
    const indiceActivo = posicionActual % totalLideres; // Calcular el índice activo
    indicadores.forEach((indicador, index) => {
        if (index === indiceActivo) {
            indicador.classList.add("activo"); // Resaltar el indicador activo
        } else {
            indicador.classList.remove("activo"); // Desactivar los demás indicadores
        }
    });
}

// Mover el carrusel cada 3 segundos
setInterval(moverCarrusel, 3000);

// Inicializar el primer indicador como activo
actualizarIndicadores();




document.addEventListener("DOMContentLoaded", () => {
    const carrusel = document.querySelector(".carrusel-contenedor");
    const totalLideres = document.querySelectorAll(".lider").length;
    const indicadores = document.querySelectorAll(".indicador");

    // Duplicar los líderes para crear un efecto de bucle infinito
    const lideres = document.querySelectorAll(".lider");
    lideres.forEach(lider => {
        const clon = lider.cloneNode(true);
        carrusel.appendChild(clon);
    });

    let posicionActual = 0;
    let anchoLider;

    // Calcular el ancho de cada líder en función del tamaño de la pantalla
    function calcularAnchoLider() {
        if (window.innerWidth <= 480) {
            anchoLider = carrusel.clientWidth; // 1 líder en móviles
        } else if (window.innerWidth <= 768) {
            anchoLider = carrusel.clientWidth / 2; // 2 líderes en tablets
        } else {
            anchoLider = carrusel.clientWidth / 3; // 3 líderes en desktop
        }
    }

    // Mover el carrusel a la siguiente posición
    function moverCarrusel() {
        posicionActual++;

        // Si llega al final de los líderes duplicados, reiniciar suavemente
        if (posicionActual >= totalLideres) {
            posicionActual = 0; // Reiniciar la posición
            carrusel.style.transition = "none"; // Desactivar transición para reiniciar sin saltos
            carrusel.style.transform = `translateX(0)`;
            setTimeout(() => {
                carrusel.style.transition = "transform 0.5s ease"; // Reactivar transición
                moverCarrusel(); // Mover al siguiente líder
            }, 0);
        } else {
            carrusel.style.transform = `translateX(${-posicionActual * anchoLider}px)`;
        }

        // Actualizar indicadores
        actualizarIndicadores();
    }

    // Actualizar los indicadores circulares
    function actualizarIndicadores() {
        const indiceActivo = posicionActual % totalLideres; // Calcular el índice activo
        indicadores.forEach((indicador, index) => {
            if (index === indiceActivo) {
                indicador.classList.add("activo"); // Resaltar el indicador activo
            } else {
                indicador.classList.remove("activo"); // Desactivar los demás indicadores
            }
        });
    }

    // Recalcular el ancho del líder al cambiar el tamaño de la ventana
    window.addEventListener("resize", calcularAnchoLider);

    // Iniciar el carrusel
    calcularAnchoLider();
    setInterval(moverCarrusel, 3000); // Mover el carrusel cada 3 segundos
    actualizarIndicadores(); // Inicializar los indicadores
});