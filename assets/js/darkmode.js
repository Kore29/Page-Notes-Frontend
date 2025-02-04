document.getElementById('darkmode-toggle').addEventListener('change', function() {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'white');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
});