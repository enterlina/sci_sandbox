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


import {langArrayHandler, convertDate} from '../utilities';

class ResearchMain extends React.Component {
    componentDidMount() {
      this.props.onGetCardsByType('Meetup');
      this.props.onLoadLang(this.props.defaultLang);
    }
    render() {
      
      document.title = 'SciTech - ' + this.props.lang.TENDER;

      let cards = 'There is no items';
      let cardData = this.props.cards;
     
        let tableData = {
          fields: ['Название', 'Дата', 'М-Награда', 'М-Сфера', 'М-Компания' ],
          items: []
        };

        tableData.items = cardData.map((card, index) => {
          
          
          let cardLink = <Link to={'/' + card.type + '/' + card._id}>{langArrayHandler(card.name, this.props.defaultLang)}</Link>;

          return [
            cardLink,  
            convertDate(card.tenderDeadline), 
            card.tenderReward,
            langArrayHandler(card.sphere, this.props.defaultLang),
            langArrayHandler(card._author[0] ? card._author[0].name: undefined, this.props.defaultLang)
          ];
          
        });

        cards = cardData.map((card, index) => <Card key={index} cardData={card} lang={this.props.defaultLang}/>);;


      
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
    lang: state.lang,
    defaultLang: state.defaultLang,
    ownProps
  }),
  dispatch => ({
    onGetCardsByType: ( type) => {
      dispatch(getCardsByType(type));
    },
    onLoadLang: (lang) => {
      dispatch(getLangVars(lang));
    }
  })
)(ResearchMain);
