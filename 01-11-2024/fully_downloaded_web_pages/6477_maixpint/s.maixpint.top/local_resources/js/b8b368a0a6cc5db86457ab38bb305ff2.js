console.log("\u9648\u658c\u535a\u5ba2\u7ad9\u000d\u000a\u0068\u0074\u0074\u0070\u003a\u002f\u002f\u0077\u0077\u0077\u002e\u0063\u0068\u0065\u006e\u0062\u0069\u006e\u002e\u006f\u0072\u0067\u002f\u000d\u000a\u000d\u000a\u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\uff01\u000d\u000a\u5546\u52a1\u5408\u4f5c\u0051\u0051\uff1a\u0034\u0039\u0035\u0036\u0031\u0030\u0036");
//导航固定
var topBegin=$(".daohang").offset().top;
$(window).scroll(function(){
	var win_top=$(this).scrollTop();
	var _top=$(".daohang").offset().top;
	if(win_top>=_top){$(".daohang").addClass("gdfixed")}
	if(win_top<topBegin){$(".daohang").removeClass("gdfixed")}
})
//导航显示与隐藏
function daohangAnNiu(){
	var divDisp=document.getElementById("daohangid").className;
	if(divDisp==""){document.getElementById("daohangid").className="daohanganniu";}
	else{document.getElementById("daohangid").className="";}
}
//搜索显示与隐藏
function souSuoAnNiu(){
	var divDisp=document.getElementById("sousuo").className;
	if(divDisp==""){document.getElementById("sousuo").className="sousuoxiaoguo";}
	else{document.getElementById("sousuo").className="";}
}
//导航ul显示隐藏
$(function(){
	$('.daohangi').click(function(){
		$(this).parent().children('.daohangdl').slideToggle().parent().siblings().children('.daohangdl').slideUp();
		$(this).toggleClass('daohangixg');
		$(this).parent().siblings().find('.daohangi').removeClass('daohangixg');
	});
});
//导航搜索栏A标签点击为submit效果
$(function(){$("#sousuoA").click(function(){$("#sousuoform").submit();});});
//返回顶部
function zhiding(min_height){
	$(".zhiding").click(function(){$('html,body').animate({scrollTop:0},700);});
	min_height=min_height?min_height:400;
	$(window).scroll(function(){
		var s=$(window).scrollTop();
		if(s>min_height){$(".zhiding").fadeIn(100);}
		else{$(".zhiding").fadeOut(200);}
	});
}
zhiding();
/*点击链接*/
function celanguanggao1(){window.open("https://www.aliyun.com/activity?userCode=bcwc8spy",'_blank');}
function zhengwenguanggao1(){window.open("https://promotion.aliyun.com/ntms/yunparter/invite.html?userCode=bcwc8spy",'_blank');}
/*禁止操作*/
// document.oncontextmenu=new Function("event.returnValue=false");
// document.onselectstart=new Function("event.returnValue=false");
// document.onkeydown=document.onkeyup=document.onkeypress=function(event){
// 	var e=event||window.event||arguments.callee.caller.arguments[0];
// 	if(e&&e.keyCode==123){e.returnValue=false;return(false);}
// }
