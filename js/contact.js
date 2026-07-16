// Nón Boutique Spa — floating contact cluster (Voice / Chat / WhatsApp),
// ElevenLabs assistant panel, and TTS speaker buttons.
(() => {
  const cfg = window.NBS_CONFIG || {};

  // ---------- WhatsApp deep links ----------
  const waHref = cfg.WHATSAPP_NUMBER
    ? `https://wa.me/${cfg.WHATSAPP_NUMBER}?text=${encodeURIComponent(cfg.WHATSAPP_MESSAGE || '')}`
    : null;
  document.querySelectorAll('[data-whatsapp]').forEach((a) => {
    if (waHref) a.href = waHref;
    else a.style.display = 'none';
  });

  // ---------- Tap ripple (reduced-motion aware) ----------
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  document.addEventListener('click', (e) => {
    if (reducedMotion.matches) return;
    const btn = e.target.closest('.cc-btn, .ap-act');
    if (!btn) return;
    const r = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${e.clientX - r.left}px`;
    ripple.style.top = `${e.clientY - r.top}px`;
    btn.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  });

  // ---------- Mobile FAB collapse ----------
  const cluster = document.querySelector('[data-cluster]');
  const mainBtn = document.querySelector('[data-cluster-toggle]');
  mainBtn.addEventListener('click', () => {
    const open = cluster.classList.toggle('open');
    mainBtn.setAttribute('aria-expanded', open);
  });

  // ---------- Assistant panel (one ElevenLabs agent for voice + chat) ----------
  const panel = document.querySelector('[data-assistant]');
  const slot = document.querySelector('[data-widget-slot]');
  const noAgentNote = document.querySelector('[data-no-agent]');
  let widgetLoaded = false;

  function loadWidget() {
    if (widgetLoaded) return;
    widgetLoaded = true;
    if (!cfg.ELEVENLABS_AGENT_ID) {
      noAgentNote.hidden = false;
      return;
    }
    // Official ElevenLabs embed: the <elevenlabs-convai> element only needs the
    // public agent id. Voice + text chat live in the same widget/persona.
    const el = document.createElement('elevenlabs-convai');
    el.setAttribute('agent-id', cfg.ELEVENLABS_AGENT_ID);
    slot.appendChild(el);
    const s = document.createElement('script');
    s.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed';
    s.async = true;
    document.body.appendChild(s);
  }

  function openAssistant() {
    loadWidget();
    panel.hidden = false;
    requestAnimationFrame(() => panel.classList.add('open'));
    cluster.classList.remove('open');
  }
  function closeAssistant() {
    panel.classList.remove('open');
    setTimeout(() => { panel.hidden = true; }, 250);
  }

  document.querySelectorAll('[data-open-assistant]').forEach((btn) =>
    btn.addEventListener('click', openAssistant)
  );
  document.querySelector('[data-close-assistant]').addEventListener('click', closeAssistant);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !panel.hidden) closeAssistant();
  });

  // "Book now" shortcut → reuse the existing booking modal
  document.querySelector('[data-assistant-book]').addEventListener('click', () => {
    closeAssistant();
    document.querySelector('.header [data-open-modal]').click();
  });

  // ---------- TTS speaker buttons ----------
  let audio = null;
  let activeBtn = null;

  function stopAudio() {
    if (audio) { audio.pause(); audio = null; }
    if (activeBtn) { activeBtn.classList.remove('playing', 'loading'); activeBtn = null; }
  }

  document.querySelectorAll('[data-tts]').forEach((btn) =>
    btn.addEventListener('click', async () => {
      if (btn === activeBtn) { stopAudio(); return; }
      stopAudio();
      const src = btn.closest('[data-tts-scope]');
      const text = src ? src.querySelector('p').textContent.trim() : '';
      if (!text) return;
      activeBtn = btn;
      btn.classList.add('loading');
      try {
        const r = await fetch('/api/tts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text }),
        });
        if (!r.ok) throw new Error(`tts ${r.status}`);
        const url = URL.createObjectURL(await r.blob());
        audio = new Audio(url);
        audio.addEventListener('ended', stopAudio);
        btn.classList.remove('loading');
        btn.classList.add('playing');
        await audio.play();
      } catch (err) {
        console.warn('TTS unavailable:', err.message);
        btn.classList.remove('loading');
        btn.classList.add('err');
        setTimeout(() => btn.classList.remove('err'), 1200);
        activeBtn = null;
      }
    })
  );
})();
