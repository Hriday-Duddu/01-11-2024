function closeDiv() {
    var div = document.getElementById("visibleDiv");
    div.style.display = "none";
}

// 设置目标日期
var countDownDate = new Date("Oct 22, 2024 23:59:59").getTime();

// 每秒更新倒计时
var x = setInterval(function() {
    // 获取今天的日期和时间
    var now = new Date().getTime();

    // 计算从现在到目标日期的时间差
    var distance = countDownDate - now;

    // 时间计算
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // 在id="countdown"的元素中显示结果
    document.getElementById("countdown").innerHTML = days + "天 " + hours + "小时 " +
        minutes + "分钟 " + seconds + "秒" + "<span class='countdown-message'>&nbsp;后到期</span>";

    // 如果倒计时结束，写一些文本
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "时间到!";
    }
}, 1000);