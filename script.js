const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if(event.type ==="touchstart") event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttibute('aria-expanded', 'true');
    if(active){
        event.currentTarget.setAttibute('aria-label', 'Fechar Menu');
    } else{
            event.currentTarget.setAttibute('aria-label', 'Abrir Menu');
        }

}


btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);