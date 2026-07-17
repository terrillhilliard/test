// Nón Boutique Spa — first-visit 20% offer popup with urgency countdown.
// Shows once per visitor (7-day cooldown); CTA opens WhatsApp to claim.
(() => {
  const promo = document.querySelector('[data-promo]');
  if (!promo) return;

  const SEEN_KEY = 'nbs_promo_seen';
  const DEADLINE_KEY = 'nbs_promo_deadline';
  const COOLDOWN_DAYS = 7;

  const seen = () => {
    try { const t = +localStorage.getItem(SEEN_KEY); return t && Date.now() - t < COOLDOWN_DAYS * 864e5; }
    catch (e) { return false; }
  };
  const markSeen = () => { try { localStorage.setItem(SEEN_KEY, Date.now()); } catch (e) {} };

  const clock = promo.querySelector('[data-promo-clock]');
  let timerId = 0;
  function startTimer() {
    let dl = 0;
    try { dl = +sessionStorage.getItem(DEADLINE_KEY); } catch (e) {}
    if (!dl || dl < Date.now()) {
      dl = Date.now() + 10 * 60 * 1000; // fresh 10-minute urgency window
      try { sessionStorage.setItem(DEADLINE_KEY, dl); } catch (e) {}
    }
    const tick = () => {
      const s = Math.max(0, Math.round((dl - Date.now()) / 1000));
      if (clock) clock.textContent = `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;
      if (s <= 0) clearInterval(timerId);
    };
    tick();
    timerId = setInterval(tick, 1000);
  }

  function open() {
    promo.hidden = false;
    requestAnimationFrame(() => promo.classList.add('open'));
    startTimer();
  }
  function close() {
    promo.classList.remove('open');
    clearInterval(timerId);
    setTimeout(() => { promo.hidden = true; }, 320);
  }

  promo.querySelectorAll('[data-promo-close]').forEach((el) => el.addEventListener('click', close));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !promo.hidden) close(); });

  promo.querySelector('[data-promo-claim]').addEventListener('click', () => {
    const cfg = window.NBS_CONFIG || {};
    const name = (promo.querySelector('[data-promo-name]').value || '').trim();
    const msg =
      "Xin chào Nón Boutique Spa! 🌿 I'd like to claim my 20% first-visit discount / Tôi muốn nhận ưu đãi giảm 20% cho lần đầu." +
      (name ? `\nName / Tên: ${name}` : '');
    if (cfg.WHATSAPP_NUMBER) {
      window.open(`https://wa.me/${cfg.WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
    }
    close();
  });

  // Show on every page load / refresh (no cooldown).
  setTimeout(open, 2000);
})();
