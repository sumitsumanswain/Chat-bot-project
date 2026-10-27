import {useEffect}from "react";
import Chatbot from "../Chatbot.js";
function ChatbotSetup(){
  useEffect(() => {
  Chatbot.addResponses({
    "what is your favorite color": "My favorite color is blue!",
    "what is your favorite food": "I love pizza!",
    "where do you live": "I live inside your computer!",
    "who is sumit": "Sumit is a Software Developer. He is also one of the best cricket players in his area.",
    "tell me a joke": "Why did the computer go to the doctor? Because it had a virus!",
    "who am i": "You're the person sitting in front of the screen typing questions to a chatbot!",
  });
}, []);
  return null;
}
export default ChatbotSetup;