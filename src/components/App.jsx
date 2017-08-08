import React from "react";
import { connect } from 'react-redux';

import Card from "./Card";
import Header from "./Header";
import Table from "./Table";
import Alert from "./Alert";
import Preloader from "./Preloader";

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
              {this.props.alert.length != 0 ? <Alert type={this.props.alert.type} text={this.props.alert.text}/> : null}
              {this.props.preloader ? <Preloader /> : null }
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
    preloader: state.preloader,
    alert: state.alert,
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
