// Nón Boutique Spa — "Loved by Guests" 3D coverflow carousel.
// Center-focused depth, drag/swipe, arrows, dots, autoplay (pause on hover),
// keyboard, looped. Reduced-motion → autoplay off, snappier transitions.
(() => {
  const car = document.querySelector('[data-carousel]');
  if (!car) return;
  const track = car.querySelector('[data-car-track]');
  const stage = car.querySelector('[data-car-stage]') || track;
  const slides = [...track.querySelectorAll('.car-slide')];
  const dotsEl = car.querySelector('[data-car-dots]');
  const n = slides.length;
  if (!n) return;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let active = 0;

  slides.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'car-dot';
    d.setAttribute('aria-label', `Slide ${i + 1}`);
    d.addEventListener('click', () => { go(i); resetAuto(); });
    dotsEl.appendChild(d);
  });
  const dots = [...dotsEl.children];

  function layout() {
    const w = slides[0].offsetWidth || 300;
    const spacing = w * 0.6;
    slides.forEach((s, i) => {
      let off = i - active;
      if (off > n / 2) off -= n;
      if (off < -n / 2) off += n;
      const abs = Math.abs(off);
      const sign = Math.sign(off);
      const scale = abs === 0 ? 1 : abs === 1 ? 0.84 : 0.68;
      const rotY = off === 0 ? 0 : -sign * 30;
      const op = abs > 2 ? 0 : abs === 0 ? 1 : abs === 1 ? 0.72 : 0.4;
      s.style.transform = `translateX(${off * spacing}px) rotateY(${rotY}deg) scale(${scale})`;
      s.style.opacity = op;
      s.style.zIndex = String(100 - abs);
      s.style.pointerEvents = abs > 2 ? 'none' : 'auto';
      s.classList.toggle('active', off === 0);
      s.setAttribute('aria-hidden', off === 0 ? 'false' : 'true');
    });
    dots.forEach((d, i) => d.classList.toggle('active', i === active));
  }
  function go(i) { active = ((i % n) + n) % n; layout(); }

  // click a side card to bring it to the centre (unless it was a drag)
  let moved = false;
  slides.forEach((s, i) =>
    s.addEventListener('click', () => { if (!moved && i !== active) { go(i); resetAuto(); } })
  );

  car.querySelector('[data-car-prev]').addEventListener('click', () => { go(active - 1); resetAuto(); });
  car.querySelector('[data-car-next]').addEventListener('click', () => { go(active + 1); resetAuto(); });

  // drag / swipe
  let sx = 0, dragging = false;
  stage.addEventListener('pointerdown', (e) => { dragging = true; moved = false; sx = e.clientX; stopAuto(); });
  window.addEventListener('pointermove', (e) => { if (dragging && Math.abs(e.clientX - sx) > 8) moved = true; });
  window.addEventListener('pointerup', (e) => {
    if (!dragging) return;
    dragging = false;
    const dx = e.clientX - sx;
    if (Math.abs(dx) > 45) go(active + (dx < 0 ? 1 : -1));
    startAuto();
    setTimeout(() => { moved = false; }, 0);
  });

  // autoplay
  let timer = 0;
  function startAuto() { if (reduce || timer) return; timer = setInterval(() => go(active + 1), 4200); }
  function stopAuto() { clearInterval(timer); timer = 0; }
  function resetAuto() { stopAuto(); startAuto(); }
  ['pointerenter', 'focusin'].forEach((ev) => car.addEventListener(ev, stopAuto));
  ['pointerleave', 'focusout'].forEach((ev) => car.addEventListener(ev, startAuto));
  document.addEventListener('visibilitychange', () => (document.hidden ? stopAuto() : startAuto()));

  // keyboard
  car.tabIndex = 0;
  car.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { go(active - 1); resetAuto(); }
    if (e.key === 'ArrowRight') { go(active + 1); resetAuto(); }
  });

  window.addEventListener('resize', layout);
  window.addEventListener('load', layout);
  layout();
  startAuto();
})();
