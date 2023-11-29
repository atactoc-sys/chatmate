import React, { useState } from "react";

function SearchBar({ conversations }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Check if conversations is defined before filtering
  const filteredConversations = conversations
    ? conversations.filter(
        (conversation) =>
          conversation.contact &&
          conversation.contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search conversations..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {/* Display filtered conversations */}
      <ul>
        {filteredConversations.map((conversation) => (
          <li key={conversation.id}>{conversation.contact.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchBar;
