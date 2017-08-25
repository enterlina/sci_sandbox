import React from "react";
import { connect } from 'react-redux';

import {substrName, langArrayHandler} from '../utilities';

require("!style-loader!css-loader!sass-loader!./Dropdown.scss");

import { getDropdowns } from '../actions/dropdowns';

class Dropdown extends React.Component {
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      this.props.loadDropdown();
    }
    generateTree(data) {
      
        if (data == undefined || data.length == 0) { return false}
        let path = [];
      let expandElement = (element) => {
        let expanded = [];
        path.push(element.name);
        element.options.map((item)=>{
          if(typeof item == 'string') {
            // <input type="checkbox" name="sphere[]" value={path.join('--') + '--' + item} />
            expanded.push(<li><input  onChange={this.handleInputChange.bind(this)} id={item} type="checkbox" name="sphere[]" value={item} /><label htmlFor={item}>{this.props.lang[item] || item}</label></li>)
          } else if(typeof item == 'object') {
            expanded.push(expandElement(item))
          }
        })
        // <input type="checkbox" name="sphere[]" value={element.name} />
        return <div>
          {element.name != this.props.name ? <span><input onChange={this.handleInputChange.bind(this)} type="checkbox" name="sphere[]" value={element.name} id={element.name} /><label htmlFor={element.name}>{this.props.lang[element.name] || element.name}</label></span> : ''}
          <ul>{expanded}</ul>
        </div>
      }

      return expandElement(data);
      
    }
    handleInputChange(event) {
      const target = event.target;
      const value = target.checked ? target.value : false;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }
    // saveItems() {
    //   let form = document.getElementById('dropdownForm');
    //   let elements = form.elements;
    //   let result = [];
    //   let lang = 'ru';
    //   for(let i = 0; i < elements.length; i++) {
    //     let item = elements[i];
    //     result.push({
    //       key: item.name,
    //       lang: lang,
    //       value: item.value
    //     });
    //   }

    //   console.log(JSON.stringify(result));
    // }
    render() {

      let filtered = this.props.dropdowns.filter((item)=>{ return item.name == this.props.name});
      console.log(this.state);
      return <div className="Dropdown">
                <div className="Dropdown--selectedItem">{}</div>
                <div className="Dropdown--list">
                  <form>
                    {this.generateTree(filtered[0])}
                  </form>
                </div>
              </div>;
    }
}

export default connect(
  state => ({
    lang: state.lang,
    dropdowns: state.dropdowns
  }),
  dispatch => ({
    loadDropdown: () => {
      dispatch(getDropdowns());
    }
   })
)(Dropdown);
