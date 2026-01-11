<!DOCTYPE html>
<html lang="ne">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Login - StoryBook</title>
    <style>
        body { font-family: sans-serif; background: #f9f5f2; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; }
        .login-box { background: white; padding: 40px; border-radius: 10px; box-shadow: 0 5px 15px rgba(0,0,0,0.1); text-align: center; width: 300px; }
        input { width: 100%; padding: 10px; margin: 10px 0; border: 1px solid #ddd; border-radius: 5px; box-sizing: border-box; }
        button { background: black; color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; width: 100%; }
        .back-home { margin-top: 15px; display: block; color: #a67c52; text-decoration: none; font-size: 14px; }
    </style>
</head>
<body>

<div class="login-box">
    <h2>Admin Login</h2>
    <form id="loginForm">
        <input type="text" id="username" placeholder="Username" required>
        <input type="password" id="password" placeholder="Password" required>
        <button type="submit">Login</button>
    </form>
    <a href="index.html" class="back-home">← Back to Home</a>
</div>

<script>
    // यो एउटा साधारण लगइन चेक हो
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const user = document.getElementById('username').value;
        const pass = document.getElementById('password').value;

        // यहाँ तपाईंले आफ्नो मनपर्ने युजरनेम र पासवर्ड राख्न सक्नुहुन्छ
        if(user === "admin" && pass === "12345") {
            alert("स्वागत छ एडमिन! अब तपाईं कथा थप्न सक्नुहुन्छ।");
            // यहाँ लगइन सफल भएपछि जाने पेजको लिंक राख्न सकिन्छ
        } else {
            alert("गलत युजरनेम वा पासवर्ड!");
        }
    });
</script>

</body>
</html>
