import React from "react";
import { connect } from 'react-redux';

import QuickSearch from "./search/QuickSearch";

require("!style-loader!css-loader!sass-loader!./Header.scss");

import { onLangUpdate } from '../actions/language';
import { getCards } from '../actions/cards';

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

        return <div className="navbar-collapse collapse">
            <header className="Header">
            <a href="#" className="Header-logo link-no-text">SciTech</a>
            <nav className="Header-navigation">
                <li className="hamburger"></li>
                <li><a href="#">{this.props.lang.RESEARCH || 'Researches'}</a></li>
                <li><a href="#">{this.props.lang.STARTUPS || 'Startups'}</a></li>
                <li><a href="#" className="Header-activeLink">{this.props.lang.PEOPLE || 'People'}</a></li>
                <li><a href="#" className="link-no-text icon-tender">{this.props.lang.INVEST || 'Investitions'}</a></li>
                <li><a href="#" className="link-no-text icon-meetup">{this.props.lang.MEETUPS || 'Meetups'}</a></li>
                <li><a href="#" className="link-no-text icon-search" onClick={this.toggleSearch.bind(this)}>{this.props.lang.SEARCH || 'Search'}</a></li>
                <li><a href="#" className="link-no-text plasma">Plasma</a></li>
                <li className="lang-selector">
                    <a href="#" className={this.props.defaultLang == 'ru' ? "lang-active" : ""} onClick={this.props.setDefaultLang.bind(this,'ru')}>Ru</a>
                    <span>/</span>
                    <a href="#" className={this.props.defaultLang == 'en' ? "lang-active" : ""} onClick={this.props.setDefaultLang.bind(this, "en")}>En</a>
                </li>
            </nav>
        </header>
         {this.state.isSearchActive ? <QuickSearch/> : null}
      </div>
    }
}

export default connect(
  state => ({
    lang: state.lang,
    defaultLang: state.defaultLang
  }),
  dispatch => ({
    setDefaultLang: (lang) => {
      dispatch({ type: 'SET_DEFAULT_LANG', payload: lang });
      dispatch(onLangUpdate(lang));
      dispatch(getCards(lang));
    },
  })
)(Header);