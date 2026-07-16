// Nón Boutique Spa — guest reviews carousel: scroll-snap track with
// prev/next arrows, dots, and gentle autoplay (paused on hover/touch,
// disabled entirely under prefers-reduced-motion).
(() => {
  const track = document.querySelector('[data-rev-track]');
  if (!track) return;
  const cards = [...track.children];
  const dotsEl = document.querySelector('[data-rev-dots]');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  cards.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'rev-dot';
    d.setAttribute('aria-label', `Review ${i + 1}`);
    d.addEventListener('click', () => { go(i); resetAuto(); });
    dotsEl.appendChild(d);
  });
  const dots = [...dotsEl.children];

  let cur = 0;
  const gap = 24;
  const step = () => cards[0].offsetWidth + gap;

  function paint() {
    dots.forEach((d, j) => d.classList.toggle('active', j === cur));
  }
  function go(i) {
    cur = (i + cards.length) % cards.length;
    track.scrollTo({ left: step() * cur, behavior: reduced ? 'auto' : 'smooth' });
    paint();
  }

  track.addEventListener('scroll', () => {
    const i = Math.min(cards.length - 1, Math.round(track.scrollLeft / step()));
    if (i !== cur) { cur = i; paint(); }
  }, { passive: true });

  document.querySelector('[data-rev-prev]').addEventListener('click', () => { go(cur - 1); resetAuto(); });
  document.querySelector('[data-rev-next]').addEventListener('click', () => { go(cur + 1); resetAuto(); });

  let timer = null;
  function startAuto() {
    if (reduced || timer) return;
    timer = setInterval(() => go(cur + 1), 5000);
  }
  function stopAuto() { clearInterval(timer); timer = null; }
  function resetAuto() { stopAuto(); startAuto(); }

  ['pointerenter', 'focusin', 'touchstart'].forEach((ev) => track.addEventListener(ev, stopAuto, { passive: true }));
  ['pointerleave', 'focusout'].forEach((ev) => track.addEventListener(ev, startAuto));
  document.addEventListener('visibilitychange', () => (document.hidden ? stopAuto() : startAuto()));

  paint();
  startAuto();
})();
