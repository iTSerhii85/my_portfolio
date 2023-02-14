const contactBtn = document.querySelector('.js-contact');
const contactMenu = document.querySelector('.contact_menu');

contactBtn.addEventListener('click', openContact);

function openContact (){
    contactMenu.classList.toggle('hiden');
}