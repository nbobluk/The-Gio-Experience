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
