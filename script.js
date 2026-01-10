const stories = [
    {
        title: "The Lion and the Mouse",
        desc: "A classic fable about kindness and friendship.",
        lang: "English",
        content: "Once when a Lion was asleep a little Mouse began running up and down upon him. The Lion caught him but let him go. Later, the Mouse saved the Lion from a hunter's net."
    },
    {
        title: "स्याल र अङ्गुर",
        desc: "प्रयास सफल नहुँदा बहाना बनाउने स्यालको कथा।",
        lang: "Nepali",
        content: "एउटा भोको स्यालले अङ्गुर टिप्न धेरै प्रयास गर्यो। नभेटेपछि उसले 'अङ्गुर अमिलो छ' भन्दै चित्त बुझायो।"
    }
];

const container = document.getElementById('story-container');

stories.forEach((story, index) => {
    const card = `
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <span class="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full mb-4">${story.lang}</span>
            <h2 class="text-2xl font-bold mb-2 text-indigo-900">${story.title}</h2>
            <p class="text-gray-600 mb-4">${story.desc}</p>
            <button onclick="alert('${story.content}')" class="text-indigo-600 font-bold hover:underline">Read More →</button>
        </div>
    `;
    container.innerHTML += card;
});
