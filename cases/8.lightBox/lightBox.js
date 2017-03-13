(function() {

	/*打开模态框*/
	function openModal() {
		var myModal = document.getElementById('myModal');
		myModal.style.display = "block";
	}
    
    /*关闭模态框*/
	function closeModal() {
		var myModal = document.getElementById('myModal');
		myModal.style.display = "none";
	}

    /*切换模态图*/
	function changeSlide(num) {
		var currentSlide,
		    slides = document.getElementsByClassName("mySlides");
		for (index = 0; index < slides.length; index++) {
			if(slides[index].style.display == "block") {
                currentSlide = index + 1;
			}
		}
		showSlide(currentSlide += num);
	}

    /*显现模态图*/
	function showSlide(num) {
		var index,
		    slides = document.getElementsByClassName("mySlides"),
		    dots = document.getElementsByClassName("demo"),
		    captionText = document.getElementById("caption");
		
		if (num > slides.length) {
			num = 1
		}
		if (num < 1) {
			num = slides.length
		}
		for (index = 0; index < slides.length; index++) {
			slides[index].style.display = "none";
		}
		for (index = 0; index < dots.length; index++) {
			dots[index].classList.remove("active");
		}
		
		slides[num - 1].style.display = "block";
		dots[num - 1].classList.add("active");
		captionText.innerHTML = dots[num - 1].alt;
	}

    /*点击模态内容以外，自动关闭*/
	function clickOutside() {
		var myModal = document.getElementById('myModal');
		window.onclick = function(event) {
			if(event.target == myModal) {
				closeModal();
			}
		}
	}

    /*绑定事件监听*/
	function addEvent() {
		var index,
		    triggerImgs = document.getElementsByClassName("triggerImg"),
		    dots = document.getElementsByClassName("demo"),
		    closeBtn = document.getElementById("closeBtn"),
		    prevBtn = document.getElementsByClassName("prev")[0],
		    nextBtn = document.getElementsByClassName("next")[0];

		for(index = 0; index < triggerImgs.length; index++) {
			(function(index) {
				triggerImgs[index].onclick = function() {
				openModal();
                showSlide(index + 1);
			    }
			})(index);
		}

		for(index = 0; index < dots.length; index++) {
			(function(index) {
				dots[index].onclick = function() {
                showSlide(index + 1);
			    }
			})(index);
		}

		prevBtn.onclick = function() {
			changeSlide(-1);
		}

		nextBtn.onclick = function() {
			changeSlide(1);
		}
        
        closeBtn.onclick = function() {
        	closeModal();
        }
	}

    /*初始化*/
	function init() {
		addEvent();
		clickOutside();
	}

    /*调用*/
	init();
})();