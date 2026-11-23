(() => {
    'use strict';
    const year = document.getElementById('year');
    if (year) year.textContent = new Date().getFullYear();
    const toggle = document.querySelector('.menu-toggle');
    const menu = document.getElementById('mobile-menu');
    if (!toggle || !menu) return;
    toggle.addEventListener('click', () => {
        const open = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!open));
        toggle.setAttribute('aria-label', open ? '메뉴 열기' : '메뉴 닫기');
        menu.hidden = open;
    });
    menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        menu.hidden = true;
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', '메뉴 열기');
    }));
})();