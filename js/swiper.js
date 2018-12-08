// var swiper = (function() {
//     var timer = null;
//     var showWidth = null;
//     return {
//         init() {
//             this.event();
//         },
//         event() {
//             var _this = this;

//         }
//     }
// })

  $(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          clickable :true,
        },
        
        // 如果需要前进后退按钮
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        
        // 如果需要滚动条
        scrollbar: {
          el: '.swiper-scrollbar',
        },
        autoplay: {
            stopOnLastSlide: true,
            delay: 500,
        }
      })        
   })