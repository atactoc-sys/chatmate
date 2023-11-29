// components/ConversationList.js

import React, { useState } from "react";
import { useSelector } from "react-redux";
//import Message from "./Message";
import Conversation from "./Conversation";
import SearchBar from "./SearchBar";

function ConversationList() {
  const conversations = useSelector((state) => state.chat.conversations);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter conversations based on the search term
  const filteredConversations = conversations.filter((conversation) =>
    conversation.contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="conversation-list">
      <SearchBar
        conversations={conversations}
        searchTerm={searchTerm}
        onSearchTermChange={setSearchTerm}
      />
      {filteredConversations.map((conversation) => (
        <Conversation key={conversation.id} conversation={conversation} />
      ))}
    </div>
  );
}

export default ConversationList;
