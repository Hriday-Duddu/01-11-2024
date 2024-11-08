<!DOCTYPE html>
<html dir="ltr">
<head>
	<title>YOURLS &mdash; Your Own URL Shortener | https://go.andiim3.com/</title>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<meta name="generator" content="YOURLS 1.9.2" />
	<meta name="description" content="YOURLS &raquo; Your Own URL Shortener' | https://go.andiim3.com" />
	    <link rel="shortcut icon" href="https://go.andiim3.com/images/favicon.svg" />	<script src="https://go.andiim3.com/js/jquery-3.5.1.min.js?v=1.9.2" type="text/javascript"></script>
	<script src="https://go.andiim3.com/js/common.js?v=1.9.2" type="text/javascript"></script>
	<script src="https://go.andiim3.com/js/jquery.notifybar.js?v=1.9.2" type="text/javascript"></script>
	<link rel="stylesheet" href="https://go.andiim3.com/css/style.css?v=1.9.2" type="text/css" media="screen" />
				<link rel="stylesheet" href="https://go.andiim3.com/css/tablesorter.css?v=1.9.2" type="text/css" media="screen" />
		<script src="https://go.andiim3.com/js/jquery-3.tablesorter.min.js?v=1.9.2" type="text/javascript"></script>
		<script src="https://go.andiim3.com/js/tablesorte.js?v=1.9.2" type="text/javascript"></script>
				<script src="https://go.andiim3.com/js/insert.js?v=1.9.2" type="text/javascript"></script>
				<link rel="stylesheet" href="https://go.andiim3.com/css/share.css?v=1.9.2" type="text/css" media="screen" />
		<script src="https://go.andiim3.com/js/share.js?v=1.9.2" type="text/javascript"></script>
		<script src="https://go.andiim3.com/js/clipboard.min.js?v=1.9.2" type="text/javascript"></script>
				<link rel="stylesheet" href="https://go.andiim3.com/css/cal.css?v=1.9.2" type="text/css" media="screen" />
		
<script>
var l10n_cal_month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var l10n_cal_days = ["S","M","T","W","T","F","S"];
var l10n_cal_today = "Today";
var l10n_cal_close = "Close";
</script>
		<script src="https://go.andiim3.com/js/jquery.cal.js?v=1.9.2" type="text/javascript"></script>
			<script type="text/javascript">
	//<![CDATA[
		var ajaxurl  = 'https://go.andiim3.com/admin/admin-ajax.php';
	//]]>
	</script>
	<style type="text/css">
		body {background:#e3f3ff url(https://go.andiim3.com/user/plugins/random-bg/img/bg_fuzzy.png) repeat;}
	</style>
</head>
<body class="index desktop">
<div id="wrap">
	<h1>YOURLS - Your Own URL Shortener</h1>
<nav role="navigation"><ul id="admin_menu">
<li id="admin_menu_admin_link" class="admin_menu_toplevel"><a href="https://go.andiim3.com/admin/index.php" title="Go to the admin interface">Admin interface</a><li id="admin_menu_help_link"><a href="https://go.andiim3.com/readme.html">Help</a></li></ul></nav>
		<h2>Enter a new URL to shorten</h2>
		<form method="post" action="">
		<p><label>URL: <input type="text" class="text" name="url" value="http://" /></label></p>
		<p><label>Optional custom short URL: https://go.andiim3.com/<input type="text" class="text" name="keyword" /></label></p>
		<p><label>Optional title: <input type="text" class="text" name="title" /></label></p>
		<p><input type="submit" class="button primary" value="Shorten" /></p>
		</form>
<h2>Bookmarklets</h2>

<p>Bookmark these links:</p>

<p>

<a href="javascript:(function()%7Bvar%20d=document,w=window,enc=encodeURIComponent,e=w.getSelection,k=d.getSelection,x=d.selection,s=(e?e():(k)?k():(x?x.createRange().text:0)),s2=((s.toString()=='')?s:enc(s)),f='https://go.andiim3.com/sample-public-front-page.php',l=d.location,p='?url='+enc(l.href)+'&title='+enc(d.title)+'&text='+s2,u=f+p;try%7Bthrow('ozhismygod');%7Dcatch(z)%7Ba=function()%7Bif(!w.open(u))l.href=u;%7D;if(/Firefox/.test(navigator.userAgent))setTimeout(a,0);else%20a();%7Dvoid(0);%7D)()" class="bookmarklet">Default</a>

<a href="javascript:(function()%7Bvar%20d=document,w=window,enc=encodeURIComponent,e=w.getSelection,k=d.getSelection,x=d.selection,s=(e?e():(k)?k():(x?x.createRange().text:0)),s2=((s.toString()=='')?s:enc(s)),f='https://go.andiim3.com/sample-public-front-page.php',l=d.location,k=prompt(%22Custom%20URL%22),k2=(k?'&keyword='+k:%22%22),p='?url='+enc(l.href)+'&title='+enc(d.title)+'&text='+s2+k2,u=f+p;if(k!=null)%7Btry%7Bthrow('ozhismygod');%7Dcatch(z)%7Ba=function()%7Bif(!w.open(u))l.href=u;%7D;if(/Firefox/.test(navigator.userAgent))setTimeout(a,0);else%20a();%7Dvoid(0)%7D%7D)()" class="bookmarklet">Custom</a>

<a href="javascript:(function()%7Bvar%20d=document,s=d.createElement('script');window.yourls_callback=function(r)%7Bif(r.short_url)%7Bprompt(r.message,r.short_url);%7Delse%7Balert('An%20error%20occurred:%20'+r.message);%7D%7D;s.src='https://go.andiim3.com/sample-public-front-page.php?url='+encodeURIComponent(d.location.href)+'&jsonp=yourls';void(d.body.appendChild(s));%7D)();" class="bookmarklet">Popup</a>

<a href="javascript:(function()%7Bvar%20d=document,k=prompt('Custom%20URL'),s=d.createElement('script');if(k!=null){window.yourls_callback=function(r)%7Bif(r.short_url)%7Bprompt(r.message,r.short_url);%7Delse%7Balert('An%20error%20occurred:%20'+r.message);%7D%7D;s.src='https://go.andiim3.com/sample-public-front-page.php?url='+encodeURIComponent(d.location.href)+'&keyword='+k+'&jsonp=yourls';void(d.body.appendChild(s));%7D%7D)();" class="bookmarklet">Custom Popup</a>

</p>

<h2>Please note</h2>

<p>Be aware that a public interface <strong>will</strong> attract spammers. You are strongly advised to install anti spam plugins and any appropriate counter measure to deal with this issue.</p>

	</div>	<footer id="footer" role="contentinfo"><p>
		Powered by <a href="http://yourls.org/" title="YOURLS">YOURLS</a> v 1.9.2	</p></footer>
			<script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'8dbcacfeaf5fdeed',t:'MTczMDQ3MjQwMS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
	</html>
	