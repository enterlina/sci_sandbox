import {combineReducers} from 'redux';

import cards from "./cards";
import search from "./smartSearch";
import lang from "./language";
import defaultLang from "./defaultLang";
import alert from "./alert";
import preloader from "./preloader";

export default combineReducers({
  defaultLang,
  cards,
  search,
  lang,
  alert,
  preloader
});