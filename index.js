document.getElementById('sendBtn').addEventListener('click', function() {
    let userInput = document.getElementById('userInput').value;
    
    if (userInput.trim() !== "") {
        // Display user's message
        displayMessage(userInput, 'user');
        document.getElementById('userInput').value = ''; // Clear input field

        // Get bot's response based on user's input
        let botResponse = getBotResponse(userInput);
        
        // Display bot's response
        setTimeout(() => {
            displayMessage(botResponse, 'bot');
        }, 1000);
    }
});

function displayMessage(message, sender) {
    let messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.innerText = message;
    document.getElementById('chatbox').appendChild(messageDiv);
    document.getElementById('chatbox').scrollTop = document.getElementById('chatbox').scrollHeight; // Scroll to the latest message
}

function getBotResponse(userMessage) {
    const responses = {
        "hi": "Hello! How can I assist you today?",
        "how are you": "I'm doing great, thank you for asking!",
        "whats your name": "I am a ChatBot. I don't have a personal name.",
        "good morning": "Good morning! How can I help you today?",
        "what is java": "Java is a popular programming language used for building applications.",
        "what is html": "HTML (HyperText Markup Language) is used to create the structure of web pages.",
        "what is css": "CSS (Cascading Style Sheets) is used for styling web pages and making them look nice.",
        "what is js": "JavaScript is a programming language used to create interactive effects on web pages.",
        "what is chatbot": "A chatbot is a software designed to simulate human conversation.",
        "translate": "Sure, I can help with translation. What would you like me to translate?",
        "joke": "Why don't skeletons fight each other? They don't have the guts!",
        "hello": "Hi there! How can I assist you today?"
    };

    // Normalize user input and check for a response
    let userMessageLower = userMessage.toLowerCase().trim();
    return responses[userMessageLower] || "Sorry, I didn't understand that.";
}
