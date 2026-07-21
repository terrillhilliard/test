// Nón Boutique Spa — vanilla adaptation of React Bits <BounceCards />.
// Fan of ritual photos that bounce (scale 0→1, elastic) when scrolled into
// view; on desktop, hovering pushes siblings aside and flattens the hovered
// card. Responsive transforms; reuses the site's global GSAP.
(() => {
  const container = document.querySelector('[data-bounce]');
  if (!container) return;
  const cards = [...container.querySelectorAll('.bc-card')];
  if (!cards.length) return;

  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(pointer: fine)').matches;
  const G = window.gsap;

  // transforms use "translate() rotate()" order so GSAP's matrix decomposition
  // reproduces them exactly (no position jump when it takes over).
  const DESKTOP = [
    'translate(-260px) rotate(8deg)',
    'translate(-130px) rotate(4deg)',
    'rotate(-3deg)',
    'translate(130px) rotate(-8deg)',
    'translate(260px) rotate(4deg)',
  ];
  const MOBILE = [
    'translate(-104px) rotate(8deg)',
    'translate(-52px) rotate(4deg)',
    'rotate(-3deg)',
    'translate(52px) rotate(-8deg)',
    'translate(104px) rotate(4deg)',
  ];
  let styles = DESKTOP;

  function applyTransforms() {
    styles = window.innerWidth <= 640 ? MOBILE : DESKTOP;
    cards.forEach((c, i) => { c.style.transform = styles[i] || 'none'; });
  }
  applyTransforms();
  window.addEventListener('resize', applyTransforms);

  // ---- bounce entrance, once, when the fan scrolls into view ----
  let played = false;
  function play() {
    if (played) return;
    played = true;
    if (reduce || !G) return; // cards are already visible at their resting transform
    G.fromTo(cards, { scale: 0 }, { scale: 1, stagger: 0.09, ease: 'elastic.out(1, 0.6)', delay: 0.1 });
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { play(); io.disconnect(); } });
  }, { threshold: 0.25 });
  io.observe(container);

  // ---- hover push (desktop / fine pointer only) ----
  if (fine && !reduce && G) {
    const noRot = (t) => /rotate\([\s\S]*?\)/.test(t)
      ? t.replace(/rotate\([\s\S]*?\)/, 'rotate(0deg)')
      : (t === 'none' ? 'rotate(0deg)' : `${t} rotate(0deg)`);
    const pushed = (t, dx) => {
      const m = t.match(/translate\(([-0-9.]+)px\)/);
      if (m) return t.replace(/translate\(([-0-9.]+)px\)/, `translate(${parseFloat(m[1]) + dx}px)`);
      return t === 'none' ? `translate(${dx}px)` : `${t} translate(${dx}px)`;
    };
    cards.forEach((card, idx) => {
      card.addEventListener('mouseenter', () => {
        card.style.zIndex = '10';
        cards.forEach((c, i) => {
          G.killTweensOf(c);
          const base = styles[i] || 'none';
          if (i === idx) {
            G.to(c, { transform: `${noRot(base)} scale(1.06)`, duration: 0.4, ease: 'back.out(1.4)', overwrite: 'auto' });
          } else {
            const dx = i < idx ? -170 : 170;
            G.to(c, { transform: pushed(base, dx), duration: 0.4, ease: 'back.out(1.4)', delay: Math.abs(idx - i) * 0.05, overwrite: 'auto' });
          }
        });
      });
      card.addEventListener('mouseleave', () => {
        card.style.zIndex = '';
        cards.forEach((c, i) => {
          G.killTweensOf(c);
          G.to(c, { transform: styles[i] || 'none', duration: 0.4, ease: 'back.out(1.4)', overwrite: 'auto' });
        });
      });
    });
  }
})();
