(function(){
	/*搜索函数*/
	function mySearch() {
        var inputBox = document.getElementById('myInput'),
            input = inputBox.value.toUpperCase(), /*搜索输入变为大写*/
            ul = document.getElementById("myUL"),
            li = ul.getElementsByTagName('li');

        for (i = 0; i < li.length; i++) {
        	a = li[i].getElementsByTagName("a")[0]; /*获得<li>里的<a>*/
        	if (a.innerHTML.toUpperCase().indexOf(input) > -1) { /*搜索是否<a>里有"searchContent"*/
        		li[i].style.display = "block";
        	} else {
        		li[i].style.display = "none";
        	}
        }
    }

    var inputBox = document.getElementById('myInput');
    
    /*每当键盘按键按下后抬起，都调用一次函数*/
    inputBox.onkeyup = function() {
    	mySearch();
    }
})();