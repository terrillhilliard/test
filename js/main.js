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

  'menu.title':     { en: 'nón spa<br><em>Menu</em>', vi: 'thực đơn<br><em>Nón Spa</em>' },
  'menu.lead':      { en: 'Choose from our', vi: 'Lựa chọn từ' },
  'menu.circled':   { en: 'wide range', vi: 'đa dạng' },
  'menu.rest':      { en: 'of rituals — foot, hot stone and oil massage, full-body therapies, facials and gentle nail care.',
                      vi: 'liệu trình — massage chân, đá nóng, tinh dầu, toàn thân, chăm sóc da mặt và làm móng nhẹ nhàng.' },

  'trio.1':         { en: 'Foot<br><em>&amp;</em> Full Body', vi: 'Chân<br><em>&amp;</em> Toàn thân' },
  'trio.1v':        { en: 'massage rituals', vi: 'liệu trình massage' },
  'trio.2':         { en: '<em>hot</em><br>stone<br><em>&amp;</em> Oil', vi: '<em>đá</em><br>nóng<br><em>&amp;</em> Tinh dầu' },
  'trio.2v':        { en: 'warm therapies', vi: 'liệu pháp ấm nóng' },
  'trio.3':         { en: 'Facial<br><em>&amp;</em> Nail', vi: 'Da mặt<br><em>&amp;</em> Móng' },
  'trio.3v':        { en: 'skin &amp; care', vi: 'chăm sóc da & móng' },

  'gift.card1':     { en: 'gift card', vi: 'thẻ quà tặng' },
  'gift.card2':     { en: 'deposit card', vi: 'thẻ nạp' },
  'gift.title':     { en: 'Find the<br><em>Perfect Gift</em>', vi: 'Món quà<br><em>Hoàn hảo</em>' },
  'gift.text':      { en: 'Give a card for a favourite treatment, or a deposit card that lets the recipient choose their own moment of calm.',
                      vi: 'Tặng thẻ cho liệu trình yêu thích, hoặc thẻ nạp để người nhận tự chọn khoảnh khắc thư giãn của riêng mình.' },
  'gift.cta':       { en: 'Choose', vi: 'Chọn quà' },

  'about.title':    { en: 'About<br><em>Nón</em>', vi: 'Về<br><em>Nón</em>' },
  'about.text':     { en: "Named after the Vietnamese conical hat, Nón Boutique Spa sits in the heart of An Thượng, Đà Nẵng's beachside quarter. Our therapists blend Vietnamese tradition with modern technique in every ritual — from foot and hot stone massage to facials and nail care.",
                      vi: 'Lấy tên từ chiếc nón lá Việt Nam, Nón Boutique Spa nằm giữa lòng An Thượng — khu phố biển của Đà Nẵng. Đội ngũ kỹ thuật viên kết hợp truyền thống Việt với kỹ thuật hiện đại trong từng liệu trình — từ massage chân, đá nóng đến chăm sóc da mặt và làm móng.' },

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
  'board.oil':      { en: 'oil · hot stone', vi: 'tinh dầu · đá nóng' },
  'board.d1':       { en: 'Reflexology & pressure points that revive you from the ground up.',
                      vi: 'Bấm huyệt & phản xạ học — đánh thức cơ thể từ đôi chân.' },
  'board.d2':       { en: 'Head-to-toe massage — 90′ and 120′ include warm oil & hot stones.',
                      vi: 'Massage toàn thân — gói 90′ và 120′ gồm tinh dầu ấm & đá nóng.' },
  'board.d3':       { en: 'Relaxing herbal hair wash with head, neck & shoulder massage.',
                      vi: 'Gội đầu dưỡng sinh, kết hợp massage đầu, cổ và vai.' },

  'marq.label':     { en: 'An Thượng · Đà Nẵng', vi: 'An Thượng · Đà Nẵng' },
  'marq.note':      { en: '— 209 Google reviews', vi: '— 209 đánh giá trên Google' },

  'foot.rights':    { en: 'all rights reserved', vi: 'bảo lưu mọi quyền' },
  'foot.visit':     { en: 'visit us', vi: 'ghé thăm chúng tôi' },
  'foot.reviews':   { en: '· 209 Google reviews', vi: '· 209 đánh giá Google' },

  'modal.title':    { en: 'Book <em>now</em>', vi: 'Đặt lịch <em>ngay</em>' },
  'modal.sub':      { en: 'Leave a request and our team will contact you shortly to confirm the details — or call us at +84 704 493 053.',
                      vi: 'Để lại thông tin và chúng tôi sẽ liên hệ xác nhận trong thời gian sớm nhất — hoặc gọi +84 704 493 053.' },
  'modal.thanks':   { en: 'Thank you for<br><em>your message!</em>', vi: 'Cảm ơn bạn đã<br><em>liên hệ!</em>' },
  'modal.thankssub':{ en: 'We will contact you shortly.', vi: 'Chúng tôi sẽ liên hệ với bạn sớm.' },

  'assist.title':   { en: 'Nón Assistant', vi: 'Trợ lý Nón' },
  'assist.hint':    { en: 'Ask about services, prices, hours or bookings — speak or type. Voice replies use our Vietnamese voice.',
                      vi: 'Hỏi về dịch vụ, giá, giờ mở cửa hoặc đặt lịch — nói hoặc nhắn tin. Trợ lý trả lời bằng giọng nữ Việt Nam.' },
  'assist.noagent': { en: 'Voice &amp; chat are almost ready — paste the spa\'s ElevenLabs Agent ID into <code>js/config.js</code>.',
                      vi: 'Trợ lý giọng nói &amp; chat sắp sẵn sàng — dán ElevenLabs Agent ID của spa vào <code>js/config.js</code>.' },
  'assist.book':    { en: 'Book now', vi: 'Đặt lịch ngay' },

  'form.name':      { en: 'Name', vi: 'Họ tên' },
  'form.nameph':    { en: 'Enter your name*', vi: 'Nhập họ tên của bạn*' },
  'form.email':     { en: 'Email address', vi: 'Địa chỉ email' },
  'form.phone':     { en: 'Phone', vi: 'Số điện thoại' },
  'form.phoneph':   { en: 'Enter your mobile number*', vi: 'Nhập số điện thoại*' },
  'form.submit':    { en: 'Submit →', vi: 'Gửi →' },
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
setTimeout(() => document.querySelector('.hero-title').classList.add('intro-done'), 2000);

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

// Demo form: show thank-you panel (no data is sent anywhere)
document.querySelector('[data-form]').addEventListener('submit', (e) => {
  e.preventDefault();
  modalForm.hidden = true;
  modalThanks.hidden = false;
});

// Footer year
document.querySelector('[data-year]').textContent = new Date().getFullYear();
