function loadPage(urlId) {
	var id = "#" + urlId;
	var urlToLoad = "blogs/" + urlId + ".html";
	$('#blog-content').load(urlToLoad);
}

$(document).ready(function() {
	if(window.location.hash) {
		var urlId = window.location.hash.substr(1);
		loadPage(urlId);
	}
});