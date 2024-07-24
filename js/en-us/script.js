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

// nonceを生成し、CSPメタタグに適用する関数
document.addEventListener('DOMContentLoaded', function() {
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

    document.addEventListener('DOMContentLoaded', function() {
        // Create a test element
        const testElement = document.createElement('div');
        testElement.classList.add('test-style'); // Add the class name for styling
    
        // Append the element to the body (required for styles to apply)
        document.body.appendChild(testElement);
    
        // Get the computed style of the element
        const computedStyle = window.getComputedStyle(testElement);
    
        // Check if the desired styles are applied
        const colorApplied = computedStyle.getPropertyValue('color') === 'rgb(255, 0, 0)'; // Red color
        const displayApplied = computedStyle.getPropertyValue('display') === 'block';
    
        // Log messages based on the results
        if (colorApplied) {
            console.log("Color style is successfully applied.");
        } else {
            console.error("Color style is not applied correctly.");
        }
    
        if (displayApplied) {
            console.log("Display style is successfully applied.");
        } else {
            console.error("Display style is not applied correctly.");
        }
    
        // Overall CSS load status
        if (colorApplied && displayApplied) {
            console.log("style.css has been successfully loaded.");
        } else {
            console.error("style.css failed to load or some styles are not applied correctly.");
        }
    
        // Remove the test element
        document.body.removeChild(testElement);
    });
    
    
    

    
    // クッキー通知バーの表示・非表示
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
});
