// 城民 Official Site - script.js

document.addEventListener('DOMContentLoaded', function () {

  // ===== ハンバーガーメニュー =====
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', function () {
      mobileNav.classList.toggle('open');
      const isOpen = mobileNav.classList.contains('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // モバイルナビのリンクをクリックしたら閉じる
    mobileNav.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        mobileNav.classList.remove('open');
      });
    });
  }

  // ===== スクロールアニメーション =====
  const fadeEls = document.querySelectorAll('.fade-in');

  if (fadeEls.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    fadeEls.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // フォールバック：全部表示
    fadeEls.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // ===== お問い合わせフォーム送信 =====
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = contactForm.querySelector('.form-submit');
      btn.textContent = '送信完了しました';
      btn.disabled = true;
      btn.style.opacity = '0.7';
    });
  }

  // ===== アクティブナビ =====
  const navLinks = document.querySelectorAll('nav a, .mobile-nav a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.style.color = 'var(--gold)';
    }
  });

});
