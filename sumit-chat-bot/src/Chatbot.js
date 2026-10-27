const Chatbot = {
  getResponse(inputText) {
    const message = inputText.toLowerCase();

    if (message.includes("who are you")) {
      return "I am a robot developed by Jagan. He is a great frontend developer. How can I help you today?";
    }

    if (message.includes("hello") || message.includes("hi")) {
      return "Hello! How can I help you?";
    }

    if (message.includes("how are you")) {
      return "I'm doing great! Thanks for asking.";
    }

    return "Sorry, I don't understand that yet.";
  },

  async getResponseAsync(inputText) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Chatbot.getResponse(inputText));
      }, 1000);
    });
  },
};

export default Chatbot;