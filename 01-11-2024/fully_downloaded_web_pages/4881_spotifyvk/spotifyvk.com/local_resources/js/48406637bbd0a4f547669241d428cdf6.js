
if (!window.app) {
    app = { };
}

$(document).ready(function () {
    /* Browser fullscreen experience on double click */
    if (self == top) {
        $('body').on('dblclick', function (e) {
/*
            if (!document.fullscreenElement && // alternative standard method
                !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) { // current working methods
                if (document.documentElement.requestFullscreen) {
                    document.documentElement.requestFullscreen();
                } else if (document.documentElement.msRequestFullscreen) {
                    document.documentElement.msRequestFullscreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                    document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullscreen) {
                    document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            }
*/
        });
    } else {

    }

    /* float label checking input is not empty */
    $('.float-label .form-control').on('blur', function () {
        if ($(this).val() || $(this).val().length != 0) {
            $(this).closest('.float-label').addClass('active');
        } else {
            $(this).closest('.float-label').removeClass('active');
        }
    });
    //when input is empty, the label floats on it, let the input focus when clicks on the label
    $('.float-label .form-control-label').on('click', function () {
        $(this).parent().addClass('active');
        $(this).siblings('.form-control').focus();
    });

    /* menu open close wrapper screen click close menu */
    $('.menu-btn').on('click', function (e) {
        e.stopPropagation();
        if ($('body').hasClass('sidemenu-open') == true) {
            $('body, html').removeClass('sidemenu-open');
            setTimeout(function () {
                $('body, html').removeClass('menuactive');
            }, 500);
        } else {
            $('body, html').addClass('sidemenu-open menuactive');
        }
    });
    $('.wrapper, .closesidemenu').on('click', function () {

        if ($('body').hasClass('sidemenu-open') == true) {

            $('body, html').removeClass('sidemenu-open');
            setTimeout(function () {
                $('body, html').removeClass('menuactive');
            }, 500);
        }
    });

    /* filter click open filter */
    if ($('body').hasClass('filtermenu-open') == true) {
        $('.filter-btn').find('i').html('close');
    }
    $('.filter-btn').on('click', function () {
        if ($('body').hasClass('filtermenu-open') == true) {
            $('body').removeClass('filtermenu-open');
            $(this).find('i').html('filter_list')

        } else {
            $('body').addClass('filtermenu-open');
            $(this).find('i').html('close')
        }
    });


    /* background image to cover */
    $('.background').each(function () {
        var imagewrap = $(this);
        var imagecurrent = $(this).find('img').attr('src');
        imagewrap.css('background-image', 'url("' + imagecurrent + '")');
        $(this).find('img').remove();
    });


    /* drag and scroll like mobile remove while creating mobile app */
    (function ($) {
        $.dragScroll = function (options) {
            var settings = $.extend({
                scrollVertical: true,
                scrollHorizontal: true,
                cursor: null
            }, options);

            var clicked = false,
                clickY, clickX;

            var getCursor = function () {
                if (settings.cursor) return settings.cursor;
                /*if (settings.scrollVertical && settings.scrollHorizontal) return 'url(img/touch.png), move';*/
                if (settings.scrollVertical && settings.scrollHorizontal) return settings.cursor;
                if (settings.scrollVertical) return 'row-resize';
                if (settings.scrollHorizontal) return 'col-resize';
            }

            var updateScrollPos = function (e, el) {
                $('html').css('cursor', getCursor());
                var $el = $(el);
                settings.scrollVertical && $el.scrollTop($el.scrollTop() + (clickY - e.pageY));
                settings.scrollHorizontal && $el.scrollLeft($el.scrollLeft() + (clickX - e.pageX));
            }

            $(document).on({
                'mousemove': function (e) {
                    clicked && updateScrollPos(e, this);
                },
                'mousedown': function (e) {
                    clicked = true;
                    clickY = e.pageY;
                    clickX = e.pageX;
                },
                'mouseup': function () {
                    clicked = false;
                    //$('html').css('cursor', 'url(img/logo-cursor.png), auto');
                }
            });
        }
    }(jQuery))

    $.dragScroll();
    /* End of drag and scroll like mobile remove while creating mobile app */
});

$(window).on('load', function () {
    $('.loader-screen').fadeOut('slow');

    /* header active on scroll more than 50 px*/
    if ($(this).scrollTop() >= 30) {
        $('.header').addClass('active')
    } else {
        $('.header').removeClass('active')
    }

    $(window).on('scroll', function () {
        /* header active on scroll more than 50 px*/
        if ($(this).scrollTop() >= 30) {
            $('.header').addClass('active')
        } else {
            $('.header').removeClass('active')
        }
    });

    /* login row */
    //$('.login-row').css('min-height', ($(window).height() - 80));


    /* page load itdetify for page level scripts */
    if ($(".pagethankyou").length) {
        setTimeout(function () {
            window.location.href = "index.html";
        }, 2000);
    }

    if ($(".homepage").length) {
        var width = $(document).width(); //to fix ios12 Over screen width issue
        /* swiper slider carousel */
        var swiper = new Swiper('.icon-slide', {
            slidesPerView: 'auto',
            spaceBetween: 0,
        });
        var swiper = new Swiper('.offer-slide', {
            slidesPerView: 'auto',
            spaceBetween: 0,
        });

        $('.two-slide').width(width+'px');
        var swiper = new Swiper('.two-slide', {
            slidesPerView: 2,
            spaceBetween: 0,
            pagination: {
                el: '.swiper-pagination',
            },
        });


        $('.news-slide').width(width+'px');
        var swiper = new Swiper('.news-slide', {
            slidesPerView: 5,
            spaceBetween: 0,
            pagination: {
                el: '.swiper-pagination',
            },
            breakpoints: {
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 0,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                320: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                }
            }
        });
    }

    /* notification view and hide */
    if (app.online_popup){
        onlinePopup();

        $('.closenotification').on('click', function () {
            $(this).closest('.notification').removeClass('active')
        });
    }
});

function onlinePopup() {
    var time=app.online_popup.split('~');
    setTimeout(function () {
        $.ajax({
            url: '/index/send/online_popup',
            type: "GET",
            dataType: "json",
            data: {},
            success: function (res) {
                if (res.code == 0) {
                    $('.notification-content').html(res.info);
                    $('.notification').addClass('active');

                }
            },
            error: function (err) {
                console.log(err)
            },
            complete: function () {
                //http://www.htmleaf.com/Demo/201808065263.html
                var tt=$('#notification_countdown').progressBarTimer({
                    autoStart: false,
                    timeLimit: 10,
                    height: 3,
                    onFinish : function () {
                        $('.notification').removeClass('active');
                        $('#notification_countdown').html('');
                        tt.init();
                        onlinePopup(); //Recursive call
                    }
                });
                tt.start();
            }

        });
    }, random(time[0]*1000, time[1]*1000));
}
function random(min, max) {
    var rand = parseInt(Math.random() * (max - min + 1) + min);
    return rand;
}

function shareInWhatsapp(text) {
    window.open('https://api.whatsapp.com/send?text='+encodeURIComponent(text));
}

function shareInTelegram(link, text) {
    window.open('https://telegram.me/share/url?url='+encodeURI(link)+'&text='+encodeURIComponent(text));
}

function shareInTweet(via, link, text, related) {
    window.open('https://twitter.com/intent/tweet?via='+via+'&text='+encodeURIComponent(text)+"&url="+encodeURI(link)+"&related="+encodeURIComponent(related));
}

function shareInFacebook(link, text) {
    window.open('https://www.facebook.com/sharer/sharer.php?u='+encodeURI(link)+"&quote="+encodeURI(text));
}