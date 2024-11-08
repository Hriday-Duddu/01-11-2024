/**
 * содержит обязательные поля для отправки формы, где имя свойства - это имя свойства из интеграции, а значение имя поля в форме.
 */
const FIELDS = {
  name: "fname",
  last_name: "lname",
  phone: "fullphone",
  email: "email",
  phoneCountryCode: "phoneCountryCode",
  phoneCountry: "phoneCountry",
  geoCountry: "geoCountry",
  ip: "ip",
  query_str: "query_str",
  csrf: "csrf",
};

const ipInfoToken = "2298526cf2a8e2";
const ipInfoTokenReserve = "3369805cbe5614";

const fetchIpInfo = async (token) => {
  try {
    const res = await fetch(`https://ipinfo.io/json?token=${token}`);
    if (res.ok) {
      console.log("ipinfo ok");
      const data = await res.json();
      let countryCode = data?.country ? data.country : "ru";
      let ip = data?.ip ? data.ip : "8.8.8.8";

      document.querySelectorAll(".main_form").forEach((form) => {
        setGeoParams(form, ip, countryCode);
        itiInit(form, countryCode);
      });
    } else {
      throw new Error("Fetch failed");
    }
  } catch (error) {
    if (error.message.includes("Fetch failed")) {
      console.log("Rate limit exceeded, retrying with reserve token");
      await fetchIpInfo(ipInfoTokenReserve);
    } else {
      console.log("ipinfo not work");
      let countryCode = "ru";
      let ip = "8.8.8.8";

      document.querySelectorAll(".main_form").forEach((form) => {
        setGeoParams(form, ip, countryCode);
        itiInit(form, countryCode);
      });
    }
  }
};

const initialization = async function initTel() {
  await fetchIpInfo(ipInfoToken);
};

function itiInit(form, countryCode = "ru") {
  const inputPhone = form.querySelector('input[type="tel"]');
  const iti = intlTelInput(inputPhone, {
    initialCountry: countryCode,
    hiddenInput: "full_phone",
    autoHideDialCode: "true",
    autoPlaceholder: "aggressive",
    placeholderNumberType: "MOBILE",
    separateDialCode: "false",
    preferredCountries: [
      countryCode,
      "de",
      "gb",
      "se",
      "fi",
      "is",
      "no",
      "dk",
      "nl",
      "de",
      "ch",
      "at",
      "sg",
      "nz",
      "my",
      "ie",
      "kr",
      "gr",
      "ru",
    ],excludeCountries: ["ua"],
  });

  form.querySelector('input[name="phoneCountryCode"]').value =
    iti.getSelectedCountryData().dialCode;

  return inputPhone.addEventListener("countrychange", function () {
    form.querySelector('input[name="phoneCountryCode"]').value =
      iti.getSelectedCountryData().dialCode;
    form.querySelector('input[name="phoneCountry"]').value =
      iti.getSelectedCountryData().iso2;
  });
}
function setGeoParams(form, ip, countryCode) {
  form.querySelector('input[name="ip"]').value = ip;
  form.querySelector('input[name="geoCountry"]').value = countryCode;
  form.querySelector('input[name="phoneCountry"]').value = countryCode;
  form.querySelector('input[name="query_str"]').value = getQueryString();
}

/**
 *
 * @param {string} form
 * @param {object} fields
 * @returns object со значениями формы
 */
function getFormData(form, fields) {
  //const data = Object.create(null);
  const data = {};
  try {
    for (const [key, field] of Object.entries(fields)) {
      if (key === "phone") {
        data[key] =
          form.querySelector(`input[name="${fields.phoneCountryCode}"]`)
            ?.value +
          form.querySelector(`input[name="${fields.phone}"]`)?.value;
        continue;
      }

      if (form.querySelector(`input[name="${field}"]`)?.type === "checkbox") {
        data[key] = form.querySelector(`input[name="${field}"]`)?.checked;
        continue;
      }

      data[key] = form.querySelector(`input[name="${field}"]`)?.value;
    }
    return data;
  } catch (e) {
    console.log("Function getFormData:");
    console.log(
      "One or more element names from the form were not found in the object FIELDS"
    );
    console.error(e);
  }
}

async function sendData(formData) {
  const localUrl = "./zakaz.html";
  const result = {
    is_lead: false,
    link: "./zakaz.html",
  };

  const url = "./send.php";
  const data = JSON.stringify(formData);
  const errorMsg = {
    ru: "Ой, что-то пошло не так. Произошла непредвиденная ошибка.",
    en: "Oops, something went wrong. An unexpected error has occurred.",
  };
  let lang = Object.keys(errorMsg).includes(formData?.phoneCountry)
    ? formData.phoneCountry
    : "en";
  try {
    const response = await fetch(url, {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);
    if (response.ok) {
      const json = await response.json();
      if (json?.connection === "failed") {
        console.error("Connection failed!");
      } else if (json?.connection === "success") {
        if (json?.is_lead) {
          result["is_lead"] = true;
          //let link = localUrl;
          if (json?.autologin_link && json?.autologin_link !== "download.php") {
            result["link"] = json?.autologin_link;
          }

          // location.replace(link);
        } else {
          console.log("Invalid lead!");
        }
      } else {
        console.log("received a status other than success or failed");
      }
    } else {
      console.error("something wrong");
    }
  } catch (error) {
    console.error("something wrong");
    console.error(error);
  }
  console.log(result["is_lead"]);
  if (result["is_lead"]) {
    let pixel = getPixel();
    //console.log(pixel);
    // bge('event', 'ec_register');
    if (pixel) {
      console.log(2);
      //console.log(bge('event', 'ec_register'));
      bge("event", "ec_register");
    }
  }
  setTimeout(
    (res) => {
      location.replace(res["link"]);
    },
    2000,
    result
  );
}

function hideErrorMsg(form) {
  form
    .querySelectorAll(".error-border")
    .forEach((el) => el.classList.remove("error-border"));
  form.querySelectorAll("p.error-msg").forEach((el) => {
    el.innerHTML = "";
    el.classList.remove("error-msg");
  });
}

function showErrorMsg(form, errors, fields) {
  try {
    for (const [field, msg] of Object.entries(errors)) {
      const elP = form.querySelector(`p.error-${fields[field]}`);

      elP.classList.add("error-msg");
      elP.innerHTML = msg;
      form
        .querySelector(`input[name="${fields[field]}"]`)
        .classList.add("error-border");
    }
  } catch (e) {
    console.log("Function showErrorMsg: show err-msg");
    console.log(
      "One or more element names from the form were not found in the object FIELDS or in object responsible for validation rules"
    );
    console.error(e);
  }
}

/** Для модальных окон начало */
function showModal(errorMsg, lang = "en") {
  try {
    const modal = document.querySelector("#myModal");
    modal.querySelector(".modal-error").innerHTML = errorMsg[lang] ?? errorMsg;
    modal.style.display = "block";

    document.querySelectorAll(".main_form button").forEach((el) => {
      el.disabled = true;
    });

    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    };
  } catch (e) {
    console.log("Function showModal:");
    console.log("Not modal block in html");
    console.error(e);
  }
}

// document.querySelector("#myModal span.close").addEventListener("click", () => {
//   document.querySelector("#myModal").style.display = "none";
// });
/** Для модальных окон конец */

/* Обработчик формы/форм*/
function registration(validationFields = {}, validationRules = {}) {
  const forms = document.querySelectorAll(".main_form");
  forms.forEach((form) => {
    form.querySelector("button").addEventListener("click", (e) => {
      e.preventDefault();

      const data = getFormData(form, validationFields);
      console.log(data);

      hideErrorMsg(form);

      let er = isEmptyObject(validationRules)
        ? new Validate(data).run()
        : new Validate(data, validationRules).run();

      if (er.isValid) {
        preloaderShow();

        sendData(data);
        //setTimeout(console.log, 3000, data);
      } else {
        showErrorMsg(form, er.errors, validationFields);
      }
    });
  });
}

/* Вспомогательные функции */
function isObject(obj) {
  return typeof obj === "object" && obj !== null && obj.constructor === Object;
}

function isEmptyObject(obj) {
  return this.isObject(obj) && Object.keys(obj).length === 0;
}

/* Прелоадер */
function preloaderShow() {
  document.querySelectorAll(".main_form").forEach((el) => {
    el.querySelector("button").disabled = true;
    el.style.position = "relative";
    const preloader = document.createElement("div");
    preloader.classList.add("preloader");
    el.appendChild(preloader);
  });
}
function preloaderHide() {
  document.querySelectorAll(".main_form").forEach((el) => {
    el.querySelector("button").disabled = false;
    el.style.position = "relative";
    el.querySelector("div.preloader").remove();
    formsReset();
  });
}

function formsReset() {
  const forms = document.querySelectorAll("form");
  forms.forEach((element) => element.reset());
}

function getQueryString() {
  let params = new URL(document.location).searchParams;
  return params.toString();
}

function getPixel() {
  return new URL(document.location).searchParams.get("bpixel");
}
