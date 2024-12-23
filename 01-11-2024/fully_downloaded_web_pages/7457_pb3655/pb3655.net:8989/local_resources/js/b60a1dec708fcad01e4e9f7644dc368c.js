 /*!
 * GameBoxUI-JS-base (基础脚本）
 * version 1.0.1
 * Author: Steven
 * Date modified 2017-04-29
 */
 /*!
 ========== common-公共脚本 ==========
 */
 function responsive() {
     if ($("body").width() > 1200) {
         $("html").addClass("screen-lg");
         $("html").removeClass("screen-md")
     } else {
         $("html").addClass("screen-md");
         $("html").removeClass("screen-lg")
     }
 }
 function iealert() {
     $('<div class="alert alert-dismissible alert-warning iealert"><button type="button" class="close" data-dismiss="alert">×</button><p>您使用的是低版本IE浏览器，无法体验所有功能，建议升级或者更换浏览器。 <a href="http://www.google.com/chrome" target="_blank"><span class="gui gui-chrome"></span>谷歌Chrome</a> <a href="https://www.firefox.com/" target="_blank"><span class="gui gui-firefox"></span>火狐Firefox</a> <a href="http://chrome.360.cn/" target="_blank"><span class="gui gui-internet-explorer"></span>360浏览器</a> <a href="http://ub66.com/" target="_blank"><span class="gui gui-universe-browser"></span>寰宇浏览器</a> <a href="http://windows.microsoft.com/ie" target="_blank"><span class="gui gui-edge"></span>IE浏览器</a> <a class="alert-link" href="http://browsehappy.com/" target="_blank">了解更多...</a></p></div>').prependTo('body').fadeIn();
 }
 /*!
 ========== SuperSlide V2.1.1 ==========
 */
 !function(a){a.fn.slide=function(b){return a.fn.slide.defaults={type:"slide",effect:"fade",autoPlay:!1,delayTime:500,interTime:2500,triggerTime:150,defaultIndex:0,titCell:".slide-indicators li",mainCell:".slide-inner",targetCell:null,trigger:"mouseover",scroll:1,vis:1,titOnClassName:"active",autoPage:!1,prevCell:".prev",nextCell:".next",pageStateCell:".pageState",opp:!1,pnLoop:!0,easing:"swing",startFun:null,endFun:null,switchLoad:null,playStateCell:".playState",mouseOverStop:!0,defaultPlay:!0,returnDefault:!1},this.each(function(){var c=a.extend({},a.fn.slide.defaults,b),d=a(this),e=c.effect,f=a(c.prevCell,d),g=a(c.nextCell,d),h=a(c.pageStateCell,d),i=a(c.playStateCell,d),j=a(c.titCell,d),k=j.size(),l=a(c.mainCell,d),m=l.children().size(),n=c.switchLoad,o=a(c.targetCell,d),p=parseInt(c.defaultIndex),q=parseInt(c.delayTime),r=parseInt(c.interTime);parseInt(c.triggerTime);var Q,t=parseInt(c.scroll),u=parseInt(c.vis),v="false"==c.autoPlay||0==c.autoPlay?!1:!0,w="false"==c.opp||0==c.opp?!1:!0,x="false"==c.autoPage||0==c.autoPage?!1:!0,y="false"==c.pnLoop||0==c.pnLoop?!1:!0,z="false"==c.mouseOverStop||0==c.mouseOverStop?!1:!0,A="false"==c.defaultPlay||0==c.defaultPlay?!1:!0,B="false"==c.returnDefault||0==c.returnDefault?!1:!0,C=0,D=0,E=0,F=0,G=c.easing,H=null,I=null,J=null,K=c.titOnClassName,L=j.index(d.find("."+K)),M=p=-1==L?p:L,N=p,O=p,P=m>=u?0!=m%t?m%t:t:0,R="leftMarquee"==e||"topMarquee"==e?!0:!1,S=function(){a.isFunction(c.startFun)&&c.startFun(p,k,d,a(c.titCell,d),l,o,f,g)},T=function(){a.isFunction(c.endFun)&&c.endFun(p,k,d,a(c.titCell,d),l,o,f,g)},U=function(){j.removeClass(K),A&&j.eq(N).addClass(K)};if("menu"==c.type)return A&&j.removeClass(K).eq(p).addClass(K),j.hover(function(){Q=a(this).find(c.targetCell);var b=j.index(a(this));I=setTimeout(function(){switch(p=b,j.removeClass(K).eq(p).addClass(K),S(),e){case"fade":Q.stop(!0,!0).animate({opacity:"show"},q,G,T);break;case"slideDown":Q.stop(!0,!0).animate({height:"show"},q,G,T)}},c.triggerTime)},function(){if(!Q){return;}switch(clearTimeout(I),e){case"fade":Q.animate({opacity:"hide"},q,G);break;case"slideDown":Q.animate({height:"hide"},q,G)}}),B&&d.hover(function(){clearTimeout(J)},function(){J=setTimeout(U,q)}),void 0;if(0==k&&(k=m),R&&(k=2),x){if(m>=u)if("leftLoop"==e||"topLoop"==e)k=0!=m%t?(0^m/t)+1:m/t;else{var V=m-u;k=1+parseInt(0!=V%t?V/t+1:V/t),0>=k&&(k=1)}else k=1;j.html("");var W="";if(1==c.autoPage||"true"==c.autoPage)for(var X=0;k>X;X++)W+="<li>"+(X+1)+"</li>";else for(var X=0;k>X;X++)W+=c.autoPage.replace("$",X+1);j.html(W);var j=j.children()}if(m>=u){l.children().each(function(){a(this).width()>E&&(E=a(this).width(),D=a(this).outerWidth(!0)),a(this).height()>F&&(F=a(this).height(),C=a(this).outerHeight(!0))});var Y=l.children(),Z=function(){for(var a=0;u>a;a++)Y.eq(a).clone().addClass("clone").appendTo(l);for(var a=0;P>a;a++)Y.eq(m-a-1).clone().addClass("clone").prependTo(l)};switch(e){case"fold":l.css({position:"relative",width:D,height:C}).children().css({position:"absolute",width:E,left:0,top:0,display:"none"});break;case"top":l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+u*C+'px"></div>').css({top:-(p*t)*C,position:"relative",padding:"0",margin:"0"}).children().css({height:F});break;case"left":l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+u*D+'px"></div>').css({width:m*D,left:-(p*t)*D,position:"relative",overflow:"hidden",padding:"0",margin:"0"}).children().css({"float":"left",width:E});break;case"leftLoop":case"leftMarquee":Z(),l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; width:'+u*D+'px"></div>').css({width:(m+u+P)*D,position:"relative",overflow:"hidden",padding:"0",margin:"0",left:-(P+p*t)*D}).children().css({"float":"left",width:E});break;case"topLoop":case"topMarquee":Z(),l.wrap('<div class="tempWrap" style="overflow:hidden; position:relative; height:'+u*C+'px"></div>').css({height:(m+u+P)*C,position:"relative",padding:"0",margin:"0",top:-(P+p*t)*C}).children().css({height:F})}}var $=function(a){var b=a*t;return a==k?b=m:-1==a&&0!=m%t&&(b=-m%t),b},_=function(b){var c=function(c){for(var d=c;u+c>d;d++)b.eq(d).find("img["+n+"]").each(function(){var b=a(this);if(b.attr("src",b.attr(n)).removeAttr(n),l.find(".clone")[0])for(var c=l.children(),d=0;d<c.size();d++)c.eq(d).find("img["+n+"]").each(function(){a(this).attr(n)==b.attr("src")&&a(this).attr("src",a(this).attr(n)).removeAttr(n)})})};switch(e){case"fade":case"fold":case"top":case"left":case"slideDown":c(p*t);break;case"leftLoop":case"topLoop":c(P+$(O));break;case"leftMarquee":case"topMarquee":var d="leftMarquee"==e?l.css("left").replace("px",""):l.css("top").replace("px",""),f="leftMarquee"==e?D:C,g=P;if(0!=d%f){var h=Math.abs(0^d/f);g=1==p?P+h:P+h-1}c(g)}},ab=function(a){if(!A||M!=p||a||R){if(R?p>=1?p=1:0>=p&&(p=0):(O=p,p>=k?p=0:0>p&&(p=k-1)),S(),null!=n&&_(l.children()),o[0]&&(Q=o.eq(p),null!=n&&_(o),"slideDown"==e?(o.not(Q).stop(!0,!0).slideUp(q),Q.slideDown(q,G,function(){l[0]||T()})):(o.not(Q).stop(!0,!0).hide(),Q.animate({opacity:"show"},q,function(){l[0]||T()}))),m>=u)switch(e){case"fade":l.children().stop(!0,!0).eq(p).animate({opacity:"show"},q,G,function(){T()}).siblings().hide();break;case"fold":l.children().stop(!0,!0).eq(p).animate({opacity:"show"},q,G,function(){T()}).siblings().animate({opacity:"hide"},q,G);break;case"top":l.stop(!0,!1).animate({top:-p*t*C},q,G,function(){T()});break;case"left":l.stop(!0,!1).animate({left:-p*t*D},q,G,function(){T()});break;case"leftLoop":var b=O;l.stop(!0,!0).animate({left:-($(O)+P)*D},q,G,function(){-1>=b?l.css("left",-(P+(k-1)*t)*D):b>=k&&l.css("left",-P*D),T()});break;case"topLoop":var b=O;l.stop(!0,!0).animate({top:-($(O)+P)*C},q,G,function(){-1>=b?l.css("top",-(P+(k-1)*t)*C):b>=k&&l.css("top",-P*C),T()});break;case"leftMarquee":var c=l.css("left").replace("px","");0==p?l.animate({left:++c},0,function(){l.css("left").replace("px","")>=0&&l.css("left",-m*D)}):l.animate({left:--c},0,function(){l.css("left").replace("px","")<=-(m+P)*D&&l.css("left",-P*D)});break;case"topMarquee":var d=l.css("top").replace("px","");0==p?l.animate({top:++d},0,function(){l.css("top").replace("px","")>=0&&l.css("top",-m*C)}):l.animate({top:--d},0,function(){l.css("top").replace("px","")<=-(m+P)*C&&l.css("top",-P*C)})}j.removeClass(K).eq(p).addClass(K),M=p,y||(g.removeClass("nextStop"),f.removeClass("prevStop"),0==p&&f.addClass("prevStop"),p==k-1&&g.addClass("nextStop")),h.html("<span>"+(p+1)+"</span>/"+k)}};A&&ab(!0),B&&d.hover(function(){clearTimeout(J)},function(){J=setTimeout(function(){p=N,A?ab():"slideDown"==e?Q.slideUp(q,U):Q.animate({opacity:"hide"},q,U),M=p},300)});var bb=function(a){H=setInterval(function(){w?p--:p++,ab()},a?a:r)},cb=function(a){H=setInterval(ab,a?a:r)},db=function(){z||(clearInterval(H),bb())},eb=function(){(y||p!=k-1)&&(p++,ab(),R||db())},fb=function(){(y||0!=p)&&(p--,ab(),R||db())},gb=function(){clearInterval(H),R?cb():bb(),i.removeClass("pauseState")},hb=function(){clearInterval(H),i.addClass("pauseState")};if(v?R?(w?p--:p++,cb(),z&&l.hover(hb,gb)):(bb(),z&&d.hover(hb,gb)):(R&&(w?p--:p++),i.addClass("pauseState")),i.click(function(){i.hasClass("pauseState")?gb():hb()}),"mouseover"==c.trigger?j.hover(function(){var a=j.index(this);I=setTimeout(function(){p=a,ab(),db()},c.triggerTime)},function(){clearTimeout(I)}):j.click(function(){p=j.index(this),ab(),db()}),R){if(g.mousedown(eb),f.mousedown(fb),y){var ib,jb=function(){ib=setTimeout(function(){clearInterval(H),cb(0^r/10)},150)},kb=function(){clearTimeout(ib),clearInterval(H),cb()};g.mousedown(jb),g.mouseup(kb),f.mousedown(jb),f.mouseup(kb)}"mouseover"==c.trigger&&(g.hover(eb,function(){}),f.hover(fb,function(){}))}else g.click(eb),f.click(fb)})}}(jQuery),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(a,b,c,d,e){return jQuery.easing[jQuery.easing.def](a,b,c,d,e)},easeInQuad:function(a,b,c,d,e){return d*(b/=e)*b+c},easeOutQuad:function(a,b,c,d,e){return-d*(b/=e)*(b-2)+c},easeInOutQuad:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},easeInCubic:function(a,b,c,d,e){return d*(b/=e)*b*b+c},easeOutCubic:function(a,b,c,d,e){return d*((b=b/e-1)*b*b+1)+c},easeInOutCubic:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b+c:d/2*((b-=2)*b*b+2)+c},easeInQuart:function(a,b,c,d,e){return d*(b/=e)*b*b*b+c},easeOutQuart:function(a,b,c,d,e){return-d*((b=b/e-1)*b*b*b-1)+c},easeInOutQuart:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b+c:-d/2*((b-=2)*b*b*b-2)+c},easeInQuint:function(a,b,c,d,e){return d*(b/=e)*b*b*b*b+c},easeOutQuint:function(a,b,c,d,e){return d*((b=b/e-1)*b*b*b*b+1)+c},easeInOutQuint:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b*b*b*b+c:d/2*((b-=2)*b*b*b*b+2)+c},easeInSine:function(a,b,c,d,e){return-d*Math.cos(b/e*(Math.PI/2))+d+c},easeOutSine:function(a,b,c,d,e){return d*Math.sin(b/e*(Math.PI/2))+c},easeInOutSine:function(a,b,c,d,e){return-d/2*(Math.cos(Math.PI*b/e)-1)+c},easeInExpo:function(a,b,c,d,e){return 0==b?c:d*Math.pow(2,10*(b/e-1))+c},easeOutExpo:function(a,b,c,d,e){return b==e?c+d:d*(-Math.pow(2,-10*b/e)+1)+c},easeInOutExpo:function(a,b,c,d,e){return 0==b?c:b==e?c+d:(b/=e/2)<1?d/2*Math.pow(2,10*(b-1))+c:d/2*(-Math.pow(2,-10*--b)+2)+c},easeInCirc:function(a,b,c,d,e){return-d*(Math.sqrt(1-(b/=e)*b)-1)+c},easeOutCirc:function(a,b,c,d,e){return d*Math.sqrt(1-(b=b/e-1)*b)+c},easeInOutCirc:function(a,b,c,d,e){return(b/=e/2)<1?-d/2*(Math.sqrt(1-b*b)-1)+c:d/2*(Math.sqrt(1-(b-=2)*b)+1)+c},easeInElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return-(h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g))+c},easeOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(1==(b/=e))return c+d;if(g||(g=.3*e),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*b)*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInOutElastic:function(a,b,c,d,e){var f=1.70158,g=0,h=d;if(0==b)return c;if(2==(b/=e/2))return c+d;if(g||(g=e*.3*1.5),h<Math.abs(d)){h=d;var f=g/4}else var f=g/(2*Math.PI)*Math.asin(d/h);return 1>b?-.5*h*Math.pow(2,10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+c:.5*h*Math.pow(2,-10*(b-=1))*Math.sin((b*e-f)*2*Math.PI/g)+d+c},easeInBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*(b/=e)*b*((f+1)*b-f)+c},easeOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),d*((b=b/e-1)*b*((f+1)*b+f)+1)+c},easeInOutBack:function(a,b,c,d,e,f){return void 0==f&&(f=1.70158),(b/=e/2)<1?d/2*b*b*(((f*=1.525)+1)*b-f)+c:d/2*((b-=2)*b*(((f*=1.525)+1)*b+f)+2)+c},easeInBounce:function(a,b,c,d,e){return d-jQuery.easing.easeOutBounce(a,e-b,0,d,e)+c},easeOutBounce:function(a,b,c,d,e){return(b/=e)<1/2.75?d*7.5625*b*b+c:2/2.75>b?d*(7.5625*(b-=1.5/2.75)*b+.75)+c:2.5/2.75>b?d*(7.5625*(b-=2.25/2.75)*b+.9375)+c:d*(7.5625*(b-=2.625/2.75)*b+.984375)+c},easeInOutBounce:function(a,b,c,d,e){return e/2>b?.5*jQuery.easing.easeInBounce(a,2*b,0,d,e)+c:.5*jQuery.easing.easeOutBounce(a,2*b-e,0,d,e)+.5*d+c}});
 /*!
 ========== SuperMarquee V1.3.2 ==========
 */
 (function ($) {
     $.fn.Marquee = function (options) {
         var opts = $.extend({}, $.fn.Marquee.defaults, options);
         return this.each(function () {
             var $marquee = $(this);
             var _scrollObj = $marquee.get(0);
             var scrollW = $marquee.width();
             var scrollH = $marquee.height();
             var $element = $marquee.children();
             var $kids = $element.children();
             var scrollSize = 0;
             var _type = (opts.direction == 'left' || opts.direction == 'right') ? 1 : 0;
             var scrollId, rollId, isMove, marqueeId;
             var t, b, c, d, e;
             var _size, _len;
             var $nav, $navBtns;
             var arrPos = [];
             var numView = 0;
             var numRoll = 0;
             var numMoved = 0;
             $element.css(_type ? 'width' : 'height', 10000);
             var navHtml = '<ul>';
             if (opts.isEqual) {
                 _size = $kids[_type ? 'outerWidth' : 'outerHeight']();
                 _len = $kids.length;
                 scrollSize = _size * _len;
                 for (var i = 0; i < _len; i++) {
                     arrPos.push(i * _size);
                     navHtml += '<li>' + (i + 1) + '</li>'
                 }
             } else {
                 $kids.each(function (i) {
                     arrPos.push(scrollSize);
                     scrollSize += $(this)[_type ? 'outerWidth' : 'outerHeight']();
                     navHtml += '<li>' + (i + 1) + '</li>'
                 })
             }
             navHtml += '</ul>';
             if (scrollSize < (_type ? scrollW : scrollH))return;
             $element.append($kids.clone()).css(_type ? 'width' : 'height', scrollSize * 2);
             if (opts.navId) {
                 $nav = $(opts.navId).append(navHtml).hover(stop, start);
                 $navBtns = $('li', $nav);
                 $navBtns.each(function (i) {
                     $(this).bind(opts.eventNav, function () {
                         if (isMove)return;
                         if (numView == i)return;
                         rollFunc(arrPos[i]);
                         $navBtns.eq(numView).removeClass('active');
                         numView = i;
                         $(this).addClass('active')
                     })
                 });
                 $navBtns.eq(numView).addClass('active')
             }
             if (opts.direction == 'right' || opts.direction == 'down') {
                 _scrollObj[_type ? 'scrollLeft' : 'scrollTop'] = scrollSize
             } else {
                 _scrollObj[_type ? 'scrollLeft' : 'scrollTop'] = 0
             }
             if (opts.isMarquee) {
                 marqueeId = setTimeout(scrollFunc, opts.scrollDelay);
                 $marquee.hover(function () {
                     clearInterval(marqueeId)
                 }, function () {
                     clearInterval(marqueeId);
                     marqueeId = setTimeout(scrollFunc, opts.scrollDelay)
                 });
                 if (opts.controlBtn) {
                     $.each(opts.controlBtn, function (i, val) {
                         $(val).bind(opts.eventA, function () {
                             opts.direction = i;
                             opts.oldAmount = opts.scrollAmount;
                             opts.scrollAmount = opts.newAmount
                         }).bind(opts.eventB, function () {
                             opts.scrollAmount = opts.oldAmount
                         })
                     })
                 }
             } else {
                 if (opts.isAuto) {
                     start();
                     $marquee.hover(stop, start)
                 }
                 if (opts.btnGo) {
                     $.each(opts.btnGo, function (i, val) {
                         $(val).bind(opts.eventGo, function () {
                             if (isMove == true)return;
                             opts.direction = i;
                             rollFunc();
                             if (opts.isAuto) {
                                 stop();
                                 start()
                             }
                         })
                     })
                 }
             }
             function scrollFunc() {
                 var _dir = (opts.direction == 'left' || opts.direction == 'right') ? 'scrollLeft' : 'scrollTop';
                 if (opts.isMarquee) {
                     if (opts.loop > 0) {
                         numMoved += opts.scrollAmount;
                         if (numMoved > scrollSize * opts.loop) {
                             _scrollObj[_dir] = 0;
                             return clearInterval(marqueeId)
                         }
                     }
                     var newPos = _scrollObj[_dir] + (opts.direction == 'left' || opts.direction == 'up' ? 1 : -1) * opts.scrollAmount
                 } else {
                     if (opts.duration) {
                         if (t++ < d) {
                             isMove = true;
                             var newPos = Math.ceil(easeOutQuad(t, b, c, d));
                             if (t == d) {
                                 newPos = e
                             }
                         } else {
                             newPos = e;
                             clearInterval(scrollId);
                             isMove = false;
                             return
                         }
                     } else {
                         var newPos = e;
                         clearInterval(scrollId)
                     }
                 }
                 if (opts.direction == 'left' || opts.direction == 'up') {
                     if (newPos >= scrollSize) {
                         newPos -= scrollSize
                     }
                 } else {
                     if (newPos <= 0) {
                         newPos += scrollSize
                     }
                 }
                 _scrollObj[_dir] = newPos;
                 if (opts.isMarquee) {
                     marqueeId = setTimeout(scrollFunc, opts.scrollDelay)
                 } else if (t < d) {
                     if (scrollId)clearTimeout(scrollId);
                     scrollId = setTimeout(scrollFunc, opts.scrollDelay)
                 } else {
                     isMove = false
                 }
             }
             function rollFunc(pPos) {
                 isMove = true;
                 var _dir = (opts.direction == 'left' || opts.direction == 'right') ? 'scrollLeft' : 'scrollTop';
                 var _neg = opts.direction == 'left' || opts.direction == 'up' ? 1 : -1;
                 numRoll = numRoll + _neg;
                 if (pPos == undefined && opts.navId) {
                     $navBtns.eq(numView).removeClass('active');
                     numView += _neg;
                     if (numView >= _len) {
                         numView = 0
                     } else if (numView < 0) {
                         numView = _len - 1
                     }
                     $navBtns.eq(numView).addClass('active');
                     numRoll = numView
                 }
                 var _temp = numRoll < 0 ? scrollSize : 0;
                 t = 0;
                 b = _scrollObj[_dir];
                 e = (pPos != undefined) ? pPos : _temp + (opts.distance * numRoll) % scrollSize;
                 if (_neg == 1) {
                     if (e > b) {
                         c = e - b
                     } else {
                         c = e + scrollSize - b
                     }
                 } else {
                     if (e > b) {
                         c = e - scrollSize - b
                     } else {
                         c = e - b
                     }
                 }
                 d = opts.duration;
                 if (scrollId)clearTimeout(scrollId);
                 scrollId = setTimeout(scrollFunc, opts.scrollDelay)
             }
             function start() {
                 rollId = setInterval(function () {
                     rollFunc()
                 }, opts.time * 1000)
             }
             function stop() {
                 clearInterval(rollId)
             }
             function easeOutQuad(t, b, c, d) {
                 return -c * (t /= d) * (t - 2) + b
             }
             function easeOutQuint(t, b, c, d) {
                 return c * ((t = t / d - 1) * t * t * t * t + 1) + b
             }
         })
     };
     $.fn.Marquee.defaults = {
         isMarquee: false,
         isEqual: true,
         loop: 0,
         newAmount: 3,
         eventA: 'mousedown',
         eventB: 'mouseup',
         isAuto: true,
         time: 5,
         duration: 50,
         eventGo: 'click',
         direction: 'left',
         scrollAmount: 1,
         scrollDelay: 10,
         eventNav: 'click'
     };
     $.fn.Marquee.setDefaults = function (settings) {
         $.extend($.fn.Marquee.defaults, settings)
     }
 })(jQuery);
 /*!
 ========== placeholder IE9-兼容 ==========
 */
+function($){$.fn.extend({"placeholder":function(options){options=$.extend({placeholderColor:"#999"},options);$(this).each(function(){var defaultValue=$(this).attr("placeholder");var defaultColor=$(this).css("color");$(this).focus(function(){var pattern=new RegExp("^"+defaultValue+"$|^$");pattern.test($(this).val())&&$(this).val("").css("color",defaultColor)}).blur(function(){if($(this).val()==defaultValue){$(this).css("color",defaultColor)}else{if($(this).val().length==0){$(this).val(defaultValue).css("color",options.placeholderColor)}}}).trigger("blur")});return this}})}(jQuery);
 /*!
 ========== blink 文字闪烁 ==========
 *重构:解决不同元素使用同一个ele造成的问题 by Faker
 */
 function blink(ele,cls,times){$(ele).each(function(){var $this=$(this);var i=0,o=$this.attr("class")+" ",c="";setInterval(function(){i++;c=i%2?o+cls:o;$this.attr("class",c)},times)})};
 /*!
  ========== textBlink 文字闪烁 ==========
  */
 function textBlink(ele,cls1,cls2,times){$(ele).each(function(){var $this=$(this);var i=0,c="";setInterval(function(){i++;c=i%2?cls1:cls2;$this.css("color",c);$this.find("a").css("color",c)},times)})};
 /*!
 ========== accordion 动态手风琴 ==========
 */
+function($){$.fn.accordion=function(options){var subCount,subCountLen;var leave=false;$this=this;defaults={showIndex:1};var opts=$.extend(defaults,options);function init(){m=$this[0];subCount=$this.find("li");subCountLen=subCount.length;$thisWidth=$this[0].offsetWidth;averageWidth=$thisWidth/subCountLen;ot=Math.floor(($thisWidth-opts.maxWidth)/(subCountLen-1));for(var i=0;i<subCountLen;i++){subCount[i].style.width=averageWidth+"px";timer(subCount[i])}defatulOpen()}function timer(s){s.onmouseover=function(){$(".mask").show();var $__this=$(this);clearInterval($this.htimer);clearInterval($this.timer);$this.timer=setInterval(function(){slide(s)},opts.expandSpeed);$__this.find(".cover").show();$__this.find(".mask").hide();var $parent=$(".active",$__this.parent());$parent.removeClass("active");$parent.find(".cover").hide();$parent.find(".mask").show();$__this.addClass("active");leave=false};s.onmouseout=function(){var $__this=$(this);clearInterval($this.timer);clearInterval($this.htimer);$this.htimer=setInterval(function(){slide(s,true)},opts.expandSpeed);$__this.find(".cover").hide();$__this.find(".mask").show();$__this.removeClass("active");leave=true}}function slide(s,c){var cw=parseInt(s.style.width);if((cw<opts.maxWidth&&!c)||(cw>averageWidth&&c)){var owt=0;var i=0;for(i;i<subCountLen;i++){if(subCount[i]!=s){var oi=0;var o=subCount[i];var ow=parseInt(o.style.width);if(ow<averageWidth&&c){oi=Math.floor((averageWidth-ow)/opts.slideSpeed);oi=(oi>0)?oi:1;o.style.width=(ow+oi)+"px"}else{if(ow>ot&&!c){oi=Math.floor((ow-ot)/opts.slideSpeed);oi=(oi>0)?oi:1;o.style.width=(ow-oi)+"px"}}if(c){owt=owt+(ow+oi)}else{owt=owt+(ow-oi)}}}s.style.width=($thisWidth-owt)+"px"}else{if($this.htimer){clearInterval($this.htimer)}if(leave){defatulOpen()}if($this.timer){clearInterval($this.timer);if(leave){defatulOpen()}}}}function defatulOpen(){$this.timer=setInterval(function(){$(subCount[opts.showIndex-1]).mouseover()},opts.expandSpeed)}init()}}(jQuery);
 /*!
 ========== affix 附加导航 ==========
 */
+function($){var Affix=function(element,options){this.options=$.extend({},Affix.DEFAULTS,options);this.$target=$(this.options.target).on("scroll.bs.affix.data-api",$.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",$.proxy(this.checkPositionWithEventLoop,this));this.$element=$(element);this.affixed=null;this.unpin=null;this.pinnedOffset=null;this.checkPosition()};Affix.VERSION="3.3.6";Affix.RESET="affix affix-top affix-bottom";Affix.DEFAULTS={offset:0,target:window};Affix.prototype.getState=function(scrollHeight,height,offsetTop,offsetBottom){var scrollTop=this.$target.scrollTop();var position=this.$element.offset();var targetHeight=this.$target.height();if(offsetTop!=null&&this.affixed=="top"){return scrollTop<offsetTop?"top":false}if(this.affixed=="bottom"){if(offsetTop!=null){return(scrollTop+this.unpin<=position.top)?false:"bottom"}return(scrollTop+targetHeight<=scrollHeight-offsetBottom)?false:"bottom"}var initializing=this.affixed==null;var colliderTop=initializing?scrollTop:position.top;var colliderHeight=initializing?targetHeight:height;if(offsetTop!=null&&scrollTop<=offsetTop){return"top"}if(offsetBottom!=null&&(colliderTop+colliderHeight>=scrollHeight-offsetBottom)){return"bottom"}return false};Affix.prototype.getPinnedOffset=function(){if(this.pinnedOffset){return this.pinnedOffset}this.$element.removeClass(Affix.RESET).addClass("affix");var scrollTop=this.$target.scrollTop();var position=this.$element.offset();return(this.pinnedOffset=position.top-scrollTop)};Affix.prototype.checkPositionWithEventLoop=function(){setTimeout($.proxy(this.checkPosition,this),1)};Affix.prototype.checkPosition=function(){if(!this.$element.is(":visible")){return}var height=this.$element.height();var offset=this.options.offset;var offsetTop=offset.top;var offsetBottom=offset.bottom;var scrollHeight=Math.max($(document).height(),$(document.body).height());if(typeof offset!="object"){offsetBottom=offsetTop=offset}if(typeof offsetTop=="function"){offsetTop=offset.top(this.$element)}if(typeof offsetBottom=="function"){offsetBottom=offset.bottom(this.$element)}var affix=this.getState(scrollHeight,height,offsetTop,offsetBottom);if(this.affixed!=affix){if(this.unpin!=null){this.$element.css("top","")}var affixType="affix"+(affix?"-"+affix:"");var e=$.Event(affixType+".bs.affix");this.$element.trigger(e);if(e.isDefaultPrevented()){return}this.affixed=affix;this.unpin=affix=="bottom"?this.getPinnedOffset():null;this.$element.removeClass(Affix.RESET).addClass(affixType).trigger(affixType.replace("affix","affixed")+".bs.affix")}if(affix=="bottom"){this.$element.offset({top:scrollHeight-height-offsetBottom})}};function Plugin(option){return this.each(function(){var $this=$(this);var data=$this.data("bs.affix");var options=typeof option=="object"&&option;if(!data){$this.data("bs.affix",(data=new Affix(this,options)))}if(typeof option=="string"){data[option]()}})}var old=$.fn.affix;$.fn.affix=Plugin;$.fn.affix.Constructor=Affix;$.fn.affix.noConflict=function(){$.fn.affix=old;return this};$(window).on("load",function(){$('[data-spy="affix"]').each(function(){var $spy=$(this);var data=$spy.data();data.offset=data.offset||{};if(data.offsetBottom!=null){data.offset.bottom=data.offsetBottom}if(data.offsetTop!=null){data.offset.top=data.offsetTop}Plugin.call($spy,data)})})}(jQuery);
 /*!
 ========== alert 警告条 ==========
 */
 +function(e){var d='[data-dismiss="alert"]';var b=function(f){e(f).on("click",d,this.close)};b.VERSION="3.3.6";b.TRANSITION_DURATION=150;b.prototype.close=function(j){var i=e(this);var g=i.attr("data-target");if(!g){g=i.attr("href");g=g&&g.replace(/.*(?=#[^\s]*$)/,"")}var h=e(g);if(j){j.preventDefault()}if(!h.length){h=i.closest(".alert")}h.trigger(j=e.Event("close.bs.alert"));if(j.isDefaultPrevented()){return}h.removeClass("in");function f(){h.detach().trigger("closed.bs.alert").remove()}e.support.transition&&h.hasClass("fade")?h.one("bsTransitionEnd",f).emulateTransitionEnd(b.TRANSITION_DURATION):f()};function c(f){return this.each(function(){var h=e(this);var g=h.data("bs.alert");if(!g){h.data("bs.alert",(g=new b(this)))}if(typeof f=="string"){g[f].call(h)}})}var a=e.fn.alert;e.fn.alert=c;e.fn.alert.Constructor=b;e.fn.alert.noConflict=function(){e.fn.alert=a;return this};e(document).on("click.bs.alert.data-api",d,b.prototype.close)}(jQuery);
 /*!
 ========== button 按钮 ==========
 */
 +function($){var Button=function(element,options){this.$element=$(element);this.options=$.extend({},Button.DEFAULTS,options);this.isLoading=false};Button.VERSION="3.3.6";Button.DEFAULTS={loadingText:"loading..."};Button.prototype.setState=function(state){var d="disabled";var $el=this.$element;var val=$el.is("input")?"val":"html";var data=$el.data();state+="Text";if(data.resetText==null){$el.data("resetText",$el[val]())}setTimeout($.proxy(function(){$el[val](data[state]==null?this.options[state]:data[state]);if(state=="loadingText"){this.isLoading=true;$el.addClass(d).attr(d,d)}else{if(this.isLoading){this.isLoading=false;$el.removeClass(d).removeAttr(d)}}},this),0)};Button.prototype.toggle=function(){var changed=true;var $parent=this.$element.closest('[data-toggle="buttons"]');if($parent.length){var $input=this.$element.find("input");if($input.prop("type")=="radio"){if($input.prop("checked")){changed=false}$parent.find(".active").removeClass("active");this.$element.addClass("active")}else{if($input.prop("type")=="checkbox"){if(($input.prop("checked"))!==this.$element.hasClass("active")){changed=false}this.$element.toggleClass("active")}}$input.prop("checked",this.$element.hasClass("active"));if(changed){$input.trigger("change")}}else{this.$element.attr("aria-pressed",!this.$element.hasClass("active"));this.$element.toggleClass("active")}};function Plugin(option){return this.each(function(){var $this=$(this);var data=$this.data("bs.button");var options=typeof option=="object"&&option;if(!data){$this.data("bs.button",(data=new Button(this,options)))}if(option=="toggle"){data.toggle()}else{if(option){data.setState(option)}}})}var old=$.fn.button;$.fn.button=Plugin;$.fn.button.Constructor=Button;$.fn.button.noConflict=function(){$.fn.button=old;return this};$(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(e){var $btn=$(e.target);if(!$btn.hasClass("btn")){$btn=$btn.closest(".btn")}Plugin.call($btn,"toggle");if(!($(e.target).is('input[type="radio"]')||$(e.target).is('input[type="checkbox"]'))){e.preventDefault()}}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){$(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery);

 /*!
 ========== collapse 折叠 ==========
 */
 +function($){var Collapse=function(element,options){this.$element=$(element);this.options=$.extend({},Collapse.DEFAULTS,options);this.$trigger=$('[data-toggle="collapse"][href="#'+element.id+'"],'+'[data-toggle="collapse"][data-target="#'+element.id+'"]');this.transitioning=null;if(this.options.parent){this.$parent=this.getParent()}else{this.addAriaAndCollapsedClass(this.$element,this.$trigger)}if(this.options.toggle){this.toggle()}};Collapse.VERSION="3.3.6";Collapse.TRANSITION_DURATION=350;Collapse.DEFAULTS={toggle:true};Collapse.prototype.dimension=function(){var hasWidth=this.$element.hasClass("width");return hasWidth?"width":"height"};Collapse.prototype.show=function(){if(this.transitioning||this.$element.hasClass("in")){return}var activesData;var actives=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(actives&&actives.length){activesData=actives.data("bs.collapse");if(activesData&&activesData.transitioning){return}}var startEvent=$.Event("show.bs.collapse");this.$element.trigger(startEvent);if(startEvent.isDefaultPrevented()){return}if(actives&&actives.length){Plugin.call(actives,"hide");activesData||actives.data("bs.collapse",null)}var dimension=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[dimension](0).attr("aria-expanded",true);this.$trigger.removeClass("collapsed").attr("aria-expanded",true);this.transitioning=1;var complete=function(){this.$element.removeClass("collapsing").addClass("collapse in")[dimension]("");this.transitioning=0;this.$element.trigger("shown.bs.collapse")};if(!$.support.transition){return complete.call(this)}var scrollSize=$.camelCase(["scroll",dimension].join("-"));this.$element.one("bsTransitionEnd",$.proxy(complete,this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])};Collapse.prototype.hide=function(){if(this.transitioning||!this.$element.hasClass("in")){return}var startEvent=$.Event("hide.bs.collapse");this.$element.trigger(startEvent);if(startEvent.isDefaultPrevented()){return}var dimension=this.dimension();this.$element[dimension](this.$element[dimension]())[0].offsetHeight;this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",false);this.$trigger.addClass("collapsed").attr("aria-expanded",false);this.transitioning=1;var complete=function(){this.transitioning=0;this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!$.support.transition){return complete.call(this)}this.$element[dimension](0).one("bsTransitionEnd",$.proxy(complete,this)).emulateTransitionEnd(Collapse.TRANSITION_DURATION)};Collapse.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};Collapse.prototype.getParent=function(){return $(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each($.proxy(function(i,element){var $element=$(element);this.addAriaAndCollapsedClass(getTargetFromTrigger($element),$element)},this)).end()};Collapse.prototype.addAriaAndCollapsedClass=function($element,$trigger){var isOpen=$element.hasClass("in");$element.attr("aria-expanded",isOpen);$trigger.toggleClass("collapsed",!isOpen).attr("aria-expanded",isOpen)};function getTargetFromTrigger($trigger){var href;var target=$trigger.attr("data-target")||(href=$trigger.attr("href"))&&href.replace(/.*(?=#[^\s]+$)/,"");return $(target)}function Plugin(option){return this.each(function(){var $this=$(this);var data=$this.data("bs.collapse");var options=$.extend({},Collapse.DEFAULTS,$this.data(),typeof option=="object"&&option);if(!data&&options.toggle&&/show|hide/.test(option)){options.toggle=false}if(!data){$this.data("bs.collapse",(data=new Collapse(this,options)))}if(typeof option=="string"){data[option]()}})}var old=$.fn.collapse;$.fn.collapse=Plugin;$.fn.collapse.Constructor=Collapse;$.fn.collapse.noConflict=function(){$.fn.collapse=old;return this};$(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(e){var $this=$(this);if(!$this.attr("data-target")){e.preventDefault()}var $target=getTargetFromTrigger($this);var data=$target.data("bs.collapse");var option=data?"toggle":$this.data();Plugin.call($target,option)})}(jQuery);
/*!
 ========== dropdown 下拉菜单 ==========
 */
+function($){var backdrop=".dropdown-backdrop";var toggle='[data-toggle="dropdown"]';var Dropdown=function(element){$(element).on("click.bs.dropdown",this.toggle)};Dropdown.VERSION="3.3.6";function getParent($this){var selector=$this.attr("data-target");if(!selector){selector=$this.attr("href");selector=selector&&/#[A-Za-z]/.test(selector)&&selector.replace(/.*(?=#[^\s]*$)/,"")}var $parent=selector&&$(selector);return $parent&&$parent.length?$parent:$this.parent()}function clearMenus(e){if(e&&e.which===3){return}$(backdrop).remove();$(toggle).each(function(){var $this=$(this);var $parent=getParent($this);var relatedTarget={relatedTarget:this};if(!$parent.hasClass("open")){return}if(e&&e.type=="click"&&/input|textarea/i.test(e.target.tagName)&&$.contains($parent[0],e.target)){return
}$parent.trigger(e=$.Event("hide.bs.dropdown",relatedTarget));if(e.isDefaultPrevented()){return}$this.attr("aria-expanded","false");$parent.removeClass("open").trigger($.Event("hidden.bs.dropdown",relatedTarget))})}Dropdown.prototype.toggle=function(e){var $this=$(this);if($this.is(".disabled, :disabled")){return}var $parent=getParent($this);var isActive=$parent.hasClass("open");clearMenus();if(!isActive){if("ontouchstart" in document.documentElement&&!$parent.closest(".navbar-nav").length){$(document.createElement("div")).addClass("dropdown-backdrop").insertAfter($(this)).on("click",clearMenus)}var relatedTarget={relatedTarget:this};$parent.trigger(e=$.Event("show.bs.dropdown",relatedTarget));if(e.isDefaultPrevented()){return}$this.trigger("focus").attr("aria-expanded","true");$parent.toggleClass("open").trigger($.Event("shown.bs.dropdown",relatedTarget))}return false};Dropdown.prototype.keydown=function(e){if(!/(38|40|27|32)/.test(e.which)||/input|textarea/i.test(e.target.tagName)){return}var $this=$(this);e.preventDefault();e.stopPropagation();if($this.is(".disabled, :disabled")){return}var $parent=getParent($this);var isActive=$parent.hasClass("open");if(!isActive&&e.which!=27||isActive&&e.which==27){if(e.which==27){$parent.find(toggle).trigger("focus")}return $this.trigger("click")}var desc=" li:not(.disabled):visible a";var $items=$parent.find(".dropdown-menu"+desc);if(!$items.length){return}var index=$items.index(e.target);if(e.which==38&&index>0){index--}if(e.which==40&&index<$items.length-1){index++}if(!~index){index=0}$items.eq(index).trigger("focus")};function Plugin(option){return this.each(function(){var $this=$(this);var data=$this.data("bs.dropdown");if(!data){$this.data("bs.dropdown",(data=new Dropdown(this)))}if(typeof option=="string"){data[option].call($this)}})}var old=$.fn.dropdown;$.fn.dropdown=Plugin;$.fn.dropdown.Constructor=Dropdown;$.fn.dropdown.noConflict=function(){$.fn.dropdown=old;return this};$(document).on("click.bs.dropdown.data-api",clearMenus).on("click.bs.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.bs.dropdown.data-api",toggle,Dropdown.prototype.toggle).on("keydown.bs.dropdown.data-api",toggle,Dropdown.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",Dropdown.prototype.keydown)}(jQuery);

 /*!
 ========== modal 模态框 ==========
 */
 +function($){var Modal=function(element,options){this.options=options;this.$body=$(document.body);this.$element=$(element);this.$dialog=this.$element.find(".modal-dialog");this.$backdrop=null;this.isShown=null;this.originalBodyPad=null;this.scrollbarWidth=0;this.ignoreBackdropClick=false;if(this.options.remote){this.$element.find(".modal-content").load(this.options.remote,$.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))}};Modal.VERSION="3.3.6";Modal.TRANSITION_DURATION=300;Modal.BACKDROP_TRANSITION_DURATION=150;Modal.DEFAULTS={backdrop:true,keyboard:true,show:true};Modal.prototype.toggle=function(_relatedTarget){return this.isShown?this.hide():this.show(_relatedTarget)};Modal.prototype.show=function(_relatedTarget){var that=this;var e=$.Event("show.bs.modal",{relatedTarget:_relatedTarget});this.$element.trigger(e);if(this.isShown||e.isDefaultPrevented()){return}this.isShown=true;this.checkScrollbar();this.setScrollbar();this.$body.addClass("modal-open");this.escape();this.resize();this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',$.proxy(this.hide,this));this.$dialog.on("mousedown.dismiss.bs.modal",function(){that.$element.one("mouseup.dismiss.bs.modal",function(e){if($(e.target).is(that.$element)){that.ignoreBackdropClick=true}})});this.backdrop(function(){var transition=$.support.transition&&that.$element.hasClass("fade");if(!that.$element.parent().length){that.$element.appendTo(that.$body)}that.$element.show().scrollTop(0);that.adjustDialog();if(transition){that.$element[0].offsetWidth}that.$element.addClass("in");that.enforceFocus();var e=$.Event("shown.bs.modal",{relatedTarget:_relatedTarget});transition?that.$dialog.one("bsTransitionEnd",function(){that.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(Modal.TRANSITION_DURATION):that.$element.trigger("focus").trigger(e)})};Modal.prototype.hide=function(e){if(e){e.preventDefault()}e=$.Event("hide.bs.modal");this.$element.trigger(e);if(!this.isShown||e.isDefaultPrevented()){return}this.isShown=false;this.escape();this.resize();$(document).off("focusin.bs.modal");this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal");this.$dialog.off("mousedown.dismiss.bs.modal");$.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",$.proxy(this.hideModal,this)).emulateTransitionEnd(Modal.TRANSITION_DURATION):this.hideModal()};Modal.prototype.enforceFocus=function(){$(document).off("focusin.bs.modal").on("focusin.bs.modal",$.proxy(function(e){if(this.$element[0]!==e.target&&!this.$element.has(e.target).length){this.$element.trigger("focus")}},this))};Modal.prototype.escape=function(){if(this.isShown&&this.options.keyboard){this.$element.on("keydown.dismiss.bs.modal",$.proxy(function(e){e.which==27&&this.hide()},this))}else{if(!this.isShown){this.$element.off("keydown.dismiss.bs.modal")}}};Modal.prototype.resize=function(){if(this.isShown){$(window).on("resize.bs.modal",$.proxy(this.handleUpdate,this))}else{$(window).off("resize.bs.modal")}};Modal.prototype.hideModal=function(){var that=this;this.$element.hide();this.backdrop(function(){that.$body.removeClass("modal-open");that.resetAdjustments();that.resetScrollbar();that.$element.trigger("hidden.bs.modal")})};Modal.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove();this.$backdrop=null};Modal.prototype.backdrop=function(callback){var that=this;var animate=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var doAnimate=$.support.transition&&animate;this.$backdrop=$(document.createElement("div")).addClass("modal-backdrop "+animate).appendTo(this.$body);this.$element.on("click.dismiss.bs.modal",$.proxy(function(e){if(this.ignoreBackdropClick){this.ignoreBackdropClick=false;return}if(e.target!==e.currentTarget){return}this.options.backdrop=="static"?this.$element[0].focus():this.hide()},this));if(doAnimate){this.$backdrop[0].offsetWidth}this.$backdrop.addClass("in");if(!callback){return}doAnimate?this.$backdrop.one("bsTransitionEnd",callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callback()}else{if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var callbackRemove=function(){that.removeBackdrop();callback&&callback()};$.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION):callbackRemove()}else{if(callback){callback()}}}};Modal.prototype.handleUpdate=function(){this.adjustDialog()};Modal.prototype.adjustDialog=function(){var modalIsOverflowing=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&modalIsOverflowing?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!modalIsOverflowing?this.scrollbarWidth:""})};Modal.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})};Modal.prototype.checkScrollbar=function(){var fullWindowWidth=window.innerWidth;
if(!fullWindowWidth){var documentElementRect=document.documentElement.getBoundingClientRect();fullWindowWidth=documentElementRect.right-Math.abs(documentElementRect.left)}this.bodyIsOverflowing=document.body.clientWidth<fullWindowWidth;this.scrollbarWidth=this.measureScrollbar()};Modal.prototype.setScrollbar=function(){var bodyPad=parseInt((this.$body.css("padding-right")||0),10);this.originalBodyPad=document.body.style.paddingRight||"";if(this.bodyIsOverflowing){this.$body.css("padding-right",bodyPad+this.scrollbarWidth)}};Modal.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)};Modal.prototype.measureScrollbar=function(){var scrollDiv=document.createElement("div");scrollDiv.className="modal-scrollbar-measure";this.$body.append(scrollDiv);var scrollbarWidth=scrollDiv.offsetWidth-scrollDiv.clientWidth;this.$body[0].removeChild(scrollDiv);return scrollbarWidth};function Plugin(option,_relatedTarget){return this.each(function(){var $this=$(this);var data=$this.data("bs.modal");var options=$.extend({},Modal.DEFAULTS,$this.data(),typeof option=="object"&&option);if(!data){$this.data("bs.modal",(data=new Modal(this,options)))}if(typeof option=="string"){data[option](_relatedTarget)}else{if(options.show){data.show(_relatedTarget)}}})}var old=$.fn.modal;$.fn.modal=Plugin;$.fn.modal.Constructor=Modal;$.fn.modal.noConflict=function(){$.fn.modal=old;return this};$(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(e){var $this=$(this);var href=$this.attr("href");var $target=$($this.attr("data-target")||(href&&href.replace(/.*(?=#[^\s]+$)/,"")));var option=$target.data("bs.modal")?"toggle":$.extend({remote:!/#/.test(href)&&href},$target.data(),$this.data());if($this.is("a")){e.preventDefault()}$target.one("show.bs.modal",function(showEvent){if(showEvent.isDefaultPrevented()){return}$target.one("hidden.bs.modal",function(){$this.is(":visible")&&$this.trigger("focus")})});Plugin.call($target,option,this)})}(jQuery);
/*!
 ========== scrollspy 滚动监听 ==========
 */
+function($){function ScrollSpy(element,options){this.$body=$(document.body);this.$scrollElement=$(element).is(document.body)?$(window):$(element);this.options=$.extend({},ScrollSpy.DEFAULTS,options);this.selector=(this.options.target||"")+" .nav li > a";this.offsets=[];this.targets=[];this.activeTarget=null;this.scrollHeight=0;this.$scrollElement.on("scroll.bs.scrollspy",$.proxy(this.process,this));this.refresh();this.process()}ScrollSpy.VERSION="3.3.6";ScrollSpy.DEFAULTS={offset:10};ScrollSpy.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)};ScrollSpy.prototype.refresh=function(){var that=this;var offsetMethod="offset";var offsetBase=0;this.offsets=[];this.targets=[];this.scrollHeight=this.getScrollHeight();if(!$.isWindow(this.$scrollElement[0])){offsetMethod="position";offsetBase=this.$scrollElement.scrollTop()}this.$body.find(this.selector).map(function(){var $el=$(this);var href=$el.data("target")||$el.attr("href");var $href=/^#./.test(href)&&$(href);return($href&&$href.length&&$href.is(":visible")&&[[$href[offsetMethod]().top+offsetBase,href]])||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){that.offsets.push(this[0]);that.targets.push(this[1])})};ScrollSpy.prototype.process=function(){var scrollTop=this.$scrollElement.scrollTop()+this.options.offset;var scrollHeight=this.getScrollHeight();var maxScroll=this.options.offset+scrollHeight-this.$scrollElement.height();var offsets=this.offsets;var targets=this.targets;var activeTarget=this.activeTarget;var i;if(this.scrollHeight!=scrollHeight){this.refresh()}if(scrollTop>=maxScroll){return activeTarget!=(i=targets[targets.length-1])&&this.activate(i)}if(activeTarget&&scrollTop<offsets[0]){this.activeTarget=null;return this.clear()}for(i=offsets.length;i--;){activeTarget!=targets[i]&&scrollTop>=offsets[i]&&(offsets[i+1]===undefined||scrollTop<offsets[i+1])&&this.activate(targets[i])}};ScrollSpy.prototype.activate=function(target){this.activeTarget=target;this.clear();var selector=this.selector+'[data-target="'+target+'"],'+this.selector+'[href="'+target+'"]';var active=$(selector).parents("li").addClass("active");if(active.parent(".dropdown-menu").length){active=active.closest("li.dropdown").addClass("active")}active.trigger("activate.bs.scrollspy")};ScrollSpy.prototype.clear=function(){$(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};function Plugin(option){return this.each(function(){var $this=$(this);var data=$this.data("bs.scrollspy");var options=typeof option=="object"&&option;if(!data){$this.data("bs.scrollspy",(data=new ScrollSpy(this,options)))}if(typeof option=="string"){data[option]()}})}var old=$.fn.scrollspy;$.fn.scrollspy=Plugin;$.fn.scrollspy.Constructor=ScrollSpy;$.fn.scrollspy.noConflict=function(){$.fn.scrollspy=old;return this};$(window).on("load.bs.scrollspy.data-api",function(){$('[data-spy="scroll"]').each(function(){var $spy=$(this);
Plugin.call($spy,$spy.data())})})}(jQuery);
/*!
 ========== tab 标签页 ==========
 */
+function($){var Tab=function(element){this.element=$(element)};Tab.VERSION="3.3.6";Tab.TRANSITION_DURATION=150;Tab.prototype.show=function(){var $this=this.element;var $ul=$this.closest("ul:not(.dropdown-menu)");var selector=$this.data("target");if(!selector){selector=$this.attr("href");selector=selector&&selector.replace(/.*(?=#[^\s]*$)/,"")}if($this.parent("li").hasClass("active")){return}var $previous=$ul.find(".active:last a");var hideEvent=$.Event("hide.bs.tab",{relatedTarget:$this[0]});var showEvent=$.Event("show.bs.tab",{relatedTarget:$previous[0]});$previous.trigger(hideEvent);$this.trigger(showEvent);if(showEvent.isDefaultPrevented()||hideEvent.isDefaultPrevented()){return}var $target=$(selector);this.activate($this.closest("li"),$ul);this.activate($target,$target.parent(),function(){$previous.trigger({type:"hidden.bs.tab",relatedTarget:$this[0]});$this.trigger({type:"shown.bs.tab",relatedTarget:$previous[0]})})};Tab.prototype.activate=function(element,container,callback){var $active=container.find("> .active");var transition=callback&&$.support.transition&&($active.length&&$active.hasClass("fade")||!!container.find("> .fade").length);function next(){$active.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",false);element.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",true);if(transition){element[0].offsetWidth;element.addClass("in")}else{element.removeClass("fade")}if(element.parent(".dropdown-menu").length){element.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",true)}callback&&callback()}$active.length&&transition?$active.one("bsTransitionEnd",next).emulateTransitionEnd(Tab.TRANSITION_DURATION):next();$active.removeClass("in")};function Plugin(option){return this.each(function(){var $this=$(this);var data=$this.data("bs.tab");if(!data){$this.data("bs.tab",(data=new Tab(this)))}if(typeof option=="string"){data[option]()}})}var old=$.fn.tab;$.fn.tab=Plugin;$.fn.tab.Constructor=Tab;$.fn.tab.noConflict=function(){$.fn.tab=old;return this};var clickHandler=function(e){e.preventDefault();Plugin.call($(this),"show")};$(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',clickHandler).on("click.bs.tab.data-api",'[data-toggle="pill"]',clickHandler)}(jQuery);
/*!
 ========== carousel 轮播 ==========
 */
+function($){var Carousel=function(element,options){this.$element=$(element);this.$indicators=this.$element.find(".carousel-indicators");this.options=options;this.paused=null;this.sliding=null;this.interval=null;this.$active=null;this.$items=null;this.options.keyboard&&this.$element.on("keydown.bs.carousel",$.proxy(this.keydown,this));this.options.pause=="hover"&&!("ontouchstart" in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",$.proxy(this.pause,this)).on("mouseleave.bs.carousel",$.proxy(this.cycle,this))};Carousel.VERSION="3.3.6";Carousel.TRANSITION_DURATION=600;Carousel.DEFAULTS={interval:5000,pause:"hover",wrap:true,keyboard:true};Carousel.prototype.keydown=function(e){if(/input|textarea/i.test(e.target.tagName)){return}switch(e.which){case 37:this.prev();break;case 39:this.next();break;default:return}e.preventDefault()};Carousel.prototype.cycle=function(e){e||(this.paused=false);this.interval&&clearInterval(this.interval);this.options.interval&&!this.paused&&(this.interval=setInterval($.proxy(this.next,this),this.options.interval));return this};Carousel.prototype.getItemIndex=function(item){this.$items=item.parent().children(".item");return this.$items.index(item||this.$active)};Carousel.prototype.getItemForDirection=function(direction,active){var activeIndex=this.getItemIndex(active);var willWrap=(direction=="prev"&&activeIndex===0)||(direction=="next"&&activeIndex==(this.$items.length-1));if(willWrap&&!this.options.wrap){return active}var delta=direction=="prev"?-1:1;var itemIndex=(activeIndex+delta)%this.$items.length;return this.$items.eq(itemIndex)};Carousel.prototype.to=function(pos){var that=this;var activeIndex=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(pos>(this.$items.length-1)||pos<0){return}if(this.sliding){return this.$element.one("slid.bs.carousel",function(){that.to(pos)})}if(activeIndex==pos){return this.pause().cycle()}return this.slide(pos>activeIndex?"next":"prev",this.$items.eq(pos))};Carousel.prototype.pause=function(e){e||(this.paused=true);if(this.$element.find(".next, .prev").length&&$.support.transition){this.$element.trigger($.support.transition.end);this.cycle(true)}this.interval=clearInterval(this.interval);return this};Carousel.prototype.next=function(){if(this.sliding){return}return this.slide("next")};Carousel.prototype.prev=function(){if(this.sliding){return}return this.slide("prev")};Carousel.prototype.slide=function(type,next){var $active=this.$element.find(".item.active");var $next=next||this.getItemForDirection(type,$active);var isCycling=this.interval;var direction=type=="next"?"left":"right";var that=this;if($next.hasClass("active")){return(this.sliding=false)}var relatedTarget=$next[0];var slideEvent=$.Event("slide.bs.carousel",{relatedTarget:relatedTarget,direction:direction});this.$element.trigger(slideEvent);if(slideEvent.isDefaultPrevented()){return}this.sliding=true;isCycling&&this.pause();if(this.$indicators.length){this.$indicators.find(".active").removeClass("active");var $nextIndicator=$(this.$indicators.children()[this.getItemIndex($next)]);$nextIndicator&&$nextIndicator.addClass("active")}var slidEvent=$.Event("slid.bs.carousel",{relatedTarget:relatedTarget,direction:direction});if($.support.transition&&this.$element.hasClass("carousel")){$next.addClass(type);$next[0].offsetWidth;$active.addClass(direction);$next.addClass(direction);$active.one("bsTransitionEnd",function(){$next.removeClass([type,direction].join(" ")).addClass("active");$active.removeClass(["active",direction].join(" "));that.sliding=false;setTimeout(function(){that.$element.trigger(slidEvent)},0)}).emulateTransitionEnd(Carousel.TRANSITION_DURATION)}else{$active.removeClass("active");$next.addClass("active");this.sliding=false;this.$element.trigger(slidEvent)}isCycling&&this.cycle();return this};function Plugin(option){return this.each(function(){var $this=$(this);var data=$this.data("bs.carousel");var options=$.extend({},Carousel.DEFAULTS,$this.data(),typeof option=="object"&&option);var action=typeof option=="string"?option:options.slide;if(!data){$this.data("bs.carousel",(data=new Carousel(this,options)))}if(typeof option=="number"){data.to(option)}else{if(action){data[action]()}else{if(options.interval){data.pause().cycle()}}}})}var old=$.fn.carousel;$.fn.carousel=Plugin;$.fn.carousel.Constructor=Carousel;$.fn.carousel.noConflict=function(){$.fn.carousel=old;return this};var clickHandler=function(e){var href;var $this=$(this);var $target=$($this.attr("data-target")||(href=$this.attr("href"))&&href.replace(/.*(?=#[^\s]+$)/,""));if(!$target.hasClass("carousel")){return}var options=$.extend({},$target.data(),$this.data());var slideIndex=$this.attr("data-slide-to");if(slideIndex){options.interval=false}Plugin.call($target,options);if(slideIndex){$target.data("bs.carousel").to(slideIndex)}e.preventDefault()};$(document).on("click.bs.carousel.data-api","[data-slide]",clickHandler).on("click.bs.carousel.data-api","[data-slide-to]",clickHandler);
$(window).on("load",function(){$('[data-ride="carousel"]').each(function(){var $carousel=$(this);Plugin.call($carousel,$carousel.data())})})}(jQuery);var carousels=$(".carousel");carousels.each(function(){var $obj=$(this);var $inner=$obj.find(".carousel-inner");var id="uuid"+new Date().getTime();$obj.addClass(id);if($obj.data("shift")===1){var items=$obj.find('.item > [class*="col-"]'),visibleCnt=$obj.find('.item:first [class*="col-"]').length,wrapper="";var rule_base=".carousel."+id+" .carousel-inner > .item",styles=$("<style></style>"),rules=[];rules[0]=rule_base+".next {left: "+(100/visibleCnt)+"%; transform: none;}";rules[1]=rule_base+".active {left: 0;}";rules[2]=rule_base+".active.left {left: -"+(100/visibleCnt)+"%; transform: none;}";rules[3]=rule_base+".next.left {left: 0;}";rules[4]=rule_base+".active.right {left: "+(100/visibleCnt)+"%; transform: none;}";rules[5]=rule_base+".prev.right {left: 0;}";rules[6]=rule_base+".prev {left: -"+(100/visibleCnt)+"%; transform: none;}";for(var i=0;i<rules.length;i++){styles.append(rules[i])}$obj.prepend(styles);for(var i=0;i<$(items).length;i++){var $item=$(items[i]);var parent=$item.parent();if(parent.hasClass("item")){if(!wrapper.length){wrapper=parent.clone().removeClass("active").html("")}$item.unwrap()}var itemGroup=[$item];for(var x=1;x<visibleCnt;x++){var a=i+x;var next=$(items[a]);if(!next.length){next=$(items[(a-$(items).length)])}itemGroup[x]=next.clone()}var newSet=wrapper.clone().html(itemGroup);if(i==0){newSet.addClass("active")}newSet.appendTo($inner)}}});
/*!
 ========== transition 过渡效果 ==========
 */
+function($){function transitionEnd(){var el=document.createElement("bootstrap");var transEndEventNames={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var name in transEndEventNames){if(el.style[name]!==undefined){return{end:transEndEventNames[name]}}}return false}$.fn.emulateTransitionEnd=function(duration){var called=false;var $el=this;$(this).one("bsTransitionEnd",function(){called=true});var callback=function(){if(!called){$($el).trigger($.support.transition.end)}};setTimeout(callback,duration);return this};$(function(){$.support.transition=transitionEnd();if(!$.support.transition){return}$.event.special.bsTransitionEnd={bindType:$.support.transition.end,delegateType:$.support.transition.end,handle:function(e){if($(e.target).is(this)){return e.handleObj.handler.apply(this,arguments)}}}})}(jQuery);
  /*!
 ========== ready-默认执行 ==========
 */
  $(document).ready(function() {
    //修复页面截断问题
    $('body').css("min-width",$(".container").outerWidth());
    // ie9
	if(/msie 9.0/.test(window.navigator.userAgent.toLowerCase())){
		$("html").addClass("ie9");
	}
    // IE8升级提示,浏览器媒体响应
     if (!$.support.leadingWhitespace) {
         $('html').addClass('ie8');
         responsive();
         if (navigator.userAgent.indexOf("HTBrowser") < 0) {
             iealert();
         }
         $(window).resize(function() {
             responsive();
         });
     }
     // placeholder兼容
     if (!('placeholder' in document.createElement('input'))) {
         $("input").placeholder({
            placeholderColor: "#999"
         });
         $("textarea").placeholder({
            placeholderColor: "#999"
         });
     }
     // 导航二级菜单
     jQuery(".nav").slide({
        type: "menu",
        titCell: ".nav-item",
        targetCell: ".dropdown-menu",
        effect: "slideDown",
        delayTime: 300,
        triggerTime: 0,
        returnDefault: false
     });
 });


 //判断是否存在flash插件
 var userAgent = navigator.userAgent;
 var isChrome = userAgent.indexOf("Chrome") > -1 && userAgent.indexOf("Safari") > -1 && userAgent.indexOf("OPR/") == -1 && userAgent.indexOf("Edge") == -1; //判断Chrome浏览器
 var myFlash = (function(){
     if(typeof window.ActiveXObject != "undefined"){
         return new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
     }else{
         return navigator.plugins['Shockwave Flash'];
     }
 })();
 if(myFlash){
     $(".header-tip").hide();
 }else{
     $(".header-tip").show();
     if(!isChrome){
         $(".header-tip .other-chr").hide();
         $(".header-tip .dow").width(150);
     }
 };