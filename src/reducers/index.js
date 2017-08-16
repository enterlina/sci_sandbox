import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';

import cards from "./cards";
import specificCard from "./specificCard";
import search from "./smartSearch";
import lang from "./language";
import defaultLang from "./defaultLang";
import alert from "./alert";
import preloader from "./preloader";

export default combineReducers({
  routing: routerReducer,
  defaultLang,
  cards,
  search,
  lang,
  alert,
  preloader,
  specificCard
});