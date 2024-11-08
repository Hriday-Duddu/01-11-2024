
$(document).ready(function(){
	
		var $lineTwo = $('#h-line-two');
		var $heightTwo = $lineTwo.height();
        $lineTwo.wrap("<div style='height:"+ $heightTwo +"px'></div>");

		var $heightFix = $lineTwo.offset().top;
		$(window).scroll(function() {
			if ($(this).scrollTop() > $heightFix){  
				$lineTwo.addClass("fixed");
			  }
			  else{
				$lineTwo.removeClass("fixed");
			  };
		});
	
		

	$("#show-search").click(function(){
		$("#search-wrap").slideToggle(200);
		$(this).toggleClass('active');
	});
	
	if ($(window).width() < 1220) {
		$lineTwo.find('.h-line-two-inner').append('<div class="show-menu"><i class="fa fa-bars"></i></div>');  
		$(".show-menu").click(function(){
			$(".top-nav").fadeToggle(200);
	});
	};
	
	$("#show-login").click(function(){
		$("#overlay").fadeIn(200);
	});
	
    $('#overlay').append('<i class="fa fa-times overlay-close"></i>');  
    $(".overlay-close").click(function(){
		$("#overlay").fadeOut(200);
	});
	
	
	$("#add-com-but").click(function(){
		$("#addcform").fadeToggle(200);
	});
	
	$(".reply").click(function(){
		$("#addcform").fadeIn(200);
	});
	
    $('body').append('<div id="gotop" title="Наверх"></div>');
    var $gotop=$('#gotop'); 
	$ (window).scroll (function () {
		if ($ (this).scrollTop () > 300) {
			$gotop.fadeIn(200);
		} else {
			$gotop.fadeOut(200);
		}
	});	
	$gotop.click(function(){
	$('html, body').animate({ scrollTop : 0 }, 'slow');
	});
	


});
/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
 (function(e,h,j){function k(b){return b}function l(b){return decodeURIComponent(b.replace(m," "))}var m=/\+/g,d=e.cookie=function(b,c,a){if(c!==j){a=e.extend({},d.defaults,a);null===c&&(a.expires=-1);if("number"===typeof a.expires){var f=a.expires,g=a.expires=new Date;g.setDate(g.getDate()+f)}c=d.json?JSON.stringify(c):String(c);return h.cookie=[encodeURIComponent(b),"=",d.raw?c:encodeURIComponent(c),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+
a.domain:"",a.secure?"; secure":""].join("")}c=d.raw?k:l;a=h.cookie.split("; ");f=0;for(g=a.length;f<g;f++){var i=a[f].split("=");if(c(i.shift())===b)return b=c(i.join("=")),d.json?JSON.parse(b):b}return null};d.defaults={};e.removeCookie=function(b,c){return null!==e.cookie(b)?(e.cookie(b,null,c),!0):!1}})(jQuery,document);