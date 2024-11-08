window.addEventListener("DOMContentLoaded", () => {
  // fields

  const chatContentList1 = document.querySelector(".chat-content-list-1");
  const chatContentList2 = document.querySelector(".chat-content-list-2");
  const chatContentList3 = document.querySelector(".chat-content-list-3");
  const chatContentList4 = document.querySelector(".chat-content-list-4");
  let comment = document.querySelector(".comment");

  // define form inputs
  const userNameRow = document.querySelector(".user--name");
  const userEmailRow = document.querySelector(".user--email");
  const userPhoneRow = document.querySelector(".user--phone");
  const formButton = document.querySelector(".form--button");

  const errorItiMap = [
    "Invalid number",
    "Invalid country code",
    "Too short",
    "Too long",
    "Invalid number",
  ];

  const messageList = [
    "Добро пожаловать в Apple! Меня зовут Сири, я являюсь продуктом исскуственного интеллекта Apple и помогаю людям ознакомиться с возможностями которые представлены в нашей платформе для заработка на бирже акций и валют.",

    // quest
    "Вы узнали о нас в Фейсбук и перешли по рекомендации?",

    // name
    "Хорошо, со мной вы уже познакомились, как я могу обращаться к вам?",

    "Отлично, рад знакомству с Вами!",

    // quest
    "Продукт, который создал Тим Кук и Apple -  это не будущее, а уже настоящее. Это ваш финансовый помощник, который самостоятельно анализирует рынок акций, эффективно распределяет ваш капитал и заключает только прибыльные сделки, учитывая ваш желаемый заработок.",
    `<img src="${path}graph.gif" alt="График" />`,

    // quest
    "Какую сумму вы бы хотели зарабатывать? ",

    // quest
    "Был ли у вас опыт в инвестировании, покупке акций или торговле на биржевом рынке? ",

    // quest
    "Благодарю вас за ответ. Наша программа работает самостоятельно, вам нужно будет только включать и выключать ее. Подскажите как часто вы можете включать программу? ",

    // email
    "Так как компания “Apple” следует законодательству каждой страны, в которой работает, мы обязаны прислать вам квитанции о вашей прибыли, а также отчет о нашей с вами работе. Для этого прошу указать вашу электронную почту (Пример: ivan1987@gmail.com)",

    `Спасибо за ваши ответы! У меня для вас хорошая новость, доступ к платформе “Apple” доступен вам! Ориентировочный ежедневный доход - <b>500 евро</b>!`,

    // phone
    " Если вы готовы начать зарабатывать уже сегодня, напишите ваш номер телефона ниже, чтобы мы созвонились и активировали ваш личный кабинет.",

    "Ваш доход может быть увеличен, благодаря сотрудничеству с нашим специалистом по телефону. Как правило, у пользователей, кто сотрудничает со специалистом больше 1 раза прибыль увеличивается на 300-500 евро.",
    'Рады что вы присоединились! Нажмите на кнопку "Приступить" и регистрация будет завершена!',
  ];

  const userChoise = [];

  const questionList = [
    {
      item: [
        "Да, увидел(а) пост / рекламу",
        "Знакомые скинули ссылку",
        "Узнал(а) из другого источника",
      ],
    },
    {
      item: ["3000-5000 евро", "7000-10000 евро", "Более 10000 евро"],
    },
    {
      item: [
        "Да, я когда то пробовал(а)",
        "Нет, никогда с этим не сталкивался",
        "До сих пор этим занимаюсь",
      ],
    },
    {
      item: [
        "Каждый день",
        "Раз в пару дней",
        "Буду включать раз в неделю (суммы заработка будут чуть меньше)",
      ],
    },
  ];

  function getCurrentTime() {
    const currentDate = new Date();
    let minutes =
      currentDate.getMinutes() < 10
        ? `0${currentDate.getMinutes()}`
        : currentDate.getMinutes();
    let hours =
      currentDate.getHours() < 10
        ? `0${currentDate.getHours()}`
        : currentDate.getHours();
    const currentTime = `${hours}:${minutes}`;
    return currentTime;
  }

  let currentIndex = 0;
  let answerIterator = 0;
  const MAX_INDEX = 15;

  function onWindowResize() {
    let svgStoke;

    if (window.matchMedia("(max-width: 600px)").matches) {
      svgStoke = "#ffffff";
    } else {
      svgStoke = "#0c2de9";
    }

    window.addEventListener("resize", () => {
      if (window.matchMedia("(max-width: 600px)").matches) {
        svgStoke = "#ffffff";
      } else {
        svgStoke = "#0c2de9";
      }
    });

    return svgStoke;
  }

  function createLoader() {
    const loader = `
			<div class="message-loader" data-loader>
				<svg style="margin: auto; display: block; shape-rendering: auto;" width="75px" height="75px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle fill="#fff" stroke="none" cx="6" cy="50" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite"
          begin="0.1"/>    
      </circle>
      <circle fill="#fff" stroke="none" cx="26" cy="50" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite" 
          begin="0.2"/>       
      </circle>
      <circle fill="#fff" stroke="none" cx="46" cy="50" r="6">
        <animate
          attributeName="opacity"
          dur="1s"
          values="0;1;0"
          repeatCount="indefinite" 
          begin="0.3"/>     
      </circle>
				</svg>
			</div>
		`;

    // chatContentList4.insertAdjacentHTML('beforeend', loader)
  }

  function removeLoader() {
    const loader = document.querySelector("[data-loader]");
  }

  function createBotTemplateMessage(message) {
    const template = `<div class="chat-content-item manager ">
				<div class="chat-content-desc">
					<div class="chat-content-desc-item manager">
						<p class="message-time">${getCurrentTime()}</p>
						<p class="text">${message}</p>
					</div>
				</div>
			</div>`;

    return template;
  }

  function createBotMessage(messageList) {
    const values = Object.values(messageList);
    createBotTemplateMessage(values[currentIndex]);
    currentIndex++;
  }

  function userMessageTemplate(messageText) {
    const template = `
            <div class="chat-content-item user item-active">
                <div class="chat-content-desc">
                    <div class="chat-content-desc-item user">
                        <p class="message-time">${getCurrentTime()}</p>
                        <p class="text">${messageText}</p>
                    </div>
                </div>
            </div>`;

    comment.value += messageText + "; ";
    return template;
  }

  function createAnswerButtonsTemplate(answers) {
    const values = Object.values(answers[answerIterator]);
    const template = document.createElement("div");
    template.classList.add("user-answer_list");

    for (let value of values[0]) {
      const button = document.createElement("div");
      button.classList.add;
      button.classList.add("user--answer", "chat-content-buttons-gender-block");
      button.innerHTML = value;
      template.appendChild(button);
    }

    answerIterator++;
    return template;
  }

  function handleUserChoise() {
    const buttons = document.querySelectorAll(".user--answer");

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", (e) => {
        userMessageTemplate(e.target.textContent);
        e.target.parentElement.remove();
        userChoise.push(e.target.textContent);
        startChat(messageList);
      });
    }

    return false;
  }

  // Name
  function enterName() {
    userNameRow.classList.add("show");
  }

  function checkNameInputValue() {
    const firstName = document.querySelector("input[name=name]");
    const lastName = document.querySelector("input[name=last]");
    const buttonName = document.querySelector("[data-btn-name]");

    buttonName.addEventListener("click", (e) => {
      if (!firstName.value) {
        firstName.classList.add("error");
        firstName.placeholder = "Введите ваше имя";
        return;
      }

      if (!lastName.value) {
        lastName.classList.add("error");
        lastName.placeholder = "Введите вашу фамилию";
        return;
      }
      messageList[3] = `${firstName.value}, рад знакомству с Вами!`;
      firstName.classList.remove("error");
      lastName.classList.remove("error");
      e.target.remove();
      startChat(messageList);
    });

    return false;
  }

  // Email
  function enterEmail() {
    userEmailRow.classList.add("show");
  }

  function validateEmail(email) {
    return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
      String(email).toLowerCase()
    );
  }

  function checkEmailInputValue() {
    const email = document.querySelector("input[name=email]");
    const btnNext = document.querySelector("[data-btn-email]");

    btnNext.addEventListener("click", (e) => {
      if (validateEmail(email.value) === false) {
        email.classList.add("error");
        email.value = "";
        email.placeholder = "Введите свой адрес Электронной почты";
      } else {
        email.classList.remove("error");
        e.target.remove();
        startChat(messageList);
      }
    });

    return false;
  }

  // Phone
  function enterPhone() {
    userPhoneRow.classList.add("show");
  }

  function checkPhoneValue() {
    const phone = document.querySelector("input[name=phone1]");
    const buttonPhone = document.querySelector("[data-btn-phone]");

    return false;
  }

  // const codeCountry = document.querySelectorAll('input[name="code"]');
  // function itiFlagsAdd(element) {
  //   var iti = intlTelInput(element, {
  //     // allowDropdown: false,
  //     autoPlaceholder: false,
  //     autoHideDialCode: false,
  //     preferredCountries: ["AU", "GB", "IE", "DE"],
  //     separateDialCode: false,
  //     // autoHideDialCode: false,
  //     //  autoPlaceholder: false,
  //     // dropdownContainer: document.body,
  //     // excludeCountries: ["us"],
  //     formatOnDisplay: false,
  //     geoIpLookup: function (callback) {
  //       $.get("https://get.geojs.io/v1/ip/country.json", function () { }).always(
  //         function (resp) {
  //           const countryCode = resp && resp.country ? resp.country : "AU";
  //           document
  //             .querySelectorAll('input[name="code"]')
  //             .forEach(
  //               (item) => (item.value = countryCode.toLocaleUpperCase())
  //             );

  //           callback(countryCode);
  //         }
  //       );
  //     },
  //     initialCountry: "auto",
  //     hiddenInput: "full_number",
  //     // localizedCountries: { 'de': 'Deutschland' },
  //     nationalMode: false,
  //     onlyCountries: [
  //       'AT',
  //       'BE',
  //       'GB',
  //       'DE',
  //       'FR',
  //       'FI',
  //       'NO',
  //       'SE',
  //       'CH',
  //       'NL',
  //       'DK',
  //       'IE',
  //       'LU',
  //       'PT',
  //       'IT',
  //       'CZ',
  //       'MT',
  //       'GR',
  //       'AE',
  //       'ES',],
  //     placeholderNumberType: "MOBILE",
  //     // preferredCountries,
  //     // separateDialCode
  //   });

  //   element.addEventListener("countrychange", function () {
  //     // do something with iti.getSelectedCountryData()
  //     codeCountry.forEach((item) => {
  //       item.value = iti.getSelectedCountryData().iso2;
  //     });
  //   });

  //   const currentFormVal = element.closest("form");
  //   const buttonPhone = document.querySelector("[data-btn-phone]");
  //   const full_number = document.querySelector('input[name="phone"]');
  //   // Validation current form logic
  //   buttonPhone.addEventListener("click", function (e) {
  //     const currentForm = e.target.closest("form");
  //     const errorMsgTarget = currentForm.querySelector(".phone-eror-mess");
  //     //   const answerssValue = currentForm.querySelector('input[name="answer"]');

  //     if (element.value.trim()) {
  //       const isValueCodePhone = full_number.value.substring(0, 4);
  //       if (isValueCodePhone === "+380") {
  //         errorMsgTarget.innerHTML = "Invalid country code";
  //         return;
  //       }

  //       if (iti.isValidNumber()) {

  //         element.classList.add("valid");
  //         element.classList.remove("isValid");
  //         errorMsgTarget.innerHTML = "";
  //       } else {
  //         let errorCode =
  //           iti.getValidationError() < 0 ? 0 : iti.getValidationError();
  //         element.classList.remove("valid");
  //         element.classList.add("isValid");

  //         errorMsgTarget.innerHTML = errorItiMap[errorCode];
  //       }
  //     } else {
  //       element.classList.add("isValid");
  //     }
  //   });
  // }

  // function getParramUtm(value) {
  //   let params = new URLSearchParams(document.location.search);
  //   return params.get(value);
  // }

  // const inputsPhone = document.querySelectorAll("._phone");
  // inputsPhone.forEach((phone) => {
  //   itiFlagsAdd(phone);
  // });

  window.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.querySelector(".submit_btn");
    const register_form = document.querySelector(".register-form");

    register_form.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    submitBtn.addEventListener("click", (e) => {
      // e.preventDefault();

      submitBtn.disabled = true;
      setTimeout(() => {
        register_form.submit();
      }, 1000);
    });
  });

  function showRegisterButton() {
    formButton.classList.remove("hide");
    formButton.classList.add("show");
    const elements = document.querySelectorAll(".chat-content-item");
    const lastElement = elements[elements.length - 1];
    lastElement.remove();
  }

  function checkCurrentIndex(index, list) {
    if (index === MAX_INDEX) {
      showRegisterButton();
      return;
    }

    if (index === 2 || index === 7 || index === 8 || index === 9) {
      handleUserChoise(list);
      return;
    }

    if (index === 3) {
      enterName();
      checkNameInputValue();
      return;
    }

    if (index === 10) {
      enterEmail();
      checkEmailInputValue();
      return;
    }

    if (index === 12) {
      enterPhone();
      // checkPhoneValue();
      return;
    }

    startChat(list);

    return index;
  }

  function startChat() {
    createLoader();
    setTimeout(() => {
      removeLoader();
      createBotMessage(messageList, currentIndex);
      checkCurrentIndex(currentIndex, questionList);
      var button = document.getElementById("button_next");
      button.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  startChat();

  // setDocument();
});
