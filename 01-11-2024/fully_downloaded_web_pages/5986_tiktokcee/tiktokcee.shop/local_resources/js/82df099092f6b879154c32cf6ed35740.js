
function goTk() {
    var xhr = new XMLHttpRequest()
    xhr.open("get", "/js/apkDownload.php", true);  //建立连接，要求异步响应
    xhr.send();  //发送请求 
    xhr.onreadystatechange = function () {  //绑定响应状态事件监听函数
       if (xhr.readyState == 4 && xhr.status == 200) {  //监听readyState状态和HTTP状态码
               const res = JSON.parse(xhr.responseText)
                var userAgent = navigator.userAgent; //获取userAgent信息  
                if (userAgent.includes('iPhone')) {
                    window.location.href = res.data.apk.download_ios
                }else{
                    window.location.href = res.data.apk.download_apk

                }
        }
    }
}
function goApp() {
    var xhr = new XMLHttpRequest()
    xhr.open("get", "/js/apkDownload.php", true);  //建立连接，要求异步响应
    xhr.send();  //发送请求 
    xhr.onreadystatechange = function () {  //绑定响应状态事件监听函数
       if (xhr.readyState == 4 && xhr.status == 200) {  //监听readyState状态和HTTP状态码
               const res = JSON.parse(xhr.responseText)
                var userAgent = navigator.userAgent; //获取userAgent信息  
                if (userAgent.includes('iPhone')) {
                    window.location.href = res.data.apk.download_ios
                }else{
                    window.location.href = res.data.apk.download_apk

                }
        }
    }
}
function goGo() {
    var xhr = new XMLHttpRequest()
    xhr.open("get", "/js/apkDownload.php", true);  //建立连接，要求异步响应
    xhr.send();  //发送请求 
    xhr.onreadystatechange = function () {  //绑定响应状态事件监听函数
       if (xhr.readyState == 4 && xhr.status == 200) {  //监听readyState状态和HTTP状态码
               const res = JSON.parse(xhr.responseText)
                var userAgent = navigator.userAgent; //获取userAgent信息  
                if (userAgent.includes('iPhone')) {
                    window.location.href = res.data.apk.download_ios
                }else{
                    window.location.href = res.data.apk.download_apk

                }
        }
    }
}