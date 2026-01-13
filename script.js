// १. Splash Screen timeout
window.onload = () => {
    setTimeout(() => {
        document.getElementById('splash-screen').style.display = 'none';
    }, 3000);
};

// ७. Pencil Tool Logic
const canvas = document.getElementById('pencil-canvas');
const ctx = canvas.getContext('2d');
let drawing = false;

function togglePencil() {
    const isActive = canvas.classList.toggle('active');
    document.getElementById('pencil-btn').style.background = isActive ? 'red' : 'white';
    canvas.width = document.getElementById('story-content').scrollWidth;
    canvas.height = document.getElementById('story-content').scrollHeight;
}

canvas.addEventListener('mousedown', () => drawing = true);
canvas.addEventListener('mouseup', () => drawing = false);
canvas.addEventListener('mousemove', draw);

function draw(e) {
    if (!drawing) return;
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'rgba(255, 0, 0, 0.5)';
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// ५ & ६. Night Mode & Font
function toggleNightMode() { document.body.classList.toggle('night-mode'); }
function changeFontSize(d) {
    let el = document.getElementById('story-content');
    let size = parseFloat(window.getComputedStyle(el).fontSize);
    el.style.fontSize = (size + d) + 'px';
}
