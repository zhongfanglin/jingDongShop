"use strict";function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function sendAjax(t,o){var a=new XMLHttpRequest,e={method:"GET",data:null};if("object"==_typeof(o))for(var n in e)n in o&&(e[n]=o[n]);if(e.method=e.method.toUpperCase(),"GET"==e.method){var r=-1==t.indexOf("?")?"?":"&";for(var f in t+=r,e.data){t+="".concat(f,"=").concat(e.data[f])+"&"}t+="_=".concat(Date.now()),e.data=null}else{if("POST"!=e.method)return void console.log("告辞");e.data=JSON.stringify(e.data)}return a.open(e.method,t,!0),a.send(e.data),new Promise(function(e,n){a.onreadystatechange=function(){if(4==a.readyState)if(200==a.status){var t=a.response;e(t)}else{var o=a.response;n(o)}}})}