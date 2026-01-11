<!DOCTYPE html>
<html lang="ne">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard - StoryBook</title>
    <style>
        body { font-family: 'Segoe UI', sans-serif; background: #f4f7f6; margin: 0; padding: 20px; }
        .container { max-width: 800px; margin: auto; background: white; padding: 30px; border-radius: 12px; box-shadow: 0 5px 20px rgba(0,0,0,0.05); }
        h2 { color: #1a1a1a; border-bottom: 2px solid #a67c52; padding-bottom: 10px; }
        .form-group { margin-bottom: 20px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input, textarea { width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 8px; box-sizing: border-box; font-size: 16px; }
        textarea { height: 200px; resize: vertical; }
        .publish-btn { background: #1a1a1a; color: white; border: none; padding: 15px 30px; border-radius: 30px; cursor: pointer; font-size: 16px; font-weight: bold; transition: 0.3s; }
        .publish-btn:hover { background: #a67c52; }
        .status-msg { margin-top: 20px; padding: 10px; border-radius: 5px; display: none; }
        #login-section { text-align: center; padding: 50px 0; }
        #dashboard-section { display: none; }
    </style>
</head>
<body>

    <div class="container">
        <div id="login-section">
            <h2>Admin Login</h2>
            <input type="password" id="admin-pass" placeholder="Enter Admin Password">
            <br><br>
            <button class="publish-btn" onclick="checkAuth()">Login</button>
        </div>

        <div id="dashboard-section">
            <h2>Add New Story</h2>
            <div class="form-group">
                <label>Story Title (शीर्षक)</label>
                <input type="text" id="story-title" placeholder="यहाँ कथाको शीर्षक लेख्नुहोस्">
            </div>
            <div class="form-group">
                <label>Reading Time (उदा: 5 min read)</label>
                <input type="text" id="story-meta" placeholder="5 min read">
            </div>
            <div class="form-group">
                <label>Full Story (पूरा कथा)</label>
                <textarea id="story-content" placeholder="यहाँ पूरा कथा टाइप गर्नुहोस्..."></textarea>
            </div>
            <button class="publish-btn" onclick="publishStory()">Publish Story</button>
            <div id="msg" class="status-msg"></div>
            <br>
            <a href="index.html" style="color: #a67c52; text-decoration: none;">← Back to Home</a>
        </div>
    </div>

    <script>
        // साधारण पासवर्ड प्रोटेक्सन (अहिलेको लागि: 12345)
        function checkAuth() {
            const pass = document.getElementById('admin-pass').value;
            if(pass === "12345") {
                document.getElementById('login-section').style.display = 'none';
                document.getElementById('dashboard-section').style.display = 'block';
            } else {
                alert("गलत पासवर्ड!");
            }
        }

        function publishStory() {
            const title = document.getElementById('story-title').value;
            const meta = document.getElementById('story-meta').value;
            const content = document.getElementById('story-content').value;
            const msg = document.getElementById('msg');

            if(title && content) {
                // यहाँ एउटा अलर्ट दिने (अहिलेको लागि यो डेमो हो)
                alert("बधाई छ! कथा तयार भयो। \n\nनोट: यो कथा सिधै होमपेजमा देखिनको लागि तपाईंले यो कोडलाई 'index.html' मा कपी-पेस्ट गर्नुपर्नेछ।");
                
                // यसले तपाईंलाई कथाको तयार कोड दिन्छ जुन तपाईंले index.html मा टाँस्न सक्नुहुन्छ
                console.log("Generated HTML for index.html:");
                console.log(`
                <div class="story-card" id="card-new">
                    <div class="meta">${new Date().toLocaleDateString()} • ${meta}</div>
                    <h2 class="story-title" onclick="showFullStory('new')">${title}</h2>
                    <button class="read-btn" onclick="showFullStory('new')">Read Story</button>
                    <div id="new" class="full-story">
                        <div class="font-controls">
                            <button onclick="changeSize('new', 2)">A+</button>
                            <button onclick="changeSize('new', -2)">A-</button>
                        </div>
                        <div class="story-text">${content}</div>
                        <div class="thanks-msg">♡︎ thanks for reading ♡︎</div>
                        <button class="back-btn" onclick="hideStory('new')">Back to List</button>
                    </div>
                </div>
                `);
            } else {
                alert("कृपया सबै खाली ठाउँ भर्नुहोस्।");
            }
        }
    </script>
</body>
</html>
