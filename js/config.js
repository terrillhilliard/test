// Nón Boutique Spa — public runtime config.
// Everything in this file is PUBLIC (shipped to the browser). The ElevenLabs
// API key must NEVER go here — it lives only in Vercel env (ELEVENLABS_API_KEY).
window.NBS_CONFIG = {
  // WhatsApp number in E.164 format WITHOUT '+' or spaces.
  // Currently the salon's listed phone (+84 704 493 053). Replace this value
  // if that number is not WhatsApp-enabled.
  WHATSAPP_NUMBER: '84704493053',
  WHATSAPP_MESSAGE: "Xin chào Nón Boutique Spa! I'd like to book a massage. / Tôi muốn đặt lịch massage.",

  // ElevenLabs Conversational AI agent id (public). The same agent powers
  // both the Voice and Chat panels so they share one persona + knowledge base.
  // Paste the spa's existing agent id here — do NOT create a new agent/voice.
  ELEVENLABS_AGENT_ID: 'agent_8701kxnzgc02ft9vf8gjneanx2ph',
};
