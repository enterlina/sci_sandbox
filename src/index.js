import React from "react";
import ReactDOM from 'react-dom';
import {AppContainer} from "react-hot-loader";
import App from "./components/App";
import Card from "./components/Card";
import Header from "./components/Header";

require("!style-loader!css-loader!sass-loader!./components/scss/fonts.scss");
require("!style-loader!css-loader!sass-loader!./components/scss/core.scss");
require("!style-loader!css-loader!sass-loader!./components/scss/utils.scss");

const rootEl = document.getElementById("root");

let dataMeetup = {
  title: "PLASMONA - ТЕСТ НА НАРКОТИКИ В ДОМАШНИХ УСЛОВИЯХ",
  sphere: "Медицина",
  author: {
    name: "ВАЛЕРИЙ КАЗАНЦЕВ",
    descr: "химик, институт неорганической химии"
  },
  date: "19.10.2017 18:00",
  place: "ПВТ, КУПРЕВИЧА 1/5"
}, 
dataPlasma = {
  title: "PLASMONA - ТЕСТ НА НАРКОТИКИ В ДОМАШНИХ УСЛОВИЯХ",
  sphere: "Медицина",
  author: {
    name: "ВАЛЕРИЙ КАЗАНЦЕВ",
    descr: "химик, институт неорганической химии"
  }
},
dataStartup = {
  title: "PLASMONA - ТЕСТ НА НАРКОТИКИ В ДОМАШНИХ УСЛОВИЯХ",
  sphere: "Медицина",
  author: {
    name: "ВАЛЕРИЙ КАЗАНЦЕВ",
    descr: "химик, институт неорганической химии"
  }
},
dataResearch = {
  title: "PLASMONA - ТЕСТ НА НАРКОТИКИ В ДОМАШНИХ УСЛОВИЯХ",
  sphere: "Медицина",
  author: {
    name: "ВАЛЕРИЙ КАЗАНЦЕВ",
    descr: "химик, институт неорганической химии"
  }
},
dataTender = {
  title: "PLASMONA - ТЕСТ НА НАРКОТИКИ В ДОМАШНИХ УСЛОВИЯХ",
  sphere: "Медицина",
  author: {
    name: "ВАЛЕРИЙ КАЗАНЦЕВ",
    descr: "химик, институт неорганической химии"
  },
  date: "19.10.2017 18:00",
  activity: "Конкурс"
};




ReactDOM.render(
            <div>
              <Header/>
              <Card type="Meetup" theme="bg-purple" cardData={dataMeetup}/>
              <Card type="Plasma" cardData={dataPlasma}/>
              <Card type="Startup" cardData={dataStartup}/>
              <Card type="Startup" theme="bg-image-2" cardData={dataStartup}/>   
              <Card type="Research" theme="bg-yellow" cardData={dataResearch}/>   
              <Card type="Research" theme="bg-image-1" cardData={dataResearch}/>    
              <Card type="Tender" theme="bg-blue" cardData={dataTender}/>            
            </div>,
        rootEl
    );
