
(function(w) {
    
    function initBg() {
        
        if (window.isIOS() || window.isAnd() || window.isMobile()) {
           
           initpian();

        } else {
            
			inittupian();

        }
    }
    function initpian()
    {
        var video = document.getElementById('video_bg');
        var tu = document.getElementById('bgjpg');
		var vi = document.getElementById('video_source');
		var ss=sj();
        tu.style.backgroundImage="url(/images/bg.jpg) no-repeat fixed top";
        vi.src="";
        video.load();
        
		
		video.playbackRate = 1;
		//video.preload="auto";
		video.currentTime = 0;
		//document.getElementById('bgjpg').load()
        video.style.display = "none";
		//video.play();
		
	}

    function inittupian()
    {
        var video = document.getElementById('video_bg');
        var tu = document.getElementById('bgjpg');
		var vi = document.getElementById('video_source');
        tu.style.backgroundImage="url(/images/bg.jpg) no-repeat fixed top";
		vi.src="";
		video.load();
		//document.getElementById('bgjpg').load();
		
        video.style.display = "none";

    }
    

    
    function sj() 
    {
    var x = 4;
    var y = 1;
    var rand = parseInt(Math.random() * (x - y + 1) + y);
    rand=rand+"t.jpg";
    return rand;
    }
    
    function init() {
        initBg();
    }
    
    window.addEventListener("DOMContentLoaded", init, false);
    
})(window);


var agent = navigator.userAgent.toLowerCase();
window.isPc = function() {
    var result = agent.indexOf("Windows") > -1 ||agent.indexOf("windows") > -1;
    return result;
}

window.isIOS = function() {
    let result = !!agent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) || agent.indexOf("iphone") > -1 || agent.indexOf("ipad") > -1;
    return result;
}
window.isAnd = function() {
    var result = agent.indexOf("Android") > -1 || agent.indexOf("Adr") > -1 || agent.indexOf("android") > -1 || agent.indexOf("linux") > -1 || agent.indexOf("MIUI") > -1;
    return result;
}
window.isMobile = function() {
    if (document.documentElement.clientWidth < 738) {
        return true;
    }
    return false;
}



