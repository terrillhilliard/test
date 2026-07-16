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

  // Every "book" button opens WhatsApp with the prepared booking template
  document.querySelectorAll('[data-wa-book]').forEach((btn) =>
    btn.addEventListener('click', () => {
      if (waHref) window.open(waHref, '_blank', 'noopener');
    })
  );

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

  // ---------- Assistant panel: Voice (live) + Chat (widget) ----------
  const AGENT = cfg.ELEVENLABS_AGENT_ID;
  const panel = document.querySelector('[data-assistant]');
  const slot = document.querySelector('[data-widget-slot]');
  const noAgentNote = document.querySelector('[data-no-agent]');
  const titleEl = document.querySelector('[data-ap-title]');
  const voiceView = document.querySelector('[data-view="voice"]');
  const chatView = document.querySelector('[data-view="chat"]');
  const statusEl = document.querySelector('[data-ap-status]');
  const orbEl = document.querySelector('[data-ap-orb]');
  const endBtn = document.querySelector('[data-ap-end]');

  const t = (k, fb) => {
    const e = typeof I18N !== 'undefined' && I18N[k];
    return e ? e[typeof lang !== 'undefined' ? lang : 'en'] : fb;
  };
  const setStatus = (txt) => { if (statusEl) statusEl.textContent = txt; };
  const setOrb = (state) => { if (orbEl) orbEl.dataset.state = state; };

  function showPanel() {
    panel.hidden = false;
    requestAnimationFrame(() => panel.classList.add('open'));
    cluster.classList.remove('open');
  }
  function closeAssistant() {
    panel.classList.remove('open');
    stopVoice();
    setTimeout(() => { panel.hidden = true; }, 250);
  }

  // ----- Chat (text) via the official convai widget + a prepared greeting -----
  let widgetLoaded = false;
  function loadWidget() {
    if (widgetLoaded) return;
    widgetLoaded = true;
    if (!AGENT) { noAgentNote.hidden = false; return; }
    const el = document.createElement('elevenlabs-convai');
    el.setAttribute('agent-id', AGENT);
    slot.appendChild(el);
    const s = document.createElement('script');
    s.src = 'https://elevenlabs.io/convai-widget/index.js';
    s.async = true;
    document.body.appendChild(s);
  }
  function openChat() {
    if (titleEl) titleEl.textContent = t('assist.chattitle', 'Chat with us');
    voiceView.hidden = true;
    chatView.hidden = false;
    loadWidget();
    showPanel();
  }

  // ----- Voice: auto-connect a live ElevenLabs conversation on click -----
  let convo = null;
  async function openVoice() {
    if (titleEl) titleEl.textContent = t('assist.voicetitle', 'Voice assistant');
    chatView.hidden = true;
    voiceView.hidden = false;
    showPanel();
    if (!AGENT) { setStatus(t('assist.noagentshort', 'Add the agent ID to enable voice.')); setOrb('idle'); return; }
    if (convo) return; // already connected
    setStatus(t('assist.connecting', 'Connecting…'));
    setOrb('connecting');
    try {
      const mod = await import('https://esm.sh/@elevenlabs/client');
      const Conversation = mod.Conversation || (mod.default && mod.default.Conversation);
      if (!Conversation) throw new Error('SDK missing Conversation');
      await navigator.mediaDevices.getUserMedia({ audio: true });
      convo = await Conversation.startSession({
        agentId: AGENT,
        connectionType: 'webrtc',
        onModeChange: (m) => {
          const speaking = m && m.mode === 'speaking';
          setOrb(speaking ? 'speaking' : 'listening');
          setStatus(speaking ? t('assist.speaking', 'Speaking…') : t('assist.listening', 'Listening…'));
        },
        onStatusChange: (s) => {
          if (s && s.status === 'connected') { setOrb('listening'); setStatus(t('assist.listening', 'Listening…')); }
          if (s && s.status === 'disconnected') stopVoice();
        },
        onError: (err) => { console.warn('Voice error:', err); voiceFailed(); },
      });
    } catch (err) {
      console.warn('Voice start failed:', err);
      voiceFailed();
    }
  }
  function voiceFailed() {
    convo = null;
    setOrb('idle');
    setStatus(t('assist.voicefail', 'Voice needs mic access — try Chat or WhatsApp instead.'));
  }
  function stopVoice() {
    if (convo) { try { convo.endSession(); } catch (e) {} convo = null; }
    setOrb('idle');
  }

  document.querySelectorAll('[data-open-voice]').forEach((b) => b.addEventListener('click', openVoice));
  document.querySelectorAll('[data-open-chat]').forEach((b) => b.addEventListener('click', openChat));
  if (endBtn) endBtn.addEventListener('click', () => { stopVoice(); closeAssistant(); });
  document.querySelector('[data-close-assistant]').addEventListener('click', closeAssistant);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !panel.hidden) closeAssistant(); });

  // "Book now" shortcut → WhatsApp with the prepared booking template
  document.querySelector('[data-assistant-book]').addEventListener('click', () => {
    closeAssistant();
    if (waHref) window.open(waHref, '_blank', 'noopener');
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
