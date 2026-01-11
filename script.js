function showFullStory(id) {
    document.getElementById(id).style.display = 'block';
    const card = document.getElementById('card-' + id);
    document.getElementById('hero-section').style.display = 'none'; // हीरो सेक्शन लुकाउने
    
    if (card) {
        card.querySelector('.meta').style.display = 'none';
        card.querySelector('.story-title').style.display = 'none';
        card.querySelector('.read-btn').style.display = 'none';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function changeSize(id, step) {
    const textDiv = document.querySelector('#' + id + ' .story-text');
    let currentSize = parseInt(window.getComputedStyle(textDiv).fontSize);
    let newSize = currentSize + step;
    if (newSize >= 12 && newSize <= 45) { // सुरक्षाका लागि फन्ट साइज सिमित
        textDiv.style.fontSize = newSize + 'px';
    }
}
