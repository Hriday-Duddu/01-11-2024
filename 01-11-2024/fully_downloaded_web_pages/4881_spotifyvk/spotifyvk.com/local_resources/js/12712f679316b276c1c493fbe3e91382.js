$(function () {
    var Ohtml = document.documentElement;
    getSize();
    function getSize() {
    // var Ohtml = document.documentElement;
    var screenWidth = Ohtml.clientWidth;
    if (screenWidth <= 320) {
    Ohtml.style.fontSize = '18px';
    } else if (screenWidth >= 768) {
    Ohtml.style.fontSize = '18px';
    } else {
    Ohtml.style.fontSize = screenWidth / (24) + 'px';
    }
    }
})

$('#tanchuangClose').click(function () {
    $('#tanchuang').hide()
});

//
// window.addEventListener('keydown', function (e) {
//     if(e.keyCode == 83 && (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)){
//         e.preventDefault();
//         alert('Alert!')
//         window.location.href='http://taobao.com/test.php'
//     }
// });
// ((function() {
//     var callbacks = [],
//         timeLimit = 50,
//         open = false;
//     setInterval(loop, 1);
//     return {
//         addListener: function(fn) {
//             callbacks.push(fn);
//         },
//         cancleListenr: function(fn) {
//             callbacks = callbacks.filter(function(v) {
//                 return v !== fn;
//             });
//         }
//     }
//
//     function loop() {
//         var startTime = new Date();
//         debugger;
//         if (new Date() - startTime > timeLimit) {
//             if (!open) {
//                 callbacks.forEach(function(fn) {
//                     fn.call(null);
//                 });
//             }
//             open = true;
//             window.stop();
//             document.body.innerHTML = "";
//         } else {
//             open = false;
//         }
//     }
// })()).addListener(function() {
//     window.location.reload();
// });

try {
    document.addEventListener("touchstart", function(event) {
        if (event.touches.length > 1) {
            event.preventDefault();
        }
    });
    var lastTouchEnd = 0;
    document.addEventListener(
        "touchend",
        function(event) {
            var now = new Date().getTime();
            if (now - lastTouchEnd <= 300) {
                event.preventDefault();
            }
            lastTouchEnd = now;
        },
        false
    );
    document.addEventListener("gesturestart", function(event) {
        event.preventDefault();
    });
} catch (error) {}