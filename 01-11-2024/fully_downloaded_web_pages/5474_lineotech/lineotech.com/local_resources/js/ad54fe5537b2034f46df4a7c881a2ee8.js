




$(document).ready(function(){

          //动画
          wow = new WOW(
          {animateClass: 'animated',
          offset:100});
          wow.init();


          

          // $(".logo>a>span").mouseover(function(){
          //   // alert();
          //     $(".logo-ul").show();
          // })

          // 首页轮播图
          var mySwiper = new Swiper('.banner .swiper-container', { 
                pagination:{
                    el: '.banner .swiper-pagination',
                },
                // slidesPerView: 1.5,
                paginationClickable: true,
                keyboardControl: true,
                loop:true,
                autoplay : {
                    delay:3000,
                },
                // spaceBetween:15,
                // navigation: {
                //     nextEl: '.banner .swiper-button-next',
                //     prevEl: '.banner .swiper-button-prev',
                // }
                
            });



            var width_02 = $(window).width();
            if(width_02<=1024){
				
				$(".child li.aaa>a").attr("href","javascript:");




              var h1 = $(window).height();
              var hea = $(".header").height();
              $(".navBox").css({"height":h1-hea});
              $(".hei").height(hea);

              $(".nav-ul>li.li01>a").attr("href","javascript:");


              $(".nav-ul>li>a").click(function(){  
                  $(this).parent().toggleClass("on");
                  $(this).parent().children(".child").slideToggle();
              })

              $(".close").click(function(){ 
                  $(this).parents(".navBox").hide();
              })

              $("#menu").click(function(){ 
                  $(".navBox").toggle();
              })

              $(".index03 .imgBox").height($(".index03 .imgBox").width()*0.7);

              var mySwiper = new Swiper('.index02-banner .swiper-container', { 
              
                slidesPerView: 1.5,
                paginationClickable: true,
                keyboardControl: true,
                loop:true,
                autoplay : {
                    delay:3000,
                },
                spaceBetween:30,
                
            });




            }else{

              
              


            }


            // 向上滚动一屏
            $(".up").click(function(){
                var hei = $(window).height();
                $('body,html').animate({scrollTop:hei}, 500);
                $(".body1").css({"overflow":"auto"});
            })


            // 修改 s 
            $(".productNav li").click(function(){
                $(this).addClass("on");
                $(this).siblings().removeClass("on");
                $(this).children(".navTwo").slideDown();
                $(this).siblings().children(".navTwo").slideUp();
            })
            $(".navTwo a").click(function(){
                $(this).addClass("on");
                $(this).siblings().removeClass("on");
            })

            // 修改 e

            // 产品列表详情
            $(".product-banner .gallery-top").height($(".product-banner .gallery-top").width()*0.76);




          


});



