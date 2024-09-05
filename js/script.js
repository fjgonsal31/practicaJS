const canvas = document.getElementById("matrixCanvas");
const ctx = canvas.getContext("2d");
const main = document.getElementById("main");

function resizeCanvas() {
  canvas.width = main.offsetWidth;
  canvas.height = main.offsetHeight;
}

resizeCanvas();

const icons = ["🎮", "🕹️", "👾", "🎲", "💣", "🏆", "🚀"];
let fontSize = 30;
let columns = Math.floor(main.offsetWidth / fontSize);
let drops = Array(columns).fill(0);

function drawMatrix() {
  ctx.fillStyle = "rgba(255, 69, 0, 0.8)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.font = `${fontSize}px sans-serif`;

  drops.forEach((y, i) => {
    if (y > 0) {
      const icon = icons[Math.floor(Math.random() * icons.length)];
      ctx.fillText(icon, i * fontSize, y * fontSize);
    }

    if (y === 0 && Math.random() > 0.99) {
      drops[i] = 1;
    } else if (y > 0) {
      drops[i] = y * fontSize > canvas.height ? 0 : y + 1;
    }
  });
}

setInterval(drawMatrix, 135);

window.addEventListener("resize", () => {
  resizeCanvas();
  columns = Math.floor(main.offsetWidth / fontSize);
  drops = Array(columns).fill(0);
});
