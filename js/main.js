// Skye Spa — interactions

// Sticky header
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// Mobile menu
const burger = document.querySelector('[data-burger]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a, button').forEach((el) =>
  el.addEventListener('click', () => mobileMenu.classList.remove('open'))
);

// Therapist slider
const slider = document.querySelector('[data-slider]');
const step = () => slider.querySelector('.slide').offsetWidth + 28;
document.querySelector('[data-prev]').addEventListener('click', () =>
  slider.scrollBy({ left: -step(), behavior: 'smooth' })
);
document.querySelector('[data-next]').addEventListener('click', () =>
  slider.scrollBy({ left: step(), behavior: 'smooth' })
);

// Booking modal
const modal = document.querySelector('[data-modal]');
const modalForm = document.querySelector('[data-modal-form]');
const modalThanks = document.querySelector('[data-modal-thanks]');

document.querySelectorAll('[data-open-modal]').forEach((el) =>
  el.addEventListener('click', (ev) => {
    ev.preventDefault();
    modalForm.hidden = false;
    modalThanks.hidden = true;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  })
);
document.querySelectorAll('[data-close-modal]').forEach((el) =>
  el.addEventListener('click', () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  })
);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('open')) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// Demo form: show thank-you panel (no data is sent anywhere)
document.querySelector('[data-form]').addEventListener('submit', (e) => {
  e.preventDefault();
  modalForm.hidden = true;
  modalThanks.hidden = false;
});

// Footer year
document.querySelector('[data-year]').textContent = new Date().getFullYear();
