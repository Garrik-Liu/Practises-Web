(function() {
	var mySelect = document.getElementById('mySelect');
	    overlay = document.getElementById('overlay');

	mySelect.onchange = function(e) {
        overlay.className = e.target.value;
	}
})();