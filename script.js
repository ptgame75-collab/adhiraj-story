const stories = [
    {
        title: "The Lion and the Mouse",
        desc: "A classic fable about friendship.",
        lang: "English",
        content: "Once when a Lion was asleep a little Mouse began running up and down upon him. The Lion caught him but let him go. Later, the Mouse saved the Lion from a hunter's net."
    },
    {
        title: "कछुवा र खरायो",
        desc: "घमण्डले कसरी हार निम्त्याउँछ भन्ने कथा।",
        lang: "Nepali",
        content: "एउटा खरायो र कछुवाबीच दौड प्रतियोगिता भयो। खरायो छिटो दौडिए पनि बीचमा सुतेकाले, बिस्तारै तर निरन्तर हिँड्ने कछुवाले दौड जित्यो।"
    }
];

const container = document.getElementById('story-container');

function renderStories() {
    if(!container) return; // सुरक्षाको लागि
    container.innerHTML = '';
    stories.forEach((story, index) => {
        const card = `
            <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-4">
                <span class="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full mb-4">${story.lang}</span>
                <h2 class="text-2xl font-bold mb-2 text-indigo-900">${story.title}</h2>
                <p class="text-gray-600 mb-4">${story.desc}</p>
                <button onclick="viewStory(${index})" class="text-indigo-600 font-bold hover:underline">Read More →</button>
            </div>
        `;
        container.innerHTML += card;
    });
}

function viewStory(index) {
    alert(stories[index].content);
}

// एडमिन लगइन चेक गर्ने
function checkAdmin() {
    const pass = document.getElementById('admin-pass').value;
    if (pass === "adhiraj123") { 
        document.getElementById('add-story-form').classList.remove('hidden');
        document.getElementById('admin-login').classList.add('hidden');
        alert("तपाईँ लगइन हुनुभयो!");
    } else {
        alert("गलत पासवर्ड!");
    }
}

// नयाँ कथा थप्ने फङ्ग्सन (यो अघि छुटेको थियो)
function addNewStory() {
    const title = document.getElementById('new-title').value;
    const content = document.getElementById('new-content').value;
    
    if (title && content) {
        stories.push({
            title: title,
            desc: content.substring(0, 50) + "...",
            lang: "Nepali",
            content: content
        });
        renderStories(); // लिस्ट अपडेट गर्ने
        document.getElementById('new-title').value = ''; // इनपुट खाली गर्ने
        document.getElementById('new-content').value = '';
        alert("कथा थपियो!");
    } else {
        alert("कृपया शीर्षक र कथा लेख्नुहोस्।");
    }
}

renderStories();
