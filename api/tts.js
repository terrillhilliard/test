// Vercel serverless function: POST /api/tts { text: string }
// Calls ElevenLabs text-to-speech with the spa's existing Vietnamese voice and
// streams the audio back. The API key and voice id are read from server env
// only (ELEVENLABS_API_KEY, ELEVENLABS_VOICE_ID) — never sent to the browser.
const MAX_CHARS = 600;

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Allow', 'POST');
    return res.json({ error: 'Method not allowed' });
  }

  const key = process.env.ELEVENLABS_API_KEY;
  const voiceId = process.env.ELEVENLABS_VOICE_ID;
  if (!key || !voiceId) {
    res.statusCode = 503;
    return res.json({ error: 'TTS is not configured yet' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  const text = String((body && body.text) || '').trim().slice(0, MAX_CHARS);
  if (!text) {
    res.statusCode = 400;
    return res.json({ error: 'text is required' });
  }

  const upstream = await fetch(
    `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}?output_format=mp3_44100_128`,
    {
      method: 'POST',
      headers: { 'xi-api-key': key, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text,
        model_id: 'eleven_multilingual_v2', // supports Vietnamese + English
      }),
    }
  );

  if (!upstream.ok) {
    res.statusCode = 502;
    return res.json({ error: 'TTS upstream error', status: upstream.status });
  }

  res.setHeader('Content-Type', 'audio/mpeg');
  res.setHeader('Cache-Control', 'no-store');
  res.end(Buffer.from(await upstream.arrayBuffer()));
};
