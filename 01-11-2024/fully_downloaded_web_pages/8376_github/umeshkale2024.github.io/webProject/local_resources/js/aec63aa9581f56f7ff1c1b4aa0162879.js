const accordionTitle = document.querySelectorAll(".accordion-title");

accordionTitle.forEach(item => {
    item.addEventListener("click", Event =>{
        const currentActive = document.querySelector(".accordion-title.active");
        if(currentActive && currentActive!==item) {
            currentActive.classList.toggle("active");
            currentActive.nextElementSibling.style.maxHeight = 0;
           
        }
        item.classList.toggle("active");
        const accordionBody = item.nextElementSibling;
        if(item.classList.contains("active")){
            accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
        }
        else{
            accordionBody.style.maxHeight = "0px";
        }
    });
});
