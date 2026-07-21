// Nón Boutique Spa — vanilla adaptation of React Bits <BorderGlow />.
// Tracks the pointer near the price-menu card edges and drives a gold edge
// glow (via --edge-proximity + --cursor-angle CSS vars). Desktop only.
(() => {
  const wrap = document.querySelector('[data-borderglow]');
  if (!wrap) return;
  if (!matchMedia('(pointer: fine)').matches) return;
  const card = wrap.querySelector('.menu-card') || wrap;

  wrap.addEventListener('pointermove', (e) => {
    const r = card.getBoundingClientRect();
    const cx = r.width / 2;
    const cy = r.height / 2;
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    const dx = x - cx;
    const dy = y - cy;

    // proximity to the nearest edge (0 = center, 1 = at the edge)
    let kx = Infinity;
    let ky = Infinity;
    if (dx !== 0) kx = cx / Math.abs(dx);
    if (dy !== 0) ky = cy / Math.abs(dy);
    const edge = Math.min(Math.max(1 / Math.min(kx, ky), 0), 1);

    // angle from centre to cursor
    let deg = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
    if (deg < 0) deg += 360;

    wrap.style.setProperty('--edge-proximity', (edge * 100).toFixed(2));
    wrap.style.setProperty('--cursor-angle', `${deg.toFixed(1)}deg`);
  });

  wrap.addEventListener('pointerleave', () => {
    wrap.style.setProperty('--edge-proximity', '0');
  });
})();
