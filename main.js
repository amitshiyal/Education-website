//  change navbar style on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
        ('window-scroll', window.scrollY > 0)
})

// Show/Hide faq answer

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("open")

        // Change Icon
        const icon = faq.querySelector(".faq_icon i");
        if (icon.className === "fa-brands fa-plus") {
            icon.className = "fa-brands fa-minus"
        } else {
            icon.className = "fa-brands fa-plus"
        }
    })
})


// =========== toggtle menu bar =============

const menu = document.querySelector(".nav_menu")
const menubtn = document.querySelector("#open_menu-btn")
const closebtn = document.querySelector("#close_menu-btn")

menubtn.addEventListener("click", () => {
    menu.style.display = "flex";
    closebtn.style.display = "inline-block";
    menubtn.style.display = "none";
})

// close nav menu

const closenav = ()=>{
    menu.style.display = "none";
    closebtn.style.display = "none";
    menubtn.style.display = "inline-block";
}

closebtn.addEventListener("click",closenav)