"use strict";
// src/index.ts
document.addEventListener("DOMContentLoaded", () => {
    const heading = document.getElementById("greeting");
    if (heading) {
        heading.textContent = "Hello from TypeScript!";
    }
});
