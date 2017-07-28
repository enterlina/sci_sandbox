import React from "react";
import ReactDOM from 'react-dom';
import { AppContainer } from "react-hot-loader";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from "./components/App";

require("!style-loader!css-loader!sass-loader!./components/scss/fonts.scss");
require("!style-loader!css-loader!sass-loader!./components/scss/core.scss");
require("!style-loader!css-loader!sass-loader!./components/scss/utils.scss");

const rootEl = document.getElementById("root");
const initialState = [];

let data = [{
  type: "Meetup",
  title: "PLASMONA - ТЕСТ НА НАРКОТИКИ В ДОМАШНИХ УСЛОВИЯХ",
  sphere: "Медицина",
  theme: "bg-purple",
  author: {
    name: "ВАЛЕРИЙ КАЗАНЦЕВ",
    descr: "химик, институт неорганической химии"
  },
  date: "19.10.2017 18:00",
  place: "ПВТ, КУПРЕВИЧА 1/5"
}, 
{
  type: "Plasma",
  title: "PLASMONA - ТЕСТ НА НАРКОТИКИ В ДОМАШНИХ УСЛОВИЯХ",
  sphere: "Медицина",
  author: {
    name: "ВАЛЕРИЙ КАЗАНЦЕВ",
    descr: "химик, институт неорганической химии"
  }
},
{
  type: "Startup",
  title: "PLASMONA - ТЕСТ НА НАРКОТИКИ В ДОМАШНИХ УСЛОВИЯХ",
  sphere: "Медицина",
  theme: "bg-purple",
  author: {
    name: "ВАЛЕРИЙ КАЗАНЦЕВ",
    descr: "химик, институт неорганической химии"
  }
},
{
  type: "Startup",
  title: "PLASMONA - ТЕСТ НА НАРКОТИКИ В ДОМАШНИХ УСЛОВИЯХ",
  sphere: "Медицина",
  author: {
    name: "ВАЛЕРИЙ КАЗАНЦЕВ",
    descr: "химик, институт неорганической химии"
  }
},
{
  type: "Research",
  title: "PLASMONA - ТЕСТ НА НАРКОТИКИ В ДОМАШНИХ УСЛОВИЯХ",
  sphere: "Медицина",
  theme: "bg-yellow",
  author: {
    name: "ВАЛЕРИЙ КАЗАНЦЕВ",
    descr: "химик, институт неорганической химии"
  }
},
{
  type: "Research",
  title: "PLASMONA - ТЕСТ НА НАРКОТИКИ В ДОМАШНИХ УСЛОВИЯХ",
  sphere: "Медицина",
  theme: "bg-image-1",
  author: {
    name: "ВАЛЕРИЙ КАЗАНЦЕВ",
    descr: "химик, институт неорганической химии"
  }
},
{
  type: "Tender",
  title: "PLASMONA - ТЕСТ НА НАРКОТИКИ В ДОМАШНИХ УСЛОВИЯХ",
  sphere: "Медицина",
  theme: "bg-blue",
  author: {
    name: "ВАЛЕРИЙ КАЗАНЦЕВ",
    descr: "химик, институт неорганической химии"
  },
  date: "19.10.2017 18:00",
  activity: "Конкурс"
}];


ReactDOM.render(
            <App data={data}/>,
        rootEl
    );
