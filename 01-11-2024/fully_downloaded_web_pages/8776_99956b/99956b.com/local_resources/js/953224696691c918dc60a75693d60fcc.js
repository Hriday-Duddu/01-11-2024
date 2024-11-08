<!DOCTYPE html>
<html style="height: 100%;">

<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <title>Welcome</title>
  <script>
    function isMobile() {
      return !!(navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
        ))
    }
    if (isMobile() !== false) {
      if (location.href.indexOf('#') > -1) {
        location.href = location.origin + '/m/#/home?' + (location.href.split('#')[1].split('?')[1] || '')
      } else {
        location.href = location.origin + '/m/#/home' + location.search
      }
    }
    (function () {
      var url = window.location.href,
        obj = {},
        keyvalue = [],
        key = '',
        value = '',
        parseString = url.substring(url.indexOf('?') + 1, url.length).split('&')
      for (var i in parseString) {
        keyvalue = parseString[i].split('=')
        key = keyvalue[0]
        value = keyvalue[1] && keyvalue[1].includes('#/') ? keyvalue[1].split('#/')[0] : keyvalue[1]
        obj[key] = value
      }

      if (obj.agent) {
        localStorage.setItem('agent', obj.agent)
      }
      if(obj.register){
         if(!localStorage.token){
           localStorage.setItem('register', obj.register)
         }
      }
    })()
    window.vis = true
    window.onblur = function () {
      window.vis = false
    }
    window.onfocus = function () {
      window.vis = true
      if (typeof window.balanceTask === 'function') {
        window.balanceTask()
      }
    }
    if(!isMobile()) {
      function loadJS( url, callback ) {
        var script = document.createElement('script'),
        fn = callback || function(){};
        script.type = 'text/javascript';

        //IE
        if(script.readyState){
          script.onreadystatechange = function(){
            if( script.readyState == 'loaded' || script.readyState == 'complete' ){
                script.onreadystatechange = null;
                fn()
            }
          }
        }else{
          // 其他浏览器
          script.onload = function(){
            fn()
          }
        }
        script.src = url;
        document.getElementsByTagName('head')[0].appendChild(script);
      }

      let loadTable = ['/static/public/js/stomp.js', '/static/public/js/qrcode.js'
      , `https://cstaticdun.126.net/load.min.js?t=1714128644030`,
      `https://acstatic-dun.126.net/tool.min.js?t=1714128644030`
      ]
      // 用法
      loadTable.forEach( (url) => {
        loadJS(url,function(e){
          // console.log("🚀 ~ file: index.html ~ line 85 ~ loadJS ~ url loaded success", url)
        })
      })

    }

  </script>
  <link rel="shortcut icon" href="/static/betnew/img/favicon.ico" type="image/x-icon">
  <!-- <script src="/static/public/js/stomp.js"></script> -->
  <!-- <script src="/static/public/js/qrcode.js"></script> -->
 
  <!-- <script src="https://cstaticdun.126.net/load.min.js?t=201903281201"></script> -->
  <!-- <script type="text/javascript" src="https://acstatic-dun.126.net/tool.min.js?t=201903281201"></script> -->
<link href="/static-betnew/style.css" rel="stylesheet"><link href="/static-betnew/css/pages/betnew/index.563d5734fd1dd3f2490af99586903a6a.css" rel="stylesheet"></head>

<body style="height: 100%;">
  <div id="Appbet365">

  </div>
<script type="text/javascript" src="/static-betnew/js/manifest.bdb0a33895cc410bb989.js?v=2024-4-26-18:50:00"></script><script type="text/javascript" src="/static-betnew/js/vendor.41d52746c9426303692a.js?v=2024-4-26-18:50:00"></script><script type="text/javascript" src="/static-betnew/js/pages/betnew/index.88350d1b84e0c8091e86.js?v=2024-4-26-18:50:00"></script></body>

</html>
