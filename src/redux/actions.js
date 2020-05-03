import { createAction } from "@reduxjs/toolkit";
import * as types from "./types";

export const addContact = createAction(types.ADD_CONTACT);
export const deleteContact = createAction(types.DELETE_CONTACT);
export const searchContact = createAction(types.SEARCH_CONTACT);
export const showNotify = createAction(types.SHOW_NOTIFICATION);
