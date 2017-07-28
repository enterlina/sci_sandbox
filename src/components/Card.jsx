import React from "react";

require("!style-loader!css-loader!sass-loader!./Card.scss");


class Card extends React.Component {
    render() {
      let cardData = this.props.cardData;
      
      let className = "Card-wrapper " + cardData.type + " " + cardData.theme;
      let iconClass = "icon-" + cardData.type.toLowerCase();

      return <div className={className}>
        <article className="Card">
            { cardData.type == 'Meetup' ? <p className="Card-date">{cardData.date}</p> : null }
            { cardData.type == 'Tender' ? <div className="Card-info">
                <p className="Card-activity">{cardData.activity}</p>
                <p className="Card-date">{cardData.date}</p>
            </div> : null }
            <h1><a href="#">{cardData.title}</a></h1>
            { cardData.type == 'Meetup' ? <p className="Card-place">{cardData.place}</p> : null }
            <div>
                <p className="Card-sphere">{cardData.type !== 'Meetup' && cardData.type !== 'Tender' ? cardData.sphere : ''} <i className={iconClass}></i></p>
                <p className="Card-author">
                    {cardData.author.name}
                    <span>{cardData.author.descr}</span>
                </p>
            </div>
        </article>
    </div>
    }
}

export default Card;
