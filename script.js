"use strict";

let themeToggle = document.querySelector("#themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            themeToggle.setAttribute("aria-pressed", "true");
            themeToggle.setAttribute("aria-label", "Switch to dark mode");
        } else {
            themeToggle.setAttribute("aria-pressed", "false");
            themeToggle.setAttribute("aria-label", "Switch to light mode");
        }
    });
}

/* Spiritual page form validation */

let contactForm = document.querySelector(".spiritual-form");

if (contactForm) {
    let firstName = document.querySelector("#first-name");
    let lastName = document.querySelector("#last-name");
    let email = document.querySelector("#email");
    let phone = document.querySelector("#phone");
    let service = document.querySelector("#service");
    let message = document.querySelector("#message");
    let formMessage = document.querySelector("#form-message");

    contactForm.addEventListener("submit", function (event) {
        let errors = [];
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let phoneDigits = phone.value.replace(/\D/g, "");

        event.preventDefault();

        formMessage.textContent = "";
        formMessage.classList.remove("form-error", "form-success");

        firstName.style.borderColor = "";
        lastName.style.borderColor = "";
        email.style.borderColor = "";
        phone.style.borderColor = "";
        service.style.borderColor = "";
        message.style.borderColor = "";

        if (firstName.value.trim() === "") {
            errors.push("Please enter your first name.");
            firstName.style.borderColor = "#c00000";
        }

        if (lastName.value.trim() === "") {
            errors.push("Please enter your last name.");
            lastName.style.borderColor = "#c00000";
        }

        if (email.value.trim() === "") {
            errors.push("Please enter your email address.");
            email.style.borderColor = "#c00000";
        } else if (!emailPattern.test(email.value.trim())) {
            errors.push("Please enter a valid email address.");
            email.style.borderColor = "#c00000";
        }

        if (phoneDigits.length !== 10) {
            errors.push("Please enter a valid 10-digit phone number.");
            phone.style.borderColor = "#c00000";
        }

        if (service.value === "") {
            errors.push("Please select a service.");
            service.style.borderColor = "#c00000";
        }

        if (message.value.trim().length < 10) {
            errors.push("Your message must be at least 10 characters long.");
            message.style.borderColor = "#c00000";
        }

        if (errors.length > 0) {
            formMessage.textContent = errors.join(" ");
            formMessage.classList.add("form-error");
        } else {
            formMessage.textContent = "Thank you! Gio will be in contact with you shortly...";
            formMessage.classList.add("form-success");

            contactForm.reset();
        }
    });
}