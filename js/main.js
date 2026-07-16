// Nón Boutique Spa — interactions + EN/VI i18n

// ---------------------------------------------------------------------------
// i18n dictionary. English-first; Vietnamese via the VI/EN toggle.
// NOTE: closing time varies by source (10 PM–12 AM). Edit the "hours" strings
// below in ONE place — they update the hero and the footer together.
// ---------------------------------------------------------------------------
const I18N = {
  'nav.about':      { en: 'About', vi: 'Giới thiệu' },
  'nav.services':   { en: 'Services', vi: 'Dịch vụ' },
  'nav.signature':  { en: 'Signature', vi: 'Đặc trưng' },
  'nav.gift':       { en: 'Gift Cards', vi: 'Thẻ quà tặng' },
  'nav.contact':    { en: 'Contact', vi: 'Liên hệ' },
  'nav.prices':     { en: 'Prices', vi: 'Bảng giá' },

  'cta.book':       { en: 'book a treatment', vi: 'đặt liệu trình' },
  'cta.booknow':    { en: 'book now', vi: 'đặt lịch ngay' },
  'cta.more':       { en: 'Read More', vi: 'Xem thêm' },

  'hours':          { en: 'Open daily · 10 AM – 12 AM', vi: 'Mở cửa hằng ngày · 10:00 – 24:00' },

  'hero.tagline':   { en: 'boutique spa in the heart of<br>An Thượng — Đà Nẵng',
                      vi: 'spa boutique giữa lòng<br>An Thượng — Đà Nẵng' },
  'hero.reviews':   { en: '· 209 Google reviews', vi: '· 209 đánh giá Google' },
  'hero.scroll':    { en: 'scroll to explore', vi: 'cuộn để khám phá' },

  'menu.title':     { en: 'Nón Boutique<br><em>Spa</em>', vi: 'Nón Boutique<br><em>Spa</em>' },
  'menu.lead':      { en: 'Choose from our', vi: 'Lựa chọn từ' },
  'menu.circled':   { en: 'wide range', vi: 'đa dạng' },
  'menu.rest':      { en: 'of rituals — foot, hot stone and oil massage, full-body therapies, facials and gentle nail care.',
                      vi: 'liệu trình — massage chân, đá nóng, tinh dầu, toàn thân, chăm sóc da mặt và làm móng nhẹ nhàng.' },

  'trio.1':         { en: 'Foot<br><em>&amp;</em> Full Body', vi: 'Chân<br><em>&amp;</em> Toàn thân' },
  'trio.1v':        { en: '60–120 min · from 200.000₫', vi: '60–120 phút · từ 200.000₫' },
  'trio.2':         { en: '<em>hot</em><br>stone<br><em>&amp;</em> Oil', vi: '<em>đá</em><br>nóng<br><em>&amp;</em> Tinh dầu' },
  'trio.2v':        { en: '60–120 min · oil &amp; hot stone', vi: '60–120 phút · tinh dầu &amp; đá nóng' },
  'trio.3':         { en: 'Facial<br><em>&amp;</em> Nail', vi: 'Da mặt<br><em>&amp;</em> Móng' },
  'trio.3v':        { en: 'facial · manicure · pedicure', vi: 'chăm sóc da · làm móng' },
  'tag.foot':       { en: 'Foot', vi: 'Chân' },
  'tag.body':       { en: 'Full Body', vi: 'Toàn thân' },
  'tag.stone':      { en: 'Hot Stone', vi: 'Đá nóng' },
  'tag.oil':        { en: 'Oil', vi: 'Tinh dầu' },
  'tag.facial':     { en: 'Facial', vi: 'Da mặt' },
  'tag.nail':       { en: 'Nail', vi: 'Móng' },

  'gift.card1':     { en: 'gift card', vi: 'thẻ quà tặng' },
  'gift.card2':     { en: 'deposit card', vi: 'thẻ nạp' },
  'gift.title':     { en: 'Find the<br><em>Perfect Gift</em>', vi: 'Món quà<br><em>Hoàn hảo</em>' },
  'gift.text':      { en: 'Give a card for a favourite treatment, or a deposit card that lets the recipient choose their own moment of calm.',
                      vi: 'Tặng thẻ cho liệu trình yêu thích, hoặc thẻ nạp để người nhận tự chọn khoảnh khắc thư giãn của riêng mình.' },
  'gift.cta':       { en: 'Choose', vi: 'Chọn quà' },

  'about.eyebrow':  { en: 'Our story', vi: 'Câu chuyện của chúng tôi' },
  'about.title':    { en: 'About<br><em>Nón</em>', vi: 'Về<br><em>Nón</em>' },
  'about.text':     { en: "Named after the Vietnamese conical hat, Nón Boutique Spa sits in the heart of An Thượng — Đà Nẵng's beachside quarter, moments from Mỹ Khê Beach. Our therapists blend Vietnamese tradition with modern technique in every ritual, from foot and hot stone massage to facials and nail care.",
                      vi: 'Lấy tên từ chiếc nón lá Việt Nam, Nón Boutique Spa nằm giữa lòng An Thượng — khu phố biển của Đà Nẵng, chỉ vài bước tới biển Mỹ Khê. Đội ngũ kỹ thuật viên kết hợp truyền thống Việt với kỹ thuật hiện đại trong từng liệu trình — từ massage chân, đá nóng đến chăm sóc da mặt và làm móng.' },
  'about.s1':       { en: '★ Google rating', vi: '★ điểm Google' },
  'about.s2':       { en: 'reviews', vi: 'đánh giá' },
  'about.s3':       { en: 'signature services', vi: 'dịch vụ đặc trưng' },
  'about.s4':       { en: 'spoken here', vi: 'ngôn ngữ phục vụ' },
  'about.p1':       { en: 'Authentic Balinese & Thai techniques', vi: 'Kỹ thuật Bali & Thái chính gốc' },
  'about.p2':       { en: 'English-speaking, welcoming team', vi: 'Đội ngũ thân thiện, nói tiếng Anh' },
  'about.p3':       { en: 'Couples & private rooms available', vi: 'Có phòng đôi & phòng riêng' },
  'about.p4':       { en: 'Open late, every day until midnight', vi: 'Mở cửa muộn, mỗi ngày đến nửa đêm' },
  'about.follow':   { en: 'Follow on Instagram', vi: 'Theo dõi Instagram' },
  'about.vn':       { en: 'Proudly Vietnamese · Đà Nẵng', vi: 'Tự hào Việt Nam · Đà Nẵng' },
  'foot.vn':        { en: 'Made in Việt Nam', vi: 'Tự hào Việt Nam' },

  'book.eyebrow':   { en: 'Reservations', vi: 'Đặt chỗ' },
  'book.title':     { en: 'Request a<br><em>Booking</em>', vi: 'Gửi<br><em>Yêu cầu đặt lịch</em>' },
  'book.lead':      { en: "Tell us what you'd like and when — we'll open WhatsApp with your request ready to send, or reach us directly below.",
                      vi: 'Cho chúng tôi biết bạn muốn gì và khi nào — chúng tôi sẽ mở WhatsApp với yêu cầu soạn sẵn, hoặc liên hệ trực tiếp bên dưới.' },
  'book.call':      { en: 'call', vi: 'gọi' },
  'book.hoursl':    { en: 'hours', vi: 'giờ mở cửa' },

  'find.eyebrow':   { en: 'Find us', vi: 'Tìm chúng tôi' },
  'find.title':     { en: 'In the heart of <em>An Thượng</em>', vi: 'Giữa lòng <em>An Thượng</em>' },
  'find.near':      { en: 'Nearby', vi: 'Lân cận' },
  'find.dir':       { en: 'Get directions →', vi: 'Chỉ đường →' },
  'find.walk6':     { en: '6 min walk', vi: '6 phút đi bộ' },
  'find.walk4':     { en: '4 min walk', vi: '4 phút đi bộ' },
  'find.oustep':    { en: 'on the doorstep', vi: 'ngay trước cửa' },
  'find.drive':     { en: '10 min drive', vi: '10 phút lái xe' },
  'find.note':      { en: 'Distances are approximate.', vi: 'Khoảng cách chỉ mang tính tương đối.' },

  'feat.1t':        { en: 'Hot Stone<br><em>Massage</em>', vi: 'Massage<br><em>Đá nóng</em>' },
  'feat.1x':        { en: 'Smooth basalt stones, warmed and glided along tired muscles — deep heat that melts tension away.',
                      vi: 'Đá bazan mịn được làm ấm, lướt dọc theo các cơ mỏi mệt — hơi nóng sâu làm tan mọi căng thẳng.' },
  'feat.2t':        { en: 'Foot<br><em>Massage</em>', vi: 'Massage<br><em>Chân</em>' },
  'feat.2x':        { en: 'A guest favourite after a day of beach and city walking — reflexology pressure points that revive from the ground up.',
                      vi: 'Liệu trình được yêu thích nhất sau một ngày dạo biển và phố — bấm huyệt phản xạ hồi sinh từ bàn chân trở lên.' },
  'feat.3t':        { en: 'Oil<br><em>Massage</em>', vi: 'Massage<br><em>Tinh dầu</em>' },
  'feat.3x':        { en: 'Long, flowing strokes with warm aromatic oil — a classic full-body ritual that leaves you rested and quietly renewed.',
                      vi: 'Những động tác dài, uyển chuyển cùng tinh dầu thơm ấm — liệu trình toàn thân cổ điển giúp bạn thư thái và tràn đầy năng lượng.' },

  'loved.eyebrow':  { en: '· 209 Google reviews', vi: '· 209 đánh giá Google' },
  'loved.title':    { en: 'Loved by <em>Guests</em>', vi: 'Khách hàng <em>Yêu thích</em>' },

  'svc.1':          { en: 'Foot Massage', vi: 'Massage chân' },
  'svc.1x':         { en: 'Reflexology &amp; pressure points', vi: 'Bấm huyệt & phản xạ học' },
  'svc.2':          { en: 'Hot Stone', vi: 'Đá nóng' },
  'svc.2x':         { en: 'Warm basalt deep relief', vi: 'Thư giãn sâu với đá bazan ấm' },
  'svc.3':          { en: 'Oil Massage', vi: 'Massage tinh dầu' },
  'svc.3x':         { en: 'Aromatic full-body flow', vi: 'Toàn thân cùng hương tinh dầu' },
  'svc.4':          { en: 'Full Body', vi: 'Toàn thân' },
  'svc.4x':         { en: 'Head-to-toe renewal', vi: 'Tái tạo từ đầu đến chân' },
  'svc.5':          { en: 'Facial &amp; Skin Care', vi: 'Da mặt & Chăm sóc da' },
  'svc.5x':         { en: 'Gentle, glowing results', vi: 'Dịu nhẹ, rạng rỡ' },
  'svc.6':          { en: 'Nail', vi: 'Làm móng' },
  'svc.6x':         { en: 'Manicure &amp; pedicure care', vi: 'Chăm sóc móng tay & chân' },

  'board.title':    { en: 'Price <em>Menu</em>', vi: 'Bảng <em>Giá</em>' },
  'mtab.foot':      { en: 'Foot', vi: 'Chân' },
  'mtab.body':      { en: 'Body', vi: 'Toàn thân' },
  'mtab.shampoo':   { en: 'Shampoo', vi: 'Gội đầu' },
  'board.min':      { en: 'mins', vi: 'phút' },
  'cur.note':       { en: 'Approx. conversion · payment in VND (₫)', vi: 'Quy đổi tương đối · thanh toán bằng VND (₫)' },
  'board.oil':      { en: 'oil · hot stone', vi: 'tinh dầu · đá nóng' },
  'board.d1':       { en: 'Reflexology & pressure points that revive you from the ground up.',
                      vi: 'Bấm huyệt & phản xạ học — đánh thức cơ thể từ đôi chân.' },
  'board.d2':       { en: 'Head-to-toe massage — 90′ and 120′ include warm oil & hot stones.',
                      vi: 'Massage toàn thân — gói 90′ và 120′ gồm tinh dầu ấm & đá nóng.' },
  'board.d3':       { en: 'Relaxing herbal hair wash with head, neck & shoulder massage.',
                      vi: 'Gội đầu dưỡng sinh, kết hợp massage đầu, cổ và vai.' },

  'rev.eyebrow':    { en: '· 209 Google reviews', vi: '· 209 đánh giá Google' },
  'rev.title':      { en: 'What Guests <em>Say</em>', vi: 'Khách hàng <em>Chia sẻ</em>' },

  'marq.label':     { en: 'An Thượng · Đà Nẵng', vi: 'An Thượng · Đà Nẵng' },
  'marq.note':      { en: '— 209 Google reviews', vi: '— 209 đánh giá trên Google' },

  'foot.rights':    { en: 'all rights reserved', vi: 'bảo lưu mọi quyền' },
  'foot.visit':     { en: 'visit us', vi: 'ghé thăm chúng tôi' },
  'foot.reviews':   { en: '· 209 Google reviews', vi: '· 209 đánh giá Google' },

  'modal.title':    { en: 'Booking <em>request</em>', vi: 'Yêu cầu <em>đặt lịch</em>' },
  'modal.sub':      { en: "Fill in your details — we'll open WhatsApp with your request ready to send. Or call us at +84 704 493 053.",
                      vi: 'Điền thông tin — chúng tôi sẽ mở WhatsApp với yêu cầu soạn sẵn. Hoặc gọi +84 704 493 053.' },
  'modal.thanks':   { en: 'Thank you for<br><em>your message!</em>', vi: 'Cảm ơn bạn đã<br><em>liên hệ!</em>' },
  'modal.thankssub':{ en: 'We will contact you shortly.', vi: 'Chúng tôi sẽ liên hệ với bạn sớm.' },

  'assist.title':   { en: 'Nón Assistant', vi: 'Trợ lý Nón' },
  'assist.voicetitle': { en: 'Talk to us', vi: 'Trò chuyện thoại' },
  'assist.chattitle':  { en: 'Chat with us', vi: 'Nhắn tin với chúng tôi' },
  'assist.connecting': { en: 'Connecting…', vi: 'Đang kết nối…' },
  'assist.listening':  { en: 'Listening…', vi: 'Đang lắng nghe…' },
  'assist.speaking':   { en: 'Speaking…', vi: 'Đang trả lời…' },
  'assist.endcall':    { en: 'End call', vi: 'Kết thúc' },
  'assist.voicesub':   { en: 'Speak naturally — our Vietnamese voice replies. Ask about treatments, prices, hours or booking.',
                         vi: 'Cứ nói tự nhiên — trợ lý trả lời bằng giọng nữ Việt Nam. Hỏi về liệu trình, giá, giờ mở cửa hoặc đặt lịch.' },
  'assist.voicefail':  { en: 'Opening the voice & chat widget…', vi: 'Đang mở trợ lý thoại & chat…' },
  'assist.noagentshort': { en: 'Add the ElevenLabs Agent ID to enable voice.', vi: 'Thêm ElevenLabs Agent ID để bật trợ lý thoại.' },
  'assist.greet':   { en: 'Xin chào! 🌿 Which treatment are you interested in — foot, hot stone, oil, facial or nail? And when would you like to visit?',
                      vi: 'Xin chào! 🌿 Bạn quan tâm liệu trình nào — massage chân, đá nóng, tinh dầu, da mặt hay làm móng? Và bạn muốn ghé vào lúc nào?' },
  'assist.hint':    { en: 'Ask about services, prices, hours or bookings — type below.',
                      vi: 'Hỏi về dịch vụ, giá, giờ mở cửa hoặc đặt lịch — nhắn bên dưới.' },
  'assist.noagent': { en: 'Chat is almost ready — paste the spa\'s ElevenLabs Agent ID into <code>js/config.js</code>.',
                      vi: 'Chat sắp sẵn sàng — dán ElevenLabs Agent ID của spa vào <code>js/config.js</code>.' },
  'assist.book':    { en: 'Book now', vi: 'Đặt lịch ngay' },

  'form.fname':     { en: 'First name', vi: 'Tên' },
  'form.fnameph':   { en: 'First name*', vi: 'Tên*' },
  'form.lname':     { en: 'Last name', vi: 'Họ' },
  'form.lnameph':   { en: 'Last name*', vi: 'Họ*' },
  'form.email':     { en: 'Email address', vi: 'Địa chỉ email' },
  'form.phone':     { en: 'Phone number', vi: 'Số điện thoại' },
  'form.phoneph':   { en: 'Enter your mobile number*', vi: 'Nhập số điện thoại*' },
  'form.services':  { en: 'Services inquiring', vi: 'Dịch vụ quan tâm' },
  'form.dates':     { en: 'Dates available', vi: 'Ngày có thể đến' },
  'form.datesph':   { en: 'e.g. 20–22 July, evenings after 6 PM', vi: 'VD: 20–22/7, buổi tối sau 18:00' },
  'form.notes':     { en: 'Additional information', vi: 'Thông tin thêm' },
  'form.notesph':   { en: 'Anything else we should know? (couples booking, allergies…)', vi: 'Điều gì khác chúng tôi nên biết? (đặt cho cặp đôi, dị ứng…)' },
  'form.submit':    { en: 'Send via WhatsApp →', vi: 'Gửi qua WhatsApp →' },
};

const PAGE_TITLE = {
  en: 'Nón Boutique Spa — Đà Nẵng | Massage & Skin Care',
  vi: 'Nón Boutique Spa — Đà Nẵng | Massage & Chăm sóc da',
};

let lang = localStorage.getItem('lang') || 'en';

function applyLang() {
  document.documentElement.lang = lang;
  document.title = PAGE_TITLE[lang];
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const entry = I18N[el.dataset.i18n];
    if (entry) el.innerHTML = entry[lang];
  });
  document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
    const entry = I18N[el.dataset.i18nPh];
    if (entry) el.placeholder = entry[lang];
  });
  document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
    btn.textContent = lang === 'en' ? 'VI' : 'EN';
  });
  document.dispatchEvent(new Event('nbs:langchange'));
}

document.querySelectorAll('[data-lang-toggle]').forEach((btn) =>
  btn.addEventListener('click', () => {
    lang = lang === 'en' ? 'vi' : 'en';
    localStorage.setItem('lang', lang);
    applyLang();
  })
);
applyLang();

// Sticky header
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Reveal on scroll — IntersectionObserver fallback; motion.js (GSAP) takes
// over when its libraries loaded and the visitor allows motion.
if (!document.documentElement.classList.contains('gsap-motion')) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

// Release the hero mask once the intro finished (tall script glyphs like "ó"
// must not stay clipped by the word container)
setTimeout(() => document.querySelector('.hero-title').classList.add('intro-done'), 2400);

// Mobile menu
const burger = document.querySelector('[data-burger]');
const mobileMenu = document.querySelector('[data-mobile-menu]');
burger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a, .book-link').forEach((el) =>
  el.addEventListener('click', () => mobileMenu.classList.remove('open'))
);

// Services slider
const slider = document.querySelector('[data-slider]');
const step = () => slider.querySelector('.slide').offsetWidth + 28;
document.querySelector('[data-prev]').addEventListener('click', () =>
  slider.scrollBy({ left: -step(), behavior: 'smooth' })
);
document.querySelector('[data-next]').addEventListener('click', () =>
  slider.scrollBy({ left: step(), behavior: 'smooth' })
);

// Booking modal
const modal = document.querySelector('[data-modal]');
const modalForm = document.querySelector('[data-modal-form]');
const modalThanks = document.querySelector('[data-modal-thanks]');

document.querySelectorAll('[data-open-modal]').forEach((el) =>
  el.addEventListener('click', (ev) => {
    ev.preventDefault();
    modalForm.hidden = false;
    modalThanks.hidden = true;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  })
);
document.querySelectorAll('[data-close-modal]').forEach((el) =>
  el.addEventListener('click', () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  })
);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('open')) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// Booking request forms (modal + inline #book section): compose a structured
// WhatsApp message from the fields, open it ready to send, then show thanks.
document.querySelectorAll('[data-form]').forEach((form) =>
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const f = e.target;
    const val = (n) => (f.elements[n] ? f.elements[n].value.trim() : '');
    const services = [...f.querySelectorAll('input[name="svc"]:checked')]
      .map((c) => c.closest('.chip').textContent.trim())
      .join(', ');
    const lines = [
      'Xin chào Nón Boutique Spa! 🌿 Booking request / Yêu cầu đặt lịch:',
      `Name / Tên: ${val('fname')} ${val('lname')}`,
      `Phone / SĐT: ${val('phone')}`,
      `Email: ${val('email')}`,
      `Services / Dịch vụ: ${services || '—'}`,
      `Dates / Ngày: ${val('dates') || '—'}`,
    ];
    if (val('notes')) lines.push(`Notes / Ghi chú: ${val('notes')}`);
    const cfg = window.NBS_CONFIG || {};
    if (cfg.WHATSAPP_NUMBER) {
      window.open(`https://wa.me/${cfg.WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener');
    }
    const scope = f.closest('[data-book-scope]');
    if (scope) {
      const fv = scope.querySelector('[data-view="form"]');
      const tv = scope.querySelector('[data-view="thanks"]');
      if (fv) fv.hidden = true;
      if (tv) tv.hidden = false;
    }
  })
);

// About stat counters — count up once when they scroll into view
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target;
    statObserver.unobserve(el);
    const target = parseFloat(el.dataset.count);
    const dec = parseInt(el.dataset.dec || '0', 10);
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.textContent = target.toFixed(dec);
      return;
    }
    const start = performance.now();
    const dur = 1400;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = (target * eased).toFixed(dec);
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target.toFixed(dec);
    };
    requestAnimationFrame(tick);
  });
}, { threshold: 0.4 });
document.querySelectorAll('.stat-card b[data-count]').forEach((el) => statObserver.observe(el));

// Footer year
document.querySelector('[data-year]').textContent = new Date().getFullYear();
