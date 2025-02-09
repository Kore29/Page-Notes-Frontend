let darkmode = localStorage.getItem('darkmode');
const themeSwitch = document.getElementById('theme-switch');

// Función para habilitar el modo oscuro
const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');

    // Cambiar el tema de Highlight.js
    updateHighlightTheme('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-light.min.css');
};

// Función para deshabilitar el modo oscuro
const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);

    // Cambiar el tema de Highlight.js
    updateHighlightTheme('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css');
};

// Función para actualizar dinámicamente el tema de Highlight.js
const updateHighlightTheme = (themeUrl) => {
    const highlightTheme = document.getElementById('highlightTheme');

    if (highlightTheme) {
        // Eliminar el elemento existente
        highlightTheme.remove();
    }

    // Crear un nuevo elemento <link> con el tema deseado
    const newLink = document.createElement('link');
    newLink.id = 'highlightTheme';
    newLink.rel = 'stylesheet';
    newLink.href = themeUrl;
    document.head.appendChild(newLink);
};

// Aplicar el modo oscuro si estaba activo previamente
if (darkmode === 'active') {
    enableDarkmode();
    updateHighlightTheme('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-light.min.css');
}

// Evento para cambiar entre modos claro/oscuro
themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode');
    if (darkmode !== "active") {
        enableDarkmode();
    } else {
        disableDarkmode();
    }
});