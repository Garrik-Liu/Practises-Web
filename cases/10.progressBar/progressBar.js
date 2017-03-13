(function() {
    var runBtn = document.getElementById("myRun"),
        myPersent = document.getElementById("myPersent");

	function progress() {
        var element = document.getElementById("myBar"); 
        var width = 1; /*从1%开始*/
        var run = setInterval(frame, 10);
        function frame() {
            if (width >= 100) { /*超过100%消除定时器*/
                clearInterval(run);
            } else {
                width++; 
                element.style.width = width + '%'; /*改变width属性值*/
                myPersent.innerHTML = width + '%'; /*右下部显示百分比*/
                element.innerHTML = width + '%';   /*进度条上显示百分比*/
            }
        }
    }

    runBtn.onclick = function() {
    	progress();
    }
})();