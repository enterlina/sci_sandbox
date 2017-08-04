import React from "react";
import { connect } from 'react-redux';

import QuickSearch from "./search/QuickSearch";

require("!style-loader!css-loader!sass-loader!./Header.scss");


class Header extends React.Component {
    constructor() {
      super();
      this.state = {
        isSearchActive: false
      }
    }
    toggleSearch() {
      this.setState({ isSearchActive: !this.state.isSearchActive });
    }
    render() {
       console.log(this.state.isSearchActive);
      
      

        return <div className="navbar-collapse collapse">
            <header className="Header">
            <a href="#" className="Header-logo link-no-text">SciTech</a>
            <nav className="Header-navigation">
                <li className="hamburger"></li>
                <li><a href="#">Исследования</a></li>
                <li><a href="#">Startups</a></li>
                <li><a href="#" className="Header-activeLink">Люди</a></li>
                <li><a href="#" className="link-no-text icon-tender">Инвестиции</a></li>
                <li><a href="#" className="link-no-text icon-meetup">Митапы</a></li>
                <li><a href="#" className="link-no-text icon-search" onClick={this.toggleSearch.bind(this)}>Поиск</a></li>
                <li><a href="#" className="link-no-text plasma">Plasma</a></li>
                <li className="lang-selector">
                    <a href="#" className="lang-active">Ru</a>
                    <span>/</span>
                    <a href="#">En</a>
                </li>
            </nav>
        </header>
         {this.state.isSearchActive ? <QuickSearch/> : null}
      </div>
    }
}

export default connect(
  state => ({}),
  dispatch => ({})
)(Header);