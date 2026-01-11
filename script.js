/**
 * १. कथा देखाउने फङ्सन (Read Story थिच्दा चल्ने)
 * यसले ब्राउजरको मेमोरीमा लोड नपारी स्मूथ तरिकाले कथा खोल्छ।
 */
function showFullStory(id) {
    // सबैभन्दा पहिले त्यो कार्ड भित्रको लुकेको कथा (full-story) देखाउने
    const fullStory = document.getElementById(id);
    if (fullStory) {
        fullStory.style.display = 'block';
    }

    // पढेको बेला होमपेजका अरू विवरण लुकाउने ताकि बीचमा सफा देखियोस्
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
    
    // कथा खुलेपछि पेजको माथि (Top) मा पुर्‍याउने
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * २. फन्ट साइज सानो-ठूलो बनाउने (Font Resizer)
 * यसले अक्षर धेरै ठूलो हुन दिँदैन, जसले ब्राउजर क्र्यास हुनबाट जोगाउँछ।
 */
function changeSize(id, step) {
    const textDiv = document.querySelector('#' + id + ' .story-text');
    if (textDiv) {
        let currentSize = parseInt(window.getComputedStyle(textDiv).fontSize);
        let newSize = currentSize + step;

        // साइज १० देखि ४० को बीचमा मात्र सिमित गर्ने (Browser Safety)
        if (newSize >= 10 && newSize <= 40) {
            textDiv.style.fontSize = newSize + 'px';
        }
    }
}

/**
 * ३. फिर्ता जाने बटन (Back to Stories)
 * पेजलाई रिफ्रेस गरेर मेमोरी क्लियर गर्छ।
 */
function hideStory(id) {
    // यसले सुरुको होमपेजमा फर्काउँछ र मोबाइलको 'Lag' हटाउँछ
    location.reload();
}
