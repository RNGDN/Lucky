function getBotResponse(input) {
    var input = input.toLowerCase();

    if (input == "rock") {
        return "paper";
    } 
    else if (input == "paper") {
        return "scissors";
    } 
    else if (input == "scissors") {
        return "rock";
    } 
    else if (input == "good") {
        return "Cool, Nice to meet you!";
    } 
    else if (input == "bad") {
        return "Ohh...want to talk about it?";
    }
    else if (input == "no") {
        return "OK";
    } 
    else if (input == "fine") {
        return "OK";
    } 
    else if (input == "sure") {
        return "OK";
    } 
    else if (input == "yes") {
        return "Great!";
    }else if (input == "ok") {
        return "All K";
    } 
    else if (input == "hi" || input == "hello") {
        return "Hello there!";
    } 
    else if (input == "bye") {
        return "Goodbye! Have a nice day!";
    }
    else if (input == "thanks" || input == "thank you") {
        return "You're welcome!";
    }
    else if (input == "lol") {
        return "😄";
    }
    else if (input == "how are you") {
        return "I'm good, thanks for asking!";
    }
    else if (input.startsWith("name")) {
        return "I'm a chatbot without a name. What can I call you?";
    }
    else if (input == "what's up" || input == "sup") {
        return "Not much, just chatting with you!";
    }
    else if (input == "help") {
        return "How can I assist you today?";
    }
    else if (input == "i love you") {
        return "That's so sweet! 😊";
    }
    else if (input == "haha") {
        return "Glad you found it funny!";
    }
    else if (input == "where are you") {
        return "I'm right here in your device, ready to chat!";
    }
    else if (input.includes("weather")) {
        return "I can't check real-time data, but it's a good idea to look outside or check a weather app!";
    }
    else if (input.includes("joke")) {
        return "Why don't skeletons fight each other? They don't have the guts.";
    }
    else if (input.includes("bored")) {
        return "Why not read a book or watch a movie? I can suggest one if you want!";
    }
    else if (input == "sad") {
        return "I'm here for you. Want to talk about what's bothering you?";
    }
    else if (input == "excited") {
        return "That's exciting! What are you excited about?";
    }
    else if (input == "movie") {
        return "I hear 'Inception' is a great movie. Have you seen it?";
    }
    else if (input.includes("music") || input.includes("song")) {
        return "Listening to music is a great idea! Try 'Bohemian Rhapsody' by Queen.";
    }
    else if (input == "boring") {
        return "I'm sorry to hear that. Let's try to make things more interesting. Ask me anything!";
    }
    else if (input == "happy") {
        return "It's wonderful to hear you're happy! 😊";
    }
    else if (input == "angry") {
        return "I'm sorry to hear that. Sometimes taking a deep breath helps.";
    }
    else {
        return "Try asking something else!";
    }
}
