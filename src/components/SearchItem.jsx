import React from "react";

require("!style-loader!css-loader!sass-loader!./SearchItem.scss");

// Example of data 

// {
//   type: "Startup",
//   title: "Характеристика взаимодействия наночастиц коллоидного золота.",
//   sphere: "Медицина",
//   author: {
//     name: "ВАЛЕРИЙ КАЗАНЦЕВ",
//     descr: "химик, институт неорганической химии"
//   }
// }

class SearchItem extends React.Component {
    render() {
      const item = this.props.data;
      const markerClass = "icon-marker-" + item.type.toLowerCase();
      
        return <article className="SearchItem">
          <i className={markerClass}></i>
          { item.img ? <img src={item.img} alt={item.title} title={item.title} /> : null }
          <p>{item.sphere}</p>
          <h1><a href="#">{item.title}</a></h1>
          <p>{item.author.name.toLowerCase()}</p>
      </article>
    }
}

export default SearchItem;