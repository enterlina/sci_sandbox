import React from "react";
import { connect } from 'react-redux';

import Card from "./Card";
import Header from "./Header";
import SearchItem from "./SearchItem";
import SearchField from "./SearchField";
import Table from "./Table";

class App extends React.Component {
    render() {

      console.log(this.props.cards);

      let cardData = this.props.cards;
      // let tableData = this.props.data.table;
      // let searchItemsData = this.props.data.searchItems;
      let cards = cardData.map((card, index) => <Card key={index} cardData={card}/>);
      // let searchItems = searchItemsData.map((item, index) => <SearchItem key={index} data={item}/>);
      
      return <div>
              <nav className="navbar" role="navigation">
                <div className="container">
                    <Header/>
                </div>
              </nav>
              <div className="container">
                <div className="row">
                  <SearchField/>
                </div>
              </div> 
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
  dispatch => ({})
)(App);
