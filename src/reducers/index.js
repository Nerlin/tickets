import { combineReducers } from "redux";
import { ticketsReducer } from "./tickets";


export const rootReducer = combineReducers({
  tickets: ticketsReducer
});