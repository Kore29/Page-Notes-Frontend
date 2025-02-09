(function() {
    const darkmode = localStorage.getItem('darkmode');
    const body = document.body;

    if (darkmode === 'active') {
        body.classList.add('darkmode');
        updateHighlightTheme('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-light.min.css');
    } else {
        updateHighlightTheme('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css');
    }

    function updateHighlightTheme(themeUrl) {
        let highlightTheme = document.getElementById('highlight-theme');
        if (!highlightTheme) {
            highlightTheme = document.createElement('link');
            highlightTheme.id = 'highlight-theme';
            highlightTheme.rel = 'stylesheet';
            document.head.appendChild(highlightTheme);
        }
        highlightTheme.href = themeUrl;
    }
})();