import React from "react";
import "./Message.css";

import ReactEmoji from "react-emoji";

const Message = ({ message: { user, text }, name }) => {
  let isSendByCurrentUser = false;
  const trimmedNamed = name.trim().toLowerCase();

  if (user === trimmedNamed) {
    isSendByCurrentUser = true;
  }

  return isSendByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{trimmedNamed}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">{text}</p>
      </div>
      <p className="sentText pl-10">{user}</p>
    </div>
  );
};

export default Message;
