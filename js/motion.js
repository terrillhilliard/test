// Nón Boutique Spa — motion layer: Lenis inertia scroll, GSAP ScrollTrigger
// reveals, parallax, custom cursor. Loads before main.js; if the CDN libraries
// are missing or the visitor prefers reduced motion, this file does nothing and
// main.js falls back to its IntersectionObserver reveals.
(() => {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined' || typeof Lenis === 'undefined') return;

  document.documentElement.classList.add('gsap-motion');
  gsap.registerPlugin(ScrollTrigger);

  // ---------- Smooth inertia scroll (Lenis) ----------
  const lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);

  // Route anchor links through Lenis
  document.querySelectorAll('a[href^="#"]').forEach((a) =>
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      lenis.scrollTo(el, { offset: -70 });
    })
  );

  // Freeze page scroll while the booking modal is open
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-open-modal]')) lenis.stop();
    if (e.target.closest('[data-close-modal]')) lenis.start();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') lenis.start(); });

  // ---------- Reveal on scroll: staggered, slow, gentle ----------
  gsap.set('.reveal', { opacity: 0, y: 44 });
  ScrollTrigger.batch('.reveal', {
    start: 'top 88%',
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, { opacity: 1, y: 0, duration: 0.75, ease: 'power2.out', stagger: 0.12, overwrite: true }),
  });

  // ---------- Parallax drift ----------
  const heroScrub = { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true };
  gsap.to('.hero-hats', { yPercent: 24, rotate: 2, ease: 'none', scrollTrigger: heroScrub });
  gsap.to('.hero-title', { yPercent: -32, ease: 'none', scrollTrigger: heroScrub });
  gsap.to('.lights', { yPercent: 60, ease: 'none', scrollTrigger: heroScrub });
  gsap.to('.hero-bottom', {
    opacity: 0, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: '45% top', scrub: true },
  });
  document.querySelectorAll('.feature-img').forEach((img) => {
    gsap.fromTo(img, { y: 46 }, {
      y: -46, ease: 'none',
      scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: true },
    });
  });
  gsap.fromTo('.gift-cards', { y: 34 }, {
    y: -34, ease: 'none',
    scrollTrigger: { trigger: '.gift', start: 'top bottom', end: 'bottom top', scrub: true },
  });

  // ---------- Custom cursor ring (fine pointers only) ----------
  if (matchMedia('(pointer: fine)').matches) {
    const ring = document.createElement('div');
    ring.className = 'cursor-ring';
    document.body.appendChild(ring);
    let x = innerWidth / 2, y = innerHeight / 2, tx = x, ty = y;
    addEventListener('mousemove', (e) => { tx = e.clientX; ty = e.clientY; ring.classList.add('on'); }, { passive: true });
    gsap.ticker.add(() => {
      x += (tx - x) * 0.16;
      y += (ty - y) * 0.16;
      ring.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
    });
    const hoverSel = 'a, button, .trio-item, input, [data-open-modal]';
    document.addEventListener('mouseover', (e) => { if (e.target.closest(hoverSel)) ring.classList.add('grow'); });
    document.addEventListener('mouseout', (e) => { if (e.target.closest(hoverSel)) ring.classList.remove('grow'); });
  }
})();
