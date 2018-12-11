function sendJsonp(url,data){
	var $script=document.createElement('script');
	var flag=url.indexOf('?')==-1?'?':'&';
	url+=flag;
	if(typeof data=='object'){
		for(var attr in data){
			url+=`${attr}=${data[attr]}`+'&';
		}
		url+='_='+Date.now();
	}
	$script.src=url;
	document.body.appendChild($script);
}
var searchInput=(function(){
	return {
		init:function(){
			this.datalist=document.querySelector('.datalist');
			this.txt=document.querySelector('.txt');
			this.event();
		},
		event:function(){
			const _this=this;
			this.txt.oninput=function(){
				setTimeout(_=>{
					_this.getData(this.value);
				},500)
				
			}
			this.txt.onfocus=function(){
				if(this.value!=''){
					_this.datalist.style.display='block';
				}
			}
			this.txt.onblur=function(){
				_this.datalist.style.display='none';
			}
		},
		getData:function(val){
			sendJsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
				wd:val,
				cb:'insertData'
			})
		},
		insertData:function(data){
			data=data.s;
			this.datalist.innerHTML='';
			for(var i=0;i<data.length;i++){
				var $li=document.createElement('li');
				$li.innerHTML=data[i];
				this.datalist.appendChild($li);
			}
		}
	}
}());
searchInput.init();
var insertData=searchInput.insertData.bind(searchInput);