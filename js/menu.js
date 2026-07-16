// Nón Boutique Spa — interactive price menu (tabs + duration pills).
// Reads I18N and `lang` from main.js (classic-script global lexical scope);
// prices below mirror the salon's street board.
(() => {
  const MENU = {
    foot:    { desc: 'board.d1', rows: [[60, 200000], [90, 300000], [120, 400000]] },
    body:    { desc: 'board.d2', rows: [[60, 200000], [90, 300000, 'board.oil'], [120, 400000, 'board.oil']] },
    shampoo: { desc: 'board.d3', rows: [[30, 100000], [60, 200000]] },
  };

  const tabs = [...document.querySelectorAll('[data-menu-tab]')];
  const ind = document.querySelector('[data-menu-ind]');
  const dursEl = document.querySelector('[data-menu-durs]');
  const priceEl = document.querySelector('[data-menu-price]');
  const noteEl = document.querySelector('[data-menu-note]');
  const descEl = document.querySelector('[data-menu-desc]');
  if (!tabs.length) return;

  const t = (key) => {
    const entry = typeof I18N !== 'undefined' && I18N[key];
    return entry ? entry[typeof lang !== 'undefined' ? lang : 'en'] : '';
  };
  const fmt = (p) => p.toLocaleString('vi-VN') + '₫';

  let current = 'foot';
  let idx = 0;

  function moveIndicator() {
    const btn = tabs.find((b) => b.dataset.menuTab === current);
    ind.style.width = `${btn.offsetWidth}px`;
    ind.style.transform = `translateX(${btn.offsetLeft}px)`;
  }

  function renderPrice() {
    const row = MENU[current].rows[idx];
    priceEl.textContent = fmt(row[1]);
    noteEl.textContent = row[2] ? `${row[0]}′ · ${t(row[2])}` : `${row[0]} ${t('board.min')}`;
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

  // Re-render on language switch (main.js dispatches after applyLang) and
  // re-seat the indicator when tab widths change.
  document.addEventListener('nbs:langchange', render);
  window.addEventListener('resize', moveIndicator);
  window.addEventListener('load', moveIndicator);

  render();
})();
