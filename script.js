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
const msg = document.getElementById("msg");
const btn = form.querySelector("button");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.getElementById("email").value.trim();

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        msg.style.color = "red";
        msg.innerHTML = "Please enter your email!";
        return;
    }

    if (!pattern.test(email)) {
        msg.style.color = "red";
        msg.innerHTML = "Please enter a valid email!";
        return;
    }

    btn.disabled = true;
    btn.innerHTML = "Sending...";

    emailjs.send("service_k118vme", "template_jk9lw0a", {
        user_email: email
    })

    .then(() => {

        msg.style.color = "limegreen";
        msg.innerHTML = "Submitted Successfully...!";

        form.reset();

        btn.disabled = false;
        btn.innerHTML = "Get Started";

        setTimeout(() => {
            msg.innerHTML = "";
        }, 3000);

    })

    .catch(() => {

        msg.style.color = "red";
        msg.innerHTML = "Failed to submit! Please try again.";

        btn.disabled = false;
        btn.innerHTML = "Get Started";
    });

});
