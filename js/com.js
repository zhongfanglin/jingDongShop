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
				var $a=document.createElement('a');
				$a.setAttribute('href','demo.html');
				var $img=document.createElement('img');
				$img.src=data[i].src;
				var $p1=document.createElement('p');
				var $p2=document.createElement('p');
				$p1.innerHTML=data[i].content;
				$p2.innerHTML=data[i].money;
				$a.appendChild($img);
				$a.appendChild($p1);
				$a.appendChild($p2);
				this.liAll[i].appendChild($a);
			}
		}
	}
}());
computer.init();
