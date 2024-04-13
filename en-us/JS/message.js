function respondToUser(comment) {
    let aiResponse;
    if (comment.includes('hello')) {
        aiResponse = 'Hello! How can I assist you today?';
    } else if (comment.includes('Thank you.')) {
        aiResponse = 'You're welcome! If you have any more questions, don't hesitate to ask.';
    } else if (comment.includes('sleep')) {
        aiResponse = 'It looks like it's time for you to take a break! Have a good rest. I'll be here later if you have any more questions. Good night!';
    } else if (comment.includes('what's the matter?')) {
        aiResponse = 'It's nothing.';
    } else if (comment.includes('Good morning.')) {
        aiResponse = 'Good morning.';
    } else if (comment.includes('good evening')) {
        aiResponse = 'Good evening!';
    } else if (comment.includes('chrononoteAI')) {
        aiResponse = 'How can I help you? <br>Please take your time.';
