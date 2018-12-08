function sendAjax(url,obj){
	const xhr=new XMLHttpRequest();
	const _default={
		method:'GET',
		data:null
		}
	if(typeof obj=='object'){
		for(var key in _default){
			if(key in obj){
				_default[key]=obj[key];
			}
	}
	}
	_default.method=_default.method.toUpperCase();
	if(_default.method=='GET'){
		let flag=url.indexOf('?')==-1?'?':'&';
		url+=flag;
		for(var i in _default.data){
			let keyValue=`${i}=${_default.data[i]}`;
			url+=keyValue+'&';
		}
		url+=`_=${Date.now()}`;
		_default.data=null;
	}else if(_default.method=='POST'){
		_default.data=JSON.stringify(_default.data);
	}else{
		console.log('告辞');
		return;
	}
	xhr.open(_default.method,url,true);
	xhr.send(_default.data);
	return new Promise(function(resolve, reject) {
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 ) {
                if(xhr.status == 200) {
                    let data = xhr.response;   
                    resolve(data);
                } else {
                    let data = xhr.response;   
                    reject(data);
                }
            }
        }
    })
}
