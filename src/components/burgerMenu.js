export default function(){
    const menuBtn = document.querySelector('.burger-menu');
    const sidebar = document.querySelector('.sidebar');
    const menuElements = document.querySelectorAll('.sidebar li');


    const handleMenuToggle = function(){
        sidebar.toggleAttribute('open');
    }
    menuBtn.addEventListener('click', handleMenuToggle);

    menuElements.forEach(element => {
        element.addEventListener('click', handleMenuToggle);
    });
}