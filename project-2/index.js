const toggleBtn=document.getElementById("themeToggle");

toggleBtn.addEventListener("click", ()=> {
document.body.classList.toggle("light-theme");
const isLight = document.body.classList.contains("light-theme");
toggleBtn.textContent = isLight ? "🌞" : "🌙";
});

const typedTextSpan=document.querySelector(".typed.text");
const textArray=[
    "Software Engineer",
    "Project Manager",
    "Web Developer",
    "Category Lead"
];

const typingDelay=50;
const erasingDelay=50;
const newTextDelay=200;
const 