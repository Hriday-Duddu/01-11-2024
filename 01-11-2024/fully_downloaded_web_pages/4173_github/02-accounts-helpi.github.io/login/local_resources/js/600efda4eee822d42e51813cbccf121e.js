var digitalData = new Object();

var setDigitalDataForAdobe = function(pageName, additionalPageInfo, trackString){

    if (urlParams().error != null) {
        pageName = pageName + "|error|" + urlParams().error;
    }

    if (urlParams().failureCode != null) {
        pageName = pageName + "|failureCode|" + urlParams().failureCode;
    }

    var hierarchy = "myo2|accounts";
    digitalData.page = new Object();
    digitalData.page.pageInfo = new Object();
    digitalData.page.pageInfo.pageName = hierarchy+ "|" + pageName;
    digitalData.page.pageInfo.hierarchy = hierarchy;
    digitalData.page.pageInfo.channel = "myo2";

    if(additionalPageInfo !== undefined){
        for (var i = 0; i < additionalPageInfo.length; i++) {
            var additionalPageInfoItem = additionalPageInfo[i];
            for(var itemKey in additionalPageInfoItem) {
                digitalData.page.pageInfo[itemKey] = additionalPageInfoItem[itemKey];
            }
        }
    }
    //_satellite.track(trackString === undefined?'accounts':trackString);
};

