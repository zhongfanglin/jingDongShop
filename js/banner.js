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
				$('.gg').mouseenter(function(){
					$('.guanggao').css('display','flex');
					$('.cuxiao').css('display','none');
				})
				$('.cu').mouseenter(function(){
					$('.guanggao').css('display','none');
					$('.cuxiao').css('display','flex');
				})
				if(localStorage.username){
					$('.user').html(`${localStorage.username}请登录`);
					$('.users').html(`${localStorage.username},<a href="#">欢迎来到京东</a>`)
				}else{
					$('.user').html(`您好,请登录`);
					$('.users').html(`Hi,<a href="#">欢迎来到京东</a>`);
				}
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