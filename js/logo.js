var logo=(function(){
	return {
		init:function(){
			this.sub=document.querySelector('.sub');
			this.ewm=document.querySelector('.ewm');
			this.phone=document.querySelector('.phone');
			this.shaoma=document.querySelector('.shaoma');
			this.count=document.querySelector('.count');
			this.logoBox=document.querySelector('.logoBox');
			this.event();
		},
		event:function(){
			const _this=this;
			this.ewm.onmouseenter=function(){
				_this.phone.style.display='inline-block';
			}
			this.ewm.onmouseleave=function(){
				_this.phone.style.display='none';
			}
			this.count.onclick=function(){
				_this.shaoma.style.color='#66667f';
				_this.count.style.color='#f40';
				_this.count.style.fontWeight='bolder';
				_this.ewm.style.display='none';
				_this.logoBox.style.display='block';
			}
			this.shaoma.onclick=function(){
				_this.count.style.color='#66667f';
				_this.shaoma.style.color='#f40';
				_this.shaoma.style.fontWeight='bolder';
				_this.ewm.style.display='block';
				_this.logoBox.style.display='none';
			}
			this.sub.onclick=function(){
					var txt=document.querySelector('[type=text]'),
					pwd=document.querySelector('[type=password]'),
					txtVal=txt.value,
					pwdVal=pwd.value;
					data=`name=${txtVal}&passwords=${pwdVal}`;
					var xhr=new XMLHttpRequest();
					xhr.open('POST','http://10.36.141.157:8888/-/php/logo.php',true);
					xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
					xhr.send(data);
					xhr.onreadystatechange=function(){
						if(xhr.readyState==4&&xhr.status==200){
						if(xhr.responseText=='username is not'){
							alert('用户名错误');
						}else if(xhr.responseText=='success'){
							location.href='index1.html';
							localStorage.username=txtVal;
						}else if(xhr.responseText=='password error'){
							alert('密码错误，重新输入');
						}
					}
				}
				}
				
		}
	}
}());
logo.init();