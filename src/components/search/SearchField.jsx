import React from "react";
import { connect } from 'react-redux';

require("!style-loader!css-loader!sass-loader!./SearchField.scss");

import { search } from '../../actions/search';

class SearchField extends React.Component {
    smartSearch() {
        this.props.onSearch(this.searchWord.value);
    }
    render() {
      
        return <div className="SearchField">
          <i className="icon-search">
          </i>
          <input type="text" name="searchQuery" onChange={this.smartSearch.bind(this)} ref={(input)=>{this.searchWord = input;}} className="SearchField--input" placeholder={this.props.lang.SEARCH || 'Search'} />
          <input type="button" className="Button Button--green" value={this.props.lang.SEARCH_BUTTON || 'Find'}/>
        </div>
    }
}

export default connect(
  state => ({ 
    lang: state.lang
   }),
  dispatch => ({
    onSearch: (searchWord) => {
      dispatch(search(searchWord));
    }
  })
)(SearchField);