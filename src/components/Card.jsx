import React from "react";
import {Link} from 'react-router-dom';

import {substrName, convertDate, langArrayHandler} from '../utilities';

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
      let lang = this.props.lang;
      let className = "Card-wrapper " + cardData.type + " " + cardData.style;
      let iconClass = "icon-" + cardData.type.toLowerCase();
      
      return <div className="layout-cardFrame">
        <div className={className}>
            <article className="Card">
                { cardData.type == 'Meetup' ? <p className="Card-date">{convertDate(cardData.date)}</p> : null }
                { cardData.type == 'Tender' ? <div className="Card-info">
                    <p className="Card-activity">{langArrayHandler(cardData.activity, lang)}</p>
                    <p className="Card-date">ДО: {convertDate(cardData.tenderDeadline)}</p>
                </div> : null }
                <h1><Link to={'/' + cardData.type + '/' + cardData._id}>{substrName(langArrayHandler(cardData.name, lang), 100)}</Link></h1>
                { cardData.type == 'Meetup' ? <p className="Card-place">{cardData.place}</p> : null }
                <div>
                    <p className="Card-sphere">{langArrayHandler(cardData.sphere, lang)} <i className={iconClass}></i></p>
                    <p className={"Card-author " + (cardData.type == 'Tender' ? 'hidden' : '' )}>
                        {langArrayHandler(cardData._author[0] ? cardData._author[0].name: undefined, lang)}
                        <span>{substrName(langArrayHandler(cardData._author[0] ? cardData._author[0].description: undefined, lang), 50)}</span>
                    </p>
                    <p className={"Card-author " +  (cardData.type != 'Tender' ? 'hidden' : '' )}>
                        {cardData.tenderReward}
                        <span>{langArrayHandler(cardData._author[0] ? cardData._author[0].name: undefined, lang)}</span>
                    </p>
                </div>
            </article>
        </div>
    </div>
    }
}

export default Card;
