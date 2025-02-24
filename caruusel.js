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
/* document.addEventListener("DOMContentLoaded", () => {
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
});*/
