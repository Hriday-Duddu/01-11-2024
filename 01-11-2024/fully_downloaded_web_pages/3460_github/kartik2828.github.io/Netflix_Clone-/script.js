document.getElementById("languageSelect").addEventListener("change", function() {
    var selectedOption = this.options[this.selectedIndex];
    selectedOption.classList.add("selected");
});