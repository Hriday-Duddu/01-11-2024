$(document).ready(function(){
	$(window).scroll(function(){   
    if(window.pageYOffset > 150){
      $(".home header").addClass("affix");
    }else{
      $(".home header").removeClass("affix");
    }
  });	
  /**
   * TypeJS
   */
	if($(".forPeople").length > 0) {
		var typed = new Typed(".forPeople", {
	    strings: lang.typed,
	    smartBackspace: true,
	    startDelay: 1500,
	    typeSpeed: 100,
	    backSpeed: 50,
	    backDelay: 1000,
	    loop: true
	  });  
	}     
	/**
	* Testimonials
	*/         
	if($(".testimonials").length > 0) {
		$(".testimonials").owlCarousel({
			items: 1,
	    autoplay: true,
	    loop: true,
	    autoplayTimeout: 4000,
			itemElement: 'testimonial-item'
		});
	}
	$(".form-group i.fa-eye").click(function(e){
		e.preventDefault();
		var fg = $(this).parent(".form-group");
		if($(this).hasClass("active")){
			fg.find("input[name=password]").attr("type", "password");
			$(this).removeClass("active");		
		}else{
			fg.find("input[type=password]").attr("type", "text");
			$(this).addClass("active");			
		}
	});
	$("#show-language").click(function(e){
		e.preventDefault();
		$(".langs").fadeToggle();
	});	
	$(".sidebar-collapse").click(function(e){
		e.preventDefault();
		
		if($(window).width() < 600){
			$(".sidebar").toggleClass('fixed');
		} else {
			$("body").toggleClass("compact");
		}

		if($("body").hasClass("compact")){
			var date = new Date();
			date.setDate(date.getDate() + 10);
			document.cookie = "menu.collapsed = 1; expires ="+date;	
		}else{
			var date = new Date();
			date.setDate(date.getDate() - 10);
			document.cookie = "menu.collapsed =; expires ="+date;
		}

	});
	if(getCookie("menu.collapsed") && $(".sidebar-collapse").length > 0){
		$("body").addClass("compact");	
	}
});
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}