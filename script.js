// ==============================
// For My Princess ❤️
// Script by ChatGPT
// ==============================

// Loading Screen
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
    }, 2000);
});

// Typing Effect
const typingText = "Hai Nikmol ❤️";
let typingIndex = 0;

function typeWriter() {
    const typing = document.getElementById("typing");

    if (!typing) return;

    if (typingIndex < typingText.length) {
        typing.innerHTML += typingText.charAt(typingIndex);
        typingIndex++;
        setTimeout(typeWriter, 120);
    }
}

// Login
function login() {

    const password = document.getElementById("password").value;
    const error = document.getElementById("error");

    if (password === "loveyou") {

        document.getElementById("login").style.display = "none";
        document.getElementById("main").style.display = "flex";

        // Musik
        const music = document.getElementById("music");

        if (music) {
            music.play().catch(() => {});
        }

        typeWriter();

        startHearts();

    } else {

        error.innerHTML = "Passwordnya salah ukhti 😢";

    }

}

// Surat
function openLetter() {

    document.getElementById("letter").style.display = "flex";

}

function closeLetter() {

    document.getElementById("letter").style.display = "none";

}

// Floating Hearts
function startHearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "100vh";
        heart.style.fontSize = (20 + Math.random() * 20) + "px";
        heart.style.pointerEvents = "none";
        heart.style.zIndex = "999";
        heart.style.animation = "love 6s linear";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 6000);

    }, 300);

}

// Sakura
function startSakura() {

    setInterval(() => {

        const sakura = document.createElement("div");

        sakura.innerHTML = "🌸";

        sakura.style.position = "fixed";
        sakura.style.left = Math.random() * 100 + "vw";
        sakura.style.top = "-30px";
        sakura.style.fontSize = (18 + Math.random() * 18) + "px";
        sakura.style.pointerEvents = "none";
        sakura.style.zIndex = "998";
        sakura.style.animation = "sakura 8s linear";

        document.body.appendChild(sakura);

        setTimeout(() => {
            sakura.remove();
        }, 8000);

    }, 500);

}

// Confetti
function confetti() {

    for (let i = 0; i < 120; i++) {

        const c = document.createElement("div");

        c.innerHTML = ["🎉", "✨", "💖"][Math.floor(Math.random() * 3)];

        c.style.position = "fixed";
        c.style.left = Math.random() * 100 + "vw";
        c.style.top = "-20px";
        c.style.fontSize = (20 + Math.random() * 15) + "px";
        c.style.animation = "fall 4s linear";
        c.style.pointerEvents = "none";
        c.style.zIndex = "1000";

        document.body.appendChild(c);

        setTimeout(() => {
            c.remove();
        }, 4000);

    }

}

// Setelah semua elemen HTML selesai dimuat
document.addEventListener("DOMContentLoaded", () => {

    startSakura();

    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");

    let count = 0;

    if (yesBtn) {

        yesBtn.addEventListener("click", () => {

            confetti();

            setTimeout(() => {

                alert("Makasii ya cimoll ❤️\nSemoga aku dimaafin.");

            }, 300);

        });

    }

    if (noBtn) {

        noBtn.addEventListener("mouseover", () => {

            count++;

            noBtn.style.position = "fixed";
            noBtn.style.left = Math.random() * 80 + "vw";
            noBtn.style.top = Math.random() * 80 + "vh";

            if (count >= 8) {

                noBtn.innerHTML = "Ya deh ❤️";
                noBtn.style.background = "#ff4d88";

            }

        });

    }

});

// Animasi dibuat lewat JS agar tidak perlu file tambahan
const style = document.createElement("style");

style.innerHTML = `
@keyframes love{

0%{
transform:translateY(0);
opacity:1;
}

100%{
transform:translateY(-120vh);
opacity:0;
}

}

@keyframes fall{

0%{
transform:translateY(0) rotate(0deg);
}

100%{
transform:translateY(120vh) rotate(720deg);
}

}

@keyframes sakura{

0%{
transform:translateY(0) translateX(0) rotate(0deg);
opacity:1;
}

50%{
transform:translateY(50vh) translateX(80px) rotate(180deg);
}

100%{
transform:translateY(120vh) translateX(-60px) rotate(360deg);
opacity:0;
}

}
`;

document.head.appendChild(style);
