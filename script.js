const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", function(e){
    e.preventDefault();

    msg.textContent = "Mensagem enviada com sucesso!";

    form.reset();

    setTimeout(() => {
        msg.textContent = "";
    }, 3000);
});