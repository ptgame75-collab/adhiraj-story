const stories = [
    {
        title: "The Lion and the Mouse",
        desc: "A classic fable about friendship.",
        lang: "English",
        content: "Once when a Lion was asleep a little Mouse began running up and down upon him..."
    },
    {
        title: "कछुवा र खरायो",
        desc: "घमण्डले कसरी हार निम्त्याउँछ भन्ने कथा।",
        lang: "Nepali",
        content: "एउटा खरायो र कछुवाबीच दौड प्रतियोगिता भयो..."
    }
];

const container = document.getElementById('story-container');

function renderStories() {
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

renderStories();
