window.addEventListener('DOMContentLoaded', () => {
    // Splash screen
    setTimeout(() => {
        document.getElementById('splash').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('splash').style.display = 'none';
            document.getElementById('main-content').classList.remove('d-none');
        }, 1000);
    }, 2000);

    // Ocultar overlay al inicio
    const overlay = document.getElementById('overlay-content');
    if (overlay) overlay.style.display = 'none';

    // Mostrar overlay al hacer scroll o clic en la flecha
    let overlayShown = false;
    function showOverlay() {
        if (overlay && !overlayShown) {
            overlay.style.display = 'block';
            overlayShown = true;
        }
    }

    // Scroll
    window.addEventListener('scroll', function() {
        if (!overlayShown && window.scrollY > window.innerHeight * 0.2) {
            showOverlay();
        }
    });

    // Clic en la flecha
    const scrollDownBtn = document.getElementById('scrolldownBtn');
    if (scrollDownBtn) {
        scrollDownBtn.addEventListener('click', function(e) {
            showOverlay();
            setTimeout(() => {
                overlay.scrollIntoView({ behavior: 'smooth' });
            }, 50);
        });
    }

    // Galería de imágenes de proyectos (sin Bootstrap)
    document.querySelectorAll('.proyecto-gallery').forEach(function(gallery) {
        const mainImg = gallery.querySelector('.proyecto-main-img');
        const thumbs = gallery.querySelectorAll('.proyecto-thumb');
        thumbs.forEach(function(thumb) {
            thumb.addEventListener('click', function() {
                // Quitar active de todos
                thumbs.forEach(t => t.classList.remove('active'));
                // Poner active al seleccionado
                thumb.classList.add('active');
                // Cambiar imagen principal
                mainImg.src = thumb.dataset.full;
                mainImg.alt = thumb.alt;
            });
        });
    });
});