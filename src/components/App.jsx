import React from "react";

import Card from "./Card";
import Header from "./Header";

class App extends React.Component {
    render() {
      let data = this.props.data;
      let cards = data.map((card, index) => <Card key={index} cardData={card}/>);
      
      console.log(cards);
      return <div>
              <Header/>
              {cards}      
            </div>

    }
}

export default App;
