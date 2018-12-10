var shopCar=(function(){
	return {
		init:function(){
			this.event();
			this.getData();
		},
		event:function(){
			const _this=this;
		},
		getData:function(){
			sendAjax('json/shopcar.json').then(res=>{
				res=JSON.parse(res);
				console.log(res);
			})
		}
	}
}());
shopCar.init();