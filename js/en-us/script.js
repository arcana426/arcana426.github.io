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
    // nonceを生成する関数
    function generateNonce(length) {
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let nonce = '';
        for (let i = 0; i < length; i++) {
            nonce += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return nonce;
    }

    const nonce = generateNonce(16);

    // nonceをHTMLに挿入する
    const cspMetaTag = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    if (cspMetaTag) {
        cspMetaTag.setAttribute('content', cspMetaTag.getAttribute('content').replace(/'nonce-12345'/, `'nonce-${nonce}'`));
    }

    // nonceをスクリプトタグに追加
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach(script => {
        script.setAttribute('nonce', nonce);
    });

    // ページの有効期限を設定
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
    if (consoleErrors && consoleErrors.length > 0) {
        consoleErrors.forEach(error => {
            console.error(error);
        });
    }

    const cookieBanner = document.getElementById('cookie-banner');
    const userConsent = localStorage.getItem('userConsent');

    if (!userConsent) {
        cookieBanner.style.display = 'block';
    }

    window.acceptCookies = function() {
        localStorage.setItem('userConsent', 'accepted');
        cookieBanner.style.display = 'none';
        enableThirdPartyCookies();
    };

    window.declineCookies = function() {
        localStorage.setItem('userConsent', 'declined');
        cookieBanner.style.display = 'none';
        disableThirdPartyCookies();
    };

    function enableThirdPartyCookies() {
        // サードパーティクッキーを有効にする処理をここに追加
        console.log("サードパーティクッキーが有効になりました。");
    }

    function disableThirdPartyCookies() {
        // サードパーティクッキーを無効にする処理をここに追加
        console.log("サードパーティクッキーが無効になりました。");
    }

<<<<<<< HEAD
    // ページ読み込み時にユーザーの選択に基づいてサードパーティクッキーの使用を制御
    if (userConsent === 'accepted') {
        enableThirdPartyCookies();
    } else if (userConsent === 'declined') {
        disableThirdPartyCookies();
    }

    // style.css が読み込まれているか確認
    const testElement = document.createElement('div');
    testElement.style.display = 'none';
    testElement.classList.add('test-style');
    document.body.appendChild(testElement);

    const styleApplied = window.getComputedStyle(testElement).getPropertyValue('display') !== 'none';
    if (styleApplied) {
        console.log("style.css has been successfully loaded.");
    } else {
        console.error("style.css failed to load.");
    }

    document.body.removeChild(testElement);
});

=======
    // ページ読み込み時にユーザーの選択に基づいてサードパーティクッキーの使用を制御
    if (userConsent === 'accepted') {
        enableThirdPartyCookies();
    } else if (userConsent === 'declined') {
        disableThirdPartyCookies();
    }

>>>>>>> 528aebd55260917ff2218dab291f15b37ac351c3