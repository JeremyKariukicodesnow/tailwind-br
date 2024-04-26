const initApp = () => {
    const hambergerBtn = document.getElementById
    ('hamburger-button')
    const mobileMenu = document.getElementById
    ('mobile-menu')

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden')
        mobileMenu.classList.toggle('flex')
        hambergerBtn.classList.toggle('toggle-button')
    }

    hamburgerBtn.addEventListener('click',toggleMenu)
    mobileMenu.addEventListener('click',toggleMenu)
}

document.addEventListener('DOMContentloaded', initApp)