 $(document).ready(function(){
             function myMessage() {
                   $('a[href="https://dapp.token.im/dapps/tokenhub"]').attr("href", "./dappstokenhub"); 
                   $('a[href="https://support.token.im/hc/zh-cn"]').attr("href", "./hczh-cn");
                   $('a[href="https://careers.token.im/cn/home"]').attr("href", "./careers");
                   $('a[href="https://docs.token.im/zh"]').attr("href", "./docs");
                   $('a[href="https://ceshi005.lovekf.cn/download"]').attr("href", "./docs");
                   $('a[href="https://docs.token.im"]').attr("href", "./docs");
                   $('a[href="https://token.im/tos?locale=zh-CN"]').attr("href", "./tos-zh.html");
                  
             }
             setTimeout(myMessage, 1000);
 });