
import { useState , useEffect} from "react";
import {ChatInput} from "./components/ChatInput.jsx";
import ChatMessages from "./components/ChatMessages"



import "./App.css";

 

function App() {
  const [chatMessages, setChatMessages] =  
  useState(JSON.parse(localStorage.getItem('messages')) || [{    
      message: 'hello chatbot',
      sender: 'user',
      id: 'id1',
  },]);



  useEffect(() => {
    localStorage.setItem('messages', JSON.stringify(chatMessages));
  }, [chatMessages]);

  return (
    <div className="app-container">

      {/* Welcome message */}
      {chatMessages.length === 0 && (
        <p className="welcome-message">
          Welcome to the chatbot project! Send a message
          using the text box below.
        </p>
      )}

      {/* Chat messages */}
      <ChatMessages chatMessages={chatMessages} />

      {/* Chat input */}
      <ChatInput setChatMessages={setChatMessages} />

    </div>
  );
}

export default App;
 