let score = 0;
const game = document.getElementById("game");
const scoreDisplay = document.getElementById("score");

function spawnShape() {
  const shape = document.createElement("div");
  shape.classList.add("shape");

  const size = 50;
  const x = Math.random() * (game.clientWidth - size);
  const y = Math.random() * (game.clientHeight - size);

  shape.style.left = x + "px";
  shape.style.top = y + "px";

  shape.onclick = () => {
    score++;
    scoreDisplay.textContent = score;
    shape.remove();
  };

  game.appendChild(shape);

  setTimeout(() => {
    if (shape.parentElement) {
      shape.remove();
    }
  }, 1200);
}

setInterval(spawnShape, 1500);