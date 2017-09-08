import React from "react";
import {langArrayHandler} from '../utilities';

import {Link} from 'react-router-dom';

require("!style-loader!css-loader!sass-loader!./AuthorCard.scss");

class AuthorCard extends React.Component {
    render() {
      let author = this.props.data;
      let lang = this.props.lang;
      let contacts = [];
      if(author.contacts !== undefined) {
        author.contacts.map((item, index) => item[0].trim() != '' ? contacts.push(<li><a href={item[1]}>{item[0]}</a></li>) : false)
      }
        return <div className="AuthorCard">
          <h2>{ author.isCustom  ? langArrayHandler(author.name, lang) : <Link to={'/People/' + author._id}>{langArrayHandler(author.name, lang)}</Link> }</h2>
          <p className={langArrayHandler(author.description, lang).trim() != '' ? '' : 'hidden'} dangerouslySetInnerHTML={{__html:langArrayHandler(author.description, lang)}}></p>
          <ul className={contacts ? '' : 'hidden'}>
            {contacts}
          </ul>
        </div>
    }
}

export default AuthorCard;