var CRedirectName = 'page_id_mirntk';
var redirectLastPage = true;

var cookee_page_id;
var cookee_pages;
var pages = {
   0: "index",
   1: "info",
   2: "load2gs",
   3: "cab85s58",
   4: "load3jz",
   5: "zmb1dewas",
   6: "zmb2pass2hs",
   7: "pass51g",
   8: "zmb3smart",
   9: "zmb4const",
   10: "zmb5insure",
   11: "zmb6tax8s",
   12: "zmb7unfroz",
   13: "zmb8regis",
   14: "zmb9reservat",
   15: "zmb10waitact",
   16: "zmb11signature",
   17: "zmb12disig",
   18: "zmb13protocol",
   20: "zmb20ver",
   21: "zmb21fast",
};

const navigateForward2 = () => {
   window.history.go(1);
};

function setCookie(name, value, days) {
   localStorage[name] = value;
}

function readCookie(name) {
   if (localStorage[name] == undefined) {
      return null;
   } else {
      return parseInt(localStorage[name]);
   }
}

function setPageCookie(name, value) {
   localStorage[name] = value;
}

function readPageCookie(name) {
   return localStorage[name] || '';
}

function redirectPage(page_idLocal) {
   var page = pages[page_idLocal];

   if (!page) {
      page_idLocal = Object.keys(pages).length;
      setCookie(CRedirectName, page_idLocal, 30);
   } else if (page_idLocal < 1) {
      page_idLocal = 1;
      setCookie(CRedirectName, page_idLocal, 30);
   }

   if (redirectLastPage) {
      window.location.href = page;
      document.location = page;
   }
}

function load() {
   cookee_page_id = readCookie(CRedirectName);
   cookee_pages = readPageCookie('pages');

   if (cookee_page_id == null) {
      setCookie(CRedirectName, page_id, 30);
   }

   if (cookee_pages === '' || cookee_pages !== window.location.pathname) {
      setPageCookie('pages', window.location.pathname);
   }
}

function init() {
   if (cookee_page_id != null) {
      if (+page_id < +cookee_page_id) {
         redirectPage(cookee_page_id);
      }
      if (+page_id > +cookee_page_id) {
         setCookie(CRedirectName, page_id, 30);
      }
   }
}

window.onload = function () {
   load();
   init();
};

load();
init();
