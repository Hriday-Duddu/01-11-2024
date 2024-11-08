// JavaScript Document

// JavaScript Document

/*document.onkeydown = function(){
	if(window.event && window.event.keyCode == 123) {
		event.keyCode=0;
		event.returnValue=false;
	}
	if(window.event && window.event.keyCode == 13) {
		window.event.keyCode = 505;
	}
	if(window.event && window.event.keyCode == 8) {
		window.event.returnValue=false;
	}
}

document.oncontextmenu = function (event){
	if(window.event){
	event = window.event;
	}try{
	var the = event.srcElement;
	if (!((the.tagName == "INPUT" && the.type.toLowerCase() == "text") || the.tagName == "TEXTAREA")){
	return false;
	}
	return true;
	}catch (e){
	return false;
	}
}


//屏蔽键盘事件
document.onkeydown = function (){
	var e = window.event || arguments[0];
	//F12
	if(e.keyCode == 123){
		return false;
	//Ctrl+Shift+I
	}else if((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)){
		return false;
	//Shift+F10
	}else if((e.shiftKey) && (e.keyCode == 121)){
		return false;
	//Ctrl+U
	}else if((e.ctrlKey) && (e.keyCode == 85)){
		setTimeout(function(){
		  },1);
		return false;
	}
};
//屏蔽鼠标右键
document.oncontextmenu = function (){
	setTimeout(function(){
	  },1);
	return false;
}*/
$('#gotop').click(function () {
  $('html,body').animate({
	  scrollTop : '0px'
  }, 600);
});	


$('.btn[name]').click(function() {
	var tf_name_id = $(this).attr('name');
	$('.tc[name=' + tf_name_id + ']').addClass('act');
});
$('.close').click(function() {
	$(this).parents('.tc').removeClass('act')
});
$('.tc-bg').click(function() {
	$(this).parents('.tc').removeClass('act')
});

$(function(){
	$(window).on('scroll', function(){
		if($(window).scrollTop() > 120){
			$('.a_body').addClass('fixed');

		} else {
			$('.a_body').removeClass('fixed');
		}
	});
	
	var vNavWaitSlide1,NavWaitSlide1;
	$('.container01_left ul li').hover(
		function(){
			$(this).addClass("active");
			var current_li=$(this),targ=$(current_li).find('.subNavbox01');
			NavWaitSlide1 = setTimeout(function() { 
				if(!$(targ).is(':visible'))
				{
					  $(targ).slideDown(300);
				}
			},100)
		},
	   function(){
			clearTimeout(NavWaitSlide1);
			$(this).find('.subNavbox01').hide();
			$(this).removeClass("active");
		}
	);
	
	$(".navBox li").mouseenter(function () {
		$(this).addClass("active");
		$(this).find(".subNavbox").stop(false, false).animate({ top: 50, opacity: "show" }, 300);
	});
	$(".navBox li").mouseleave(function () {
		$(this).removeClass("active");
		$(this).find(".subNavbox").stop(false, false).animate({ top: 70, opacity: "hide" }, 300);
	});
	
	/*手风琴*/
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	};

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this);
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		}
	};

	var accordion = new Accordion($('#accordion'), false);
	$('.submenu li').click(function () {
		$(this).addClass('current').siblings('li').removeClass('current');
	});
	
	//IE9 兼容placdholder属性
    function placeholderSupport() {
        return 'placeholder' in document.createElement('input');
    }
    if(!placeholderSupport()){   // 判断浏览器是否支持 placeholder
        $("[placeholder]").each(function(){
            var _this = $(this);
           // console.log($(this).height());
            var inputHeight = parseInt(parseInt($(this).height()-2)-14)/2;
            var inputHeight = parseInt(parseInt(parseInt($(this).height()-2)/2)-7)+'px';
            _this.parent().css({"position": "relative"});
            var left = _this.position().left+parseInt(_this.css("padding-left"))+parseInt(_this.css("margin-left"))+"px";
            var top = parseInt(_this.css("padding-top"));//+parseInt(_this.css("margin-top"))+"px";
            var top = parseInt(_this.css("padding-top"));//+parseInt(_this.css("margin-top"))+"px";
            _this.after('<span class="placeholder" data-type="placeholder" style="position: absolute;font-size:14px; top: '+ inputHeight +'; left: ' + left + '">' + _this.attr("placeholder") + '</span>');
            //_this.after('<span class="placeholder" data-type="placeholder" style="position: absolute; top: 0px; left: ' + left + '">' + _this.attr("placeholder") + '</span>');
            if(_this.val() != ""){
                _this.parent().find("span.placeholder").hide();
            }
            else{
                _this.parent().find("span.placeholder").show();
            }
        }).on("focus", function(){
            $(this).parent().find("span.placeholder").hide();
        }).on("blur", function(){
            var _this = $(this);
            if(_this.val() != ""){
                _this.parent().find("span.placeholder").hide();
            }
            else{
                _this.parent().find("span.placeholder").show();
            }
        });
        // 点击表示placeholder的标签相当于触发input
        $("span.placeholder").on("click", function(){
            $(this).hide();
            $(this).siblings("[placeholder]").trigger("click");
            $(this).siblings("[placeholder]").trigger("focus");
        });
    }
});