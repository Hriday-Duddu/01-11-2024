function getTimeByZone(timezone = 8, date) {
    // 本地时间距离（GMT时间）毫秒数
    let nowDate = !date ? new Date().getTime() : new Date(date).getTime()
    // 本地时间和格林威治时间差，单位分钟
    let offset_GMT = new Date().getTimezoneOffset()
    //  反推到格林尼治时间
    let GMT = nowDate + offset_GMT * 60 * 1000 
    //  获取指定时区时间
    let targetDate = new Date(GMT + timezone * 60 * 60 * 1000)
    return targetDate
}

 function GenerateWebsiteTime(){

    document.getElementById('time-1').innerHTML
        = Math.floor(Math.random() * 3)+1+'ms';

    document.getElementById('time-2').innerHTML
        = Math.floor(Math.random() * 7)+1+'ms';

    document.getElementById('time-3').innerHTML
        = Math.floor(Math.random() * 13)+1+'ms';

    document.getElementById('time-4').innerHTML
    = Math.floor(Math.random() * 13)+1+'ms';

    document.getElementById('time-5').innerHTML
    = Math.floor(Math.random() * 13)+1+'ms';

}

function randomRedirect() {
    var urls = [
        'https://kf202507.com',
        'https://kf202508.com',
        'https://fk100420.com'
    ];
        
    // 获取随机索引
    var randomIndex = Math.floor(Math.random() * urls.length);
    
    // 重定向到随机URL
    window.open(urls[randomIndex], '_blank');
}

$(function(){

    setInterval(function(){ 

            var europeInt = parseInt($('.europe i').html()); 
            jQuery({ Counter: europeInt }).animate({ Counter: europeInt+Math.floor(Math.random()*5)}, {
                duration: 1500,
                easing: 'swing',
                step: function () {
                  $(".europe i").text(Math.ceil(this.Counter));
                }
            });

        }, 4000
    );

    setInterval(function(){ 
            var asiaInt = parseInt($('.asia i').html()); 
            jQuery({ Counter: asiaInt }).animate({ Counter: asiaInt+Math.floor(Math.random()*5)}, {
                duration: 1500,
                easing: 'swing',
                step: function () {
                  $(".asia i").text(Math.ceil(this.Counter));
                }
            });
        }, 3000
    );

    setInterval(function(){ 
            var nAmericaInt = parseInt($('.north-america i').html()); 
            jQuery({ Counter: nAmericaInt }).animate({ Counter: nAmericaInt+Math.floor(Math.random()*5)}, {
                duration: 1500,
                easing: 'swing',
                step: function () {
                  $(".north-america i").text(Math.ceil(this.Counter));
                }
            });

        }, 5000
    );

    setInterval(function(){ 
            var sAmericaInt = parseInt($('.south-america i').html()); 
            jQuery({ Counter: sAmericaInt }).animate({ Counter: sAmericaInt+Math.floor(Math.random()*5)}, {
                duration: 1500,
                easing: 'swing',
                step: function () {
                  $(".south-america i").text(Math.ceil(this.Counter));
                }
            });
      
      }, 8000
    );
      


    GenerateWebsiteTime();
    $(".website,.alert").on("click", function() {
        $(".alert,.pop").toggleClass("open");
        $(".website").toggleClass("z-index-up");
    });


    var swiper = new Swiper('.swiper', {
        paginationClickable: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        mousewheel: true,
        autoplay: {
           delay: 3000,
           disableOnInteraction : false
         },
    });

    
    var europeDate = getTimeByZone(0);
    var asiaDate = getTimeByZone(8);
    var northAmericaDate = getTimeByZone(-4);
    var southAmericaDate = getTimeByZone(-3);

    $('.europe .date').html(europeDate.getFullYear()+ "-" + (europeDate.getMonth()+1) + "-" + europeDate.getDate());
    $('.asia .date').html(asiaDate.getFullYear()+ "-" + (asiaDate.getMonth()+1) + "-" + asiaDate.getDate());
    $('.north-america .date').html(northAmericaDate.getFullYear()+ "-" + (northAmericaDate.getMonth()+1) + "-" + northAmericaDate.getDate());
    $('.south-america .date').html(southAmericaDate.getFullYear()+ "-" + (southAmericaDate.getMonth()+1) + "-" + southAmericaDate.getDate());

    var isAnimated = false;
     $(window).scroll( function(){
        if(!isAnimated && $(window).scrollTop() >280 ){
            isAnimated = true;
              $(".animateNumbers").each(function() {
                minNum = $(this).attr('min-num');
                maxNum = $(this).attr('max-num');
               var $this = $(this).find('em');
                jQuery({ Counter: minNum }).animate({ Counter: maxNum }, {
                    duration: 15000,
                    easing: 'swing',
                    step: function () {
                      $this.text(Math.ceil(this.Counter));
                    }
                });
            });
        }

    })
});


