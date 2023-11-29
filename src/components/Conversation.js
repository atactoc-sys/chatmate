// components/Conversation.js

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { sendMessage } from "../redux/actions/chatActions";
import Message from "./Message";


function Conversation() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const conversation = useSelector((state) =>
    state.chat.conversations.find((conv) => conv.id === id)
  );

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      dispatch(sendMessage(id, { sender: "You", text: newMessage }));
      setNewMessage("");
    }
  };

  if (!conversation) {
    // Handle conversation not found
    return <div>Conversation not found</div>;
  }

  return (
    <div className="conversation">
      <div className="messages">
        {conversation.messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Conversation;
