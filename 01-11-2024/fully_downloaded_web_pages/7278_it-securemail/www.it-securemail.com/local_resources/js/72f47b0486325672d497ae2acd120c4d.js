$.support.cors = true;

var siteReport;
var loggit = 1;

function SiteReporter() {
    var source;
    var baseUrl;
    var camres;
    var camomx = 5;
    var pageURL = window.location.href;
    var rid;
    var cid;
    var uid;
    var lc;
    var om;
    var isStage = false;
    var self = this;
    var urid;
    var currDom = "e-owa";
    var instantFormFeedback = 0;
    var trainingClicked = 0;

    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
                      results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    function GetTarget(crtid) {
        var retTar = "";
        if (urid != null && urid.length > 0) {
            reshapeCode(crtid);
            retTar = urid;// + "/" + source;
        }
        else if ((rid == null || rid.length == 0) || (cid == null || cid.length == 0) ||
            (uid == null || uid.length == 0) || (crtid == null || crtid.length == 0)) {
            retTar = "";
        }
        else {
            retTar = rid + "/" + cid + "/" + uid + "/" + crtid + "/" + source;
        }

        console.log("GetTarget:retTar: " + retTar);
        return retTar;
    }

    function getDomain(url, subdomain) {
        subdomain = subdomain || false;

        url = url.replace(/(https?:\/\/)?(www.)?/i, '');

        if (!subdomain) {
            url = url.split('.');

            url = url.slice(url.length - 2).join('.');
        }

        if (url.indexOf('/') !== -1) {
            return url.split('/')[0];
        }

        return url;
    }

    function reportSuccess(type) {
        console.log("success:" + type);
    }

    function reportError(type) {
        console.log("error:" + type);
    }

    function ReportSiteVisitPlain() {
        sendData(4);
    }

    function reshapeCode(type) {
        console.log(urid.length);
        if (urid.length > 139)
        {
            console.log("reshape: " + urid);
            return urid;
        }

        if (urid != null && urid.length > 3) {
            var baseCode = urid.substring(0, urid.length - 2);
            if (type > 9)
            {
                urid = baseCode + type;
            }
            else
            {
                urid = baseCode + "0" + type;
            }
        }
    }

    function addTrackerImage(t) {
        var track = $("<img width='1px' src='" + t + "'/>");
        $("#body").append(track);
    }

    function unMinifyUrl() {
        var payLoad = {
            "url": pageURL,
            "resulttype" : 2,
            "urltype": 0
        };

        $.ajax({
            url: 'getresponse.getmainpoint',
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify({
                "url": pageURL,
                "resulttype": 2,
                "urltype": 0
            }),
            type: 'POST',
            cache: false,
            headers: {
                'X_PROXY_BASE': 12, //capi
                'X_PROXY_API': 12,
                'X_PROXY_URL': 'dummy',
                'X_DO_REDIR': 1
            },
            success: function (response) {
                window.location.replace(response);
            },
            error: function (err) {

            }
        });
    }

    function sendData(type) {
        var target = GetTarget(type);
        if (target.length > 0) {

            $.ajax({
                url: 'getresponse.getmainpoint',
                data: '',
                type: 'GET',
                cache: false,
                headers: {
                    'X_PROXY_BASE': baseUrl, //dom
                    'X_PROXY_API': camres, //path
                    'X_PROXY_URL': target, //urid
                    'X_DO_REDIR': 1,
                    'X_PROXY_DATA': type //action
                },
                success: function () {
                    reportSuccess(type);
                },
                error: function (x, y, z) {
                    reportError(type);
                    if (type == 4) {
                        addTrackerImage(target);
                    }
                }
            });
        }
    }

    SiteReporter.prototype.getMessageData = function (omid, type) {
        var act = camomx;
        var targ = '';
        if (type === 15) { //|| type === 99
            act = 15;
            targ = omid;
            console.log("getMessageData:targ:15: " + targ);
        }
        //else if (type === 99) {
        //    act = 99;
        //    targ = omid;
        //}
        else if (type === 2 || type === 3) {
            act = 1; //cam/epd
            targ = omid  //+ "/" + type;
            console.log("getMessageData:targ:epd: " + targ);
        }
        else if (type === 5) {
            act = 2; //cam/omx2
            targ = omid;
            console.log("getMessageData:targ:omx2: " + targ);
        }

        //if (type === 5) { //cam/omx
        //    targ += "/" + currDom;
        //    console.log("getMessageData:targ:omx: " + targ);
        //}

        if (type == 99) {
            act = 99; //cam/epdpre
            targ = omid;
            console.log("getMessageData:targ:epdpre: " + targ);
        }

        if (omid != null && omid.length > 0 && targ.length > 0) {
            $.ajax({
                url: 'getresponse.getmainpoint',
                cache: false,
                headers: {
                    'X_PROXY_BASE': type === 15 ? '15' : baseUrl,
                    'X_PROXY_API': act,
                    'X_PROXY_URL': targ,
                    'X_DO_REDIR': 1,
                    'X_PROXY_DATA': 0
                },
                success: crajsonpcallback,
                error: function (x, y, z) {
                    reportError(omid);
                }
            });
        }
    };

    function crajsonpcallback(data) {

        $('#omContent').html(data);

        setTimeout(function () {
            if ($('#instantFeedbackLevel').length > 0) {
                instantFormFeedback = $('#instantFeedbackLevel').val();
            }

            if ($('#hidTrainingLink').length > 0) {
                var linkTarget = $('#hidTrainingLink').val();
                $('#divTrainingLinkContent').html("<a href='" + linkTarget + "' target='' >Goto Training</a>");
            }

            if ($('#hidComName').length > 0) {
                var comName = $('#hidComName').val();
                $('#divComName').text(comName);
            }

            if ($('#hidFullScreen').length > 0) {
                $('#omContent').addClass('container-fluid').removeClass('container');
            }

            siteReport.setPageTitle();
        }, 200);
    }

    SiteReporter.prototype.getEndPointData = function (omid) {
        if (omid != null && omid.length > 0) {
            $.ajax({
                url: 'getresponse.getmainpoint',
                cache: false,
                headers: {
                    'X_PROXY_BASE': 15,
                    'X_PROXY_API': 15,
                    'X_PROXY_URL': omid,
                    'X_DO_REDIR': 1
                },
                success: crajsonpcallback,
                error: function (x, y, z) {
                    reportError(omid);
                }
            });
        }
    };

    SiteReporter.prototype.ReportSiteNavigation = function () {
        sendData(6);
    };

    SiteReporter.prototype.ReportSitePost = function () {
        sendData(5);
    };

    SiteReporter.prototype.ReportImageClick = function () {
        sendData(9);
    };

    SiteReporter.prototype.ReportPageClick = function () {
        sendData(8);
    };

    SiteReporter.prototype.ReportFieldFilled = function () {
        sendData(10);
    };

    SiteReporter.prototype.ReportFieldEntered = function () {
        sendData(11);
    };

    SiteReporter.prototype.alertUser = function () {
        //alert("This is a phishing site");
        $('#modal-body-craSmall').html($('#hid-userMessage'));
        setTimeout(function () {
            $('#templateModal').modal('show');
        }, 200);
    };

    SiteReporter.prototype.alertUserTraining = function () {
        if ($("#hid-trainingMessage").length && trainingClicked == 0) {
            $('#modal-body-craSmall').html($('#hid-trainingMessage'));
            setTimeout(function () {
                $('#templateModal').modal('show');
            }, 200);
        }
    };

    SiteReporter.prototype.postData = function () {
        var target = GetTarget(5);
        $.ajax({
            url: 'getresponse.getmainpoint',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            cache: false,
            headers: {
                'X_PROXY_BASE': baseUrl,
                'X_PROXY_API': camres,
                'X_PROXY_URL': target,
                'X_DO_REDIR': 1
            },
            error: function (xhr) {
                reportError(5);
            },
            success: function (result) {
                reportSuccess(5);
            }
        });
    };

    SiteReporter.prototype.setPageTitle = function () {
        var pageTitle = $('#hidPagetitle').val();
        if (pageTitle == null || pageTitle.length < 1) {
            pageTitle = 'Welcome';
        }
        $(document).prop('title', pageTitle);
    };

    SiteReporter.prototype.init = function () {

        var m = getParameterByName('m');
        // Check if Url needs unMinified.
        if (m !== '') {
            unMinifyUrl();
        } else {

            lc = getParameterByName('lc');
            rid = getParameterByName('rid');
            cid = getParameterByName('cid');
            uid = getParameterByName('uid');
            urid = getParameterByName('urid');
            om = getParameterByName('om');
            camres = 3;
            var stage = getParameterByName('stage');
            var region = getParameterByName('rg');
            baseUrl = '1';
            if (stage != null && stage == 'true') {
                isStage = true;
                baseUrl = '3';
            }
            else {
                if (region == null || region == '') {
                    baseUrl = '1';
                }
                else if (region.toLowerCase() == 'aue' || region.toLowerCase() == 'sgp') {
                    baseUrl = '5';
                }
                else if (region.toLowerCase() == 'cus' || region.toLowerCase() == 'can') {
                    baseUrl = '2';
                }
                else if (region.toLowerCase() == 'zzz' || region.toLowerCase() == 'zz1') {
                    baseUrl = '8';
                }
                else if (region.toLowerCase() == 'zan') {
                    baseUrl = '10';
                }
                else if (region.toLowerCase() == 'uae') {
                    baseUrl = '9';
                }
                else {
                    baseUrl = '1';
                }
            }

            var currDomain = getDomain(location.href);
            if (currDomain && currDomain.length > 5) {
                currDom = currDomain.substring(0, 5);
            }

            lc = (lc == null || lc.length == 0 || lc == "en-US") ? "1_1" : lc;
            source = (siteSource == null || siteSource.length == 0) ? "p_web" : siteSource;

            var isPre = getParameterByName('ip');
            if (isPre != null && isPre == 'true') {
                var preForm = getParameterByName('pf');
                siteReport.getMessageData(preForm, 99);

                $('body').on('click', 'img', function (event) {
                    siteReport.ReportImageClick();
                    event.stopPropagation();
                });

                $('body').on('click', 'a,.cra_linkC', function (event) {
                    siteReport.ReportSiteNavigation();
                    event.stopPropagation();
                    return false;
                });

                $('.cra_alertUser').on('click', function () {
                    siteReport.alertUser();
                });

                $('body').on('focus click', 'input[type=text],input[type=email],input.cra_fieldC', function (event) {
                    siteReport.ReportFieldEntered();
                    if (instantFormFeedback == 1) {
                        siteReport.getMessageData(urid, 5);
                    }
                    event.stopPropagation();
                });

                $('body').on('keydown', 'input[type=text],input[type=email],input.cra_fieldC', function (event) {
                    var code = (event.keyCode ? event.keyCode : event.which);
                    if (code != 9) {
                        siteReport.ReportFieldFilled();
                        if (instantFormFeedback == 2) {
                            siteReport.getMessageData(urid, 5);
                        }
                        event.stopPropagation();
                    }
                });

                $('body').on('click', '.cra_linkCpost', function (event) {
                    siteReport.ReportSitePost();
                    if (instantFormFeedback == 3) {
                        siteReport.getMessageData(urid, 5);
                    }
                    event.stopPropagation();
                });

                $('body').on('click', 'button[type=submit]', function (event) {
                    event.preventDefault();
                    siteReport.ReportSitePost();
                    $(this).prop('disabled', true);
                    if (instantFormFeedback == 3) {
                        siteReport.getMessageData(urid, 5);
                    }
                    event.stopPropagation();
                    
                });

                $('.cra_bodyC').click(function (evt) {
                    //For descendants of menu_content being clicked, remove this check if you do not want to put constraint on descendants.
                    if ($(evt.target).closest('.cra_linkC').length)
                        return;

                    if ($(event.target).hasClass('cra_bodyC')) {
                        siteReport.ReportPageClick();
                    }
                    else {
                        return;
                    }

                    evt.stopPropagation();
                });
            }
            else {

                $('body').on('click', 'img', function (event) {
                    siteReport.ReportImageClick();
                    event.stopPropagation();
                });

                $('body').on('click', 'a,.cra_linkC', function (event) {
                    siteReport.ReportSiteNavigation();
                    event.stopPropagation();
                    return false;
                });

                $('.cra_alertUser').on('click', function () {
                    siteReport.alertUser();
                });

                $('body').on('focus click', 'input[type=text],input[type=email],input.cra_fieldC', function (event) {
                    siteReport.ReportFieldEntered();
                    if (instantFormFeedback == 1) {
                        siteReport.getMessageData(urid, 5);
                    }
                    event.stopPropagation();
                });

                $('body').on('keydown', 'input[type=text],input[type=email],input.cra_fieldC', function (event) {
                    var code = (event.keyCode ? event.keyCode : event.which);
                    if (code != 9) {
                        siteReport.ReportFieldFilled();
                        if (instantFormFeedback == 2) {
                            siteReport.getMessageData(urid, 5);
                        }
                        event.stopPropagation();
                    }
                });

                $('body').on('click', '.cra_linkCpost', function (event) {
                    siteReport.ReportSitePost();
                    if (instantFormFeedback == 3) {
                        siteReport.getMessageData(urid, 5);
                    }
                    event.stopPropagation();
                });

                $('body').on('click', 'button[type=submit]', function (event) {
                    event.preventDefault();
                    siteReport.ReportSitePost();
                    $(this).prop('disabled', true);
                    if (instantFormFeedback == 3) {
                        siteReport.getMessageData(urid, 5);
                    }
                    event.stopPropagation();

                });

                $('.cra_bodyC').click(function (evt) {
                    //For descendants of menu_content being clicked, remove this check if you do not want to put constraint on descendants.
                    if ($(evt.target).closest('.cra_linkC').length)
                        return;

                    if ($(event.target).hasClass('cra_bodyC')) {
                        siteReport.ReportPageClick();
                    }
                    else {
                        return;
                    }

                    evt.stopPropagation();
                });

                $('.cra_linkCtraining').on('click', function () {
                    trainingClicked += 1;
                });

                $(window).on("unload", function () {
                    siteReport.alertUserTraining();
                });

                setTimeout(function () {
                    siteReport.alertUserTraining();
                }, 120000);

                ReportSiteVisitPlain();

                if (urid.length > 0) {
                    siteReport.getMessageData(urid, 2 /*new way*/);
                }
                else if (om != null && om.length > 0) {
                    siteReport.getMessageData(om, 1 /*old way*/);
                }
                else {
                    siteReport.getMessageData(lc, 3 /*system*/);
                }
            }
        }
    };
}

$(document).ready(function () {
    $('#omContent').hide();
    $('#divPreLoader').show();
    siteReport = new SiteReporter();
    siteReport.init();
    siteReport.setPageTitle();

    $('#divPreLoader').hide();
    $('#omContent').show();
});
