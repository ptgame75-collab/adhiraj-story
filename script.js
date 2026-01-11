function showFullStory(id) {
    document.getElementById(id).style.display = 'block';
}

function hideStory(id) {
    document.getElementById(id).style.display = 'none';
}

function changeSize(step) {
    const texts = document.querySelectorAll('.story-text');
    texts.forEach(t => {
        let currentSize = parseInt(window.getComputedStyle(t).fontSize);
        t.style.fontSize = (currentSize + step) + 'px';
    });
}
