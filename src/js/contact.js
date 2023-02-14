const contactBtn = document.querySelector('.contact_btn');
const contactMenu = document.querySelector('.contact_menu');

contactBtn.addEventListener('click', onclick);

function onclick (){
    console.log('click');
    contactMenu.classList.add('hiden');
}