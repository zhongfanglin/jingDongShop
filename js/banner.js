var banner=(function(){
	return {
		init:function(){
			this.index=0;
			this.event();
			this.autoPlay(this.index);
		},
		event:function(){
			const _this=this;
			$(function(){
				$('.banner_sort li').each(function(i){
					$('.banner_sort li')[i].className='current';
				})
				$('.banner_sort').on('click','li',function(){
					var index=$(this).index();
					_this.showImag(index);
				})
				$('._left').click(function(){
					_this.showImag(--_this.index);
				})
				$('._right').click(function(){
					_this.showImag(++_this.index);
				})
			})
		},
		showImag:function(index){
			if(index>$('.banner_img li').length-1){
				index=0;
			}else if(index<0){
				index=$('.banner_img li').length-1;
			}
			$('.banner_sort li').eq(index).toggleClass('current').addClass('backColor').siblings().removeClass().addClass('current');
			$('.banner_img li').eq(index).animate({opacity:1},1500).siblings().animate({opacity:0},1500);
			this.index=index;
		},
		autoPlay:function(index){
			setInterval(_=>{
				this.showImag(index);
				index++;
				if(index>$('.banner_img li').length-1){
					index=0;
				}
			},2000)
		}
	}
}());
banner.init();