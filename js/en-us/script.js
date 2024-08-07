wwindow.scriptLoaded = true;

console.log("script.js has been successfully loaded.");

function onSubmit(token) {
    const actionButton = document.getElementById('action-button');
    if (actionButton) {
        actionButton.disabled = false;
        console.log("reCAPTCHA検証に成功しました!");
    } else {
        console.error("Action button not found!");
    }
}

function moveToNewContent() {
    const originalContent = document.getElementById('original-content');
    const newContent = document.getElementById('new-content');

    if (originalContent && newContent) {
        originalContent.classList.add('fade-out');

        originalContent.addEventListener('animationend', function () {
            originalContent.style.display = 'none';
            newContent.style.display = 'block';
            newContent.classList.add('fade-in');
        }, { once: true });
    } else {
        if (!originalContent) {
            console.error("Original content not found!");
        }
        if (!newContent) {
            console.error("New content not found!");
        }
    }
}

function moveToNewerContent() {
    const newContent = document.getElementById('new-content');
    const newerContent = document.getElementById('newer-content');

    if (newContent && newerContent) {
        newContent.classList.add('slide-out');

        newContent.addEventListener('animationend', function () {
            newContent.style.display = 'none';
            newerContent.style.display = 'block';
            newerContent.classList.add('zoom-in');
        }, { once: true });
    } else {
        if (!newContent) {
            console.error("New content not found!");
        }
        if (!newerContent) {
            console.error("Newer content not found!");
        }
    }
}

// CSSファイルの読み込み確認
document.addEventListener('DOMContentLoaded', function() {
    const testElement = document.createElement('div');
    testElement.classList.add('test-style');
    document.body.appendChild(testElement);

    const computedStyle = window.getComputedStyle(testElement);
    const colorApplied = computedStyle.getPropertyValue('color') === 'rgb(255, 0, 0)';
    const displayApplied = computedStyle.getPropertyValue('display') === 'block';

    if (colorApplied && displayApplied) {
        console.log("style.css has been successfully loaded.");
    } else {
        console.error("style.css failed to load or styles are not applied correctly.");
        if (!colorApplied) {
            console.error("Expected color 'rgb(255, 0, 0)' but got '" + computedStyle.getPropertyValue('color') + "'.");
        }
        if (!displayApplied) {
            console.error("Expected display 'block' but got '" + computedStyle.getPropertyValue('display') + "'.");
        }
    }

    document.body.removeChild(testElement);
});

// nonceを生成し、CSPメタタグに適用する関数
document.addEventListener('DOMContentLoaded', function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesButton = document.getElementById('accept-cookies');
    const declineCookiesButton = document.getElementById('decline-cookies');
    function generateNonce(length) {
        const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let nonce = '';
        for (let i = 0; i < length; i++) {
            nonce += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        return nonce;
    }

    const nonce = generateNonce(16);
    const cspMetaTag = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    if (cspMetaTag) {
        cspMetaTag.setAttribute('content', cspMetaTag.getAttribute('content').replace(/'nonce-12345'/, `'nonce-${nonce}'`));
    }

    const scripts = document.querySelectorAll('script[src]');
    scripts.forEach(script => {
        script.setAttribute('nonce', nonce);
    });
    
    const cookieBanner = document.getElementById('notification');
    const userConsent = localStorage.getItem('userConsent');

    if (!userConsent) {
        cookieBanner.style.display = 'block';
    }

    acceptCookiesButton.addEventListener('click', function() {
        localStorage.setItem('userConsent', 'accepted');
        cookieBanner.style.display = 'none';
        enableThirdPartyCookies();
    });

    declineCookiesButton.addEventListener('click', function() {
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

});
