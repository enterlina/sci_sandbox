import React from "react";
import { connect } from 'react-redux';

import Card from "./Card";
import Header from "./Header";
import Table from "./Table";

import { getCards } from '../actions/cards';

class App extends React.Component {
    componentWillMount() {
      
      this.props.onGetCards();
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
    cards: state.cards
  }),
  dispatch => ({
    onGetCards: () => {
      dispatch(getCards());
    }
  })
)(App);
