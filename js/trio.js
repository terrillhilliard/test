// Nón Boutique Spa — trio cards: pointer-driven 3D tilt + cursor-following sheen.
// Fine pointers only; disabled under reduced-motion. Touch keeps the CSS
// hover-less fallback (tags shown, arrow filled).
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(pointer: fine)').matches;
  if (reduce || !fine) return;

  document.querySelectorAll('.trio-item[data-tilt]').forEach((card) => {
    const sheen = card.querySelector('.trio-sheen');
    let raf = 0;

    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;   // 0..1
      const py = (e.clientY - r.top) / r.height;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const ry = (px - 0.5) * 11;   // rotateY (deg)
        const rx = (0.5 - py) * 11;   // rotateX (deg)
        card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px)`;
        if (sheen) {
          sheen.style.setProperty('--mx', `${px * 100}%`);
          sheen.style.setProperty('--my', `${py * 100}%`);
        }
      });
    });

    card.addEventListener('pointerleave', () => {
      card.style.transform = '';
    });
  });
})();
