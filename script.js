// Navigation avec sécurité (vérifie si l'élément existe avant de faire le changement)
window.openTab = function(evt, tabName) {
    const contents = document.querySelectorAll(".tab-content");
    const btns = document.querySelectorAll(".tab-btn");
    const target = document.getElementById(tabName);

    // On retire la classe active de partout
    contents.forEach(c => c.classList.remove("active"));
    btns.forEach(b => b.classList.remove("active"));
    
    // On ajoute la classe uniquement sur la cible
    if (target) target.classList.add("active");
    if (evt && evt.currentTarget) evt.currentTarget.classList.add("active");
};

// Viewer avec gestion d'état
window.playGame = function(url) {
    const viewer = document.getElementById('gameViewer');
    const frame = document.getElementById('gameFrame');
    
    if (viewer && frame) {
        viewer.style.display = 'flex'; // Affiche la fenêtre
        frame.src = url;               // Charge le jeu
        document.body.style.overflow = 'hidden'; // Empêche le défilement du fond
    }
};

window.closeGame = function() {
    const viewer = document.getElementById('gameViewer');
    const frame = document.getElementById('gameFrame');
    
    if (viewer && frame) {
        viewer.style.display = 'none';
        frame.src = ""; // Vide le lien pour arrêter la vidéo/jeu
        document.body.style.overflow = 'auto'; // Rétablit le scroll
    }
};

// Modal avec fermeture automatique au clic sur fond noir
window.openModal = function() {
    const modal = document.getElementById('discordModal');
    if (modal) modal.style.display = 'flex';
};

window.closeModal = function() {
    const modal = document.getElementById('discordModal');
    if (modal) modal.style.display = 'none';
};

function openModal() {
    const discordLink = "https://discord.gg/qt4PFbVNfb"; // Remplace par ton vrai lien
    navigator.clipboard.writeText(discordLink).then(() => {
        alert("Lien copié dans le presse-papier ! Rejoins-nous.");
    });
}
