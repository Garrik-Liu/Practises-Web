(function() {
  var i; /*index*/
  
  /*为每个li后面加上关闭按钮*/
  function closeBtn() {
    var myNodelist = document.getElementsByTagName("li");
    for (i = 0; i < myNodelist.length; i++) {
      var span = document.createElement("span");
      var txt = document.createTextNode("\u00D7"); /*unicode代码*/
      span.className = "close";
      span.appendChild(txt);
      myNodelist[i].appendChild(span);
    }
  }

  /*点击关闭按钮，隐藏当前li*/
  function closeElement() {
    var close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement; /*关闭按钮的父元素 - li*/
        div.style.display = "none";
      }
    }
  }

  /*点击li的时候，加上.checked，再点击则取消*/
  function ifChecked() {
    var list = document.querySelector('ul');
    list.onclick = function(ev) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
      }
    }
  }

  /*点击添加时，创建一个新的ul*/
  function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("请先输入一个具体任务。");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = ""; /*清空输入*/
  }
   
  /*初始化list*/
  function initList() {   
    closeBtn();
    closeElement();
    ifChecked();
  }
  
  /*初始化*/
  function init() {
    var addButton = document.getElementById("addButton"); 
    initList();

    /*添加按钮点击时执行*/
    addButton.onclick = function() {
      newElement();
      initList();
    }

    /*按回车时亦执行*/
    document.onkeydown = function(event) {
      if(event.keyCode == 13) {
        newElement();
        initList();
      }
    }
  }

  init();

})();