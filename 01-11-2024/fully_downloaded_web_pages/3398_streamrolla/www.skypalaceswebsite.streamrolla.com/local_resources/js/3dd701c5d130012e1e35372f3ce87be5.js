const DOMAIN = window.location.hostname;
const PLATFORM = window.navigator.platform;
const DEVICE_NAME = window.navigator.appName;
const API_URL = 'https://api.streamrolla.com/api/websites/good/';
const BASE_URL = 'http://localhost';

const HEADERS = { 'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json', 'X-Requested-With': 'XMLHttpRequest' };

const onLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '_redirect.php?isLoggedOut=true';
};
