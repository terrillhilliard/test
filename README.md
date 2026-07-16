# Nón Boutique Spa — website

Static site for [Nón Boutique Spa](https://non-boutique-spa.vercel.app/), 3 An Thượng 5, Ngũ Hành Sơn, Đà Nẵng. English-first with a VI/EN toggle.

## Structure

- `index.html` — single page (hero, services, price board, gift cards, signature treatments, contact)
- `css/style.css` — brand theme (sign yellow `#f2c11d`, warm charcoal, script logo)
- `js/config.js` — **public config**: WhatsApp number, ElevenLabs Agent ID
- `js/main.js` — interactions + EN/VI dictionary (all copy lives here)
- `js/contact.js` — floating Voice/Chat/WhatsApp cluster, assistant panel, TTS buttons
- `api/tts.js` — Vercel serverless function proxying ElevenLabs text-to-speech

## Setup: AI & contact features

1. **WhatsApp** — edit `WHATSAPP_NUMBER` in `js/config.js` (E.164, no `+`, no spaces).
   Defaults to the salon's listed phone; replace it if that number isn't WhatsApp-enabled.
2. **Voice + chat agent** — paste the spa's existing ElevenLabs **Agent ID** into
   `ELEVENLABS_AGENT_ID` in `js/config.js`. One agent powers both voice and chat.
   Do **not** create a new agent or voice — reuse the existing Vietnamese female voice.
3. **Text-to-speech** — set the server-side env vars in Vercel
   (Project → Settings → Environment Variables, or `npx vercel env add …`):
   - `ELEVENLABS_API_KEY` — secret, server-only
   - `ELEVENLABS_VOICE_ID` — the existing Vietnamese voice's ID

   Then redeploy. The speaker buttons on treatment descriptions call `/api/tts`,
   which streams audio back without ever exposing the key to the browser.

## Deploy

```bash
npx vercel deploy --prod --yes
```

When editing `js/main.js` or `js/contact.js`, bump the `?v=N` query on their
`<script>` tags in `index.html` so returning visitors get the fresh file.

## Editable business facts

- **Hours** — one entry (`'hours'`) in the dictionary in `js/main.js`, used by hero + footer, both languages. Sources vary between 10 PM and 12 AM closing; confirm with the salon.
- **Prices** — the board section in `index.html` (amounts) + `board.*` dictionary keys in `js/main.js` (labels).
