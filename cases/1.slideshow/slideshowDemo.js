(function() {  
	var slideshow = {};       /*创建轮播对象*/
	    
	slideshow.slides = document.getElementsByClassName("slide");   /*操作DOM获得轮播页面组*/
	slideshow.dots = document.getElementsByClassName("dot");       /*操作DOM获得圆点按钮组*/
	slideshow.prevBtn = document.getElementById("slideShowPrev");  /*操作DOM获得前翻页按钮*/
	slideshow.nextBtn = document.getElementById("slideShowNext");  /*操作DOM获得后翻页按钮*/

    /*显示指定轮播页面*/
	slideshow.showSlide = function(num) {  /*num 目标页面在页面组中的位置*/
        var index,
            slides = this.slides,         
            dots = this.dots,
            slidesLength = slides.length,
            dotsLength = dots.length;
        
        /*num值在范围内轮环，以此来实现轮播*/
        if(num > slidesLength) {     /*当超过最大值，num返回第一个*/
        	num = 1;
        } else if(num < 1) {
        	num = slidesLength;      /*当超出最小值，num提升至第一个*/
        }
        
        /*关闭全部轮播页面显示*/
        for(index = 0; index < slidesLength; index++) {  
            slides[index].style.display = "none";
        }
        
        /*清除所有圆点按钮的 ".active" */ 
        for(index = 0; index < dotsLength; index++) {
            dots[index].classList.remove("active");
        }
        
        /*使目标页面显示，相对应圆点按钮添加 ".active" */
        /*因为数组从0开始，所以此处 num-1 代表相对应的index*/
        slides[num - 1].style.display = "block"; 
        dots[num - 1].classList.add("active");
	}
    
    /*通过前翻，后翻按钮切换页面  
    (num = 1:前翻)(num = -1:后翻)*/
	slideshow.changeSlide = function(num) {
		var index,
            currentSlideIndex,
            slides = this.slides,
            slidesLength = slides.length;

        for(index = 0; index < slides.length; index++) {
            if(slides[index].style.display == "block") {  /*检测到正在显示的页面的index*/
                currentSlideIndex = index + 1;            /*因为下标从0开始，所有此处 + 1*/
                 break;                                   /*此时 currentSlideIndex 为函数调用时，轮播图正在显示的页面的index*/
            }
        }
        
        this.showSlide(currentSlideIndex += num);         /*与num值相加，作为参数调用 showSlide()*/
	}
    
    /*自动轮播功能*/
	slideshow.automaticShow = function() {
        var index,
            currentSlideIndex,
            slides = this.slides,
            slidesLength = slides.length,
            that = this;
        
        /*循环执行代码，每隔三秒切换至下一张页面*/
        var autoLoop = setInterval(function() {              
            for(index = 0; index < slidesLength; index++) {
                if(slides[index].style.display == "block") { /*获得正在显示的页面的index*/
                    currentSlideIndex = index + 1;
                    break;
                }
            }
            that.showSlide(currentSlideIndex + 1);
        }, 3000);
    }

    /*添加事件监听*/
    slideshow.addHandler = function() {
    	var index,
            prevBtn = this.prevBtn,
            nextBtn = this.nextBtn,
            dots = this.dots,
            dotsLength = dots.length,
            that = this;      /*此处that为slideshow对象*/

        prevBtn.addEventListener('click', function() {
            that.changeSlide(-1); /*作用域改变，this不再指slideshow对象*/
        }, false);
    
        nextBtn.addEventListener('click', function() {
            that.changeSlide(1);
        }, false);
        
        /*点击圆点按钮，切换至对应页面*/
        for(index = 0; index < dotsLength; index++) {
            (function(index) {  /*闭包*/
                dots[index].addEventListener('click', function() {
                    that.showSlide(index + 1); /*index从0开始，所有 + 1*/
                }, false);
            })(index);  
        }
    }
    
    /*初始化*/
    slideshow.init = function() {
    	this.showSlide(1);    /*初始默认页面*/
    	this.automaticShow();
    	this.addHandler();
    }

    slideshow.init();

})();