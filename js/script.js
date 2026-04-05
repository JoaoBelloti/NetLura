// Funcionalidade de Dark/Light Mode

const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Recupera o tema salvo no localStorage ou usa 'dark' como padrão
const currentTheme = localStorage.getItem('theme') || 'dark';

// Define o tema inicial
setTheme(currentTheme);

// Adiciona evento de clique ao botão de toggle
themeToggle.addEventListener('click', toggleTheme);

/**
 * Define o tema aplicado ao documento
 * @param {string} theme - 'dark' ou 'light'
 */
function setTheme(theme) {
    if (theme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        themeToggle.textContent = '☀️'; // Sol para indicar que pode mudar para dark
    } else {
        document.body.removeAttribute('data-theme');
        themeToggle.textContent = '🌙'; // Lua para indicar que pode mudar para light
    }
    
    // Salva a preferência no localStorage
    localStorage.setItem('theme', theme);
}

/**
 * Alterna entre dark e light mode
 */
function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// Splash Screen Animation Control
window.addEventListener('load', function() {
    setTimeout(function() {
        const splash = document.getElementById('splash');
        if (splash) {
            splash.style.display = 'none'; // Esconde a splash após 3 segundos
        }
    }, 3000); // Tempo da animação
});

