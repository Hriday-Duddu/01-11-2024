/*
 *   顶部导航栏VIP按钮
 *   hover => 更换背景图
 * */
$(document).on("mouseenter", "#vipBtn", function () {
    $(".nav-vip-btn").css(
        "background",
        'url("/images/newindex/hover.png") 0 0 / contain no-repeat'
    );
    // $('.nav-vip-btn').css('background', 'url("/images/index-rebuilt/button_nav_vip.png") 0 0 / contain no-repeat')
});
$(document).on("mouseleave", "#vipBtn", function () {
    $(".nav-vip-btn").css(
        "background",
        'url("/images/newindex/button_nav_vip@2x.png") 0 0 / contain no-repeat'
    );
});

/*
 *   浏览器环境判断对象
 * */
var browser = {
    versions: (function () {
        var u = navigator.userAgent,
            app = navigator.appVersion;
        return {
            //移动终端浏览器版本信息
            windows: /windows|win32/i.test(u), //Windows电脑
            mac: /Mac68K|MacPPC|Macintosh|MacIntel/i.test(u), //mac电脑
            trident: u.indexOf("Trident") > -1, //IE内核
            presto: u.indexOf("Presto") > -1, //opera内核
            webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
            gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, //android终端或uc浏览器
            iPhone: u.indexOf("iPhone") > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf("iPad") > -1, //是否iPad
            webApp: u.indexOf("Safari") == -1, //是否web应该程序，没有头部与底部
        };
    })(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase(),
};
// console.log(navigator);
/*
 *   顶部导航栏下载按钮、用户登录后用户中心按钮
 *   根据浏览器环境对应不同链接
 * */
$(document).on("mouseenter", ".pop-tip-btn", function () {
    if (!browser.versions.mobile) {
        $(this).find(".ui-pop-tip").stop().fadeIn();
        $(this).find("a:first").addClass("arrow-rotate");
    }
});
$(document).on("mouseleave", ".pop-tip-btn", function () {
    let btn = $(this);
    if (!browser.versions.mobile) {
        btn.find(".ui-pop-tip").stop().fadeOut();
        btn.find("a:first").addClass("arrow-reset");
    }
    setTimeout(function () {
        btn.find("a:first").removeClass("arrow-rotate arrow-reset");
    }, 200);
});
//  点击下载按钮
$(document).on("click", ".nav-download-btn", function () {
    if (browser.versions.windows) {
        location.href = "/software/Windows.html";
    } else if (browser.versions.mac) {
        location.href = "/software/Mac.html";
    } else if (browser.versions.ios) {
        location.href = "/software/iOSAppStore.html";
    } else if (browser.versions.android) {
        location.href = "/software/Android.html";
    }
});
$(document).on("click", ".downloadClient", function () {
    if (browser.versions.windows) {
        location.href = "/software/Windows.html";
    } else if (browser.versions.mac) {
        location.href = "/software/Mac.html";
    } else if (browser.versions.ios) {
        location.href = "/software/iOSAppStore.html";
    } else if (browser.versions.android) {
        location.href = "/software/Android.html";
    }
});

//  移动端点击用户中心
$(document).on("click", ".navLoginBox", function () {
    if (browser.versions.mobile) {
        $(".nav-user-drop").stop().slideToggle();
        if ($(".nav-user-drop").hasClass("nav-user-drop-mobile")) {
            $(".nav-user-drop").removeClass("nav-user-drop-mobile");
            $(".nav-user-info").addClass("arrow-reset");
            setTimeout(function () {
                $(".nav-user-info").removeClass("arrow-rotate arrow-reset");
            }, 200);
        } else {
            $(".nav-user-drop").addClass("nav-user-drop-mobile");
            $(".nav-user-info").addClass("arrow-rotate");
        }
    }
});
$(document).on("click", ".languageBox", function () {
    if (browser.versions.mobile) {
        $(".ui-lang-drop").stop().slideToggle();
        if ($(".ui-lang-drop").hasClass("nav-user-drop-mobile")) {
            $(".ui-lang-drop").removeClass("nav-user-drop-mobile");
            $(".language").addClass("arrow-reset");
            setTimeout(function () {
                $(".language").removeClass("arrow-rotate arrow-reset");
            }, 200);
        } else {
            $(".ui-lang-drop").addClass("nav-user-drop-mobile");
            $(".language").addClass("arrow-rotate");
        }
    }
});

/*
 *   页面滚动，顶部导航栏始终固定在上方
 * */
$(document).on(
    "scroll",
    // _.debounce(
    function () {
        if ($(window).width() > 1080) {
            if ($(document).scrollTop() > 88) {
                $(".page-top").addClass("slideInDown");
                $(".page-content").css("marginTop", "88px");
                // 首页横幅
                // $(".main-top").css("marginTop", "88px");
                $(".main-top").css("marginTop", "109px");
                $(".typeArea").css("marginTop", "88px");
            } else {
                $(".page-top").removeClass("slideInDown");
                $(".page-content").css("marginTop", "0");
                $(".main-top").css("marginTop", "0");
                $(".typeArea").css("marginTop", "0");
            }
        } else {
            if ($(document).scrollTop() > 60) {
                $(".page-top").css("box-shadow", "0 5px 10px -6px rgba(0, 0, 0, 0.15)");
            } else {
                $(".page-top").css("box-shadow", "none");
            }
        }
    }
    // , 600)
);

/*
 *   点击QQ、微信，复制文本
 * */
$(document).on("click", ".copyText", function () {
    //  复制文本
    copyContent(this);
    //  系统提示
    if ($(this).hasClass("ico-wx")) {
        if (browser.versions.mobile) alertMsg("微信号已复制成功");
    } else {
        if (browser.versions.mac) alertMsg("QQ群号已复制成功");
    }
});

/*
 *   根据开发环境不同对应不同链接
 * */
var devEnv = /localhost|devwebsite/.test(location.origin);
var uatEnv = /uatwebsite/.test(location.origin);
//  跳转VIP的按钮或链接
$(document).on("click", ".getVip", function () {
    let userId = localStorage.getItem("userId");
    let token = localStorage.getItem("token");
    if (userId) {
        location.href = "/act/payment.html?userId=" + userId + "&token=" + token;
    } else {
        location.href = "/act/payment.html";
    }
});
//  跳转推荐返利页面
// $(document).on("click", ".getAffiliate", function () {
//   location.href =
//     devEnv || uatEnv ? "/affiliate/index.html" : "https://af.kuaifan.club";
// });
//  顶部logo跳转首页
$(document).on("click", ".goIndex", function () {
    let userId = localStorage.getItem("userId");
    let token = localStorage.getItem("token");
    if (userId) {
        location.href =
            devEnv || uatEnv ?
            "/" :
            "https://www.speedin.in?userId=" + userId + "&token=" + token;
    } else {
        location.href = devEnv || uatEnv ? "/" : "https://www.speedin.in";
    }
});

/*
 *   下拉面板展开-关闭切换
 * */
//  常见问题下拉框图标
$(document).on("click", ".faq-content-item-title", function () {
    var hidden = $(this).next(".faq-content-item-body").css("display") === "none";
    if (hidden) {
        $(this).find(".fa-angle-down").css("display", "none");
        $(this).find(".fa-angle-up").css("display", "inline-block");
        $(this).next(".faq-content-item-body").stop().slideDown();
    } else {
        $(this).find(".fa-angle-down").css("display", "inline-block");
        $(this).find(".fa-angle-up").css("display", "none");
        $(this).next(".faq-content-item-body").stop().slideUp();
    }
});

/*
 *   点击锚点，页面滚动至指定位置
 * */
$(document).on("click", ".js-anchor", function () {
    var target = $(this).attr("href");
    $("html,body").animate({
        scrollTop: $(`${target}`).offset().top - 88
    }, 600);
});

/*
 *   移动端点击顶部展开按钮
 * */
$(document).on("click", ".mobile-slide-btn", function () {
    var opened = $(".overlay-nav").length;
    if (opened) {
        slideUpTopNav();
    } else {
        $(".nav-list").stop().slideDown();
        $(".barRight").stop().slideDown();
        $(".login-overlay").addClass("overlay-nav");
        $(".mobile-slide-btn").addClass("mobile-slide-btn-close");
        $(".nav-top").addClass("nav-top-open");

        //  设置页面底部固定不动
        var top = $(window).scrollTop();
        $("body").css({
            position: "fixed",
            top: -top + "px",
            width: '100%'
        });
    }
});

/*
 *   移动端点击空白处收起顶部导航栏
 * */
$(document).on("click", ".overlay-nav", function () {
    slideUpTopNav();
});

/*
 *   移动端滑动收起顶部导航栏
 * */
$(document).on("touchmove", ".overlay-nav", function (e) {
    slideUpTopNav();
});

/*
 *   微信点击下载按钮提示跳转到浏览器
 * */
$(document).on("click", ".wxToClient", function () {
    /*if (browser.versions.mobile) {//判断是否是移动设备打开。browser代码在下面
          var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
          if (ua.match(/MicroMessenger/i) == "micromessenger") {
              location.href = '#';
              //在微信中打开
              $(".newContent").show();
              return false;
          }
      }*/
});

$(".newContent").click(function () {
    if ($(".newContent").show()) {
        $(".newContent").hide();
    }
});

//  收起移动端顶部导航栏
function slideUpTopNav() {
    var opened = $(".overlay-nav").length;
    var top = $("body").offset().top;
    if (opened) {
        $(".nav-list").stop().slideUp();
        $(".barRight").stop().slideUp();
        $(".login-overlay").removeClass("overlay-nav");
        $(".mobile-slide-btn").addClass("mobile-slide-btn-normal");
        $(".nav-top").removeClass("nav-top-open");

        setTimeout(function () {
            $(".mobile-slide-btn").removeClass(
                "mobile-slide-btn-normal mobile-slide-btn-close"
            );
            //  收起顶部导航栏，去掉body的fixed属性
            $("body").css({
                position: "static",
                top: "auto",
            });
            $(window).scrollTop(-top);
        }, 250);
    }
}

//  设置页面内容高度，充满屏幕
function setContentHeight() {
    if (!browser.versions.mobile) {
        $(".information-list-content").height(
            $(window).innerHeight() -
            $(".page-top").innerHeight() -
            $(".page-footer").innerHeight() -
            80
        );
    }
}

//  设置当前页地址
function setCurrentPage() {
    $("#currentPage").attr("href", location.href);
}

//  复制文本到粘贴板
function copyContent(elem) {
    let clickContent = $(elem).text();
    $("#clipboard").val(clickContent);
    const range = document.createRange();
    range.selectNode(document.getElementById("clipboard"));

    const selection = window.getSelection();
    if (selection.rangeCount > 0) selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("copy");
}

//  系统提示
function alertMsg(msg) {
    $("body").append('<div class="toast"></div>');
    $(".toast").text(msg).fadeIn();
    $(".login-overlay").addClass("overlay-toast");
    setTimeout(function () {
        $(".toast").fadeOut().remove();
        $(".login-overlay").removeClass("overlay-toast");
    }, 1500);
}

//  图片预加载
var images = new Array();

function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

//  标准弹窗
/*
 *   params                  required        defaultType
 *
 *   content:弹窗内容        true            string
 *   header:弹窗标题         false           string
 *   okText:确认文案         false           string
 *   cancelText:取消文案     false           string
 *   onOk:确认按钮回调       false           function
 *   onCancel:取消按钮回调   false           function
 *   autoClose:自动关闭      false           boolean
 *   delay:自动关闭延时      false           number    unit:ms
 * */
function MsgModal(options) {
    //  注册弹窗组件
    $(".login-overlay").addClass("overlay-toast");
    let modal = `<div class="ui-modal-primary-box">
                      <div class="ui-modal-primary">
                          ${options.header
        ? "<h3>" + options.header + "</h3>"
        : ""
      }
                          <p style="margin: ${options.header ? "0 0 16px" : "6px 0 46px"
      }">${options.content}</p>
                          <div class="ui-flex ui-modal-btn-group">
                              ${options.okText
        ? '<a href="javascript:void(0)" class="ui-btn-primary ui-modal-btn">' +
        options.okText +
        "</a>"
        : ""
      }
                              ${options.cancelText
        ? '<a href="javascript:void(0)" class="ui-btn-text ui-modal-btn--cancel">' +
        options.cancelText +
        "</a>"
        : ""
      }
                          </div>
                      </div>
                  </div>`;
    $("body").append(modal);

    //  弹窗关闭事件
    options.close = (fn) => {
        $(".login-overlay").removeClass("overlay-toast");
        $(".ui-modal-primary-box").remove();
        fn && fn();
    };

    $(".ui-modal-btn").click(function () {
        options.close(options.onOk);
    });
    $(".ui-modal-btn--cancel").click(function () {
        options.close(options.onCancel);
    });
    let timer = function () {
        setTimeout(function () {
            options.close();
        }, options.delay || 3000);
    };
    options.autoClose && timer();
}

//  VIP支付页面公共方法
//  *   跳转到登录
window.name = "";

function ifShowLogin(e, isLogin, resolve) {
    e.preventDefault();
    if (!isLogin && !localStorage.getItem("userId")) {
        if (window.name == "") {
            // console.log("首次被加载");
            window.name = "isReload";
        } else if (window.name == "isReload") {
            // console.log("切换");
            showLoginModal("01");
        }
    } else if (!isLogin && localStorage.getItem("userId")) {
        if (window.name == "") {
            window.name = "isNotLogin"; //第一次验证登录过期
        } else if (window.name == "isNotLogin") {
            new MsgModal({
                content: "您的登录信息已失效，请重新登录",
                okText: "去登录",
                onOk: () => {
                    showLoginModal("01");
                },
            });
        }
    } else {
        resolve();
    }
}

//  *   商品信息载入完成前，点击支付方式提示
$(document).on("click", ".goods-loading", function () {
    new MsgModal({
        content: "商品信息正在加载中，请稍等",
        okText: "确定",
        autoClose: true,
    });
});

function disableClick(isMobile) {
    if (isMobile) {
        $(".mob-submit-btn")
            .addClass("goods-loading")
            .removeClass("mob-submit-btn");
    } else {
        $(".pay-scan-btn>div").addClass("goods-loading");
        $(".pay-scan-btn").attr("class", "pay-scan-btn--loading");
        $("#card").addClass("goods-loading").attr("id", "card-loading");
        $("#paypal").addClass("goods-loading").attr("id", "paypal-loading");
    }
}

function enableClick(isMobile) {
    if (isMobile) {
        $(".goods-loading").addClass("mob-submit-btn").removeClass("goods-loading");
    } else {
        $(".pay-scan-btn--loading>div").removeClass("goods-loading");
        $(".pay-scan-btn--loading").attr("class", "pay-scan-btn");
        $("#card-loading").removeClass("goods-loading").attr("id", "card");
        $("#paypal-loading").removeClass("goods-loading").attr("id", "paypal");
    }
}