import React from "react";
import ReactDOM from 'react-dom';
import { AppContainer } from "react-hot-loader";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

import Main from "./components/Main";
import ResearchMain from "./components/ResearchMain";
import StartupMain from "./components/StartupMain";
import PeopleMain from "./components/PeopleMain";
import TenderMain from "./components/TenderMain";
import MeetupMain from "./components/MeetupMain";
import Research from "./components/specificPages/Research";
import Startup from "./components/specificPages/Startup";
import People from "./components/specificPages/People";
import Tender from "./components/specificPages/Tender";
import Meetup from "./components/specificPages/Meetup";

require("!style-loader!css-loader!sass-loader!./components/scss/fonts.scss");
require("!style-loader!css-loader!sass-loader!./components/scss/core.scss");
require("!style-loader!css-loader!sass-loader!./components/scss/utils.scss");
require("!style-loader!css-loader!sass-loader!./components/scss/layout.scss");
require("!style-loader!css-loader!sass-loader!./components/scss/header.scss");
require("!style-loader!css-loader!sass-loader!./components/scss/normalize.scss");

const rootEl = document.getElementById("root");
const history = createHistory();
const middleware = routerMiddleware(history);

import reducer from './reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk), applyMiddleware(middleware)));

ReactDOM.render(
        <Provider store={store}>
          <ConnectedRouter history={history}>
            <div>
              <Route exact path="/" component={Main} />
              <Route path="/Researches" component={ResearchMain} />
              <Route path="/Research/:id" component={Research} />
              <Route path="/Startups" component={StartupMain} />
              <Route path="/Startup/:id" component={Startup} />
              <Route path="/Peoples" component={PeopleMain} />
              <Route path="/People/:id" component={People} />
              <Route path="/Tenders" component={TenderMain} />
              <Route path="/Tender/:id" component={Tender} />
              <Route path="/Meetups" component={MeetupMain} />
              <Route path="/Meetup/:id" component={Meetup} />
            </div>
          </ConnectedRouter >
        </Provider>,
        rootEl
    );







// let author = {
//       name: "ВАЛЕРИЙ КАЗАНЦЕВ",
//       description: "научный сотрудник Института общей и неорганической химии НАН Беларуси, научный сотрудник РНПЦ детской хирургии.",
//       links: [
//         {
//           title: "email",
//           href: "#",
//         },
//         {
//           title: "fb",
//           href: "#",
//         },
//         {
//           title: "ln",
//           href: "#",
//         },
//         {
//           title: "tg",
//           href: "#",
//         }
//       ]
//     };

// let data = {};
// data.table = {
//   fields: ['Компания', 'Специализация', 'Сфера', 'Вакансия' ],
//   items: [
//     ["321123213", 'Вакансия', 'Химия', "123213213"],
//     ["321123213", 'Вакансия', 'Химия', "123213213"]
//   ]
// }

// data.searchItems = [{
//   type: "Startup",
//   title: "Характеристика взаимодействия наночастиц коллоидного золота.",
//   sphere: "Медицина",
//   author: {
//     name: "ВАЛЕРИЙ КАЗАНЦЕВ",
//     descr: "химик, институт неорганической химии"
//   }
// },
// {
//   type: "Research",
//   title: "Характеристика взаимодействия наночастиц коллоидного золота.",
//   sphere: "Медицина",
//   img: "name",
//   author: {
//     name: "ВАЛЕРИЙ КАЗАНЦЕВ",
//     descr: "химик, институт неорганической химии"
//   }
// }];

// data.cards = [{
//   type: "Meetup",
//   title: "PLASMONA - ТЕСТ НА НАРКОТИКИ В ДОМАШНИХ УСЛОВИЯХ",
//   sphere: "Медицина",
//   theme: "bg-purple",
//   author: {
//     name: "ВАЛЕРИЙ КАЗАНЦЕВ",
//     descr: "химик, институт неорганической химии"
//   },
//   date: "19.10.2017 18:00",
//   place: "ПВТ, КУПРЕВИЧА 1/5"
// }, 
// {
//   type: "Plasma",
//   title: "PLASMONA - ТЕСТ НА НАРКОТИКИ В ДОМАШНИХ УСЛОВИЯХ",
//   sphere: "Медицина",
//   author: {
//     name: "ВАЛЕРИЙ КАЗАНЦЕВ",
//     descr: "химик, институт неорганической химии"
//   }
// },
// {
//   type: "Startup",
//   title: "PLASMONA - ТЕСТ НА НАРКОТИКИ В ДОМАШНИХ УСЛОВИЯХ",
//   sphere: "Медицина",
//   theme: "bg-purple",
//   author: {
//     name: "ВАЛЕРИЙ КАЗАНЦЕВ",
//     descr: "химик, институт неорганической химии"
//   }
// },
// {
//   type: "Startup",
//   title: "PLASMONA - ТЕСТ НА НАРКОТИКИ В ДОМАШНИХ УСЛОВИЯХ",
//   sphere: "Медицина",
//   author: {
//     name: "ВАЛЕРИЙ КАЗАНЦЕВ",
//     descr: "химик, институт неорганической химии"
//   }
// },
// {
//   type: "Research",
//   title: "PLASMONA - ТЕСТ НА НАРКОТИКИ В ДОМАШНИХ УСЛОВИЯХ",
//   sphere: "Медицина",
//   theme: "bg-yellow",
//   author: {
//     name: "ВАЛЕРИЙ КАЗАНЦЕВ",
//     descr: "химик, институт неорганической химии"
//   }
// },
// {
//   type: "Research",
//   title: "PLASMONA - ТЕСТ НА НАРКОТИКИ В ДОМАШНИХ УСЛОВИЯХ",
//   sphere: "Медицина",
//   theme: "bg-image-1",
//   author: {
//     name: "ВАЛЕРИЙ КАЗАНЦЕВ",
//     descr: "химик, институт неорганической химии"
//   }
// },
// {
//   type: "Research",
//   title: "PLASMONA - ТЕСТ НА НАРКОТИКИ В ДОМАШНИХ УСЛОВИЯХ",
//   sphere: "Медицина",
//   theme: "bg-image-2",
//   author: {
//     name: "ВАЛЕРИЙ КАЗАНЦЕВ",
//     descr: "химик, институт неорганической химии"
//   }
// },
// {
//   type: "Tender",
//   title: "PLASMONA - ТЕСТ НА НАРКОТИКИ В ДОМАШНИХ УСЛОВИЯХ",
//   sphere: "Медицина",
//   theme: "bg-blue",
//   author: {
//     name: "ВАЛЕРИЙ КАЗАНЦЕВ",
//     descr: "химик, институт неорганической химии"
//   },
//   date: "19.10.2017 18:00",
//   activity: "Конкурс"
// }];