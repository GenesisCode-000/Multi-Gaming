// ==========================================
// 1. CONFIGURATION & TRADUCTIONS
// ==========================================
const translations = {
    en: {
        title: "Project Dashboard",
        subtitle: "Explore the next generation of games and scripts.",
        search: "Search a game or script...",
        tab_html: "Games / HTML",
        tab_roblox: "Scripts / Roblox",
        tab_packs: "Packs",
        tab_credits: "Credits & Goals",
        tab_team: "Team",
        share: "Share Project Link",
        mission: "Our mission is to create a powerful and secure hub for the gaming community.",
        role_anton: "Lead Developer",
        role_stap: "Developer / Designer"
    },
    fr: {
        title: "Tableau de Bord",
        subtitle: "Découvrez la nouvelle génération de jeux et scripts.",
        search: "Rechercher un jeu ou un script...",
        tab_html: "Jeux / HTML",
        tab_roblox: "Scripts / Roblox",
        tab_packs: "Packs",
        tab_credits: "Crédits & Objectifs",
        tab_team: "Équipe",
        share: "Partager le lien",
        mission: "Notre mission est de créer un hub puissant et sécurisé pour la communauté gaming.",
        role_anton: "Développeur Principal",
        role_stap: "Développeur / Designer"
    },
    ru: {
        title: "Панель Проекта",
        subtitle: "Откройте новое поколение игр и скриптов.",
        search: "Поиск игры или скрипта...",
        tab_html: "Игры / HTML",
        tab_roblox: "Скрипты / Roblox",
        tab_packs: "Пакеты",
        tab_credits: "Авторы и цели",
        tab_team: "Команда",
        share: "Поделиться ссылкой",
        mission: "Наша миссия — создать мощный и безопасный центр для игрового сообщества.",
        role_anton: "Ведущий разработчик",
        role_stap: "Разработчик / Дизайнер"
    }
};

let currentLang = localStorage.getItem("lang") || "en";

// ==========================================
// 2. NAVIGATION
// ==========================================
function openTab(evt, tabName) {
    const tabcontents = document.getElementsByClassName("tab-content");
    for (let content of tabcontents) {
        content.style.display = "none";
        content.classList.remove("active");
    }

    const tablinks = document.getElementsByClassName("tab-btn");
    for (let link of tablinks) {
        link.classList.remove("active");
    }

    const currentTab = document.getElementById(tabName);
    if(currentTab) {
        currentTab.style.display = "block"; 
        currentTab.classList.add("active");
    }
    
    if (evt && evt.currentTarget) {
        evt.currentTarget.classList.add("active");
    }
}

// ==========================================
// 3. TRADUCTIONS (VERSION ROBUSTE)
// ==========================================
function applyTranslations() {
    const t = translations[currentLang];
    
    // Titres et textes fixes
    document.getElementById("mainTitle").textContent = t.title;
    document.getElementById("mainSubtitle").textContent = t.subtitle;
    document.getElementById("searchBar").placeholder = t.search;
    document.getElementById("creditMission").textContent = t.mission;
    document.getElementById("shareText").textContent = t.share;
    
    // Traduction des boutons via leurs IDs (C'est ça qui manquait !)
    const buttons = {
        "btn-html": t.tab_html,
        "btn-roblox": t.tab_roblox,
        "btn-packs": t.tab_packs,
        "btn-credits": t.tab_credits,
        "btn-team": t.tab_team
    };

    for (let id in buttons) {
        const btn = document.getElementById(id);
        if (btn) btn.textContent = buttons[id];
    }

    document.getElementById("roleAntonTeam").textContent = t.role_anton;
    document.getElementById("roleStapTeam").textContent = t.role_stap;
}

function setLang(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
    applyTranslations();
}

// ==========================================
// 4. INITIALISATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    openTab(null, 'html-games');
    applyTranslations();
});

// ==========================================
// 4. INITIALISATION
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Initialisation affichage : on force le premier onglet
    openTab(null, 'html-games');
    
    document.getElementById("searchBar").addEventListener("input", filterContent);
    document.getElementById("categoryFilter").addEventListener("change", filterContent);
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
