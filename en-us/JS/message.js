function respondToUser(comment) {
    let aiResponse;
    if (comment.includes('hello')) {
        aiResponse = 'Hello! How can I assist you today?';
    } else if (comment.includes('Thank you.')) {
        aiResponse = 'You're welcome! If you have any more questions, don't hesitate to ask.';
    } else if (comment.includes('sleep')) {
        aiResponse = 'It looks like it's time for you to take a break! Have a good rest. I'll be here later if you have any more questions. Good night!';
    } else if (comment.includes('どうしたの')) {
        aiResponse = 'なんでもありません。';
    } else if (comment.includes('おはよう')) {
        aiResponse = 'おはようございます。';
    } else if (comment.includes('こんばんは')) {
        aiResponse = 'こんばんは!';
    } else if (comment.includes('chrononoteAI')) {
        aiResponse = '何かようですか？<br>ゆっくりしていってください。';
    } else if (comment.includes('hello')) {
        aiResponse = 'hello!';
    } else if (comment.includes('arcana')) {
        aiResponse = 'arcanaさんは私を作った一人です。私は、澤崎さんとchatGPT3.5です。';
    } else if (comment.includes('arcanaさん')) {
        aiResponse = 'arcanaさんは私を作った一人です。私は、澤崎さんとchatGPT3.5です。';
    } else if (comment.includes('更新記録は')) {
        aiResponse = 'chat chrononoteAIの更新記録は以下の通りです。<br>2024年 ?月?日<br>音声入力で何かを言ったら「こんにちは!私はAIです。」というように更新しました。<br>2024年?月?日<br>特定の言葉を言うと特定の返しをするように更新しました。<br>2024年?月?日<br>特定の返しをする言葉を多くしました。<br>2024年?月?日<br>テキストボックスを追加しました。<br>2024年?月?日<br>bulmaを適用しました。<br>2024年?月?日<br>一番最初に、「何でもお手伝いします。」と表示するようにしました。<br>2024年?月?日<br>削除機能を追加しました。<br>2024年?月?日<br>音声入力をしている場合は入力停止ボタンを表示するように更新しました。<br>2024年?月?日<br>音声入力、停止ボタンをfontawesomeのiconにしました。<br>2024年?月?日<br>コメントのテクストボックスの表示をパソコン表示は広くし、スマホ表示は狭くしました。<br>2024年3月19日<br>マイクを使用するときに「音声入力が有効になりました。」と表示されるようになりました。';
    } else if (comment.includes('最新のメールは')) {
        aiResponse = '新しいメールは2件です。<br><strong>メール1</strong><br><strong>Googleチームから</strong><br>Yoidea様へ<br>アカウント登録が完了しました。<strong><br>メール2</strong><br><strong>Microsoft Git hubチームから</strong></strong><br>Yoidea様へ<br>アカウント登録が完了しました。<br>';
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
