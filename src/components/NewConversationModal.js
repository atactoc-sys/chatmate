// components/NewConversationModal.js

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { startConversation } from "../redux/actions/chatActions";
import Button from "./common/Button";

function NewConversationModal() {
  const users = useSelector((state) => state.users || []);
  const conversations = useSelector((state) => state.chat.conversations || []);
  const dispatch = useDispatch();

  const handleStartConversation = (user) => {
    const existingConversation = someLogicToCheckExistingConversation(
      user.id,
      conversations
    );

    if (existingConversation) {
      console.log(`Open existing conversation with ${user.name}`);
    } else {
      dispatch(startConversation(user));
      console.log(`Start a new conversation with ${user.name}`);
    }
  };

  const someLogicToCheckExistingConversation = (userId, conversations) => {
    // Check if there is a conversation with the given userId
    return conversations.some(
      (conversation) =>
        conversation.contact && conversation.contact.id === userId
    );
  };

  return (
    <div className="new-conversation-modal">
      <h2>New Conversation</h2>
      {users.map((user) => (
        <div key={user.id}>
          {user.name}
          <Button onClick={() => handleStartConversation(user)}>
            Start Conversation
          </Button>
        </div>
      ))}
    </div>
  );
}

export default NewConversationModal;
