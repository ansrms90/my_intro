(() => {
  'use strict';
  document.querySelector('#year').textContent = new Date().getFullYear();

  // 연락처가 정해지기 전에는 임의의 이메일 주소를 노출하지 않습니다.
  document.querySelectorAll('a[href="mailto:hello@example.com"]').forEach(link => {
    link.href = 'https://github.com/'; // 본인의 GitHub 프로필 URL로 변경하세요.
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = link.classList.contains('nav-contact') ? 'GitHub ↗' : 'GitHub';
  });

  const filters = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('[data-category]');
  const empty = document.querySelector('.empty-state');
  filters.forEach(btn => btn.addEventListener('click', () => {
    const value = btn.dataset.filter;
    filters.forEach(x => {
      const active = x === btn;
      x.classList.toggle('is-active', active);
      x.setAttribute('aria-pressed', String(active));
    });
    let visible = 0;
    cards.forEach(card => {
      const show = value === 'all' || card.dataset.category === value;
      card.hidden = !show;
      if (show) visible++;
    });
    empty.hidden = visible > 0;
  }));

  const toggle = document.querySelector('.menu-toggle');
  const mobile = document.querySelector('#mobile-menu');
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    toggle.setAttribute('aria-label', isOpen ? '메뉴 열기' : '메뉴 닫기');
    mobile.hidden = isOpen;
  });
  mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobile.hidden = true;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', '메뉴 열기');
  }));
})();
