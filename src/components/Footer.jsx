import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

require("!style-loader!css-loader!sass-loader!./Footer.scss");

class Footer extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <footer className="Footer">
            <div className="layout-container">
                <div className="Footer-logo-container">
                    <Link to="/" className="Header-logo Footer-logo link-no-text">SciTech</Link>
                    <div className="Footer-logo-text">
                        с наукой в будущее
                    </div>
                </div>
                <div className="Footer-grid-wrapper">
                    <div className="Footer-grid-first-column">
                        <ul className="Footer-navigation" role="navigation">
                            <li><Link to="/Research" className={this.props.page.indexOf('Research') != '-1' ? 'active-link' : ''}>{this.props.lang.RESEARCH || 'Researches'}</Link></li>
                            <li><Link to="/Startup" className={this.props.page.indexOf('Startup') != '-1' ? 'active-link' : ''}>{this.props.lang.STARTUPS || 'Startups'}</Link></li>
                            <li><Link to="/People" className={this.props.page.indexOf('People') != '-1' ? 'active-link' : ''}>{this.props.lang.PEOPLE || 'People'}</Link></li>
                            <li><Link to="/Tenders" className={this.props.page.indexOf('Tenders') != '-1' ? 'active-link' : ''}>{this.props.lang.TENDERS || 'Tenders'}</Link></li>
                            <li><Link to="/Meetups" className={this.props.page.indexOf('Meetups') != '-1' ? 'active-link' : ''}>{this.props.lang.MEETUPS || 'Meetups'}</Link></li>
                            <li className="about-project hidden"><a href="#">{this.props.lang.ABOUT_US || 'About Us'}</a></li>
                        </ul>
                    </div>
                    <div className="Footer-grid-second-column">
                        <a href="https://goo.gl/forms/FniLdnwZxQvRjABl1" target="_blank" className="Button Button--green">
                            {this.props.lang.ADD_RESEARCH || 'Add Research'}
                        </a>
                        <a href="https://goo.gl/forms/zb93HhOflrHV0yQ52" target="_blank" className="Button Button--blue">
                            {this.props.lang.ADD_PROJECT || 'Add Project'}
                        </a>
                        
                        <a href="https://goo.gl/forms/g1w9GmsYcjoIxKM32" target="_blank" className="Button Button--gray">
                            {this.props.lang.WRITE_US || 'Write us'}
                        </a>
                        <ul className="Footer-additional-navigation hidden" role="navigation">
                            <li><a href="#" className="plasma">Plasma +</a></li>
                            <li><Link to="/Startup" className={this.props.page.indexOf('Search_experts') != '-1' ? 'active-link' : ''}>{this.props.lang.SEARCH_EXPERTS || 'Search Experts'}</Link></li>
                            <li><Link to="/Submit_idea" className={this.props.page.indexOf('People') != '-1' ? 'active-link' : ''}>{this.props.lang.SUBMIT_IDEA || 'Submit Idea'}</Link></li>
                            <li><Link to="/Submit_business_application" className={this.props.page.indexOf('Tenders') != '-1' ? 'active-link' : ''}>{this.props.lang.SUBMIT_BUSINESS_APPLICATION || 'Submit Busines Application'}</Link></li>
                        </ul>
                    </div>
                    <div className="Footer-grid-third-column">
                        <ul className="Footer-social-networks layout-container" role="navigation">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">{this.props.lang.VK || 'VK'}</a></li>
                            <li><a href="#">YouTube</a></li>
                            <li><a href="#">Telegram</a></li>
                            <li><a href="#">RSS</a></li>
                            <li className="email"><a href="mailto:scitech@gmail.com">scitech@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
                <div className="Footer-copyright-information">
                    &copy; 	&#171;СайТех&#187; 2017
                </div>
            </div>
        </footer>
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
)(Footer);