import React from "react";
import { connect } from 'react-redux';
import {langArrayHandler, convertDate, cardMapData} from '../../utilities';
require("!style-loader!css-loader!sass-loader!../InfoPage.scss");

import { getCardsById } from '../../actions/cards';
import { getLangVars } from '../../actions/language';

import Header from "../Header";
import Alert from "../Alert";
import Preloader from "../Preloader";
import AuthorCard from "../AuthorCard";


class Research extends React.Component {
    componentWillMount(){
      this.props.getCardById(this.props.match.params.id);
      this.props.onLoadLang(this.props.defaultLang);
    }
    render() {

      let page = this.props.data;
      let defaultLang = this.props.defaultLang;

      document.title = 'SciTech - ' + this.props.lang.RESEARCH + ' - ' + langArrayHandler(page.name, defaultLang);

      if(page.length == 0) {
        return <Preloader />;
      }
      return <div className="InfoPage main-content">
              {this.props.alert.length != 0 ? <Alert type={this.props.alert.type} text={this.props.alert.text}/> : null}
              {this.props.preloader ? <Preloader /> : null }
              <div className="layout-navbar" >
                <Header/>
              </div>
              <div className="layout-container InfoPage--wrapper layout-container--white">
                <div className={`InfoPage--heading ${page.type}`}>
                  <i className={`icon-marker-${page.type.toLowerCase()}`}></i>
                  <span className="sphere">{langArrayHandler(page.use, defaultLang)}</span>
                  <h1>{langArrayHandler(page.name, defaultLang)}</h1>
                </div>
                <div className="InfoPage--term">
                  <div className="InfoPage--termKey">{this.props.lang.AUTHOR || 'Author'}:</div>                  
                  <div className="InfoPage--termDescription">{page._author.map((author, index)=>{
                      return <AuthorCard data={author} key={index} lang={defaultLang} />
                  })}
                  </div>
                </div>
                <div className="InfoPage--term">
                  <div className="InfoPage--termKey">{this.props.lang.GOAL || 'Goal'}:</div>                  
                  <div className="InfoPage--termDescription" dangerouslySetInnerHTML={{__html:langArrayHandler(page.goal, defaultLang)}}></div>
                </div>
                
                <div className="InfoPage--term">
                  <div className="InfoPage--termKey">{this.props.lang.METHODS || 'Methods'}:</div>                  
                  <div className="InfoPage--termDescription" dangerouslySetInnerHTML={{__html:langArrayHandler(page.methods, defaultLang)}}></div>
                </div>
                <div className="InfoPage--term">
                  <div className="InfoPage--termKey">{this.props.lang.RESULTS || 'Results'}:</div>                  
                  <div className="InfoPage--termDescription" dangerouslySetInnerHTML={{__html:langArrayHandler(page.solution, defaultLang)}}></div>
                </div>
                <div className="InfoPage--term">
                  <div className="InfoPage--termKey">{this.props.lang.RECOMENDATIONS || 'Recomendations'}:</div>                  
                  <div className="InfoPage--termDescription" dangerouslySetInnerHTML={{__html:langArrayHandler(page.recommendation, defaultLang)}}></div>
                </div>
                <div className="InfoPage--term">
                  <div className="InfoPage--termKey">{this.props.lang.USING || 'Using'}:</div>                  
                  <div className="InfoPage--termDescription" dangerouslySetInnerHTML={{__html:langArrayHandler(page.use, defaultLang)}}></div>
                </div>
                <div className="InfoPage--term">
                  <div className="InfoPage--termKey">{this.props.lang.TAGS || 'Tags'}:</div>                  
                  <div className="InfoPage--termDescription" >{Array.isArray(langArrayHandler(page.tags, defaultLang)) ? langArrayHandler(page.tags, defaultLang).join(', ') : null}</div>
                </div>
                
                <div className="InfoPage--term">
                  <div className="InfoPage--termKey">{this.props.lang.DATE || 'Date'}:</div>                  
                  <div className="InfoPage--termDescription">{convertDate(page.date)}</div>
                </div>
                
              </div>
            </div>
    }
}

export default connect(
  state => ({
    data: state.specificCard,
    preloader: state.preloader,
    alert: state.alert,
    lang: state.lang,
    defaultLang: state.defaultLang
  }),
  dispatch => ({
    getCardById: (lang, id) => {
      dispatch(getCardsById(lang, id));
    },
    onLoadLang: (lang) => {
      dispatch(getLangVars(lang));
    }
  })
)(Research);