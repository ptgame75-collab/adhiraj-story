// १. कथाहरूको सुरुवाती डाटा (तपाईँले यहाँ नयाँ कथा थप्न सक्नुहुन्छ)
let stories = [
    {
        date: "Jan 11, 2026",
        title: "The Silent Forest",
        content: "Once upon a time in a forest where no birds sang, a traveler found a golden key. This key opened a door hidden inside a giant oak tree...",
        readTime: "2 min read"
    },
    {
        date: "Jan 10, 2026",
        title: "पुरानो मन्दिरको रहस्य",
        content: "गाउँको छेउमा एउटा पुरानो मन्दिर थियो जहाँ राती अनौठो आवाज आउँथ्यो। एकदिन एक साहसी केटा त्यहाँ गयो र उसले एउटा पुरानो डायरी भेट्टायो...",
        readTime: "3 min read"
    }
];

const container = document.getElementById('story-container');

// २. कथाहरूलाई स्क्रिनमा सजाएर देखाउने फङ्ग्सन
function renderStories() {
    if(!container) return;
    container.innerHTML = '';
    stories.forEach((story, index) => {
        const card = `
            <div class="story-card shadow-sm border border-[#F0EBE3] bg-white p-8 rounded-[24px] mb-6">
                <div class="flex gap-3 text-gray-400 text-xs mb-4 font-medium uppercase tracking-wider">
                    <span>📅 ${story.date}</span> • <span>⏱️ ${story.readTime}</span>
                </div>
                <h2 class="text-3xl font-bold mb-4 text-[#1A1A1A] font-serif">${story.title}</h2>
                <p class="text-gray-600 leading-relaxed mb-6">${story.content.substring(0, 120)}...</p>
                <button onclick="viewStory(${index})" class="font-bold border-b-2 border-black pb-1 hover:text-gray-500 transition-colors">Read More</button>
            </div>
        `;
        container.innerHTML += card;
    });
}

// ३. पूरा कथा हेर्नको लागि
function viewStory(index) {
    alert(stories[index].content);
}

// ४. एडमिन लगइन चेक गर्ने
function checkAdmin() {
    const pass = document.getElementById('admin-pass').value;
    if (pass === "Ld8i8aj092") {
        document.getElementById('add-story-form').classList.remove('hidden');
        document.getElementById('admin-login-area').classList.add('hidden');
        alert("तपाईँ एडमिनको रूपमा लगइन हुनुभयो!");
    } else {
        alert("गलत पासवर्ड! फेरि प्रयास गर्नुहोस्।");
    }
}

// ५. नयाँ कथा थप्ने फङ्ग्सन
function addNewStory() {
    const title = document.getElementById('new-title').value;
    const content = document.getElementById('new-content').value;
    
    if (title && content) {
        stories.unshift({
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            title: title,
            content: content,
            readTime: "1 min read"
        });
        renderStories(); // लिस्ट अपडेट गर्ने
        document.getElementById('new-title').value = ''; 
        document.getElementById('new-content').value = '';
        alert("बधाई छ! नयाँ कथा थपियो।");
    } else {
        alert("कृपया शीर्षक र कथा दुवै लेख्नुहोस्।");
    }
}

// सुरुमा कथाहरू देखाउने
renderStories();
