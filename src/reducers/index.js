import {combineReducers} from 'redux';

import cards from "./cards";
import search from "./smartSearch";
import lang from "./language";
import defaultLang from "./defaultLang";

export default combineReducers({
  defaultLang,
  cards,
  search,
  lang
});