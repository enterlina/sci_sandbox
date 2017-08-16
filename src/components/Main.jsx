import React from "react";
import { connect } from 'react-redux';

import Card from "./Card";
import Header from "./Header";
import Table from "./Table";
import AuthorCard from "./AuthorCard";
import {Link} from 'react-router-dom';
import Alert from "./Alert";
import Preloader from "./Preloader";

import { getCards, getCardsByType } from '../actions/cards';
import { getLangVars } from '../actions/language';


import {langArrayHandler} from '../utilities';

class Main extends React.Component {
    componentWillMount() {

      this.props.onLoadLang(this.props.defaultLang);
      this.props.onGetCards();

    }
    render() {
      
      let cards = 'There is no items';
      let cardData = this.props.cards;
      
        cards = cardData.map((card, index) => <Card key={index} cardData={card} lang={this.props.defaultLang}/>);
  

      
      return <div>
              {this.props.alert.length != 0 ? <Alert type={this.props.alert.type} text={this.props.alert.text}/> : null}
              {this.props.preloader ? <Preloader /> : null }
              <div className="layout-navbar" >
                  <Header/>
              </div>
              
              <div className="layout-container cards">
                {cards}
              </div>
              <div className="clearfix"></div>
            </div>

    }
}

export default connect(
  (state, ownProps) => ({
    preloader: state.preloader,
    alert: state.alert,
    cards: state.cards,
    defaultLang: state.defaultLang,
    ownProps
  }),
  dispatch => ({
    onGetCards: () => {
      dispatch(getCards());
    },
    onLoadLang: (lang) => {
      dispatch(getLangVars(lang));
    }
  })
)(Main);
