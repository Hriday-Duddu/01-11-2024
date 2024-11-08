// JavaScript Document

$(document).ready(function(){
	
	
	$(".show").hover(function(e){	   
	    var w = $(this).width();  
        var h = $(this).height();  
        var x=(e.pageX-this.offsetLeft-(w/2))*(w>h?(h/w):1);  
        var y=(e.pageY-this.offsetTop-(h/2))*(h>w?(w/h):1);  
        var dirNum=Math.round((((Math.atan2(y,x)*(180/Math.PI))+180)/90)+3)%4;
		 
		if(dirNum==0){			 
			 $(this).find("div").css({"top":"-100%","left":"0"});			 
		 }else if(dirNum==1){			 
			  $(this).find("div").css({"top":"0","left":"100%"});			 
		 }else if(dirNum==2){			 
			  $(this).find("div").css({"top":"100%","left":"0"});			 
		 }else if(dirNum==3){			 
			 $(this).find("div").css({"top":"0","left":"-100%"});	
		 }		 
		 $(this).find("div").animate({ "top": "0","left":"0"} ,300);	 
			 
		 
     });
	
	
	
	 //服务项目
	   $(".S_service_div .on").hover(function(e){		 
	    var w = $(this).width();  
        var h = $(this).height();  
        var x=(e.pageX-this.offsetLeft-(w/2))*(w>h?(h/w):1);  
        var y=(e.pageY-this.offsetTop-(h/2))*(h>w?(w/h):1);  
        var dirNum=Math.round((((Math.atan2(y,x)*(180/Math.PI))+180)/90)+3)%4;
		 
		 if($(this).find(".show").length==0) {		 
		 if(dirNum==0){			 
			 $(this).find("dd").css({"top":"-100%","left":"0"});			 
		 }else if(dirNum==1){			 
			  $(this).find("dd").css({"top":"0","left":"100%"});			 
		 }else if(dirNum==2){			 
			  $(this).find("dd").css({"top":"100%","left":"0"});			 
		 }else if(dirNum==3){			 
			 $(this).find("dd").css({"top":"0","left":"-100%"});	
		 }		 
		 $(this).find("dd").animate({ "top": "0","left":"0"} ,300);		 
		 
		 }
		 });
		 
	   
	
     //新闻切换
	 $(".N_Menu ul li").mousemove(function(){
	     var index=$(".N_Menu ul li").index(this);
		 $(".N_Menu ul li a").removeClass("on");
		 $(".N_Menu ul li a").eq(index).addClass("on");	
		 $(".N_content").hide();
		 $(".N_content").eq(index).show(); 
	 })
	 
	 //案例切换
	 $(".S_case_u li").mousemove(function(){
		  var index=$(".S_case_u li").index(this);
		 $(".S_case_u li a").removeClass("on");
		 $(".S_case_u li a").eq(index).addClass("on");	
		 $(".S_case_c").hide();
		 $(".S_case_c").eq(index).show(); 		 
	 })
	 
	 //服务切换
	 	$(".S_kefu ul li").hover(function(){		
		   $(this).find("span").fadeIn(600);		
	    },function(){
		  $(this).find("span").fadeOut(600);		
        });
	   
        $(window).scroll(function () {
           if ($(window).scrollTop() > 950) {             
			 $(".box").addClass("active");
           }         
        });
		
		
		//微信功能
		  //关闭弹出框
		$(".weixin_div_close").click(function(){
		    $(".weixin_div").fadeOut(500);	
		})
		 //全局变量
		 var index=0;
		 var l=$(".list li").length;
		 
		  //显示弹出框
		$(".list li").click(function(){
			 index=$(".list li").index(this);			 
			 $(".weixin_div").hide();
			 $(".weixin_div").eq(index).show();
			 if(index==0){
				$(".weixin_div_l_l").eq(0).hide();   
			 }
			 var z=index+1;			 
			 if(z==l){
				$(".weixin_div_l_r").eq(index).hide();   
			 }
			 		  	
		})  		  
		  
		  //上一个
		  $(".weixin_div_l_l").click(function(){
			 //alert(index);
			  var i=index-1;
			  index=i;			
			  if(index==-1){
				// alert("已是第一个了;")
				$(".weixin_div_l_l").eq(index).hide();				
				index=0;
			  }else{
				 $(".weixin_div").hide();
				 $(".weixin_div").eq(i).show(); 
			  }
		   })		  
		  
		  //下一个
		  $(".weixin_div_l_r").click(function(){
			   var i=index+1;
			   index=i
			  // alert(i);
			  if(i==l){
				// alert("已是最后一个了;");
				$(".weixin_div_l_r").eq(l).hide();
				index=i;
			  }else{
				 $(".weixin_div").hide();
				 $(".weixin_div").eq(i).show(); 
			  }
			  
		   })
		  
		
	 //首页右侧滑步点	 
	 $(".s_fd li").click(function(){
		var z=$(".s_fd li").index(this);
		var hh;
		if(z==0)
		{ hh=650;}
		else if(z==1)
		{ hh=1250;}
		else if(z==2)
		{ hh=1900;}	
		else if(z==3)
		{ hh=2550;}
		else if(z==4)
		{ hh=3300;}
		 $('body,html').animate({ scrollTop: hh }, 700); 		 
	  })
	  
	$(window).scroll(function(){
		if($(window).scrollTop() < 500){
			$(".s_fd li").removeClass("on");
			$(".s_fd li a").removeClass("on");				
		}
		if($(window).scrollTop() >= 500){
			$(".s_fd li").removeClass("on");
			$(".s_fd li a").removeClass("on");
			$(".s_fd li").eq(0).addClass("on");
			$(".s_fd li a").eq(0).addClass("on");
		}
		if($(window).scrollTop() >= 1000){
			$(".s_fd li").removeClass("on");
			$(".s_fd li a").removeClass("on");
			$(".s_fd li").eq(1).addClass("on");
			$(".s_fd li a").eq(1).addClass("on");
		}
		if($(window).scrollTop() >= 1500){
			$(".s_fd li").removeClass("on");
			$(".s_fd li a").removeClass("on");
			$(".s_fd li").eq(2).addClass("on");
			$(".s_fd li a").eq(2).addClass("on");
		}
		if($(window).scrollTop() >= 2200){
			$(".s_fd li").removeClass("on");
			$(".s_fd li a").removeClass("on");
			$(".s_fd li").eq(3).addClass("on");
			$(".s_fd li a").eq(3).addClass("on");
		}
	   if($(window).scrollTop() >= 3000){
			$(".s_fd li").removeClass("on");
			$(".s_fd li a").removeClass("on");
			$(".s_fd li").eq(4).addClass("on");
			$(".s_fd li a").eq(4).addClass("on");
		}
		
		  if($(window).scrollTop() >= 3500){
			$(".s_fd li").removeClass("on");
			$(".s_fd li a").removeClass("on");
			
		}
		
		
	});
	
	 
	 //返回顶部
	 $(".dw_top").click(function(){
		 $('body,html').animate({ scrollTop: 0 }, 700); 
	 })
	 
	 //首页案例下一栏目
	 $(".s_case_n_xj").click(function(){
         $('body,html').animate({ scrollTop: 3300 }, 700); 
	 })
	 
	 
	 
	 
	 //搜索栏目切换
	 $(".soso_div ul li").mousemove(function(){
	     var q=$(".soso_div ul li").index(this);
		 $(".soso_div ul li").removeClass("on");
		 $(".soso_div ul li").eq(q).addClass("on");
		 $(".soso_content").hide();
		 $(".soso_content").eq(q).show();	 
	 })



    //成功案例效果

	 $(window).scroll(function(){
	     if ($(window).scrollTop() >= 165) {
	         $(".bgcaseinfo").css("position", "fixed");
	         $(".bgcaseinfo").css("top", "0");
	     } else {
	         $(".bgcaseinfo").css("position", "");
	         $(".bgcaseinfo").css("top", "0");
	     }
	 })


	 
    // 首页动画
	 $(window).scroll(function () {


         //新闻
	     if ($(window).scrollTop() >= $(".N_content").offset().top-500) {
	         
	         if ($(".N_content").attr("data-flag") != "1") {
	             $(".N_content").attr("data-flag", "1");
	             $(".N_content_l").animate({ "margin-left": "0px" }, 500);
	             $(".N_content_r").animate({ "margin-right": "0px" }, 500);	            
	         }
	     }

	     //案例
	     if ($(window).scrollTop() >= $(".S_case_c").offset().top - 1000) {

	         if ($(".S_case_c").attr("data-flag") != "1") {
	             $(".S_case_c").attr("data-flag", "1");
	             $(".S_case_c").animate({ "margin-top": "0px" }, 500);
	             
	         }
	     }


	 });






})