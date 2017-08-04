import {combineReducers} from 'redux';

import cards from "./cards";
import search from "./smartSearch";

export default combineReducers({
  cards,
  search
});