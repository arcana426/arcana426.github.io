// scripts.js
function onSubmit(token) {
    document.getElementById("action-button").disabled = false;
    console.log("reCAPTCHA検証に成功しました!");
}

function moveToNewContent() {
    const originalContent = document.getElementById('original-content');
    const newContent = document.getElementById('new-content');

    if (!originalContent || !newContent) {
        console.error("コンテンツ要素が見つかりません");
        return;
    }

    originalContent.classList.add('fade-out');

    originalContent.addEventListener('animationend', function () {
        originalContent.style.display = 'none';
        newContent.style.display = 'block';
        newContent.classList.add('fade-in');
    }, { once: true });
}

function moveToNewerContent() {
    const newContent = document.getElementById('new-content');
    const newerContent = document.getElementById('newer-content');

    if (!newContent || !newerContent) {
        console.error("コンテンツ要素が見つかりません");
        return;
    }

    newContent.classList.add('slide-out');

    newContent.addEventListener('animationend', function () {
        newContent.style.display = 'none';
        newerContent.style.display = 'block';
        newerContent.classList.add('zoom-in');
    }, { once: true });
}

document.addEventListener('DOMContentLoaded', function() {
    var now = new Date();
    var oneDayLater = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    
    var existingExpiresMetaTag = document.querySelector('meta[http-equiv="expires"]');
    if (existingExpiresMetaTag) {
        existingExpiresMetaTag.remove();
    }
    
    var expiresMetaTag = document.createElement('meta');
    expiresMetaTag.httpEquiv = "expires";
    expiresMetaTag.content = oneDayLater.toUTCString();
    document.head.appendChild(expiresMetaTag);
    
    var expiryDate = new Date(expiresMetaTag.content);
    if (now >= expiryDate) {
        alert("This page has expired!");
    }
});
