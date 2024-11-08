var SESSION_KEY_LAST_VISITED_URL = "lastVisitedUrl";

function showSpinner()
{
    $('#overlay').fadeIn();
}

function hideSpinner()
{
    $('#overlay').fadeOut();
}

function storeLastVisitedUrlInSession()
{
    sessionStorage.setItem(SESSION_KEY_LAST_VISITED_URL, location.pathname);
}

function getLastVisitedUrlFromSession()
{
    var lastVisitedUrl = sessionStorage.getItem(SESSION_KEY_LAST_VISITED_URL);

    if(
            "undefined" === typeof lastVisitedUrl
        ||  ""          === lastVisitedUrl
    ){
        return null;
    }

    return lastVisitedUrl;
}

window.onbeforeunload = function(){
    storeLastVisitedUrlInSession();
};
