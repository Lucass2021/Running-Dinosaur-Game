const dino = document.getElementById("dino");
const rock = document.getElementById("rock");
const score = document.getElementById("score");

//Every times the dino jumps, he gets the jump-animation class and then gets removed
function jump() {
    dino.classList.add("jump-animation");
    setTimeout(() => {
        dino.classList.remove("jump-animation");
    }, 500);
}

document.addEventListener("keypress", () => {
    if (!dino.classList.contains("jump-animation")) {
        jump();
    }
});

//Hitting the dino
setInterval(() => {
    score.innerText++;
    const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    const rockLeft = parseInt(window.getComputedStyle(rock).getPropertyValue("left"));

    if (rockLeft < 0) {
        rock.style.display = "none";
    } else {
        rock.style.display = "";
    }

    if (rockLeft < 50 && rockLeft > 0 && dinoTop > 200) {
        alert("You got a score of " + score.innerText + "\n\nPlay Again?");
        location.reload();
    }
}, 50);