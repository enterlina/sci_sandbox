import React from "react";
import {substrName, getHighlightedText} from '../../utilities';
import { connect } from 'react-redux';

require("!style-loader!css-loader!sass-loader!./SearchItem.scss");

// Example of data 

// {
//   type: "Startup",
//   name: "Характеристика взаимодействия наночастиц коллоидного золота.",
//   sphere: "Медицина",
//   _author: {
//     name: "ВАЛЕРИЙ КАЗАНЦЕВ",
//     descr: "химик, институт неорганической химии"
//   }
// }

class SearchItem extends React.Component {
    render() {
      const item = this.props.data;
      const searchWord = this.props.searchWord;
      if(item) {
        const markerClass = "icon-marker-" + item.type.toLowerCase();
        let name = substrName(item.name, 80);

        return <article className="SearchItem">
          <i className={markerClass}></i>
          { item.image ? <img src={item.image} alt={item.name} title={item.name} /> : null }
          <div className="SearchItem--content">
            <p>{item.use}</p>
            <h1><a href="#">{getHighlightedText(name, searchWord)}</a></h1>
            <p>{item._author[0].name.toLowerCase()}</p>
          </div>
      </article>
      }
      return <article className="SearchItem">
          <div className="SearchItem--content noResult">
            <h1>{this.props.lang.NO_ITEMS_FOUND || 'There are no items found'}</h1>
          </div>
      </article>
      
    }
}

export default connect(
  state => ({ 
    lang: state.lang
   }),
  dispatch => ({})
)(SearchItem);