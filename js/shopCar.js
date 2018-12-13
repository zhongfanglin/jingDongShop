var shopCar=(function(){
	return {
		init:function(){
			this.lis=document.querySelector('.shopList .lis');
			this.lists=document.querySelector('.com');
			this.liAll=this.lists.querySelectorAll('li');
			this.but=this.lists.querySelectorAll('button');
			this.shopUser=document.querySelector('.shopUser');
			this.getData();
			this.event();
			this.carData();
			this.checkAll();
		},
		event:function(){
			const _this=this;
			for(let i=0;i<this.but.length;i++){
				this.but[i].onclick=function(){
                 _this.setItem(_this.data[i]);
                 _this.lis.innerHTML='';
                 _this.carData();
                 _this.checkAll();
				}
			}
			if(localStorage.username){
					this.shopUser.innerHTML=`${localStorage.username}，请登录`;
				}else{
					
					this.shopUser.innerHTML=`您好，请登录`;
			}
		},
		getData:function(){
			sendAjax('json/shopcar.json').then(res=>{
				res=JSON.parse(res);
				this.data=res;
				this.insertData(res);
			})
		},
		insertData:function(data){
			for(var i=0;i<this.liAll.length;i++){
				this.liAll[i].querySelector('img').src=data[i].src;
				this.liAll[i].querySelector('.con').innerHTML=data[i].contents;
				this.liAll[i].querySelector('.pri').innerHTML=data[i].price;
			}
		},
		setItem:function(data){
			var shopList=localStorage.getItem('shopList')||'[]';
			shopList=JSON.parse(shopList);
			for(var i=0;i<shopList.length;i++){
					if(shopList[i].name==data.name){
						shopList[i].num=parseInt(shopList[i].num)+parseInt(data.num);
						break;
					    }
					}
				if(i==shopList.length){
				shopList.push(data);
				}
			localStorage.shopList=JSON.stringify(shopList);
		},
        carData:function(){
        	this.lis.innerHTML='';
        	if(localStorage.shopList!='[]'){
				document.querySelector('.shopList p').style.display='block';
			}else{
				var $li=document.createElement('li');
				$li.innerHTML=`购物车空，<a href='index1.html'>去购物吧</a>`;
				$li.style.fontSize='24px';
				$li.style.textAlign='center';
				$li.style.lineHeight='150px';
				this.lis.appendChild($li);
				document.querySelector('.shopList p').style.display='none';
			}
        	var shopList=localStorage.shopList||'[]';
			shopList=JSON.parse(shopList);
			for(var i=0;i<shopList.length;i++){
				var money=parseInt(shopList[i].price)*parseInt(shopList[i].num);
	            var $li=document.createElement('li');
				$li.innerHTML=`<div class="contentsAll clearfix">
							<div class="inp"><input type="checkbox" class='checkboxs' /></div>
							<div class="img">
								<img src="${shopList[i].src}" />
							</div>
							<div class="con">${shopList[i].contents}</div>
							<div class="colors">
								<p class="co">颜色：${shopList[i].color}</p>
								<p class="si">尺寸：${shopList[i].size}</p>
							</div>
							<div class="price">${shopList[i].price}</div>
							<div class="num"><input type="number" value='${shopList[i].num}' /></div>
							<div class="jiage">
								<span>${money}.00</span>
								<i>${shopList[i].weight}</i>
							</div>
							<div class="move">
							<p class='rm'>删除</p>
							<p>移到我的关注</p>
							<p>加到我的关注</p>
						</div>
						</div>
						<div class="dazhe">预约中，抢购开始时间2018-12-12 00:00</div>
					`;
					this.lis.appendChild($li);
			}
        },
        checkAll:function(){
        	const self=this;
			var rm=document.querySelectorAll('.rm');
			for(var i=0;i<rm.length;i++){
				rm[i].index=i;
			}
			this.lis.onclick=function(e){
				e=e||window.event;
				var target=e.target||e.srcElement;
				if(target.innerHTML=='删除'){
					var shopList=localStorage.shopList;
					shopList=JSON.parse(shopList);
					shopList.splice(target.index,1);
					localStorage.shopList=JSON.stringify(shopList);
				    self.carData();
				}
			}
			var checkAll=document.querySelector('.all');
			var checkboxs=document.querySelectorAll('.checkboxs');
			checkAll.onclick=function(){
				for(var i=0;i<checkboxs.length;i++){
					if(checkAll.checked){
					checkboxs[i].checked=checkAll.checked;
					}else{
						checkboxs[i].checked=checkAll.checked;
					}
			  }
			}
			for(let i=0;i<checkboxs.length;i++){
				checkboxs[i].onclick=function(){
					for(var j=0;j<checkboxs.length;j++){
						if(!checkboxs[j].checked){
				            break;
						}
					}
					if(j==checkboxs.length){
				         checkAll.checked=true;
			       }else{
			       	checkAll.checked=false;
			       }
				}
			}
			var span=document.querySelectorAll('.jiage span');
			localStorage.sum=span.length;
			var heji=document.querySelector('.heji span');
			var zong=0;
			for(var i=0;i<span.length;i++){
				zong+=parseInt(span[i].innerHTML);
			}
			heji.innerHTML=zong+'.00';
			
        }
	}
}());
shopCar.init();