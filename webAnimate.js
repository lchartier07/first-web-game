//const box = document.getElementById("box");

/*const animBox = box.animate(
    [{ opacity: 1, transform: "scale(1)" },
    { opacity: 1, transform: "scale(1)" },
    { opacity: 1, transform: "scale(0)" },
    { opacity: 0, transform: "scale(0.5)" }],
    { duration: randomInt(1500, 3000), easing: "ease", fill: "forwards" });

animBox.finished.then(function (event) {
    console.log(`animation 1 finished`);
});

animBox.onfinish = (function (event) {
    console.log(`animation 1 finished`);
});*/

let ticks = 0;

const timer = document.getElementById("timer");

setInterval(function () {
    ticks++;

    timer.textContent = `|| time: ${ticks} `;

    if (ticks == 60) {
        localStorage.setItem("score", score);
        window.location.href = "end.html";
    }
}, 1000)

const randomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const game = document.getElementById("game");

let score = 0;

const scoreText = document.getElementById("scoreText");

const appearBox = function (posX, posY) {
    const box = document.createElement("div");
    box.setAttribute("class", "box");
    box.style.top = `${posY}px`;
    box.style.left = `${posX}px`;
    game.appendChild(box);

    const animBox = box.animate(
        [{ opacity: 1, transform: "scale(1)" },
        { opacity: 1, transform: "scale(1)" },
        { opacity: 1, transform: "scale(0)" },
        { opacity: 0, transform: "scale(0.5)" }],
        { duration: randomInt(1500, 3000), easing: "ease", fill: "forwards" });

    box.addEventListener("click", function () {
        score++;
        box.remove();
        scoreText.innerHTML = ` ||| score: ${score} `;
    })
};

appearBox(randomInt(50, 800), randomInt(50, 600));

let fps = 0;

const gameUI = document.getElementById("gameUI");

const gamerender = function () {
    fps++;

    if (fps % 100 == 0) {
        appearBox(randomInt(50, 800), randomInt(50, 600));
        fps;
    }

    window.requestAnimationFrame(gamerender);
}

window.requestAnimationFrame(gamerender);
