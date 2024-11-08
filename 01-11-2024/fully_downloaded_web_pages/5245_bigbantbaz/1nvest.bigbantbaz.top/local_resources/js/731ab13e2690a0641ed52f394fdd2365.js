const randMan = document.getElementById("rand_man");
const randPlaces = document.getElementById("rand_places");

function randomPlace(count) {
  let refreshIntervalId = setInterval(() => {
    if (count === 1) {
      clearInterval(refreshIntervalId);
    }
    randPlaces.innerText = count--;
  }, 7000);
}
randomPlace(13);

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
randMan.innerText = randomInteger(100, 200);

// Calculator
var currencySave;
const depositRange = document.querySelector(".control__dep");
const daysRange = document.querySelector(".control__days");
const resultSum = document.querySelector(".output__earn");
const resultRev = document.querySelector(".output__revenue");
const resultProf = document.querySelector(".output__profitability");
const euroCounty = [
  "AT",
  "CH",
  "DE",
  "LI",
  "LU",
  "BE",
  "CZ",
  "ES",
  "FR",
  "GR",
  "HU",
  "IT",
  "NL",
  "PL",
  "PT",
  "RO",
  "RS",
  "HR",
  "SK",
  "SL",
  "DK",
  "FI",
  "NO",
  "SE",
];

fetch("https://amos-mamaya.fun/geo")
  .then((response) =>
    response.ok ? response.json() : Promise.reject(response.statusText)
  )
  .then((data) => {
    if (euroCounty.includes(data.country_code)) {
      currencySave = "zl";
      localStorage.setItem("currency", currencySave);
    } else {
      currencySave = "zl";
      localStorage.setItem("currency", currencySave);
    }
  })
  .catch((error) => {
    console.log(`Something went wrong... Status: ${error}`);
    currencySave = "zl";
    localStorage.setItem("currency", currencySave);
  });

function updateAllInputResults(data) {
  const sum = depositRange.value;
  const days = daysRange.value;
  let coeficient = days / 12;
  let profitability = sum / 4;

  if (days > 30) {
    coeficient *= 8;
    profitability *= 2;
  }

  coeficient++;

  resultSum.innerText = `${localStorage.getItem("currency")}${Math.round(
    sum * 8 * coeficient
  )
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`;
  resultRev.innerText = `${localStorage.getItem("currency")}${(
    Math.round(sum * 8 * coeficient) - sum
  )
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`;
  resultProf.innerText = `${Math.round(profitability)}%`;
}
$(".control__dep").ionRangeSlider({
  min: 250,
  max: 10000,
  from: 5250,
  prefix: '<span class="currency">zl</span>',
  onChange: function (data) {
    updateAllInputResults(data);
  },
});

$(".control__days").ionRangeSlider({
  min: 1,
  max: 90,
  from: 45,
  postfix: " dni",
  onChange: function (data) {
    updateAllInputResults(data);
  },
});

// circles
$(document).ready(function () {
  $("#circles").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1500);
  });
});

function animatePayouts(element_id, interval_ms) {
  const ap_container = document.getElementById(element_id);
  let ap_left = true;
  let ap_right = false;
  let ap_last_width = -1;

  window.addEventListener("load", () => {
    self.setInterval(() => {
      if (ap_left) {
        if (ap_container.scrollLeft !== ap_last_width) {
          ap_last_width = ap_container.scrollLeft;
          ap_container.scrollTo(ap_container.scrollLeft + 1, 0);
        } else {
          ap_last_width = -1;
          ap_left = false;
          ap_right = true;
        }
      }

      if (ap_right) {
        if (ap_container.scrollLeft !== ap_last_width) {
          ap_last_width = ap_container.scrollLeft;
          ap_container.scrollTo(ap_container.scrollLeft - 1, 0);
        } else {
          ap_last_width = -1;
          ap_left = true;
          ap_right = false;
        }
      }
    }, interval_ms);
  });
}

// animatePayouts("largWithdrawals", 15);
// animatePayouts("currWithdrawals", 25);
