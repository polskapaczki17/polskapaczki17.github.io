/* By Sonny
main.js
10/17/2026
 */

const BODY = document.body;
const CONTAINER = document.getElementById('container');
let menu_icon = document.getElementById('menu-icon');
let mobile_menu = document.getElementById('mobile-menu');
let mobile_menu_shader = document.getElementById('mobile-menu-shader');

window.addEventListener('resize', () => {
    const width = window.innerWidth;

    if (width >= 600) {
        CONTAINER.style.filter = 'blur(0rem)';
        mobile_menu.classList.add('hidden');
        mobile_menu.classList.remove('active-menu');
        mobile_menu_shader.classList.remove('active-shader');
    }
});

menu_icon.addEventListener('click', () => {
    mobile_menu.classList.toggle('hidden');
    const isOpen = !mobile_menu.classList.contains('hidden');
    CONTAINER.style.filter = isOpen ? 'blur(0.27rem)' : 'blur(0rem)';
});