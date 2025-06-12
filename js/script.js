document.addEventListener('DOMContentLoaded',function () {
    const menu = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    if (menu && navbar) {
        menu.onclick = () => {
            menu.classList.toggle('active');
            navbar.classList.toggle('active');
        };

        window.onscroll = () => {
            menu.classList.remove('active');
            navbar.classList.remove('active');
        };
    }

    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});


  const slideWrapper = document.querySelector('.slide-wrapper');
  const slides = document.querySelectorAll('.slide-wrapper img');
  let index = 0;

  function autoSlide() {
    index++;
    if (index >= slides.length) {
      index = 0;
    }
    slideWrapper.style.transform = `translateX(-${index * 100}%)`;
  }

  // Jalankan setiap 6 detik
  setInterval(autoSlide, 6000);