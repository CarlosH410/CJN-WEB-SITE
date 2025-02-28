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




const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 0,
    // Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Autoplay configuration
    autoplay: {
      delay: 3000, // 3 segundos
      disableOnInteraction: false, // Permite que el autoplay continúe después de interacciones del usuario
    },
    // Responsive breakpoints
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      480: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

//ANIMACIONAE 

// Inicializar AOS
AOS.init({
    duration: 1000, // Duración de la animación en milisegundos
    once: true, // La animación solo se ejecuta una vez
});

/*
window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;
  let heroSection = document.querySelector(".hero");
  let scaleFactor = 1 + scrollTop / 1000; // Ajusta la velocidad del zoom

  heroSection.style.backgroundSize = `${scaleFactor * 100}%`;
});
*/

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;
  let heroSection = document.querySelector(".hero");
  let scaleFactor = 1 + scrollTop / 1000; // Ajusta la velocidad del zoom

  // Limita el efecto de zoom en dispositivos móviles
  if (window.innerWidth <= 768) { // Ajusta el breakpoint según tus necesidades
    heroSection.style.backgroundSize = "cover"; // Mantén el tamaño original en móviles
  } else {
    heroSection.style.backgroundSize = `${scaleFactor * 100}%`; // Aplica el zoom en desktop
  }
});