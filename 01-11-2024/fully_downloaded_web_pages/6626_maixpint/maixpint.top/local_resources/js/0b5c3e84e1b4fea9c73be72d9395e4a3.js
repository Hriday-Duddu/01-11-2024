$(function(){

    /**
     * 文档就绪后检查记录关闭右下角广告位的 cookie 是否过期
     */
    (function () {
        if (Cookies.get('closeBottomRightAd')) {
            $('#g_bottom_right_ad_box').hide()
        } else {
            $('#g_bottom_right_ad_box').show()
        }
    })();

    /**
     * 全局右下角广告位
     */
    $('body').on('click', '.close-bottom-right-ad,#bottom_right_ad', function(event) {
        // event.preventDefault();
        $(this).parent().hide();
        Cookies.set('closeBottomRightAd', '1', { expires: 1 });
    })

    /**
     * ipad 导航swiper
     */
    var mySwiper = new Swiper ('.swiper-lyw-nav-list', {
        slidesPerView : 'auto',
        spaceBetween : 20,
        onInit: function(swiper){
            $.each(swiper.slides, function(index, val) {
                if ($(val).children().hasClass('active')) {
                    swiper.slideTo(index);
                }
            });
        }
    })

    /**
     * 返回顶部
     */
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $("#back_top").fadeIn(1500);
        } else {
            $("#back_top").fadeOut(1500);
        }
    });
    $('body').on('click', '#back_top', function(event) {
        event.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });

    /**
     * 底部二维码切换
     */
    $('body').on('click', '#weibo,#weixin', function(event) {
        event.preventDefault();
        if ($(this).hasClass('active')) {
            return false;
        } else {
            $(this).addClass('active').siblings().removeClass('active');
            var src = $('#qr_code').attr('data-src');
            var dataSrc = $('#qr_code').attr('src');
            $('#qr_code').attr({
                'src': src,
                'data-src': dataSrc
            });
        }
    });

    /**
     * 投资人详情
     */
    $('body').on('click', '.recommend-investor-name,.recommend-investor-avatar,.investor-name,.investor-avatar', function(event) {
        event.preventDefault();
        var nowTitle = document.title;
        var nowUrl = '/investor';
        $('body').addClass('lock');
        var id = $(this).attr('data-id');
        jumpFrameAll('/investor/view?inframe=1&id='+id,'100%','100%','all-cover',nowTitle,nowUrl);

        var title = $(this).attr('data-title');
        var newUrl = '/investor/view?id='+id;
        history.pushState({},title,newUrl);
        document.title = title;
    });

    $('body').on('click', '#close_investor', function(event) {
        event.preventDefault();
        $('#investor_pop').hide();
        $('body').removeClass('lock');
    });

    /**
     * 活动 banner 的轮播
     */
    new Swiper ('.banner-activity-swiper-container', {
        loop: true,
        pagination: '.banner-activity-swiper-pagination',
        autoplay : 5000,
        autoplayDisableOnInteraction : false,
    })

    /**
     * 加减组件
     */
    $('body').on('click', '.subtract', function(event) {
        event.preventDefault();
        var val = $(this).siblings('.input-add-subtract').val()-0 //此处减0是为了将该值类型转化为 number
        if (val > 1) {
            $(this).siblings('.input-add-subtract').val(--val);
        }
    });

    $('body').on('click', '.add', function(event) {
        event.preventDefault();
        var val = $(this).siblings('.input-add-subtract').val()-0 //此处减0是为了将该值类型转化为 number
        $(this).siblings('.input-add-subtract').val(++val);
    });

    /**
     * 票种选择
     */
    $('body').on('click', '.spectator-list>li', function(event) {
        event.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    });

    /**
     * 模拟 checkbox
     */
    $('body').on('click', '.model-checkbox', function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
    });

    /**
     * 我的收藏 全选
     */
    $('body').on('click', '#all_pick', function(event) {
        event.preventDefault();
        $(this).find('.all-pick-model-checkbox').toggleClass('active');
        var dataPick = $(this).attr('data-pick');
        if ($(this).find('.all-pick-model-checkbox').hasClass('active')) {
            $('.' + dataPick).addClass('active');
        } else {
            $('.' + dataPick).removeClass('active');
        }
    });

    /**
     * 消息 tab 切换
     */
    $('body').on('click', '#personalcenter_tab_title_message_list>li', function(event) {
        event.preventDefault();
        $('.all-pick-model-checkbox,.model-checkbox').removeClass('active'); // tab 切换的时候去掉所有选中状态
        $(this).addClass('active').siblings().removeClass('active');
        $('#all_message_pick').attr('data-pick', $(this).attr('data-title'));
        $(this).parents('.personalcenter-tab-hd').siblings('.module-box').find('.my-collect-bar').hide();
        $($(this).parents('.personalcenter-tab-hd').siblings('.module-box').find('.my-collect-bar')[$(this).index()]).show();
        $('#msg_tool').show();
        if ($(this).attr('data-title') == 'my-private-letter-checkbox') {
            $('#msg_tool').hide();
        }
    });

    /**
     * 系统消息全选
     */
    $('body').on('click', '#all_message_pick', function(event) {
        event.preventDefault();
        $(this).find('.all-pick-model-checkbox').toggleClass('active');
        var dataPick = $(this).attr('data-pick');
        if ($(this).find('.all-pick-model-checkbox').hasClass('active')) {
            $('.' + dataPick).addClass('active');
        } else {
            $('.' + dataPick).removeClass('active');
        }
    });

    /**
     * 个人中心 众创空间 全选
     */
    $('body').on('click', '#all_incubator_pick', function(event) {
        event.preventDefault();
        $(this).find('.all-pick-model-checkbox').toggleClass('active');
        var dataPick = $(this).attr('data-pick');
        if ($(this).find('.all-pick-model-checkbox').hasClass('active')) {
            $('.' + dataPick).addClass('active');
        } else {
            $('.' + dataPick).removeClass('active');
        }
    });

    /**
     * 众创空间详情关闭
     */
    $('body').on('click', '#close_incubator', function(event) {
        event.preventDefault();
        $('#incubator_pop').hide();
        $('body').removeClass('lock');
    });

    /**
     * 弹出众创空间详情
     */
    $('body').on('click', '.open-incubator', function(event) {
        event.preventDefault();
        var nowTitle = document.title;
        var nowUrl = '/incubate';
        $('body').addClass('lock');
        var id = $(this).attr('data-id');
        jumpFrameAll('/incubate/view?inframe=1&id='+id,'100%','100%','all-cover',nowTitle,nowUrl);

        var title = $(this).attr('data-title');
        var newUrl = '/incubate/view?id='+id;
        history.pushState({},title,newUrl);
        document.title = title;
    });

    /**
     * 众创空间申请
     */
    $('body').on('click', '.btn-apply-incubator', function(event) {
        event.preventDefault();
        $('#station_container').show();
        $('#station_apply_container, .btn-apply-incubator').hide();
    });
    $('body').on('click', '.btn-apply-post', function(event) {
        event.preventDefault();
        $('#station_apply_container, .btn-apply-incubator').show();
        $('#station_container').hide();
    });



    /**
     * 众创空间申请入驻
     */
    $('body').on('click', '#btn_incubator_enter_apply', function(event) {
        event.preventDefault();
        // 判断是否登录

        var nowTitle = document.title;
        var nowUrl = '/incubate';
        $('body').addClass('lock');
        jumpFrameAll('/incubate/apply','100%','100%','all-cover',nowTitle,nowUrl);

        var title = '猎云网 | 众创空间申请入驻';
        var newUrl = '/incubate/apply';
        history.pushState({},title,newUrl);
        document.title = title;
    });

    /**
     * 模拟单选
     */
    $('body').on('click', '.label-radio', function(event) {
        event.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    });

    /**
     * 删除 消息
     */
    $('body').on('click', '#del_msg', function(event) {
        event.preventDefault();
        layer.confirm('<div class="del-container clearfix"><div class="del-left pull-left"><img class="img-fuil" src="/img/delete.png" alt=""></div><div class="del-right"><div class="lyw-layer-meeting-title mb10">删除</div><div class="tip-seebp mb20">是否将所选项目删除？</div></div></div>',
            {
                title: false,
                closeBtn: 0,
                skin: 'del-class'
            },
            function(index){
                alert('执行删除');

                layer.close(index);
            }
        );
    });

    /**
     * 阅读模式
     */
    $('body').on('click', '#read_model', function(event) {
        event.preventDefault();
        $('body').toggleClass('read-model');
    });

    /**
     * 投稿切换
     */
    $('body').on('click', '#contribute_tab>li', function(event) {
        event.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        $('.contribute-tab-bar').hide();
        $($('.contribute-tab-bar')[$(this).index()]).show();
    });

    /**
     * 爆料回复
     */
    $('body').on('click', '.create-reply-floor', function(event) {
        event.preventDefault();
        var replyName = $(this).parent('.floor-tool').siblings('.floor-box').find('.floor-name').html();
        var container = $(this).parents('.discuss-info');
        $('.create-reply-storey').removeClass('active');
        createReply(replyName,container);
    });

    $('body').on('click', '.create-reply-storey', function(event) {
        event.preventDefault();
        var replyName = $(this).children('.storey-name:first').html();
        var container = $(this).parents('.discuss-info');
        $(this).addClass('active').siblings().removeClass('active');
        createReply(replyName,container);
    });

    /**
     * 取消邀约
     */
    $('body').on('click', '.btn-cancel-meeting', function(event) {
        event.preventDefault();
        layer.confirm('是否取消邀约？', {icon: 3, title:'提示'}, function(index){
            //do something
            layer.close(index);
        });
    });

    /**
     * 固定位置
     */
    $(window).scroll( function() {
        if ($('#fixed_sign').length > 0) {
            var fixedSignLeft = $('#fixed_sign').offset().left;
            var fixedSignTop = $('#fixed_sign').offset().top;
        }
        var scrollTop = $(document).scrollTop();
        var fixedBoxH = $('#fixed_box').height();
        if ($('#fixed_container').length > 0) {
            var fixedContainerTop = $('#fixed_container').offset().top;
        }
        var fixedContainerH = $('#fixed_container').height();
        var fixedContainerBottomTop = fixedContainerTop + fixedContainerH - scrollTop;
        var navHeight = 0 // cwq 加上nav高度
        if ($('.lyw-nav').hasClass('header-hide')) {
            navHeight = 0;
        } else {
            navHeight = $('.lyw-nav').height();
        }

        if (fixedSignTop - scrollTop <= 0) {
            if (fixedContainerBottomTop <= fixedBoxH) {

                $('#fixed_box').css({
                    position: 'absolute',
                    top: 'auto',
                    left: 'auto',
                    right: '15px',
                    bottom: '40px',
                    width: '320px'
                })
            } else {
                $('#fixed_box').css({
                    position: 'fixed',
                    top: navHeight,
                    left: fixedSignLeft,
                    right: 'auto',
                    bottom: 'auto',
                    width: '320px'
                })
            }
        } else {
            $('#fixed_box').css({
                position: 'static'
            })
        }
    });

    /**
     * 改变屏幕尺寸时触发
     */
    $(window).resize(function(){
        if ($('#fixed_sign').length > 0) {
            var fixedSignLeft = $('#fixed_sign').offset().left;
            var fixedSignTop = $('#fixed_sign').offset().top;
        }
        var scrollTop = $(document).scrollTop();
        var fixedBoxH = $('#fixed_box').height();
        if ($('#fixed_container').length > 0) {
            var fixedContainerTop = $('#fixed_container').offset().top;
        }
        var fixedContainerH = $('#fixed_container').height();
        var fixedContainerBottomTop = fixedContainerTop + fixedContainerH - scrollTop;
        var navHeight = 0 // cwq 加上nav高度
        if ($('.lyw-nav').hasClass('header-hide')) {
            navHeight = 0;
        } else {
            navHeight = $('.lyw-nav').height();
        }

        if (fixedSignTop - scrollTop <= 0) {
            if (fixedContainerBottomTop <= fixedBoxH) {

                $('#fixed_box').css({
                    position: 'absolute',
                    top: 'auto',
                    left: 'auto',
                    right: '15px',
                    bottom: '40px',
                    width: '320px'
                })
            } else {
                $('#fixed_box').css({
                    position: 'fixed',
                    top: navHeight,
                    left: fixedSignLeft,
                    right: 'auto',
                    bottom: 'auto',
                    width: '320px'
                })
            }
        } else {
            $('#fixed_box').css({
                position: 'static'
            })
        }
    })

    /**
     * 广告统计
     */
    $('.adstatis').click(function(){
        var id = $(this).attr('data-advlistid');
        $.get('/site/adstatis',{'id':id},function(data){
            console.log('click ad');
        })
    })

    $('.adtrans').click(function(){
        $.get('/site/adtrans',{},function(data){
            console.log('trans ad');
        })
    })

    $('.adstatis').each(function(){
        var showurl = $(this).attr('data-showurl');
        if($.trim(showurl)!='') {
            var img = document.createElement("img");
            img.width = 0;
            img.height = 0;
            img.src = showurl;
            img.className  = 'miaozhen-pic';
            document.body.appendChild(img);
        }
    })

    $.get('/site/check-login-city',{},function(data){
        // console.log('login city');
    })

    $('body').on('mouseenter', '#subsubnav_list a', function(event) {
        var bg = $(this).css('background-image');
        $(this).css('background-image',bg.replace('.png','_s.png'));
    })

    $('body').on('mouseleave', '#subsubnav_list a', function(event) {
        var bg = $(this).css('background-image');
        $(this).css('background-image',bg.replace('_s.png','.png'));
    })

    // -----------------------全局模拟下拉多选 -----------------------------------------------------
    $('body').on('click', '.lyw-multi-select-cover', function (event) {
        // 判断元素距离屏幕底部距离
        var offsetWindowButtom = $(window).height() - [$(this).offset().top-$(document).scrollTop()] - $(this).height();
        console.log(offsetWindowButtom);
        if (offsetWindowButtom < 168) {
            $(this).next('.lyw-multi-select-cover-open').addClass('show').next('.lyw-multi-select-option-box').addClass('show').addClass('show-top');
        } else {
            $(this).next('.lyw-multi-select-cover-open').addClass('show').next('.lyw-multi-select-option-box').addClass('show');
        }
        
    })
    $('body').on('click', '.lyw-multi-select-option', function (event) {
        event.stopPropagation();
        $(this).toggleClass('active');
        var pickArr = [];
        var pickStr = '';
        var pickValArr = [];
        var pickValStr = '';
        $.each($(this).parent().children('.active'), function(i, n) {
            pickArr.push($(n).html());
            pickStr = pickArr.join('、');

            pickValArr.push($(n).attr('data-id'));
            pickValStr = pickValArr.join(',');
        });
        $(this).parents('.lyw-multi-select').children('.lyw-multi-select-input').val(pickStr);
        $(this).parents('.lyw-multi-select').children('.lyw-multi-select-input-hidden').val(pickValStr);
    })
    $('body').on('click', '.lyw-multi-select-cover,.lyw-multi-select-cover-open', function () {
        $(this).removeClass('show');
        $(this).next('.lyw-multi-select-option-box').removeClass('show').removeClass('show-top');
        $(this).prev('.lyw-multi-select-cover-open').removeClass('show');
    })
    // -----------------------全局模拟下拉多选 -----------------------------------------------------
});

// layer 弹窗
function jumpFrame(frameUrl,frameWidth,frameHeight,skin){
    var index=layer.open({
        type: 2,
        shade: [0.8, '#fff'],
        title: false,
        skin: skin,
        area: [frameWidth, frameHeight],
        content: frameUrl //iframe的url
    });
    //关闭上一个frame
    layer.close(index-1);
}

// layer 全屏
function jumpFrameAll(frameUrl,frameWidth,frameHeight,skin,title,url){
    var index=layer.open({
        type: 2,
        shade: [0.8, '#fff'],
        title: false,
        skin: skin,
        area: [frameWidth, frameHeight],
        content: frameUrl,
        cancel: function(){
            $('body').removeClass('lock');
            history.pushState({},title,url);
            document.title = title;
        }
    });
    //关闭上一个frame
    layer.close(index-1);
}

function jumpFrameFuil(frameUrl,frameWidth,frameHeight,skin){
    $('body').addClass('lock');
    var index=layer.open({
        type: 2,
        shade: 0,
        title: false,
        offset: '0',
        skin: skin,
        area: [frameWidth, frameHeight],
        content: frameUrl,
        cancel: function(){
            $('body').removeClass('lock');
        }
    });
    //关闭上一个frame
    layer.close(index-1);
}


// layer 搜索弹窗
function jumpFrameSearch(frameUrl,frameWidth,frameHeight,skin){
    $('body').addClass('lock');
    var index=layer.open({
        type: 2,
        shade: 0,
        title: false,
        offset: '70px',
        skin: skin,
        area: [frameWidth, frameHeight],
        content: frameUrl,
        cancel: function(){
            $('body').removeClass('lock');
        }
    });
    //关闭上一个frame
    layer.close(index-1);
}

/**
 * 创造一个回复框 爆料
 */

function createReply(replyName,container) {
    $('#create_gossip_entry').remove();
    var content = '<div class="gossip-entry gossip-discuss-entry mt20" id="create_gossip_entry">'+
                        '<textarea class="gossip-textarea" placeholder="回复：'+ replyName +'" maxlength="100"></textarea>'+
                        '<div class="gossip-entry-ft clearfix">'+
                            '<input class="btn-push-gossip pull-right" type="button" name="" value="发布">'+
                            '<span class="mr20">你还可以输入<span>100</span>字</span>'+
                            '<span class="gossip-name">当前花名：<span class="nickname mr10">'+globalNickName+'</span><span class="change-nickname"></span></span>'+
                        '</div>'+
                    '</div>';
    $(content).appendTo(container);
}

/**
 * 点击后在规定时间内滚动到指定的位置
 * @param  {[type]} obj  点击的元素
 * @param  {[type]} n    距离浏览器顶部的位置
 * @param  {[type]} time 时间（毫秒）
 */
function scrollToN(obj, n, time) {
    var scrollContainer = obj.parents('.pagination-wrapper').parent();
    $("html,body").animate({scrollTop: scrollContainer.offset().top-n}, time);
}

function ajaxPageRefresh(url, container) {
    NProgress.start();
    $.ajax({
        url: url,
        type: "GET",
        headers: {
            AjaxFilter: "1"
        },
        success: function (data) {
            $(container).html(data);
            NProgress.done();
            // 仅加载更多需要 w1_ias.reinitialize();
        },
        error: function (er) {
        }
    });
}

// var _hmt = _hmt || [];
// (function() {
//     var hm = document.createElement("script");
//     hm.src = "https://hm.baidu.com/hm.js?e7e035075002bfbbfb97dd1986670572";
//     var s = document.getElementsByTagName("script")[0];
//     s.parentNode.insertBefore(hm, s);
// })();

// (function(){
//     var bp = document.createElement('script');
//     var curProtocol = window.location.protocol.split(':')[0];
//     if (curProtocol === 'https') {
//         bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
//     }
//     else {
//         bp.src = 'http://push.zhanzhang.baidu.com/push.js';
//     }
//     var s = document.getElementsByTagName("script")[0];
//     s.parentNode.insertBefore(bp, s);
// })();
