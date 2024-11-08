document.addEventListener('DOMContentLoaded', function () {
    var cookieValue = getCookie('app-download-ad');
    if (cookieValue === 'hide') {
      document.querySelector('.app-download-ad').style.display = 'none';
    }
    document.querySelector('.app-download-ad-close').addEventListener('click', function () {
      document.querySelector('.app-download-ad').style.display = 'none';
      setCookie('app-download-ad', 'hide', 3); 
    });
  });
  
 // 设置cookie
function setCookie(name, value, minutes) {
    var expires = '';
    if (minutes) {
      var date = new Date();
      date.setTime(date.getTime() + (minutes * 60 * 1000)); // 将分钟转换为毫秒
      expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + value + expires + '; path=/';
  }
  
  // 读取cookie
  function getCookie(name) {
    var nameEQ = name + '=';
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) === 0) {
        return cookie.substring(nameEQ.length, cookie.length);
      }
    }
    return null;
  }
  
  // 删除cookie
  function deleteCookie(name) {
    setCookie(name, '', -1);
  }