"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function sendJsonp(t,n){var e=document.createElement("script"),o=-1==t.indexOf("?")?"?":"&";if(t+=o,"object"==_typeof(n)){for(var i in n)t+="".concat(i,"=").concat(n[i])+"&";t+="_="+Date.now()}e.src=t,document.body.appendChild(e)}var searchInput={init:function(){this.datalist=document.querySelector(".datalist"),this.txt=document.querySelector(".txt"),this.event()},event:function(){var e=this;this.txt.oninput=function(){var n=this;setTimeout(function(t){e.getData(n.value)},500)},this.txt.onfocus=function(){""!=this.value&&(e.datalist.style.display="block")},this.txt.onblur=function(){e.datalist.style.display="none"}},getData:function(t){sendJsonp("https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su",{wd:t,cb:"insertData"})},insertData:function(t){t=t.s,this.datalist.innerHTML="";for(var n=0;n<t.length;n++){var e=document.createElement("li");e.innerHTML=t[n],this.datalist.appendChild(e)}}};searchInput.init();var insertData=searchInput.insertData.bind(searchInput);