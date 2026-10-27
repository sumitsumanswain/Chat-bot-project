import { useState } from "react";
import LoderImage from "../assets/loading-spinner.gif";
import Chatbot from "../Chatbot.js";
import dayjs from "dayjs";
import "./ChatInput.css";



export function ChatInput({ setChatMessages }) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  async function sendMessage() {
    // Don't send empty messages
    if (inputText.trim() === "") {
      return;
    }

    // Save the current input before clearing it
    const currentInput = inputText;

    // Create user message
    const userMessage = {
      message: currentInput,
      sender: "user",
      id: crypto.randomUUID(),
      time: dayjs().valueOf()
    };

    // Create a unique ID for this loading message
    const loadingMessageId = crypto.randomUUID();

    // Create loading message
    const loadingMessage = {
      message: (
        <img
          src={LoderImage}
          className="loding-spinner"
          alt="Loading"
        />
      ),
      sender: "robot",
      id: loadingMessageId,
    };

    // Add user message and loading message
    setChatMessages((prevMessages) => [
      ...prevMessages,
      userMessage,
      loadingMessage,
    ]);

    // Clear input box
    setInputText("");

    // Get chatbot response
    const response = await Chatbot.getResponseAsync(currentInput);

    // Replace ONLY the matching loading message
    setChatMessages((prevMessages) =>
      prevMessages.map((chatMessage) => {
        if (chatMessage.id === loadingMessageId) {
          return {
            message: response,
            sender: "robot",
            id: loadingMessageId,
            time: dayjs().valueOf()
          };
        }

        return chatMessage;
      })
    );
  }

  function clearMessages(){
    setChatMessages([]);
  }

  return (
    <div className="chat-input-container">
      <input
        type="text"
        placeholder="Send a Message to Chatbot"
        size="30"
        onChange={saveInputText}
        value={inputText}
        className="chat-input"
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            sendMessage();
          }
        }}
      />

      <button onClick={sendMessage} className="send-button">
        Send
      </button>
      <button onClick={clearMessages} className="clear-button">
        Clear
      </button>
    </div>
  );
}