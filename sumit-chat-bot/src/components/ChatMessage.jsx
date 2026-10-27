import dayjs from "dayjs"; //importing dayjs default path name.
import RobotProfileImage from "../assets/Robot.png";
import UserProfileImage from "../assets/Sender-avtar.png";

import "./ChatMessage.css";//import the css file 



export function ChatMessage({ message, sender,time }) {
  return (
    <div
      className={
        sender === "user"
          ? "chat-message-user"
          : "chat-message-robot"
      }
    >
      {/* Robot avatar */}
      {sender === "robot" && (
        <img
          src={RobotProfileImage}
          className="chat-messages-profile"
          alt="Robot"
        />
      )}

      {/* Message */}
      <div className="chat-messages-text">
        {message}
        {time && (
          <div className='chat-message-time'>
            {dayjs(time).format('h:mma')}
          </div>
        )}
      </div>

      {/* User avatar */}
      {sender === "user" && (
        <img
          src={ UserProfileImage}
          className="chat-messages-profile"
          alt="User"
        />
      )}
    </div>
  );
}