document.getElementById('darkmode-toggle').addEventListener('change', function() {
    const highlightTheme = document.getElementById('highlight-theme');
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'white');
        highlightTheme.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-light.min.css');
    } else {
        document.documentElement.removeAttribute('data-theme');
        highlightTheme.setAttribute('href', 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/atom-one-dark.min.css');
    }
});