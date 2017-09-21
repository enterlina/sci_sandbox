import React from "react";
import {langArrayHandler, multipleArrTransformer} from '../utilities';

import {Link} from 'react-router-dom';

require("!style-loader!css-loader!sass-loader!./AuthorCard.scss");

class AuthorCard extends React.Component {
  constructor() {
    super();
    this.authorExternalLink = null;
  }
  componentWillMount() {
    let authorDescription = this.props.data.description;
    let linksResolver = /(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*\/?/;
    authorDescription.map((description) => {
      for (let key in description) {
        let link = description[key].match(linksResolver);
        if (link) {
          this.authorExternalLink = link[0];
          description[key] = description[key].replace(linksResolver,``);
        }
      }//<a href=${link[0]} class="author-more-info" target="_blank">${key == 'ru' ? 'Больше информации' : 'More info'}</a>
    })
  }

    render() {
      let author = this.props.data;
      let lang = this.props.lang;
      let contacts = [];
      if(author.contacts !== undefined) {
        contacts = multipleArrTransformer(author.contacts);
      }
        return <div className="AuthorCard">
          <h2>{ author.isCustom  ? langArrayHandler(author.name, lang) : <Link to={'/People/' + author._id}>{langArrayHandler(author.name, lang)}</Link> }</h2>
          <p className={langArrayHandler(author.description, lang).trim() != '' ? '' : 'hidden'} dangerouslySetInnerHTML={{__html:langArrayHandler(author.description, lang)}}></p>
          {this.authorExternalLink ? <a href={this.authorExternalLink} target="_blank">{lang == 'ru' ? 'Больше информации' : 'More info'}</a> : ''}
          <ul className={contacts ? '' : 'hidden'}>
            {contacts}
          </ul>
        </div>
    }
}

export default AuthorCard;
