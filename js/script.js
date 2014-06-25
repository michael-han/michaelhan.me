function loadPage(urlToLoad) {
    $('#blog-content').load(urlToLoad, function () {
        alert('Load was performed.');
    });
}