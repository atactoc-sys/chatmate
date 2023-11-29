// components/Message.js

import React from "react";

function Message({ messages }) {
  if (!messages) {
    return null; // or some default content
  }

  return (
    <div className="message">
      {messages.map((message) => (
        <div key={message.id}>
          <p>
            {message.sender}: {message.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Message;
