import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';

import cards from "./cards";
import specificCard from "./specificCard";
import search from "./smartSearch";
import lang from "./language";
import defaultLang from "./defaultLang";
import alert from "./alert";
import preloader from "./preloader";
import people from "./people";
import filterPeople from "./filterPeople";
import specificPeople from "./specificPeople";
import routerLocations from "./path";

export default combineReducers({
  routing: routerReducer,
  defaultLang,
  cards,
  search,
  lang,
  alert,
  preloader,
  filterPeople,
  specificCard,
  people,
  specificPeople,
  routerLocations
});