// Nón Boutique Spa — interactive price menu: category tabs, duration pills,
// per-tab photo, and a live currency converter (top foreign currencies).
// Reads I18N and `lang` from main.js (classic-script global lexical scope).
(() => {
  const MENU = {
    foot:    { desc: 'board.d1', photo: 'https://images.pexels.com/photos/6628700/pexels-photo-6628700.jpeg?auto=compress&cs=tinysrgb&w=800',  rows: [[60, 200000], [90, 300000], [120, 400000]] },
    body:    { desc: 'board.d2', photo: 'https://images.pexels.com/photos/19641820/pexels-photo-19641820.jpeg?auto=compress&cs=tinysrgb&w=800', rows: [[60, 200000], [90, 300000, 'board.oil'], [120, 400000, 'board.oil']] },
    shampoo: { desc: 'board.d3', photo: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800',  rows: [[30, 100000], [60, 200000]] },
  };

  // Approximate exchange rates: VND per 1 unit of the currency (edit as needed).
  const RATES = { VND: 1, USD: 25400, KRW: 18.6, CNY: 3500, EUR: 27500, GBP: 32000 };
  const SYM   = { VND: '₫', USD: '$', KRW: '₩', CNY: '¥', EUR: '€', GBP: '£' };

  const tabs = [...document.querySelectorAll('[data-menu-tab]')];
  const ind = document.querySelector('[data-menu-ind]');
  const dursEl = document.querySelector('[data-menu-durs]');
  const priceEl = document.querySelector('[data-menu-price]');
  const noteEl = document.querySelector('[data-menu-note]');
  const descEl = document.querySelector('[data-menu-desc]');
  const photoEl = document.querySelector('[data-menu-photo]');
  const curBtns = [...document.querySelectorAll('[data-cur]')];
  if (!tabs.length) return;

  const t = (key) => {
    const entry = typeof I18N !== 'undefined' && I18N[key];
    return entry ? entry[typeof lang !== 'undefined' ? lang : 'en'] : '';
  };

  const vnd = (p) => p.toLocaleString('vi-VN') + '₫';
  function fmt(p) {
    if (cur === 'VND') return vnd(p);
    let n = p / RATES[cur];
    n = cur === 'KRW' ? Math.round(n / 10) * 10 : Math.round(n);
    return '≈ ' + SYM[cur] + n.toLocaleString('en-US');
  }

  let current = 'foot';
  let idx = 0;
  let cur = 'VND';

  function moveIndicator() {
    const btn = tabs.find((b) => b.dataset.menuTab === current);
    ind.style.width = `${btn.offsetWidth}px`;
    ind.style.transform = `translateX(${btn.offsetLeft}px)`;
  }

  function renderPrice() {
    const row = MENU[current].rows[idx];
    priceEl.textContent = fmt(row[1]);
    const base = row[2] ? `${row[0]}′ · ${t(row[2])}` : `${row[0]} ${t('board.min')}`;
    noteEl.textContent = cur === 'VND' ? base : `${base} · ${vnd(row[1])}`;
    priceEl.classList.remove('bump');
    void priceEl.offsetWidth; // restart the entrance animation
    priceEl.classList.add('bump');
  }

  function renderPills() {
    dursEl.innerHTML = '';
    MENU[current].rows.forEach((row, i) => {
      const b = document.createElement('button');
      b.className = 'dur-pill' + (i === idx ? ' active' : '');
      b.textContent = `${row[0]} ${t('board.min')}`;
      b.addEventListener('click', () => {
        if (i === idx) return;
        idx = i;
        dursEl.querySelectorAll('.dur-pill').forEach((p, j) => p.classList.toggle('active', j === i));
        renderPrice();
      });
      dursEl.appendChild(b);
    });
  }

  function render() {
    if (photoEl) photoEl.style.backgroundImage = `url("${MENU[current].photo}")`;
    descEl.textContent = t(MENU[current].desc);
    renderPills();
    renderPrice();
    moveIndicator();
  }

  tabs.forEach((btn) =>
    btn.addEventListener('click', () => {
      if (btn.dataset.menuTab === current) return;
      current = btn.dataset.menuTab;
      idx = 0;
      tabs.forEach((b) => {
        const active = b === btn;
        b.classList.toggle('active', active);
        b.setAttribute('aria-selected', active);
      });
      render();
    })
  );

  curBtns.forEach((btn) =>
    btn.addEventListener('click', () => {
      cur = btn.dataset.cur;
      curBtns.forEach((b) => b.classList.toggle('active', b === btn));
      renderPrice();
    })
  );

  // "book now" → WhatsApp, pre-filled with the selected service (always in VND)
  document.querySelector('.menu-book').addEventListener('click', () => {
    const cfg = window.NBS_CONFIG || {};
    if (!cfg.WHATSAPP_NUMBER) return;
    const row = MENU[current].rows[idx];
    const svc = `${t('mtab.' + current)} ${row[0]}′ (${vnd(row[1])})`;
    const msg = `Xin chào Nón Boutique Spa! 🌿 I'd like to book / Tôi muốn đặt lịch.\nService / Dịch vụ: ${svc}\nDay / Ngày: \nTime / Giờ: `;
    window.open(`https://wa.me/${cfg.WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
  });

  // Re-render on language switch (main.js dispatches after applyLang) and
  // re-seat the indicator when tab widths change.
  document.addEventListener('nbs:langchange', render);
  window.addEventListener('resize', moveIndicator);
  window.addEventListener('load', moveIndicator);

  render();
})();
