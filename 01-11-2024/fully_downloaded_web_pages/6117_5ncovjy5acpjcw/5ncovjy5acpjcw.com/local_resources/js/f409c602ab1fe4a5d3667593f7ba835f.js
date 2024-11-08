$(function() {
    const str = window.location.href;
    const idMatch = str.match(/\?id=(\d+)/);
    const id = idMatch ? parseInt(idMatch[1], 10) : 0;

    const obj_slides = [
        { id: 1, title: "BET365", url: "https://551001g.cc", src: "imgs/banner/banner.365.png" },
        { id: 2, title: "太阳城", url: "https://j399229.com", src: "imgs/banner/banner.tyc.png" },
        { id: 3, title: "新葡京", url: "https://g21717.com", src: "imgs/banner/banner.xpj.png" },
        { id: 4, title: "威尼斯人", url: "https://665331a.com", src: "imgs/banner/banner.wns.png" },
        { id: 5, title: "澳门银河", url: "https://789400.cc/", src: "imgs/banner/banner.yh.png" },
        { id: 6, title: "威廉希尔", url: "https://service.sdqhwtvbtwdf.com/C.ashx?btag=a_18017b_2484c_&affid=2017190&siteid=18017&adid=2484&c=", src: "imgs/banner/banner.wlxeozb.png" },
        { id: 7, title: "澳门永利", url: "https://c977114.com", src: "imgs/banner/banner.yl.png" },
        { id: 8, title: "韦德体育", url: "https://service.sdqhwtvbtwdf.com/C.ashx?btag=a_18017b_1722c_&affid=2017190&siteid=18017&adid=1722&c=", src: "imgs/banner/banner.wdozb.png" },
        { id: 9, title: "澳门金沙", url: "https://g21717.com", src: "imgs/banner/banner.js.png" },
        { id: 10, title: "澳门美高梅", url: "https://g21717.com", src: "imgs/banner/banner.mgm.png" },
        { id: 11, title: "皇冠体育", url: "https://g21717.com", src: "imgs/banner/banner.hg.png" },
        { id: 12, title: "开云体育", url: "http://kaiyunty583.net", src: "imgs/banner/banner.ky.png" },
        { id: 13, title: "Bwin亚洲", url: "https://i933005.com", src: "imgs/banner/banner.bwin.png" },
        { id: 14, title: "拼搏体育", url: "https://service.sdqhwtvbtwdf.com/C.ashx?btag=a_18017b_2464c_&affid=2017190&siteid=18017&adid=2464&c=", src: "imgs/banner/banner.pinbo.png" },
        { id: 15, title: "必威体育", url: "https://lucky298.com/vsglat", src: "imgs/banner/banner.bw.png" },
        { id: 16, title: "PG", url: "https://j399229.com", src: "imgs/banner/banner.pg.gif" }
    ];

    const slide = obj_slides.find(item => item.id === id);
    
    if (slide) {
        $('.h1').hide();
        $('.t1').append(`<a href="${slide.url}" target="_blank"><img style="max-width:90%" src="${slide.src}" /></a>`).show();
    }
});