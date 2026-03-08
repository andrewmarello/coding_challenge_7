console.log(`Coding Challenge 7 - Small Business Website - Andrew Marello`);

const input = document.getElementById("headlineInput");
const button = document.getElementById("updateBtn");
const cta = document.getElementById("cta");

button.addEventListener("click", function() {
    cta.textContent = input.value;
});
