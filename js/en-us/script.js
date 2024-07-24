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
    const cspMetaTag = document.getElementById('csp-meta-tag');
    if (cspMetaTag) {
        cspMetaTag.setAttribute('content', cspMetaTag.getAttribute('content').replace(/'nonce-12345'/, `'nonce-${nonce}'`));
    }

    // nonceをスクリプトタグに追加
    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach(script => {
        script.setAttribute('nonce', nonce);
    });

    // style.css が読み込まれているか確認
    const testElement = document.createElement('div');
    testElement.classList.add('test-style');
    document.body.appendChild(testElement);

    const styleApplied = window.getComputedStyle(testElement).getPropertyValue('color') === 'red';
    if (styleApplied) {
        console.log("style.css has been successfully loaded.");
    } else {
        console.error("style.css failed to load.");
    }

    document.body.removeChild(testElement);
    
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

    // ページ読み込み時にユーザーの選択に基づいてサードパーティクッキーの使用を制御
    const cookieBanner = document.getElementById('notification');
    const userConsent = localStorage.getItem('userConsent');

    if (!userConsent) {
        cookieBanner.style.display = 'block';
    }

    document.getElementById('accept-cookies').addEventListener('click', function() {
        localStorage.setItem('userConsent', 'accepted');
        cookieBanner.style.display = 'none';
        enableThirdPartyCookies();
    });

    document.getElementById('decline-cookies').addEventListener('click', function() {
        localStorage.setItem('userConsent', 'declined');
        cookieBanner.style.display = 'none';
        disableThirdPartyCookies();
    });

    function enableThirdPartyCookies() {
        console.log("サードパーティクッキーが有効になりました。");
    }

    function disableThirdPartyCookies() {
        console.log("サードパーティクッキーが無効になりました。");
    }

    if (userConsent === 'accepted') {
        enableThirdPartyCookies();
    } else if (userConsent === 'declined') {
        disableThirdPartyCookies();
    }

    // style.css が読み込まれているか確認
    const testElement = document.createElement('div');
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
