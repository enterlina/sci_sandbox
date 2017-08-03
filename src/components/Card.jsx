import React from "react";

require("!style-loader!css-loader!sass-loader!./Card.scss");

// Example of data 

// {
//   type: "Meetup",
//   name: "PLASMONA - ТЕСТ НА НАРКОТИКИ В ДОМАШНИХ УСЛОВИЯХ",
//   use: "Медицина",
//   style: "bg-purple",
//   _author: {
//     name: "ВАЛЕРИЙ КАЗАНЦЕВ",
//     description: "химик, институт неорганической химии"
//   },
//   date: "19.10.2017 18:00",
//   place: "ПВТ, КУПРЕВИЧА 1/5"
// }

class Card extends React.Component {
    render() {
      let cardData = this.props.cardData;
      
      let className = "Card-wrapper " + cardData.type + " " + cardData.style;
      let iconClass = "icon-" + cardData.type.toLowerCase();

      return <div className="Card-externalBound col-md-6">
        <div className={className}>
            <article className="Card">
                { cardData.type == 'Meetup' ? <p className="Card-date">{cardData.date}</p> : null }
                { cardData.type == 'Tender' ? <div className="Card-info">
                    <p className="Card-activity">{cardData.activity}</p>
                    <p className="Card-date">{cardData.date}</p>
                </div> : null }
                <h1><a href="#">{cardData.name}</a></h1>
                { cardData.type == 'Meetup' ? <p className="Card-place">{cardData.place}</p> : null }
                <div>
                    <p className="Card-sphere">{cardData.type !== 'Meetup' && cardData.type !== 'Tender' ? cardData.use : ''} <i className={iconClass}></i></p>
                    <p className="Card-author">
                        {cardData._author[0].name}
                        <span>{cardData._author[0].description}</span>
                    </p>
                </div>
            </article>
        </div>
    </div>
    }
}

export default Card;
