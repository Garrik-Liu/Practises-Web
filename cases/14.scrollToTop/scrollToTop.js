(function() {
    var myBtn = document.getElementById("myBtn");
    
    /*判断滚轮位置*/
	function scrollCheck() {
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("myBtn").style.display = "block";
        } else {
            document.getElementById("myBtn").style.display = "none";
        }
	}

	function goToTop() {
		/*延时上升*/
		var loop = setInterval(function(){
			/*浏览器兼容*/
			var body = document.body || document.documentElement;
			body.scrollTop -= 30;
			if(body.scrollTop == 0) {
				clearInterval(loop);
			}
		}, 1);
	}

    /*滚动时执行*/
	window.onscroll = function() {
		scrollCheck();
	}

	myBtn.onclick = function() {
		goToTop();
	}
})();