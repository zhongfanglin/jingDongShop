var checkInput={
		phone:function(str){
			var reg=/^1[356789]\d{9}$/;
			return reg.test(str);
		},
		username:function(str){
			var reg=/^\w{6,16}$/;
			return reg.test(str);
		},
		passwords:function(str){
			var reg=/^\w{6,16}$/;
		}
	}
var register=(function(){
	return {
		init:function(){
			this.success=document.querySelector('.success');
			this.ok=document.querySelectorAll('.ok');
			this.rpassword=document.querySelector('.rpassword');
			this.container=document.querySelector('.container');
			this.main=document.querySelector('.main');
			this.phone=document.querySelector('.phone');
			this.btn=document.querySelector('.btn');
			this.next=document.querySelector('.next');
			this.reg=document.querySelector('.reg');
			this.username=document.querySelector('.username');
			this.passwords=document.querySelector('.password');
			this.i=0;
			this.event();
		},
		event:function(){
			const _this=this;
			this.btn.onclick=function(){
				var str=_this.phone.value;
				var bool=checkInput.phone(str);
				if(bool){
					_this.btn.innerHTML='验证成功请点击下一步！';
					_this.btn.style.background='green';
					_this.next.onclick=function(){
						_this.main.style.display='none';
						_this.container.style.display='block';
						
					}
				}
			}
			this.username.onblur=function(){
				var str=_this.username.value;
				var bool=checkInput.username(str);
				if(bool){
					_this.username.nextElementSibling.style.display='block';
					_this.username.nextElementSibling.className='ok';
				}
			}
			this.passwords.onblur=function(){
				var str=_this.passwords.value;
				if(str==''){
					alert('密码不能为空');
				}else{
				var bool=checkInput.username(str);
				if(bool){
					_this.passwords.nextElementSibling.style.display='block';
					_this.passwords.nextElementSibling.className='ok';
				}
				}
			}
			this.rpassword.onblur=function(){
				var val=_this.passwords.value;
				var str=_this.rpassword.value;
				var bool=checkInput.username(str);
				if(bool){
					if(val!=str){
						alert('两次密码不一致！');
					}else{
						_this.rpassword.nextElementSibling.style.display='block';
						_this.rpassword.nextElementSibling.className='ok';
					}
				}
			}
				this.reg.onclick=function(){
				var sub=document.querySelectorAll('.sub em');
				for(var i=0;i<sub.length;i++){
					if(sub[i].className!='ok'){
						break;
					}
				}
				_this.i=i;
				if(_this.i==3){
					var username=_this.username.value,
					passwords=_this.passwords.value,
					data=`name=${username}&passwords=${passwords}`;
					var xhr=new XMLHttpRequest();
					xhr.open('POST',apiObj.register,true);
					xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
					xhr.send(data);
					xhr.onreadystatechange=function(){
					if(xhr.readyState==4&&xhr.status==200){
						if(xhr.responseText=='注册成功'){
							_this.container.style.display='none';
							_this.success.style.display='block';
						}else{
							alert(xhr.responseText);
						}
					}
				}
				}
			}
		}
	}
}());
register.init();
