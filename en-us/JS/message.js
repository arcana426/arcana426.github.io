function respondToUser(comment) {
    let aiResponse;
    if (comment.includes('hello')) {
        aiResponse = 'Hello! How can I assist you today?';
     if (comment.includes('Hello')) {
         aiResponse = 'Hello! How can I assist you today?';
    } else if (comment.includes('Thank you.')) {
        aiResponse = 'You're welcome! If you have any more questions, don't hesitate to ask.';
    } else if (comment.includes('Thank You.')) {
        aiResponse = 'You're welcome! If you have any more questions, don't hesitate to ask.';
    } else if (comment.includes('sleep')) {
        aiResponse = 'It looks like it's time for you to take a break! Have a good rest. I'll be here later if you have any more questions. Good night!';
    } else if (comment.includes('Sleep')) {
        aiResponse = 'It looks like it's time for you to take a break! Have a good rest. I'll be here later if you have any more questions. Good night!';
    } else if (comment.includes('what's the matter?')) {
        aiResponse = 'Nothing's the matter!';
    } else if (comment.includes('What's the Matter?')) {
        aiResponse = 'Nothing's the Matter!';
    } else if (comment.includes('What's the matter?')) {
        aiResponse = 'Nothing's the matter!';
    } else if (comment.includes('what's the Matter?')) {
        aiResponse = 'Nothing's the matter!';
    } else if (comment.includes('Good morning.')) {
        aiResponse = 'Good morning! How can we help you today?';
    } else if (comment.includes('Good Morning.')) {
        aiResponse = 'Good morning! How can we help you today?';
    } else if (comment.includes('good Morning.')) {
        aiResponse = 'Good morning! How can we help you today?';
    } else if (comment.includes('good morning.')) {
        aiResponse = 'Good morning! How can we help you today?';
    } else if (comment.includes('Good evening')) {
        aiResponse = 'Good evening! What can I do for you tonight?';
    } else if (comment.includes('Good Evening')) {
        aiResponse = 'Good evening! What can I do for you tonight?';
    } else if (comment.includes('good evening')) {
        aiResponse = 'Good evening! What can I do for you tonight?';
    } else if (comment.includes('good Evening')) {
        aiResponse = 'good Evening! What can I do for you tonight?';
    } else if (comment.includes('chrononoteAI')) {
        aiResponse = 'How can I help you? <br>Please take your time.';
    } else if (comment.includes('ChrononoteAI')) {
        aiResponse = 'How can I help you? <br>Please take your time.';
    } else if (comment.includes('Chrononoteai')) {
        aiResponse = 'How can I help you? <br>Please take your time.';
    } else if (comment.includes('chrononoteai')) {
        aiResponse = 'How can I help you? <br>Please take your time.';
    } else if (comment.includes('Arcana')) {
        aiResponse = 'Mr. Arcana is one of the people who made me. I am Arcana and chatGPT3.5.';
    } else if (comment.includes('arcana')) {
        aiResponse = 'Mr. arcana is one of the people who made me. I am arcana and chatGPT3.5.';
    } else if (comment.includes('Arcana426')) {
        aiResponse = 'Mr. Arcana is one of the people who made me. I am Arcana426 and chatGPT3.5.';
    } else if (comment.includes('arcana426')) {
        aiResponse = 'Mr. arcana is one of the people who made me. I am arcana426 and chatGPT3.5.';
    } else if (comment.includes('Change Log')) {
        aiResponse = 'Click here for updated record<br>https://arcana426.github.com/en-us/change-log.md';
    } else if (comment.includes('最新のメールは')) {
        aiResponse = '新しいメールは2件です。<br><strong>メール1</strong><br><strong>From Arcana team</strong><br>user様へ<br>アカウント登録が完了しました。<strong><br>メール2</strong><br><strong>Microsoft Git hubチームから</strong></strong><br>Yoidea様へ<br>アカウント登録が完了しました。<br>';
    } else if (comment.includes('ChrononoteAI')) {
        aiResponse = '何かようですか？<br>ゆっくりしていってください。';
    } else if (comment.includes('今日の予定は')) {
        aiResponse = '今日の予定は以下の通りです。<br>・10:00 - 会議<br>・13:00 - ランチ<br>・15:00 - プレゼン準備';
    } else if (comment.includes('を再生して')) {
        const keyword = comment.split('を再生して')[0].trim();
        playMusic(keyword);
        return
    } else if (comment.includes('を計算して')) {
        const expression = comment.replace('を計算して', '').trim();
        const result = calculateExpression(expression);
        aiResponse = `計算結果は${result}です。`;
    } else {
        aiResponse = 'すみません、よくわかりませんでした。';
    }
    addMessage('AI', aiResponse);
}

function escapeHtml(unsafeText) {
    return unsafeText.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}


// ユーザーの入力が数式であるかどうかを判定し、数式が有効であれば結果を計算して返す関数
function calculateExpression(expression) {
    try {
        // evalを使用して式を評価
        return eval(expression);
    } catch (error) {
        console.error('計算エラー:', error);
        return 'できなかった';
    }
}
