/* =========================================================
   CHAMAIPORN PROJECT (CMP) — Landing page scripts
   ========================================================= */
(function () {
  'use strict';

  document.documentElement.classList.add('js');

  const $ = (s, root = document) => root.querySelector(s);
  const $$ = (s, root = document) => [...root.querySelectorAll(s)];

  const nav = $('.nav');
  const menuBtn = $('#menu-btn');
  const langBtn = $('#lang');
  const toTop = $('#to-top');
  const navLinks = $$('.links a');

  /* ---------- Language toggle (TH / EN) ---------- */
  const LANG_KEY = 'cmp-lang';

  function setLang(lang) {
    const en = lang === 'en';
    document.documentElement.lang = en ? 'en' : 'th';
    langBtn.textContent = en ? 'TH' : 'EN';
    langBtn.setAttribute('aria-label', en ? 'เปลี่ยนเป็นภาษาไทย' : 'Switch to English');
    $$('[data-th]').forEach(el => {
      const text = en ? el.dataset.en : el.dataset.th;
      if (text) el.textContent = text;
    });
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { /* storage unavailable */ }
  }

  langBtn.addEventListener('click', () => {
    setLang(document.documentElement.lang === 'en' ? 'th' : 'en');
  });

  let saved = null;
  try { saved = localStorage.getItem(LANG_KEY); } catch (e) { /* storage unavailable */ }
  if (saved === 'en') setLang('en');

  /* ---------- Mobile menu ---------- */
  function closeMenu() {
    nav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }

  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });

  navLinks.forEach(a => a.addEventListener('click', closeMenu));

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeMenu();
  });

  document.addEventListener('click', e => {
    if (nav.classList.contains('open') && !nav.contains(e.target)) closeMenu();
  });

  /* ---------- Active section highlight ---------- */
  const sections = $$('header[id], section[id]');
  const spy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(a => a.classList.toggle('on', a.hash === '#' + entry.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => spy.observe(s));

  /* ---------- Reveal on scroll ---------- */
  const revealEls = $$('.reveal');
  if ('IntersectionObserver' in window) {
    const reveal = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(el => reveal.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* ---------- Nav shadow + back-to-top ---------- */
  function onScroll() {
    const y = window.scrollY;
    nav.classList.toggle('scrolled', y > 10);
    toTop.classList.toggle('show', y > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- Footer year ---------- */
  const year = $('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
