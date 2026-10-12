// English/German language switch: saved choice wins, otherwise follow the browser language.
// English text lives in index.html too, so the page still reads correctly without JS.
const TRANSLATIONS = {
    en: {
        "page.title": "Kutal Efe Baykal - CV",
        "nav.home": "Home",
        "nav.experience": "Experience",
        "nav.projects": "Projects",
        "nav.education": "Education",
        "intro": "Scroll Down to Reveal My CV!",
        "summary.title": "Professional Summary",
        "summary.text": "Highly motivated Computer Science student and developer with internship experience in enterprise Java.",
        "experience.title": "Work Experience",
        "experience.san.role": "Internship",
        "experience.san.1": "Worked in the team behind the SAN flight app, a platform that sells affordable flight tickets to tourism agencies.",
        "experience.san.2": "Gained first-hand insight into how a large software company plans, organises and delivers its work.",
        "experience.san.3": "Worked with enterprise Java in a production environment, which prepared me for a Java Spring Boot boot camp.",
        "projects.title": "Projects",
        "projects.cv.name": "Personal CV Website",
        "projects.cv.text": "This website: a responsive CV with a light/dark theme that follows the system setting, scroll animations, an interactive particle background and an English/German language switch.",
        "education.title": "Education",
        "education.tud": "Computer Science (Informatik), TU Dortmund University",
        "education.tud.date": "2024 – present",
        "education.akdeniz": "Computer Science, Akdeniz State University",
        "education.akdeniz.date": "2021 – 2024 · transferred to TU Dortmund",
        "skills.title": "Skills",
        "skills.languages": "Programming languages",
        "skills.web": "Web",
        "skills.frameworks": "Frameworks & libraries",
        "skills.spoken": "Languages",
        "skills.spoken.list": "Turkish (native), English (C1), German (C1)",
        "hobbies.title": "Hobbies",
        "hobbies.text": "Sport, Traveling, Saxophone Playing"
    },
    de: {
        "page.title": "Kutal Efe Baykal - Lebenslauf",
        "nav.home": "Start",
        "nav.experience": "Erfahrung",
        "nav.projects": "Projekte",
        "nav.education": "Ausbildung",
        "intro": "Scrolle nach unten, um meinen Lebenslauf zu sehen!",
        "summary.title": "Profil",
        "summary.text": "Hochmotiviert, mit Leidenschaft für Softwareentwicklung und Praktikumserfahrung mit Java im Unternehmensumfeld.",
        "experience.title": "Berufserfahrung",
        "experience.san.role": "Praktikum",
        "experience.san.1": "Mitarbeit im Team der SAN-Flug-App, einer Plattform, die Reiseagenturen günstige Flugtickets anbietet.",
        "experience.san.2": "Einblick aus erster Hand, wie ein großes Softwareunternehmen seine Arbeit plant, organisiert und umsetzt.",
        "experience.san.3": "Arbeit mit Java im produktiven Unternehmenseinsatz – eine solide Grundlage für mein Java-Spring-Boot-Bootcamp.",
        "projects.title": "Projekte",
        "projects.cv.name": "Persönliche Lebenslauf-Website",
        "projects.cv.text": "Diese Website: ein responsiver Lebenslauf mit hellem/dunklem Design, das der Systemeinstellung folgt, Scroll-Animationen, interaktivem Partikel-Hintergrund und Sprachumschaltung (Englisch/Deutsch).",
        "education.title": "Ausbildung",
        "education.tud": "Informatik, Technische Universität Dortmund",
        "education.tud.date": "seit 2024",
        "education.akdeniz": "Informatik, Akdeniz-Universität",
        "education.akdeniz.date": "2021 – 2024 · Wechsel an die TU Dortmund",
        "skills.title": "Kenntnisse",
        "skills.languages": "Programmiersprachen",
        "skills.web": "Web",
        "skills.frameworks": "Frameworks & Bibliotheken",
        "skills.spoken": "Sprachen",
        "skills.spoken.list": "Türkisch (Muttersprache), Englisch (C1), Deutsch (C1)",
        "hobbies.title": "Hobbys",
        "hobbies.text": "Sport, Reisen, Saxophon spielen"
    }
};
const LANG_KEY = 'lang';

const langBtn = document.getElementById('lang-toggle');

function getSavedLang() {
    try {
        return localStorage.getItem(LANG_KEY);
    } catch (e) {
        return null;
    }
}

function saveLang(lang) {
    try {
        localStorage.setItem(LANG_KEY, lang);
    } catch (e) {
        // Storage unavailable (e.g. private mode); language still applies for this visit.
    }
}

function applyLanguage(lang) {
    const dict = TRANSLATIONS[lang];
    document.documentElement.lang = lang;
    document.title = dict["page.title"];
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        el.textContent = dict[el.dataset.i18n];
    });
    // The button shows the language you can switch to.
    langBtn.textContent = lang === 'de' ? 'EN' : 'DE';
}

const browserLang = (navigator.language || '').toLowerCase().startsWith('de') ? 'de' : 'en';
let currentLang = TRANSLATIONS[getSavedLang()] ? getSavedLang() : browserLang;
applyLanguage(currentLang);

langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'de' ? 'en' : 'de';
    saveLang(currentLang);
    applyLanguage(currentLang);
});
