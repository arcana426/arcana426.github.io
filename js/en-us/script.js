document.addEventListener('DOMContentLoaded', function() {
    // reCAPTCHAのコールバック関数
    window.onSubmit = function(token) {
        document.getElementById("action-button").disabled = false;
        console.log("reCAPTCHA検証に成功しました!");
    };

    // move on ボタンのイベントリスナー
    document.getElementById("action-button").addEventListener("click", moveToNewContent);

    // 次のページへ移動する関数
    function moveToNewContent() {
        const originalContent = document.getElementById('original-content');
        const newContent = document.getElementById('new-content');

        originalContent.classList.add('fade-out');

        originalContent.addEventListener('animationend', function () {
            originalContent.style.display = 'none';
            newContent.style.display = 'block';
            newContent.classList.add('fade-in');
        }, { once: true });
    }

    document.getElementById("move-on-button").addEventListener("click", moveToNewerContent);

    function moveToNewerContent() {
        const newContent = document.getElementById('new-content');
        const newerContent = document.getElementById('newer-content');

        newContent.classList.add('slide-out');

        newContent.addEventListener('animationend', function () {
            newContent.style.display = 'none';
            newerContent.style.display = 'block';
            newerContent.classList.add('zoom-in');
        }, { once: true });
    }

    // 有効期限を指定する関数
    var now = new Date();
    var oneDayLater = new Date(now.getTime() + 24 * 60 * 60 * 1000);
    
    // 既存のメタタグを削除（必要に応じて）
    var existingExpiresMetaTag = document.querySelector('meta[http-equiv="expires"]');
    if (existingExpiresMetaTag) {
        existingExpiresMetaTag.remove();
    }
    
    // 新しいメタタグを追加
    var expiresMetaTag = document.createElement('meta');
    expiresMetaTag.httpEquiv = "expires";
    expiresMetaTag.content = oneDayLater.toUTCString();
    document.head.appendChild(expiresMetaTag);
    
    // ページの有効期限をチェック
    var expiryDate = new Date(expiresMetaTag.content);
    if (now >= expiryDate) {
        alert("This page has expired!");
    }
});
