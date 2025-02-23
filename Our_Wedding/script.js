function abrirSobre() {
    let pergamino = document.getElementById('pergamino');
    pergamino.style.display = 'block';
    pergamino.style.animation = 'desenrollar 3s ease-out forwards';
}

setInterval(() => {
    let slides = document.querySelectorAll('.slide');
    let active = document.querySelector('.slide:not([style*="display: none"])');
    let next = active.nextElementSibling || slides[0];
    
    active.style.display = 'none';
    next.style.display = 'block';
}, 3000);
