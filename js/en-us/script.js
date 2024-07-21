// フラグを置いてindex.htmlで確認する
//　trueなら正しく読み込まれて、コンソールに「script.js has been successfully loaded.」と表記される。
//  undefinedなら読み込まれていない。
window.scriptLoaded = true;

console.log("script.js has been successfully loaded.");


function onSubmit(token) {
    document.getElementById('action-button').disabled = false;
    console.log("reCAPTCHA検証に成功しました!");
}

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

document.addEventListener('DOMContentLoaded', function() {
    // nonceを生成
    function generateNonce(length) {
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let nonce = '';
        for (let i = 0; i < length; i++) {
            nonce += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return nonce;
    }

    const nonce = generateNonce(16);

    // 外部スクリプトタグにnonceを追加
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach(script => {
        script.setAttribute('nonce', nonce);
    });

    // CSPメタタグを更新
    const cspMetaTag = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    if (cspMetaTag) {
        cspMetaTag.setAttribute('content', cspMetaTag.getAttribute('content').replace("'nonce-12345'", `'nonce-${nonce}'`));
    }

    // nonceが設定されているか確認
    if (!nonce) {
        console.error("Nonceの生成に失敗しました。");
    }
});
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

    // コンソールにエラーメッセージがあるか確認して表示
    const consoleErrors = window.console.error;
    if (consoleErrors.length > 0) {
        consoleErrors.forEach(error => {
            console.error(error);
        });
    }
});
