document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');
    const currentTheme = localStorage.getItem('darkmode') || 'inactive';

    if (currentTheme === 'active') {
        enableDarkmode();
    } else {
        disableDarkmode();
    }

    themeSwitch.addEventListener('click', () => {
        const darkmode = localStorage.getItem('darkmode');
        if (darkmode !== 'active') {
            enableDarkmode();
        } else {
            disableDarkmode();
        }
    });
});

const enableDarkmode = () => {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
    updateHighlightTheme('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-light.min.css');
};

const disableDarkmode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', 'inactive');
    updateHighlightTheme('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css');
};

const updateHighlightTheme = (themeUrl) => {
    let highlightTheme = document.getElementById('highlight-theme');
    if (!highlightTheme) {
        highlightTheme = document.createElement('link');
        highlightTheme.id = 'highlight-theme';
        highlightTheme.rel = 'stylesheet';
        document.head.appendChild(highlightTheme);
    }
    highlightTheme.href = themeUrl;
};