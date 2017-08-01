import React from "react";

import Card from "./Card";
import Header from "./Header";
import SearchItem from "./SearchItem";
import SearchField from "./SearchField";
import Table from "./Table";

class App extends React.Component {
    render() {
      let cardData = this.props.data.cards;
      let tableData = this.props.data.table;
      let searchItemsData = this.props.data.searchItems;
      let cards = cardData.map((card, index) => <Card key={index} cardData={card}/>);
      let searchItems = searchItemsData.map((item, index) => <SearchItem key={index} data={item}/>);
      
      return <div>
              <Header/>
              {cards}
              <div className="searchFieldWrapper">
                <SearchField/>
              </div>
              <div className="searchItems">
                {searchItems}
                <Table data={tableData}/> 
              </div>     
            </div>

    }
}

export default App;
