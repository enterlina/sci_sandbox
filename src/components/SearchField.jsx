import React from "react";

require("!style-loader!css-loader!sass-loader!./SearchField.scss");


class SearchField extends React.Component {
    render() {
      
        return <div className="SearchField">
          <i className="icon-search">
          </i>
          <input type="text" name="searchQuery" className="SearchField--input" placeholder="Поиск" />
          <input type="button" className="Button Button--green" value="Искать"/>
        </div>
    }
}

export default SearchField;