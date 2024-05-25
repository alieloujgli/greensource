// Funció que s'executa quan tot el contingut HTML ha estat carregat
document.addEventListener("DOMContentLoaded", function() {
  // Selecció del botó que actua com a toggler de la barra de navegació
  var navbarToggler = document.querySelector(".navbar-toggler");
  // Selecció de la part de la barra de navegació que s'amaga o es mostra
  var navbarCollapse = document.querySelector(".navbar-collapse");

  // Afegim un esdeveniment de clic al botó toggler de la barra de navegació
  navbarToggler.addEventListener("click", function() {
    // Alterna l'afegit o eliminació de la classe "show" a la part de la barra de navegació
    navbarCollapse.classList.toggle("show");
  });

  // Event listener per gestionar canvis en l'historial
  window.addEventListener('popstate', function() {
    const hash = window.location.hash.substring(1);
    const page = hash ? `${hash}.html` : 'Presentacio.html';
    loadContent(page);
  });

  // Càrrega del contingut inicial
  loadContent('Presentacio.html');
});

// Funció per carregar contingut dinàmicament
function loadContent(url) {
  const content = document.getElementById('content');
  fetch(url)
    .then(response => response.text())
    .then(data => {
      content.innerHTML = data;
      window.history.pushState({}, '', '#' + url.split('.')[0]);
    })
    .catch(error => {
      content.innerHTML = '<p>Error carregant el contingut. Si us plau, torna-ho a provar més tard.</p>';
      console.error('Error carregant el contingut:', error);
    });



    // Función para resaltar la sección activa en la barra de navegación
function highlightActiveSection() {
  const navItems = document.querySelectorAll(".nav-item"); // Obtener todos los elementos de navegación

  navItems.forEach(item => {
    const sectionId = item.querySelector('a').getAttribute('href').replace('#', ''); // Obtener el ID de la sección correspondiente al enlace de navegación
    const section = document.getElementById(sectionId); // Obtener la sección correspondiente

    if (section) {
      const rect = section.getBoundingClientRect(); // Obtener las dimensiones y posición de la sección
      const isInViewport = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );

      if (isInViewport) {
        navItems.forEach(navItem => {
          navItem.classList.remove("active");
        });
        item.classList.add("active");
      } else if (!isInViewport && sectionId !== 'Presentacio') { // Solo quitar la clase 'active' de la sección de inicio cuando no está en la vista
        item.classList.remove("active");
      }
    }
  });
}


// Inicializa el mapa en el contenedor 'map'
var map = L.map('Mapa').setView([51.505, -0.09], 13);

// Añade una capa de mapa base de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Añade un marcador en una ubicación específica
L.marker([51.5, -0.09]).addTo(map)
    .bindPopup('¡Hola! Este es un marcador de ejemplo.')
    .openPopup();
}

document.addEventListener("DOMContentLoaded", function() {
  var cookieConsent = document.getElementById('cookieConsent');
  var acceptBtn = cookieConsent.querySelector('.accept-btn');
  var declineBtn = cookieConsent.querySelector('.decline-btn');

  acceptBtn.addEventListener('click', function() {
    cookieConsent.style.display = 'none';
    // Aquí puedes agregar código para guardar la preferencia del usuario sobre las cookies
  });

  declineBtn.addEventListener('click', function() {
    cookieConsent.style.display = 'none';
    // Aquí puedes agregar código para manejar el rechazo de las cookies
  });
});

document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
      document.querySelector('.scroll-to-top').style.display = 'block';
    } else {
      document.querySelector('.scroll-to-top').style.display = 'none';
    }
  });

  document.querySelector('.scroll-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});





      
