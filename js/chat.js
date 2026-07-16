// Nón Boutique Spa — scripted lead-capture chat.
// Flow: greet + pick service(s) → first name → last name → phone → best times
// → summary → send to WhatsApp. Reads I18N / lang / NBS_CONFIG globals.
(() => {
  const log = document.querySelector('[data-chat-log]');
  const inputArea = document.querySelector('[data-chat-input]');
  if (!log || !inputArea) return;

  const t = (k, fb) => {
    const e = typeof I18N !== 'undefined' && I18N[k];
    return e ? e[typeof lang !== 'undefined' ? lang : 'en'] : fb;
  };

  // service option i18n keys (reuse the site's existing service labels)
  const SERVICE_KEYS = ['svc.1', 'svc.4', 'svc.2', 'svc.3', 'svc.5', 'svc.6', 'mtab.shampoo'];
  const data = { services: [], fname: '', lname: '', phone: '', times: '' };

  const scrollDown = () => { log.scrollTop = log.scrollHeight; };
  function botMsg(html) {
    const b = document.createElement('div');
    b.className = 'ch-msg ch-bot';
    b.innerHTML = html;
    log.appendChild(b);
    scrollDown();
  }
  function userMsg(text) {
    const b = document.createElement('div');
    b.className = 'ch-msg ch-user';
    b.textContent = text;
    log.appendChild(b);
    scrollDown();
  }
  const clearInput = () => { inputArea.innerHTML = ''; };

  function stepServices() {
    botMsg(t('chat.q1', "Xin chào! 🌿 Which treatment(s) would you like? Tap any that apply:"));
    clearInput();
    const chips = document.createElement('div');
    chips.className = 'ch-chips';
    const next = document.createElement('button');
    next.className = 'ch-next';
    next.textContent = t('chat.next', 'Next →');
    next.disabled = true;
    SERVICE_KEYS.forEach((key) => {
      const c = document.createElement('button');
      c.className = 'ch-chip';
      c.textContent = t(key, key);
      c.addEventListener('click', () => {
        c.classList.toggle('on');
        const name = c.textContent;
        if (c.classList.contains('on')) data.services.push(name);
        else data.services = data.services.filter((s) => s !== name);
        next.disabled = data.services.length === 0;
      });
      chips.appendChild(c);
    });
    next.addEventListener('click', () => {
      userMsg(data.services.join(', '));
      askText('fname');
    });
    inputArea.appendChild(chips);
    inputArea.appendChild(next);
  }

  const PROMPTS = {
    fname: ['chat.fname', 'Great choice! What is your first name?'],
    lname: ['chat.lname', 'And your last name?'],
    phone: ['chat.phone', 'Best phone number to reach you?'],
    times: ['chat.times', 'Which days & times work best for you?'],
  };
  const NEXT_OF = { fname: 'lname', lname: 'phone', phone: 'times', times: null };

  function askText(field) {
    const [k, fb] = PROMPTS[field];
    botMsg(t(k, fb));
    clearInput();
    const form = document.createElement('form');
    form.className = 'ch-form';
    const inp = document.createElement('input');
    inp.className = 'ch-input';
    inp.type = field === 'phone' ? 'tel' : 'text';
    inp.placeholder = t('chat.type', 'Type your answer…');
    inp.required = true;
    if (field === 'fname' || field === 'lname') inp.autocomplete = field === 'fname' ? 'given-name' : 'family-name';
    if (field === 'phone') inp.autocomplete = 'tel';
    const send = document.createElement('button');
    send.className = 'ch-send';
    send.type = 'submit';
    send.setAttribute('aria-label', 'Send');
    send.textContent = '→';
    form.appendChild(inp);
    form.appendChild(send);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const v = inp.value.trim();
      if (!v) return;
      userMsg(v);
      data[field] = v;
      const nxt = NEXT_OF[field];
      if (nxt) askText(nxt);
      else summary();
    });
    inputArea.appendChild(form);
    inp.focus();
  }

  function summary() {
    botMsg(
      `${t('chat.summary', "Perfect — here's your request:")}<br><br>` +
      `<b>${t('chat.lblSvc', 'Services')}:</b> ${data.services.join(', ')}<br>` +
      `<b>${t('chat.lblName', 'Name')}:</b> ${data.fname} ${data.lname}<br>` +
      `<b>${t('chat.lblPhone', 'Phone')}:</b> ${data.phone}<br>` +
      `<b>${t('chat.lblTimes', 'Best times')}:</b> ${data.times}`
    );
    botMsg(t('chat.send', "Tap below — we'll open WhatsApp to confirm your booking. 💛"));
    clearInput();
    const wa = document.createElement('button');
    wa.className = 'ch-wa';
    wa.textContent = t('chat.sendwa', 'Send to WhatsApp →');
    wa.addEventListener('click', sendWhatsApp);
    const restart = document.createElement('button');
    restart.className = 'ch-restart';
    restart.textContent = t('chat.restart', 'Start over');
    restart.addEventListener('click', reset);
    inputArea.appendChild(wa);
    inputArea.appendChild(restart);
  }

  function sendWhatsApp() {
    const cfg = window.NBS_CONFIG || {};
    const msg =
      'Xin chào Nón Boutique Spa! 🌿 Booking request / Yêu cầu đặt lịch:\n' +
      `Name / Tên: ${data.fname} ${data.lname}\n` +
      `Phone / SĐT: ${data.phone}\n` +
      `Services / Dịch vụ: ${data.services.join(', ')}\n` +
      `Best times / Thời gian: ${data.times}`;
    if (cfg.WHATSAPP_NUMBER) {
      window.open(`https://wa.me/${cfg.WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
    }
  }

  function reset() {
    data.services = [];
    data.fname = data.lname = data.phone = data.times = '';
    log.innerHTML = '';
    stepServices();
  }

  reset();
  // Re-localise if the visitor switches language before finishing.
  document.addEventListener('nbs:langchange', reset);
})();
