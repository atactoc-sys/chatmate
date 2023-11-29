// ChatApp.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import ConversationList from "./ConversationList";
import NewConversationModal from "./NewConversationModal";
import Conversation from "./Conversation";

function ChatApp() {
  console.log("Rendering ChatApp");
  const user = useSelector((state) => state.auth.user);
  const conversations = useSelector((state) => state.chat.conversations);
  

  if (!user) {
    console.log("User not logged in");
    return <Navigate to="/login" />;
  }
  return (
    <div className="chat-app">
      
      <ConversationList conversations={conversations} />
      <NewConversationModal />
      <Conversation />
    </div>
  );
}

export default ChatApp;
