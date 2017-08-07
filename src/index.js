import React from "react";
import ReactDOM from 'react-dom';
import { AppContainer } from "react-hot-loader";
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from "./components/App";

require("!style-loader!css-loader!sass-loader!./components/scss/fonts.scss");
require("!style-loader!css-loader!sass-loader!./components/scss/core.scss");
require("!style-loader!css-loader!sass-loader!./components/scss/utils.scss");
require("!style-loader!css-loader!sass-loader!./components/scss/layout.scss");
require("!style-loader!css-loader!sass-loader!./components/scss/header.scss");
require("!style-loader!css-loader!sass-loader!./components/scss/normalize.scss");

const rootEl = document.getElementById("root");
const initialState = [];
let author = {
      name: "ВАЛЕРИЙ КАЗАНЦЕВ",
      description: "научный сотрудник Института общей и неорганической химии НАН Беларуси, научный сотрудник РНПЦ детской хирургии.",
      links: [
        {
          title: "email",
          href: "#",
        },
        {
          title: "fb",
          href: "#",
        },
        {
          title: "ln",
          href: "#",
        },
        {
          title: "tg",
          href: "#",
        }
      ]
    };

let data = {};
data.table = {
  fields: ['Компания', 'Специализация', 'Сфера', 'Вакансия' ],
  items: [
    ["321123213", 'Вакансия', 'Химия', "123213213"],
    ["321123213", 'Вакансия', 'Химия', "123213213"]
  ]
}

data.searchItems = [{
  type: "Startup",
  title: "Характеристика взаимодействия наночастиц коллоидного золота.",
  sphere: "Медицина",
  author: {
    name: "ВАЛЕРИЙ КАЗАНЦЕВ",
    descr: "химик, институт неорганической химии"
  }
},
{
  type: "Research",
  title: "Характеристика взаимодействия наночастиц коллоидного золота.",
  sphere: "Медицина",
  img: "name",
  author: {
    name: "ВАЛЕРИЙ КАЗАНЦЕВ",
    descr: "химик, институт неорганической химии"
  }
}];

data.cards = [{
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
  type: "Research",
  title: "PLASMONA - ТЕСТ НА НАРКОТИКИ В ДОМАШНИХ УСЛОВИЯХ",
  sphere: "Медицина",
  theme: "bg-image-2",
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
