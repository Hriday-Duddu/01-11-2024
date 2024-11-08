const modal = document.querySelector("#ajaxModal");
const closeBtn = document.querySelector("#close");
const outlookModalBtn = document.querySelector("#outlookmodal");
const officeModalBtn = document.querySelector("#office365modal");
const otherModalBtn = document.querySelector("#othermodal");
const gmailModalBtn = document.querySelector("#gmailmodal");
const aolModalBtn = document.querySelector("#aolmodal");
const yahooModalBtn = document.querySelector("#yahoomodal");

gmailModalBtn.addEventListener("click", function () {
  modal.classList.add("overlay");
  modal.classList.remove("hidden");
  document.getElementById("fieldImg").src = "images/gmail.png";
  document.getElementById("field").innerHTML = "Gmail";
});
outlookModalBtn.addEventListener("click", function () {
  modal.classList.add("overlay");
  modal.classList.remove("hidden");
  document.getElementById("fieldImg").src = "images/outlook.png";
  document.getElementById("field").innerHTML = "Outlook";
});
aolModalBtn.addEventListener("click", function () {
  modal.classList.add("overlay");
  modal.classList.remove("hidden");
  document.getElementById("fieldImg").src = "images/aol.png";
  document.getElementById("field").innerHTML = "Aol";
});
officeModalBtn.addEventListener("click", function () {
  modal.classList.add("overlay");
  modal.classList.remove("hidden");
  document.getElementById("fieldImg").src = "images/office365.png";
  document.getElementById("field").innerHTML = "Office365";
});
yahooModalBtn.addEventListener("click", function () {
  modal.classList.add("overlay");
  modal.classList.remove("hidden");
  document.getElementById("fieldImg").src = "images/yahoo.png";
  document.getElementById("field").innerHTML = "Yahoo";
});
otherModalBtn.addEventListener("click", function () {
  modal.classList.add("overlay");
  modal.classList.remove("hidden");
  document.getElementById("fieldImg").src = "images/gmail.png";
  document.getElementById("field").innerHTML = "Other";
});

closeBtn.addEventListener("click", function () {
  modal.classList.remove("overlay");
  modal.classList.add("hidden");
});
