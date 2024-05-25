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
    } else if (comment.includes('The email is')) {
        aiResponse = 'The email is <br>[outlook](https://outlook.com)<br>[Gmail](https://mail.google.com)';
    } else if (comment.includes('the email is')) {
        aiResponse = 'The email is <br>[outlook](https://outlook.com)<br>[Gmail](https://mail.google.com)';
    } else if (comment.includes('The Email is')) {
        aiResponse = 'The email is <br>[outlook](https://outlook.com)<br>[Gmail](https://mail.google.com)';
    } else if (comment.includes('The Email is')) {
        aiResponse = 'The email is <br>[outlook](https://outlook.com)<br>[Gmail](https://mail.google.com)';
    } else if (comment.includes('Today's schedule is')) {
        aiResponse = 'Take a look at Today's schedule! <br>[Google calendar](calendar.google.com)';
    } else if (comment.includes('today's schedule is')) {
        aiResponse = 'Take a look at today's schedule! <br>[Google calendar](calendar.google.com)';
    } else if (comment.includes('today's Schedule is')) {
        aiResponse = 'Take a look at today's Schedule! <br>[Google calendar](calendar.google.com)';
    } else if (comment.includes('Today's Schedule is')) {
        aiResponse = 'Take a look at Today's Schedule! <br>[Google calendar](calendar.google.com)';
    } else if (comment.includes('Calculate the.')) {
        const expression = comment.replace('Calculate the.', '').trim();
        const result = calculateExpression(expression);
        aiResponse = `The result is ${result}.`;
    } else {
        aiResponse = 'Sorry, I wasn't clear.';
    }
    addMessage('AI', aiResponse);
}

function escapeHtml(unsafeText) {
    return unsafeText.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}


function calculateExpression(expression) {
    try {
        return eval(expression);
    } catch (error) {
        console.error('Computational Errors:', error);
        return 'error';
    }
}
