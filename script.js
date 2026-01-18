// Splash Logic
window.addEventListener('load', () => {
    setTimeout(() => {
        document.getElementById('splash').style.display = 'none';
    }, 2500);
    renderLists();
});

// Render Lists
function renderLists() {
    const hList = document.getElementById('hindi-list');
    const nList = document.getElementById('nepali-list');
    
    hindiStories.forEach(s => hList.innerHTML += createCard(s, 'hindi'));
    nepaliStories.forEach(s => nList.innerHTML += createCard(s, 'nepali'));
}

function createCard(s, lang) {
    const isDone = localStorage.getItem(s.id) ? 'done' : '';
    return `
        <div class="story-card">
            <span onclick="openStory('${s.id}', '${lang}')">${s.title}</span>
            <button class="tick-btn ${isDone}" onclick="toggleTick(this, '${s.id}')">✓</button>
        </div>`;
}

// Tick Feature
function toggleTick(btn, id) {
    btn.classList.toggle('done');
    if(btn.classList.contains('done')) localStorage.setItem(id, 'true');
    else localStorage.removeItem(id);
}

// Navigation
function switchTab(i) {
    document.getElementById('main-wrapper').style.transform = `translateX(-${i * 100}vw)`;
    document.querySelector('.underline').style.left = i * 50 + '%';
}

// Story Overlay
let currentFontSize = 18;
function openStory(id, lang) {
    const s = [...hindiStories, ...nepaliStories].find(story => story.id === id);
    const content = `
        <h2 style="font-size: 1.5em">${s.title}</h2>
        <div class="story-text" style="font-size: ${currentFontSize}px; white-space: pre-line;">${s.content}</div>
        <div class="author-box">लेखकको नाम:- अधिराज सुनार</div>
        <div class="moral-msg">${s.moral}</div>
        <div class="thanks-msg">♡︎ Thanks For Reading ♡︎</div>
    `;
    document.getElementById('story-content').innerHTML = content;
    document.getElementById('story-overlay').classList.add('active');
}

function closeStory() { document.getElementById('story-overlay').classList.remove('active'); }

function changeFontSize(val) {
    currentFontSize += val;
    document.querySelector('.story-text').style.fontSize = currentFontSize + 'px';
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const btn = document.getElementById('theme-toggle');
    btn.innerText = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

// PWA Install
let deferredPrompt;
window.onbeforeinstallprompt = (e) => {
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById('installBtn').style.display = 'block';
};

document.getElementById('installBtn').onclick = () => {
    if(deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt = null;
    }
};

