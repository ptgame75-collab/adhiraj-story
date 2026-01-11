/**
 * १. कथा देखाउने मुख्य फङ्सन (Read Story थिच्दा चल्ने)
 */
function showFullStory(id) {
    // सबैभन्दा पहिले त्यो कार्ड भित्रको लुकेको कथा (full-story) देखाउने
    const fullStory = document.getElementById(id);
    if (fullStory) {
        fullStory.style.display = 'block';
    }

    // पढेको बेला होमपेजका अरू कुराहरू लुकाउने ताकि पाठकलाई सजिलो होस्
    const card = document.getElementById('card-' + id);
    if (card) {
        // मेटा डाटा (मिति), शीर्षक र 'Read Story' बटन लुकाउने
        const meta = card.querySelector('.meta');
        const title = card.querySelector('.story-title');
        const readBtn = card.querySelector('.read-btn');
        
        if (meta) meta.style.display = 'none';
        if (title) title.style.display = 'none';
        if (readBtn) readBtn.style.display = 'none';
    }
    
    // ब्राउजर क्र्यास हुन नदिन स्मूथ स्क्रोल गर्ने
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * २. फन्ट साइज सानो-ठूलो बनाउने (Font Resizer)
 */
function changeSize(id, step) {
    const textDiv = document.querySelector('#' + id + ' .story-text');
    if (textDiv) {
        let currentSize = parseInt(window.getComputedStyle(textDiv).fontSize);
        // साइज १० देखि ५० को बीचमा मात्र सिमित गर्ने (सुरक्षाको लागि)
        let newSize = currentSize + step;
        if (newSize >= 10 && newSize <= 50) {
            textDiv.style.fontSize = newSize + 'px';
        }
    }
}

/**
 * ३. फिर्ता जाने बटन (Back to Stories)
 */
function hideStory(id) {
    // सबैभन्दा सजिलो र सुरक्षित तरिका: पेज रिफ्रेस गर्ने
    // यसले गर्दा ब्राउजरको मेमोरी सफा हुन्छ र क्र्यास हुँदैन
    location.reload();
}
