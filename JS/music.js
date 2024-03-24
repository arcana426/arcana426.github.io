        // 会話中に再生される音楽リスト
        const musicPlaylist = {
            '面白い映像': 'https://www.youtube.com/embed/UhHWk7s_IG0',
            '面白い動画': 'https://www.youtube.com/embed/UhHWk7s_IG0',
            'おもしろい映像': 'https://www.youtube.com/embed/UhHWk7s_IG0',
            'おもしろい動画': 'https://www.youtube.com/embed/UhHWk7s_IG0',
            'happy': 'https://www.youtube.com/embed/4U_1LWcVzQs',
            'energetic': 'https://www.youtube.com/embed/ZHZi1dqMN4o',
            '晴る': 'https://www.youtube.com/embed/iqsnJJK8GA4'
        };

        // 特定の言葉が含まれる場合、音楽を再生する関数
        function playMusic(keyword) {
            const videoId = musicPlaylist[keyword];
            if (videoId) {
                const playerContainer = document.createElement('div');
                playerContainer.className = 'video-container';
                playerContainer.innerHTML = `
                    <iframe width="560" height="315" src="${videoId}" frameborder="0" allowfullscreen></iframe>
                `;
                addMessage('AI', `「${keyword}」を再生します。`);
                conversation.appendChild(playerContainer);
            } else {
                addMessage('AI', `申し訳ありません、「${keyword}」の曲は見つかりませんでした。`);
            }
        }