// redux/reducers/chatReducer.js

import * as actionTypes from '../actions/actionTypes';

const initialState = {
  conversations: [],
};

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEND_MESSAGE:
      const { conversationId, message } = action.payload;
      return {
        ...state,
        conversations: state.conversations.map((conversation) =>
          conversation.id === conversationId
            ? {
                ...conversation,
                messages: [...conversation.messages, message],
              }
            : conversation
        ),
      };

    case actionTypes.START_CONVERSATION:
      const { contact } = action.payload;
      const existingConversation = state.conversations.find(
        (conversation) => conversation.contact.id === contact.id
      );

      if (existingConversation) {
        // If conversation already exists, return the current state
        return state;
      }

      const newConversation = {
        id: String(state.conversations.length + 1),
        contact: contact,
        messages: [],
      };

      return {
        ...state,
        conversations: [...state.conversations, newConversation],
      };

    default:
      return state;
  }
};

export default chatReducer;
