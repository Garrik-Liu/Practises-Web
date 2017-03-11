# 轮播图

**效果预览**
![Alt text](./GIF.gif)

## HTML部分

1. **创建轮播图容器**
``` vbscript-html
<div class="slideshow-container"></div>
```

---

2. **添加多个轮播页面**
``` vbscript-html
    <div class="slideshow-container"> <!-- 轮播容器开始 -->
    	
    	<!-- 轮播页面 -->
    	<div class="slide"> 
    		<div class="slideIndex"></div> <!-- 展示页码 -->
    		<img src="img1.jpg">           <!-- 轮播图片 -->
    	</div>
        
        <!-- 轮播页面 -->
    	<div class="slide">
    		<div class="slideIndex"></div> <!-- 展示页码 -->
    		<img src="img2.jpg">           <!-- 轮播图片 -->
    	</div>
        
        <!-- 轮播页面 -->
    	<div class="slide">
    		<div class="slideIndex"></div> <!-- 展示页码 -->
    		<img src="img3.jpg">           <!-- 轮播图片 -->
    	</div>
    </div> <!-- 轮播容器结束 -->
```
* `<div class="slideIndex"></div>` 未来用来显示轮播页所在页码位置
* `<img src="img.jpg">` 为轮播页面加上轮播图片

---

3. **添加 [前翻] [后翻] 按钮**
``` vbscript-html
        <!-- 前翻页，后翻页按钮 -->
    	<a class="prev" id="slideShowPrev">&#10094;</a> 
    	<!-- &#10094 为特殊Unicode字符 -->
        <a class="next" id="slideShowNext">&#10095;</a>  
        <!-- &#10095 为特殊Unicode字符 -->
```
在轮播容器里面，我们在轮播页面之后再为容器加上“前翻” 和 “后翻” 按钮。
通过这两个按键我们可以控制轮播页面向前翻，或者向后翻。
此处在`<a>`标签里面是 UTF-8 字符，我们可以用这些字符来表示很多特殊符号。

延展阅读：  [UTF-8 符号](https://www.w3schools.com/charsets/ref_utf_misc_symbols.asp)

---

4. **添加圆点坐标按钮组**

``` vbscript-html
    <!-- 圆点坐标按钮组 -->
    <div class="dotGroup">
        <span class="dot"></span> 
        <span class="dot"></span> 
        <span class="dot"></span> 
    </div>
```
继续在之前的代码后面，为轮播容器加上圆点坐标按钮组（也就是轮播图最下面的小圆点点），通过这些按钮我们可以清楚的看到每张轮播图片所在图片组的位置，并且可以通过点击按钮，来快速切换到我们想要的位置。

---

到这里我们的HTML代码就写完了，大家现在可以在浏览器里预览一下。

怎么样？很不像话吧。

接下来，就让我们开始用CSS来进一步完善它吧！

---

## CSS 部分

1. **重置CSS**
``` css
* {
	margin: 0;
	padding: 0;
    box-sizing: border-box;
}
```
margin, padding 默认为0，将padding和border算入宽度

延展阅读：[box-sizing 属性](http://www.w3school.com.cn/cssref/pr_box-sizing.asp)

---


2. **为轮播容器设置样式**

``` css
/* 轮播图容器 */
.slideshow-container {
  max-width: 800px;
  position: relative;       /*设置为相对定位，以让子元素相对它进行绝对定位*/
  margin: 0 auto;           /*居中*/
}
```

---

3. **为轮播页面设置样式**

```
.slide {
  display: none;     /*默认为不显示*/
}

.slide img {
    width: 100%;     /*宽度最大不超过父元素（轮播容器）*/
}

.slideIndex {        /*设置页标样式*/
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}
```

---

4. **为"前翻"，"后翻" 按钮设置样式**

``` css
/* 前进 & 后退 */
.prev, .next {
  cursor: pointer;
  position: absolute;    /*在轮播容器内绝对定位*/
  top: 50%;              /*在垂直方向调到中间*/
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease; /*加入动画特效*/
}

.prev {
    left: 0;   
    border-radius: 0 3px 3px 0;
}


.next {
    right: 0;
    border-radius: 3px 0 0 3px;
}

/*当鼠标Hover时，背景色改变，提升用户体验*/
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}
```

---

5. **为按钮组添加样式**

```
.dotGroup {
    text-align: center;      /*使按钮组居中*/
    position: relative;      /*使其脱离文档流，不会被图片挡住*/
    margin-top: -30px;       /*向上移，使其出现在在图片底端位置*/
}

.dot {                   
  cursor:pointer;
  height: 13px;
  width: 13px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover { 
  background-color: #717171;
}
```
---

现在在浏览器里打开再看一下。

是不是什么也看不到？

没关系，我们马上就要见证奇迹啦，接下来让我完成最后的部分吧！

---

## Javascript 部分

1.  **离开全局**
```
(function() {
	
})();
```
把JS代码放到一个单独的自调用匿名函数中。

扩展阅读：[深入理解(function() {
})();](http://www.jb51.net/article/50967.htm)

---

2. **创建轮播对象**

```
	var slideshow = {};       /*创建轮播对象*/
	    
	slideshow.slides = document.getElementsByClassName("slide");   /*操作DOM获得轮播页面组*/
	slideshow.dots = document.getElementsByClassName("dot");       /*操作DOM获得圆点按钮组*/
	slideshow.prevBtn = document.getElementById("slideShowPrev");  /*操作DOM获得前翻页按钮*/
	slideshow.nextBtn = document.getElementById("slideShowNext");  /*操作DOM获得后翻页按钮*/
```

---

3. **显示目标页面**
```
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

```

---

4. **为前翻，后翻按钮添加功能**
```
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
```

---

5. **自动轮播**

```
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
```

---

6. **添加事件监听**

```
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
```

扩展阅读: [浅谈JavaScript for循环 闭包](http://www.jb51.net/article/87084.htm)

---

7. **初始化**

```
    /*初始化*/
    slideshow.init = function() {
    	this.showSlide(1);    /*初始默认页面*/
    	this.automaticShow();
    	this.addHandler();
    }
```

---

8. **调用**

```
slideshow.init();
```

---

好啦，现在所有的代码都写完啦！

赶快打开浏览器，看看效果吧！


>在这里，只是给大家提供一种思路，参考。
>具体的实现，每个人都可以有不同的方法。
>请大家赶快发挥想象，把你最想实现的功能，在电脑敲出来吧！


