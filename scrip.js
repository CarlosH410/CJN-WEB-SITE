document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
        hamburger.classList.toggle("active");
    });

    // Cerrar el menú al hacer clic en un enlace
    const navItems = document.querySelectorAll(".nav-links a");
    navItems.forEach(item => {
        item.addEventListener("click", () => {
            navLinks.classList.remove("active");
            hamburger.classList.remove("active");
        });
    });
});;


// Efecto de cambio de color en la barra de navegación al hacer scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');

    // Si el desplazamiento es mayor a 50px, agrega la clase 'scrolled'
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});



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

function calcularAnchoLider() {
    if (window.innerWidth <= 480) {
        anchoLider = carrusel.clientWidth; // 1 líder en móviles
    } else if (window.innerWidth <= 768) {
        anchoLider = carrusel.clientWidth / 2; // 2 líderes en tablets
    } else {
        anchoLider = carrusel.clientWidth / 3; // 3 líderes en desktop
    }
}

function moverCarrusel() {
    posicionActual++;

    if (posicionActual >= totalLideres) {
        posicionActual = 0;
        carrusel.style.transition = "none";
        carrusel.style.transform = `translateX(0)`;
        setTimeout(() => {
            carrusel.style.transition = "transform 0.5s ease";
            moverCarrusel();
        }, 0);
    } else {
        carrusel.style.transform = `translateX(${-posicionActual * anchoLider}px)`;
    }

    actualizarIndicadores();
}

function actualizarIndicadores() {
    const indiceActivo = posicionActual % totalLideres;
    indicadores.forEach((indicador, index) => {
        indicador.classList.toggle("activo", index === indiceActivo);
    });
}

// Recalcular el ancho del líder al cambiar el tamaño de la ventana
window.addEventListener("resize", calcularAnchoLider);

// Iniciar el carrusel
calcularAnchoLider();
setInterval(moverCarrusel, 3000);
actualizarIndicadores();



// contacto 

document.querySelector(".formulario form").addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !email || !mensaje) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return;
    }

    alert("Mensaje enviado correctamente.");
    // Aquí puedes agregar lógica para enviar el formulario (AJAX, etc.)
});