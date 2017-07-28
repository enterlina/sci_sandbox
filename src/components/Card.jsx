import React from "react";

require("!style-loader!css-loader!sass-loader!./Card.scss");


class Card extends React.Component {
    render() {
      let cardData = this.props.cardData;
      
      let className = "Card-wrapper " + cardData.type + " " + cardData.theme;
      let type = this.props.type;
      let iconClass = "icon-" + cardData.type.toLowerCase();

      return <div className={className}>
        <article className="Card">
            { type == 'Meetup' ? <p className="Card-date">{cardData.date}</p> : null }
            { type == 'Tender' ? <div className="Card-info">
                <p className="Card-activity">{cardData.activity}</p>
                <p className="Card-date">{cardData.date}</p>
            </div> : null }
            <h1><a href="#">{cardData.title}</a></h1>
            { type == 'Meetup' ? <p className="Card-place">{cardData.place}</p> : null }
            <div>
                <p className="Card-sphere">{type !== 'Meetup' && type !== 'Tender' ? cardData.sphere : ''}</p>
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
