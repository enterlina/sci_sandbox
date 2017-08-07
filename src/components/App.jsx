import React from "react";
import { connect } from 'react-redux';

import Card from "./Card";
import Header from "./Header";
import Table from "./Table";

import { getCards } from '../actions/cards';
import { getLangVars } from '../actions/language';

class App extends React.Component {
    componentWillMount() {
      
      this.props.onGetCards(this.props.defaultLang);
      this.props.onLoadLang(this.props.defaultLang);
    }
    render() {
      let cards = 'There is no items';

      let cardData = this.props.cards;
      
      cards = cardData.map((card, index) => <Card key={index} cardData={card}/>);

      
      return <div>
              <nav className="navbar" role="navigation">
                <div className="container">
                    <Header/>
                </div>
              </nav>
              
              <div className="container">
                <div className="row">
                {cards}
                </div>
              </div>
              <div className="clearfix"></div>
            </div>

    }
}

export default connect(
  state => ({
    cards: state.cards,
    defaultLang: state.defaultLang
  }),
  dispatch => ({
    onGetCards: (lang) => {
      dispatch(getCards(lang));
    },
    onLoadLang: (lang) => {
      dispatch(getLangVars(lang));
    }
  })
)(App);
