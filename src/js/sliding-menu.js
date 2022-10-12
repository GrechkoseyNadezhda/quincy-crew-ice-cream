(() => {
    const mobileMenu = document.querySelector(".header__sliding-menu");
    const menuBtnOpen = document.querySelector("[data-menu-open]");
    const menuBtnClose = document.querySelector('[data-menu-close]');
    menuBtnOpen.addEventListener("click", () => {
        console.log(mobileMenu);
        const expanded = menuBtnOpen.getAttribute("aria-expanded") === "true" || false;
        mobileMenu.classList.toggle("is-open");
        menuBtnOpen.setAttribute("aria-expanded", !expanded);
    });
    menuBtnClose.addEventListener('click', () => {
        const expanded = menuBtnOpen.getAttribute('aria-expanded') === 'false' || true;
        menuBtnOpen.classList.toggle('is-open');
        menuBtnOpen.setAttribute('aria-expanded', !expanded);
        mobileMenu.classList.toggle('is-open');
    });
})();