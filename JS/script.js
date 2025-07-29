/* ============== Scroll section active link ============*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

/* ============== Scroll section active link ============*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                let activeLink = document.querySelector('header nav a[href*=' + id + ']');
                if (activeLink) activeLink.classList.add('active');

            })
        }
    })

    /* ============== Sticky navbar ============*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* ============== Remove toggle icon and navbar when click navbar link (scroll) ============ */
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/* ============== Scroll Reveal ============ */
 ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/* ============== Tyeped Js ============ */
let typed = new Typed('.multiple-text', {
    strings: [
        'MERN, Python, APIs, DevOps - all woven into solutions that work for YOU'
],
    typeSpeed: 100,
    backSpeed: 20,
    backDelay: 1000,
    loop: true,
    smartBackspace: true
});

/* ============== Read More Button in Services Section ============ */

document.addEventListener('DOMContentLoaded', () => {
  const readMoreBtn = document.querySelector('.btn');
  const servicesContainer = document.querySelector('.services-container');
  const webDevDetails = document.getElementById('web-development-details');

  readMoreBtn.addEventListener('click', () => {
    servicesContainer.style.display = 'none';
    webDevDetails.style.display = 'block';
  });
});



function hideServiceDetail() {
  // Hide all service detail sections
  const details = document.getElementsByClassName('service-detail');
  for (let i = 0; i < details.length; i++) {
    details[i].style.display = 'none';
    details[i].classList.remove('show');
  }

  // Show services section (overview)
  const servicesSection = document.getElementById('services');
  servicesSection.style.display = 'block';
}