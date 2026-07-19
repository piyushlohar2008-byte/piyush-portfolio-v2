// header scroll 
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    }
    else {
        nav.classList.remove("header-scrolled");
    }
}

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function() {
        navCollapse.classList.remove("show");
    })
})

emailjs.init({
    publicKey: "ShzGF-UgT-PNklaSn",
});

const form = document.getElementById("emailForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("msg");

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!pattern.test(email)) {
        msg.style.color = "red";
        msg.innerHTML = "Please enter a valid email!";
        return;
    }

    emailjs.send("service_k118vme", "template_jk9lw0a", {
        user_email: email
    }).then(() => {

        msg.style.color = "green";
        msg.innerHTML = "Submitted Successfully...!";

        form.reset();

    }).catch(() => {

        msg.style.color = "red";
        msg.innerHTML = "Failed to submit!";
    });

});