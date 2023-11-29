// redux/actions/chatActions.js

import * as actionTypes from "./actionTypes";

export const sendMessage = (conversationId, message) => ({
  type: actionTypes.SEND_MESSAGE,
  payload: { conversationId, message },
});

export const startConversation = (contact) => ({
  type: actionTypes.START_CONVERSATION,
  payload: contact,
});
