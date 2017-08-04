import React from "react";
import {substrName} from '../../utilities';

require("!style-loader!css-loader!sass-loader!./SearchItem.scss");

// Example of data 

// {
//   type: "Startup",
//   title: "Характеристика взаимодействия наночастиц коллоидного золота.",
//   sphere: "Медицина",
//   _author: {
//     name: "ВАЛЕРИЙ КАЗАНЦЕВ",
//     descr: "химик, институт неорганической химии"
//   }
// }

class SearchItem extends React.Component {
    render() {
      const item = this.props.data;
      if(item) {
        const markerClass = "icon-marker-" + item.type.toLowerCase();
      
        return <article className="SearchItem">
          <i className={markerClass}></i>
          { item.image ? <img src={item.image} alt={item.name} title={item.name} /> : null }
          <div className="SearchItem--content">
            <p>{item.use}</p>
            <h1><a href="#">{substrName(item.name, 80)}</a></h1>
            <p>{item._author[0].name.toLowerCase()}</p>
          </div>
      </article>
      }
      return <article className="SearchItem">
          <div className="SearchItem--content noResult">
            <h1>По Вашему запросу ничего не найдено</h1>
          </div>
      </article>
      
    }
}

export default SearchItem;