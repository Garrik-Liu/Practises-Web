(function() {

	/*模态图对象*/
	var modalImg = {};

	/*触发图片*/
	modalImg.triggerImg = document.getElementsByClassName('myImg');
	
    /*关闭按钮*/
	modalImg.closeBtn = document.getElementById('closeBtn');
	
    /*模态背景*/
	modalImg.modal = document.getElementById('myModal');
	
    /*模态图*/
	modalImg.img = document.getElementById("img01");
	
    /*模态图标题*/
	modalImg.captionText = document.getElementById("caption");

	/*模态图显示*/
	modalImg.show = function() {
		this.modal.style.display = "block";
		this.img.src = this.triggerImg[0].src;
		this.captionText.innerText = this.triggerImg[0].alt;
	}

	/*模态图关闭*/
	modalImg.close = function() {
		this.modal.style.display = "none";
	}

    /*点击模态图以外区域，模态图关闭*/
	modalImg.outsideClick = function() {
		var that = this;
		window.onclick = function(event) {
			if(event.target == that.modal) {
                that.close();
			}
		}
	}

    /*初始化*/
	modalImg.init = function() {
        var that = this;
        this.triggerImg[0].onclick = function() {
        	that.show();
        }
        this.closeBtn.onclick = function() {
        	that.close();
        }
        this.outsideClick();
	}

    /*模态图初始*/
	modalImg.init();
})();