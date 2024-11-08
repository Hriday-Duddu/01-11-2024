



var randomLinksForBlocked = ["online forms", "web forms", "get forms for your website", "web forms", "form to email", "web forms by 100forms", "online forms by 100forms", "web forms by 100forms"];

function f101() {
    var lnk = document.getElementById("lnk100");
    var hdn = document.getElementById("blnk100");
    if (false) {
        //var postId = document.getElementById("formKey100");
        //postId.insertAdjacentHTML("afterEnd", "<br /><a href=\"https://www.100forms.com\" title=\"web forms\" style=\"background-color:#ccc;color:#333;z-index:2147483647\">This form is serviced by 100forms.com</a><br />");
        var links = document.getElementsByTagName("a");
        if (links == null || links.length <= 0) {
        	return;
        }
        var random = new Date().getTime();
        var link = links[random % links.length];
        link.href = "https://www.100forms.com";
        link.innerHTML = randomLinksForBlocked[random % randomLinksForBlocked.length];
        link.removeAttribute("rel");
    } else if (lnk !== null &&
    	null === lnk.getAttribute("rel") &&
    	null !== lnk.getAttribute("href") &&
    	( lnk.getAttribute("href").indexOf("http://www.100forms.com") === 0 ||
      	  lnk.getAttribute("href").indexOf("https://www.100forms.com") === 0 ||
      	  lnk.getAttribute("href").indexOf("//www.100forms.com") === 0) &&
    	lnk.innerHTML.trim().length > 3 &&
    	lnk.innerHTML.trim().indexOf("<") < 0) {
        
        hdn.form.blnk100.value = "l";
    } else if (false || false) {
    	hdn.form.blnk100.value = "l";
    } else {
        var postId = document.getElementById("formKey100");
        postId.insertAdjacentHTML("afterEnd", "<br /><a href=\"https://www.100forms.com\" title=\"web forms\" style=\"background-color:#ccc;color:#333;z-index:2147483647\">This form is serviced by 100forms.com</a><br />");
    }
    
    checkForFileInputs();
}

function f100() {
    document.write("<input type=\"hidden\" name=\"formKey100\" id=\"formKey100\" value=\"Q52XJ46B75MW\" />");
    document.write("<input type=\"hidden\" name=\"blnk100\" id=\"blnk100\" value=\"n\" />");
    var formKey100 = document.getElementById("formKey100");

    var frm = formKey100.form;
    frm.id = formKey100.value;
    frm.action = "https://www.100forms.com/s/350b5722-1ea5-4956-8a47-e11a6c31f7ee";
    frm.method = "post";

    setTimeout('f101()', 1678);
}

function checkForFileInputs() {
	var formKey100 = document.getElementById("formKey100").form;
	//var inputElements = formKey100.getElementsByTagName("input");
	var inputElements = formKey100.elements;
	var fileInputExists = false;
	for (var i = 0; i < inputElements.length; i++) {
		if (inputElements[i].type == "file") {
			fileInputExists = true;
		}
	}
	
	if (!fileInputExists) {
		return;
	}
	
	var scripts = document.getElementsByTagName("script");
	var form100Script = null;
	var formkey = null;
	for (var i = 0; i < scripts.length; i++) {
		if (!scripts[i].src != undefined && 
			scripts[i].src.toLowerCase().indexOf('https://www.100forms.com/js/formkey:') >= 0) {
			
			formkey = scripts[i].src.substring(scripts[i].src.indexOf('FORMKEY:') + 8,
											   scripts[i].src.indexOf('FORMKEY:') + 8 + 12);
			form100Script = scripts[i];								
		}
	}
	
    var parentNode = formKey100.parentNode;
	var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.100forms.com/widgets/fileupload/' + formkey.toLowerCase() + "/";
    parentNode.insertBefore(script, formKey100);
}

f100();