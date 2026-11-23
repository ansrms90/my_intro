(() => {
  'use strict';
  document.querySelector('#year').textContent = new Date().getFullYear();

  // 문의 주소는 projects.html의 Contact 섹션에서 관리합니다.
  // mailto: 링크는 방문자의 기본 메일 앱을 열며, 사이트가 직접 메일을 발송하지는 않습니다.

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
