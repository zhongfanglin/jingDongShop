var computer=(function(){
	return {
		init:function(){
			this.event();
			this.computer=document.querySelector('.computer');
			this.ul=this.computer.querySelector('ul');
			this.liAll=this.ul.querySelectorAll('li');
			this.getData();
		},
		event:function(){
			const _this=this;
			$(function(){
				$('.computer ul li').on('mouseenter',function(){
					$(this).css('opacity','0.6').siblings().css('opacity','1')
				})
				$('.computer ul li').on('click','li',function(){
					location.href='register.html';
				})
				$('.btn').on('click',function(){
					localStorage.shopList=_this.data;
					console.log(_this.data);
				})
			})
		},
		getData:function(){
			sendAjax('json/computer.json').then(res=>{
				res=JSON.parse(res);
				this.data=res;
				this.insertData(res);
			})
		},
		insertData:function(data){
			for(var i in data){
				$a=document.createElement('a');
				$a.setAttribute('href','#');
				$img=document.createElement('img');
				$img.src=data[i].src;
				$p1=document.createElement('p');
				$p2=document.createElement('p');
				$btn=document.createElement('button');
				$p1.innerHTML=data[i].content;
				$p2.innerHTML=data[i].money;
				$btn.innerHTML="加入购物车";
				$a.appendChild($img);
				$a.appendChild($p1);
				$a.appendChild($p2);
				$a.appendChild($btn);
				this.liAll[i].appendChild($a);
			}
		}
	}
}());
computer.init();
