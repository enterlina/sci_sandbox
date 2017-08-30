import React from "react";
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

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
        return <header className="Header layout-container">
            <Link to="/" className="Header-logo link-no-text">SciTech</Link>
            <div className="hamburger">
                <div className="hamburger-stripe"></div>
            </div>

            <nav className="Header-navigation" role="navigation">
                <li><Link to="/Researches" className={this.props.page.indexOf('Research') != '-1' ? 'active-link' : ''}>{this.props.lang.RESEARCH || 'Researches'}</Link></li>
                <li><Link to="/Startups" className={this.props.page.indexOf('Startup') != '-1' ? 'active-link' : ''}>{this.props.lang.STARTUPS || 'Startups'}</Link></li>
                <li><Link to="/Peoples" className={this.props.page.indexOf('People') != '-1' ? 'active-link' : ''}>{this.props.lang.PEOPLE || 'People'}</Link></li>
                <li><Link to="/Tenders" className={"link-no-text icon-tender" + (this.props.page.indexOf('Tender') != '-1' ? ' active-link' : '')}>{this.props.lang.INVEST || 'Investitions'}</Link></li>
                <li><a href="#" className="link-no-text icon-meetup">{this.props.lang.MEETUPS || 'Meetups'}</a></li>
                <li><a href="#" className="link-no-text icon-search" onClick={this.toggleSearch.bind(this)}>{this.props.lang.SEARCH || 'Search'}</a></li>
                <li><a href="#" className="link-no-text plasma">Plasma +</a></li>
                <li className="lang-selector">
                    <a href="#" className={this.props.defaultLang == 'ru' ? "lang-active" : ""} onClick={this.props.setDefaultLang.bind(this,'ru')}>Ru</a>
                    <span>/</span>
                    <a href="#" className={this.props.defaultLang == 'en' ? "lang-active" : ""} onClick={this.props.setDefaultLang.bind(this, "en")}>En</a>
                </li>
            </nav>
         {this.state.isSearchActive ? <QuickSearch/> : null}
        </header>

    }
}

export default connect(
  state => ({
    lang: state.lang,
    defaultLang: state.defaultLang,
    page: state.routing.location.pathname
  }),
  dispatch => ({
    setDefaultLang: (lang) => {
      dispatch({ type: 'SET_DEFAULT_LANG', payload: lang });
      dispatch(onLangUpdate(lang));
    },
  })
)(Header);