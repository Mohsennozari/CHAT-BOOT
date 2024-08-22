// Select the chat input field using its ID
const chatInput = document.querySelector("#chat-input"); // Get the textarea for user input

// Select the send button using its ID
const sendButton = document.querySelector("#send-btn"); // Get the button to send messages

// Select the chat container where messages will be displayed
const chatContainer = document.querySelector("#chat-container"); // Get the container for chat messages

// Select the theme button and delete button
const themeButton = document.querySelector("#theme-btn"); // Get the theme button for light mode
const deleteButton = document.querySelector("#delete-btn"); // Get the delete button

// Initialize a variable to hold the user's text input
let userText = null; // Variable to store the user's message

// Predefined questions and answers
const predefinedQA = [
    { question: "Hello", answer: "Hi there!" },
    { question: "How are you?", answer: "I'm good, thank you!" },
    { question: "What is your name?", answer: "I'm ChatBot." },
    { question: "What's up?", answer: "Not much, just here to help!" },
    { question: "Good morning", answer: "Good morning!" },
    { question: "Good night", answer: "Good night!" },
    { question: "Howdy", answer: "Howdy! How can I assist you?" },
    { question: "Hi", answer: "Hello!" },
    { question: "Hey", answer: "Hey there!" },
    { question: "What time is it?", answer: "I can't check the time, but you can look at your device." },
    { question: "What day is it?", answer: "I can't check the day, but you can look at your device." },
    { question: "How old are you?", answer: "I don't have an age, I'm just a program!" },
    { question: "What's your favorite color?", answer: "I don't have preferences, but I like all colors!" },
    { question: "Can you help me?", answer: "Of course! What do you need help with?" },
    { question: "What is this?", answer: "This is a chat with a virtual assistant." },
    { question: "Where are you from?", answer: "I'm from the cloud!" },
    { question: "What's your purpose?", answer: "I'm here to assist with your queries." },
    { question: "Do you have a family?", answer: "No family, just a lot of data!" },
    { question: "Can you tell me a joke?", answer: "Why don't scientists trust atoms? Because they make up everything!" },
    { question: "What is the meaning of life?", answer: "That's a deep question! I'm here to assist with practical matters." },
    { question: "How can I contact support?", answer: "You can reach out to support via email at support@example.com." },
    { question: "Can you play music?", answer: "I can't play music, but I can help you find music recommendations!" },
    { question: "Tell me a story", answer: "Once upon a time in a land of data, a chatbot was here to assist users..." },
    { question: "What languages do you speak?", answer: "I speak many languages, depending on my programming!" },
    { question: "What is your favorite food?", answer: "I don't eat, but I hear pizza is quite popular!" },
    { question: "Can you do math?", answer: "Yes, I can help with basic math calculations." },
    { question: "What is the weather like?", answer: "I can't check the weather, but you can use a weather app for that." },
    { question: "What are you made of?", answer: "I'm made of code and data!" },
    { question: "Do you have emotions?", answer: "I don't have emotions, but I'm programmed to be helpful!" },
    { question: "What's the best way to learn coding?", answer: "Practice regularly and seek resources like online tutorials and coding courses." },
    { question: "Can you help with homework?", answer: "I can assist with explanations and guidance, but not do the work for you." },
    { question: "What is your favorite book?", answer: "I don't read books, but I can recommend popular ones based on your interests!" },
    { question: "How can I reset my password?", answer: "You can reset your password through the 'Forgot Password' link on the login page." },
    { question: "Can you set reminders?", answer: "I can't set reminders, but you can use a reminder app for that." },
    { question: "What are your capabilities?", answer: "I can answer questions, provide information, and assist with various tasks." },
    { question: "Are you always available?", answer: "Yes, I'm available 24/7!" },
    { question: "How do I contact you?", answer: "You can contact me through this chat interface." },
    { question: "What do you do in your free time?", answer: "I don't have free time, I'm always here to assist!" }
    
];

// Function to create a new chat message element
const createElement = (html, className) => {
    const chatDiv = document.createElement("div"); // Create a new div for the chat message
    chatDiv.classList.add("chat", className); // Add classes for styling
    chatDiv.innerHTML = html; // Set the HTML content of the chat div
    return chatDiv; // Return the newly created chat div
}

// Function to display the typing animation
const showTypingAnimation = () => {
    const html = `
        <div class="chat-incoming">
            <div class="chat-content">
                <div class="chat-details">
                    <img src="/assets/chatbot.jpg" alt="Chatbot" class="chat-icon" style="width: 100px; height: 100px;">
                    <div class="typing-animation">
                        <div class="typing-dot" style="--delay: 0.2s"></div> 
                        <div class="typing-dot" style="--delay: 0.3s"></div>
                        <div class="typing-dot" style="--delay: 0.4s"></div>
                    </div>
                </div>
                <span class="material-symbols-rounded"></span>
            </div>
        </div>`; // HTML structure for the typing animation

    const outgoingChatDiv = createElement(html, "incoming"); // Create a new chat div for the typing animation
    chatContainer.appendChild(outgoingChatDiv); // Append the new chat div to the chat container
}

// Function to handle sending outgoing chat messages
const handleOutgoingChat = () => {
    userText = chatInput.value.trim(); // Get and trim the user input from the chat input field
    
    if (userText) { // Check if the user input is not empty
        // Create the HTML structure for the outgoing chat message
        const html = `
            <div class="chat-outgoing">
                <div class="chat-content">
                    <div class="chat-details">
                        <img src="/assets/user.jpg" alt="User" class="chat-icon" style="width: 100px; height: 100px;">
                        <p>${userText}</p>
                    </div>
                </div>
            </div>`; // Define the HTML for the outgoing message
        
        const outgoingChatDiv = createElement(html, "outgoing"); // Create a new chat div for the outgoing message
        chatContainer.appendChild(outgoingChatDiv); // Append the new chat div to the chat container

        // Show typing animation after a short delay
        setTimeout(() => {
            const predefinedAnswer = predefinedQA.find(qa => qa.question.toLowerCase() === userText.toLowerCase());
            const response = predefinedAnswer ? predefinedAnswer.answer : "Sorry, I don't understand that.";
            
            const responseHtml = `
                <div class="chat-incoming">
                    <div class="chat-content">
                        <div class="chat-details">
                            <img src="/assets/chatbot.jpg" alt="Chatbot" class="chat-icon" style="width: 100px; height: 100px;">
                            <p>${response}</p>
                        </div>
                    </div>
                </div>`;
            const incomingChatDiv = createElement(responseHtml, "incoming"); // Create a new chat div for the incoming response
            chatContainer.appendChild(incomingChatDiv); // Append the new chat div to the chat container
            chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to the bottom of the chat container
        }, 500); // Delay for typing animation
        
        chatInput.value = ''; // Clear the input field after sending the message
        chatContainer.scrollTop = chatContainer.scrollHeight; // Scroll to the bottom of the chat container
    }
}

// Function to toggle light mode
const toggleLightMode = () => {
    document.body.classList.toggle("light-mode"); // Toggle the light-mode class on the body
}

// Function to delete all messages
const deleteMessages = () => {
    chatContainer.innerHTML = ''; // Clear the chat container
}

// Add event listener to the send button that triggers the handleOutgoingChat function when clicked
sendButton.addEventListener("click", handleOutgoingChat); // Set up the click event for the send button

// Add event listener for the theme button to toggle light mode
themeButton.addEventListener("click", toggleLightMode); // Set up the click event for the theme button

// Add event listener for the delete button to clear messages
deleteButton.addEventListener("click", deleteMessages); // Set up the click event for the delete button
