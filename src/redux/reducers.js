import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import * as types from "./types";

const contactsReducer = createReducer([], {
  [types.ADD_CONTACT]: (state, action) => {
    return [action.payload, ...state];
  },

  [types.DELETE_CONTACT]: (state, action) => {
    return state.filter((contact) => contact.id !== action.payload);
  },
});

const filterReducer = createReducer("", {
  [types.SEARCH_CONTACT]: (state, action) => {
    return action.payload;
  },
});

const notifyReducer = createReducer("", {
  [types.SHOW_NOTIFICATION]: (state, action) => {
    return action.payload;
  },
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  notifyText: notifyReducer,
});
