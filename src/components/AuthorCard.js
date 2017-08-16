import React from "react";
import {langArrayHandler} from '../utilities';
require("!style-loader!css-loader!sass-loader!./AuthorCard.scss");

class AuthorCard extends React.Component {
    render() {
      let author = this.props.data;
      let lang = this.props.lang;
      let contacts = [];
      if(author.contacts !== undefined) {
        author.contacts.map((item, index) => contacts.push(<li><a href={item[1]}>{item[0]}</a></li>))
      }
        return <div className="AuthorCard">
          <h2>{langArrayHandler(author.name, lang)}</h2>
          <p>{langArrayHandler(author.description, lang)}</p>
          <ul>
            {contacts}
          </ul>
        </div>
    }
}

export default AuthorCard;