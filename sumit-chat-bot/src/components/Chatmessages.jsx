
import { useRef, useEffect } from "react";
import {ChatMessage} from "./ChatMessage"

import "./ChatMessges.css";

export function useAutoScroll(dependencies) {
  const containerRef = useRef(null);

  useEffect(() => {
    const containerElement = containerRef.current;

    if (containerElement) {
      containerElement.scrollTop = containerElement.scrollHeight;
    }
  }, dependencies);

  return containerRef;
}


function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useAutoScroll([chatMessages]);

  return (
    <div
      className="chat-message-container"
      ref={chatMessagesRef}
    >
      {chatMessages.map((chatMessage) => (
        <ChatMessage
          key={chatMessage.id}
          message={chatMessage.message}
          sender={chatMessage.sender}
          time={chatMessage.time}
        />
      ))}
    </div>
  );
}
export default ChatMessages;