var barCount = 20;
var initialDateStr = "01 Apr 2017 00:00 Z";

var ctx = document.getElementById("chart").getContext("2d");
ctx.canvas.width = 250;
ctx.canvas.height = 250;

var barData = getRandomData(initialDateStr, barCount);
function lineData() {
  return barData.map((d) => {
    return { x: d.x, y: d.c };
  });
}

var chart = new Chart(ctx, {
  type: "candlestick",
  data: {
    datasets: [
      {
        label: "BTC/EUR",
        data: barData,
      },
    ],
  },
});

function randomUpdate() {
  chart.data.datasets[0].data.shift();
  var date = luxon.DateTime.now();
  var data = randomBar(date, chart.data.datasets[0].data[18].c);
  chart.data.datasets[0].data.push(data);
  chart.update();
}

var getRandomInt = function (max) {
  return Math.floor(Math.random() * Math.floor(max));
};

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function randomBar(date, lastClose) {
  var open = +randomNumber(lastClose * 0.95, lastClose * 1.05).toFixed(2);
  var close = +randomNumber(open * 0.95, open * 1.05).toFixed(2);
  var high = +randomNumber(
    Math.max(open, close),
    Math.max(open, close) * 1.1
  ).toFixed(2);
  var low = +randomNumber(
    Math.min(open, close) * 0.9,
    Math.min(open, close)
  ).toFixed(2);
  return {
    x: date.valueOf(),
    o: open,
    h: high,
    l: low,
    c: close,
  };
}

function getRandomData(dateStr, count) {
  var date = luxon.DateTime.now();
  date = date.minus({ seconds: 30 });
  var data = [randomBar(date, 30)];
  while (data.length < count) {
    date = date.plus({ seconds: 1 });
    data.push(randomBar(date, data[data.length - 1].c));
  }
  return data;
}

var update = function () {
  var dataset = chart.config.data.datasets[0];

  // candlestick vs ohlc
  var type = document.getElementById("type").value;
  dataset.type = type;

  // linear vs log
  var scaleType = document.getElementById("scale-type").value;
  chart.config.options.scales.y.type = scaleType;

  // color
  var colorScheme = document.getElementById("color-scheme").value;
  if (colorScheme === "neon") {
    dataset.color = {
      up: "#01ff01",
      down: "#fe0000",
      unchanged: "#999",
    };
  } else {
    delete dataset.color;
  }

  // border
  var border = document.getElementById("border").value;
  var defaultOpts = Chart.defaults.elements[type];
  if (border === "false") {
    dataset.borderColor = defaultOpts.borderColor;
  } else {
    dataset.borderColor = {
      up: defaultOpts.color.up,
      down: defaultOpts.color.down,
      unchanged: defaultOpts.color.up,
    };
  }

  // mixed charts
  var mixed = document.getElementById("mixed").value;
  if (mixed === "true") {
    chart.config.data.datasets = [
      {
        label: "WhatsApp Bot - Исскуственный интеллект",
        data: barData,
      },
      {
        label: "Close price",
        type: "line",
        data: lineData(),
      },
    ];
  } else {
    chart.config.data.datasets = [
      {
        label: "WhatsApp - Исскуственный интеллект",
        data: barData,
      },
    ];
  }

  chart.update();
};

let count = 0;
let updateIntervalId;

function updateProfit() {
  console.log("start", count);
  if (count >= 5) {
    console.log("Stopping...");
    clearInterval(updateIntervalId); // Clear the updateIntervalId
    return; // Stop further execution of the function
  }

  prof = document.getElementById("profit");
  prof2 = document.getElementById("profit2");
  random_value = Math.floor(Math.random() * 100) + 50;
  value = parseInt(prof.innerText);

  if (count < 5) {
    prof.innerText = value + random_value;
    prof2.innerText = value + random_value;
    toastr.options = {
      closeButton: false,
      debug: false,
      newestOnTop: false,
      progressBar: false,
      positionClass: "toast-top-center",
      preventDuplicates: false,
      onclick: null,
      showDuration: "50",
      hideDuration: "150",
      timeOut: "2000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
    };
    toastr.success(
      `Заключена прибыльная сделка, прибыль составила $${random_value} `,
      "WhatsApp"
    );
  }

  count = count + 1;
}

window.setInterval(randomUpdate, 600);

document.getElementById("button_next").addEventListener("click", function () {
  updateIntervalId = window.setInterval(updateProfit, 1200); // Store the interval ID in updateIntervalId
  window.setTimeout(openLeadForm, 7000);
});

function openLeadForm() {
  prof = document.getElementById("profit").innerText;
  lead = document.getElementById("lead");
  btn = document.getElementById("button_next");
  btn.style.visibility = "hidden";
  fm = document.getElementById("fm");
  fm.style.visibility = "";

  lead.scrollIntoView();
}
