// Light/dark theme: saved choice wins, otherwise follow the system preference.
// The initial theme is already applied by the inline script in <head>.
const PARTICLE_COLORS = { light: "#212529", dark: "#ffffff" };
const THEME_KEY = 'theme';

const root = document.documentElement;
const toggleBtn = document.getElementById('theme-toggle');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)');

function getSavedTheme() {
    try {
        return localStorage.getItem(THEME_KEY);
    } catch (e) {
        return null;
    }
}

function saveTheme(theme) {
    try {
        localStorage.setItem(THEME_KEY, theme);
    } catch (e) {
        // Storage unavailable (e.g. private mode); theme still applies for this visit.
    }
}

function applyTheme(theme) {
    root.classList.toggle('dark-mode', theme === 'dark');
    toggleBtn.setAttribute('aria-pressed', String(theme === 'dark'));
    setParticlesColor(PARTICLE_COLORS[theme]);
}

const initialTheme = root.classList.contains('dark-mode') ? 'dark' : 'light';
initParticles(PARTICLE_COLORS[initialTheme]);
applyTheme(initialTheme);

toggleBtn.addEventListener('click', () => {
    const theme = root.classList.contains('dark-mode') ? 'light' : 'dark';
    saveTheme(theme);
    applyTheme(theme);
});

// Follow system changes only while the user hasn't picked a theme themselves.
systemDark.addEventListener('change', (event) => {
    if (!getSavedTheme()) applyTheme(event.matches ? 'dark' : 'light');
});
