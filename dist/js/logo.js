"use strict";var logo={init:function(){this.sub=document.querySelector(".sub"),this.ewm=document.querySelector(".ewm"),this.phone=document.querySelector(".phone"),this.shaoma=document.querySelector(".shaoma"),this.count=document.querySelector(".count"),this.logoBox=document.querySelector(".logoBox"),this.event()},event:function(){var e=this;this.ewm.onmouseenter=function(){e.phone.style.display="inline-block"},this.ewm.onmouseleave=function(){e.phone.style.display="none"},this.count.onclick=function(){e.shaoma.style.color="#66667f",e.count.style.color="#f40",e.count.style.fontWeight="bolder",e.ewm.style.display="none",e.logoBox.style.display="block"},this.shaoma.onclick=function(){e.count.style.color="#66667f",e.shaoma.style.color="#f40",e.shaoma.style.fontWeight="bolder",e.ewm.style.display="block",e.logoBox.style.display="none"},this.sub.onclick=function(){var e=document.querySelector("[type=text]"),o=document.querySelector("[type=password]"),t=e.value,n=o.value,s="name=".concat(t,"&passwords=").concat(n),l=new XMLHttpRequest;l.open("POST","http://10.36.141.231:8888/-/php/logo.php",!0),l.setRequestHeader("Content-type","application/x-www-form-urlencoded"),l.send(s),l.onreadystatechange=function(){4==l.readyState&&200==l.status&&("username is not"==l.responseText?alert("用户名错误"):"success"==l.responseText?(location.href="index1.html",localStorage.username=t):"password error"==l.responseText&&alert("密码错误，重新输入"))}}}};logo.init();