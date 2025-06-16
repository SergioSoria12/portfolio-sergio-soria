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
});
AOS.init({ once: true, duration: 900, easing: 'ease-out-cubic' });
