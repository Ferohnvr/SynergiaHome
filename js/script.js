// Funktion zum Umschalten des Menüs
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

// Funktion zum Schließen des Menüs
function closeMenu() {
    document.querySelector('.menu').style.display = 'none';
}

// Event Listener für das DOMContentLoaded-Ereignis
document.addEventListener('DOMContentLoaded', () => {
    const menuToggleButton = document.querySelector('.menu-toggle');

    // Überprüfen, ob der Button existiert
    if (menuToggleButton) {
        menuToggleButton.addEventListener('click', toggleMenu);
    }

    // Schließen des Menüs, wenn ein Link angeklickt wird
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});
