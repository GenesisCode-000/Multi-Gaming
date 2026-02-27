// ==========================================
// 1. CONFIGURATION & TRADUCTIONS
// ==========================================
const translations = {
    en: {
        title: "Project Dashboard",
        subtitle: "Explore the next generation of games and scripts.",
        search: "Search a game or script...",
        cat_all: "All Categories",
        cat_html: "HTML Games",
        cat_roblox: "Roblox Scripts",
        tab_html: "Games / HTML",
        tab_roblox: "Scripts / Roblox",
        tab_credits: "Credits & Goals",
        tab_team: "Team",
        play: "Play Demo",
        get: "Get Script",
        close: "✕ CLOSE & EXIT",
        loading: "Game Loading...",
        share: "Share Project Link",
        mission: "Our mission is to create a powerful and secure hub for the gaming community.",
        coming_soon: "Coming Soon.", // AJOUTÉ
        role_anton: "Lead Developer",
        role_stap: "Developer / Designer"
    },
    fr: {
        title: "Tableau de Bord",
        subtitle: "Découvrez la nouvelle génération de jeux et scripts.",
        search: "Rechercher un jeu ou un script...",
        cat_all: "Toutes les catégories",
        cat_html: "Jeux HTML",
        cat_roblox: "Scripts Roblox",
        tab_html: "Jeux / HTML",
        tab_roblox: "Scripts / Roblox",
        tab_credits: "Crédits & Objectifs",
        tab_team: "Équipe",
        play: "Jouer à la démo",
        get: "Obtenir le script",
        close: "✕ QUITTER LE JEU",
        loading: "Chargement du jeu...",
        share: "Partager le lien",
        mission: "Notre mission est de créer un hub puissant et sécurisé pour la communauté gaming.",
        coming_soon: "Bientôt disponible.", // AJOUTÉ
        role_anton: "Développeur Principal",
        role_stap: "Développeur / Designer"
    },
    ru: {
        title: "Панель Проекта",
        subtitle: "Откройте новое поколение игр и скриптов.",
        search: "Поиск игры или скрипта...",
        cat_all: "Все категории",
        cat_html: "HTML игры",
        cat_roblox: "Roblox скрипты",
        tab_html: "Игры / HTML",
        tab_roblox: "Скрипты / Roblox",
        tab_credits: "Авторы и цели",
        tab_team: "Команда",
        play: "Играть",
        get: "Получить скрипт",
        close: "✕ ВЫЙТИ",
        loading: "Загрузка игры...",
        share: "Поделиться ссылкой",
        mission: "Наша миссия — создать мощный и безопасный центр для игрового сообщества.",
        coming_soon: "Скоро будет.", // AJOUTÉ
        role_anton: "Ведущий разработчик",
        role_stap: "Разработчик / Дизайнер"
    }
};

let currentLang = localStorage.getItem("lang") || "en";

// ==========================================
// 2. RECHERCHE & FILTRAGE (CORRIGÉ)
// ==========================================
function filterContent() {
    const searchValue = document.getElementById("searchBar").value.toLowerCase().trim();
    const categoryValue = document.getElementById("categoryFilter").value;
    // On sélectionne toutes les cartes de jeux et scripts
    const cards = document.querySelectorAll(".card[data-category]");

    cards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        const category = card.getAttribute("data-category");
        
        const matchesSearch = title.includes(searchValue);
        const matchesCategory = (categoryValue === "all" || category === categoryValue);
        
        if (matchesSearch && matchesCategory) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

// ==========================================
// 3. NAVIGATION (ONGLETS)
// ==========================================
function openTab(evt, tabName) {
    const tabcontents = document.getElementsByClassName("tab-content");
    const tablinks = document.getElementsByClassName("tab-btn");

    for (let content of tabcontents) {
        content.classList.remove("active");
        content.style.opacity = "0";
    }
    for (let link of tablinks) {
        link.classList.remove("active");
    }

    const currentTab = document.getElementById(tabName);
    currentTab.classList.add("active");
    setTimeout(() => { currentTab.style.opacity = "1"; }, 10);
    evt.currentTarget.classList.add("active");
}

// ==========================================
// 4. GAME VIEWER
// ==========================================
function playGame(gameTitle, gameUrl) {
    const viewer = document.getElementById('gameViewer');
    const frame = document.getElementById('gameFrame');
    const titleDisp = document.getElementById('currentGameTitle');

    titleDisp.textContent = gameTitle;
    frame.src = gameUrl; 
    
    viewer.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeGame() {
    const viewer = document.getElementById('gameViewer');
    const frame = document.getElementById('gameFrame');
    viewer.style.display = 'none';
    frame.src = ""; 
    document.body.style.overflow = 'auto';
}

// ==========================================
// 5. TRADUCTION
// ==========================================
function applyTranslations() {
    const t = translations[currentLang];
    
    document.getElementById("mainTitle").textContent = t.title;
    document.getElementById("mainSubtitle").textContent = t.subtitle;
    document.getElementById("searchBar").placeholder = t.search;
    
    // Mission & Coming Soon
    document.getElementById("creditMission").textContent = t.mission;
    document.getElementById("comingSoonText").textContent = t.coming_soon; // TRADUCTION DU TEXTE ROBLOX
    
    // Rôles Team
    document.getElementById("roleAntonTeam").textContent = t.role_anton;
    document.getElementById("roleStapTeam").textContent = t.role_stap;

    // Filtres
    const catFilter = document.getElementById("categoryFilter");
    catFilter.options[0].text = t.cat_all;
    catFilter.options[1].text = t.cat_html;
    catFilter.options[2].text = t.cat_roblox;

    // Tabs
    const tabs = document.querySelectorAll(".tab-btn");
    tabs[0].textContent = t.tab_html;
    tabs[1].textContent = t.tab_roblox;
    tabs[2].textContent = t.tab_credits;
    tabs[3].textContent = t.tab_team;

    // Boutons
    document.querySelectorAll("#html-games .btn-main").forEach(btn => btn.textContent = t.play);
    document.querySelectorAll("#roblox-scripts .btn-main").forEach(btn => btn.textContent = t.get);
    document.getElementById("shareText").textContent = t.share;
}

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
    applyTranslations();
}

// ==========================================
// 6. INITIALISATION & LISTENERS
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // 1. Activer la recherche en temps réel
    document.getElementById("searchBar").addEventListener("input", filterContent);
    // 2. Activer le filtre par catégorie
    document.getElementById("categoryFilter").addEventListener("change", filterContent);
    
    // Appliquer la traduction
    applyTranslations();
});

// Fonctions diverses
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    document.getElementById("themeToggle").textContent = document.body.classList.contains("light-theme") ? "☀️" : "🌙";
});

function openModal() { document.getElementById('discordModal').style.display = 'flex'; }
function closeModal() { document.getElementById('discordModal').style.display = 'none'; }

function shareSite() {
    const siteUrl = window.location.href;
    const toast = document.getElementById('shareToast');
    navigator.clipboard.writeText(siteUrl).then(() => {
        toast.style.transform = "translateY(0)";
        setTimeout(() => { toast.style.transform = "translateY(100px)"; }, 3000);
    });
}