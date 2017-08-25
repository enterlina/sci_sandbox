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
      
      document.title = 'SciTech - ' + this.props.lang.STARTUPS + ' - ' + langArrayHandler(page.name, defaultLang);

      if(page.length == 0) {
        return <Preloader />;
      }
      console.log(page);
      return <div className="InfoPage">
              {this.props.alert.length != 0 ? <Alert type={this.props.alert.type} text={this.props.alert.text}/> : null}
              {this.props.preloader ? <Preloader /> : null }
              <div className="layout-navbar" >
                <Header/>
              </div>
              <div className="layout-container InfoPage--wrapper layout-container--white">
                <div className={`InfoPage--heading ${page.type}`}>
                  <i className={`icon-marker-${page.type.toLowerCase()}`}></i>
                  <span className="sphere">{langArrayHandler(page.sphere, defaultLang)}</span>
                  <h1>{langArrayHandler(page.name, defaultLang)}</h1>
                </div>
                <div className="InfoPage--term">
                  <div className="InfoPage--termKey">{this.props.lang.STAGE || 'Stage'}:</div>                  
                  <div className="InfoPage--termDescription" dangerouslySetInnerHTML={{__html:langArrayHandler(page.stage, defaultLang)}} ></div>
                </div>
                <div className="InfoPage--term">
                  <div className="InfoPage--termKey">{this.props.lang.VIDEO || 'video'}:</div>                  
                  <div className="InfoPage--termDescription">{page.video}</div>
                </div>
                <div className="InfoPage--term">
                  <div className="InfoPage--termKey">{this.props.lang.PRESENTATION || 'Presentation'}:</div>                  
                  <div className="InfoPage--termDescription">{page.presentation}</div>
                </div>
                <div className="InfoPage--term">
                  <div className="InfoPage--termKey">{this.props.lang.CONTACTS || 'Contacts'}:</div>                  
                  <div className="InfoPage--termDescription">{page._author.map((author, index)=>{
                      return <AuthorCard data={author} key={index} lang={defaultLang} />
                  })}
                  </div>
                </div>
                <div className="InfoPage--term">
                  <div className="InfoPage--termKey">{this.props.lang.PROBLEM || 'Problem'}:</div>                  
                  <div className="InfoPage--termDescription" dangerouslySetInnerHTML={{__html:langArrayHandler(page.problem, defaultLang)}}></div>
                </div>
                
                <div className="InfoPage--term">
                  <div className="InfoPage--termKey">{this.props.lang.SOLUTION || 'Solution'}:</div>                  
                  <div className="InfoPage--termDescription" dangerouslySetInnerHTML={{__html:langArrayHandler(page.solution, defaultLang)}}></div>
                </div>
                <div className="InfoPage--term">
                  <div className="InfoPage--termKey">{this.props.lang.DEMO || 'Demo'}:</div>                  
                  <div className="InfoPage--termDescription">{page.demo}</div>
                </div>
                <div className="InfoPage--term">
                  <div className="InfoPage--termKey">{this.props.lang.INFO || 'Info'}:</div>                  
                  <div className="InfoPage--termDescription" dangerouslySetInnerHTML={{__html:langArrayHandler(page.info, defaultLang)}}></div>
                </div>
                <div className="InfoPage--term">
                  <div className="InfoPage--termKey">{this.props.lang.WHOISNEEDED || 'Who is needed'}:</div>                  
                  <div className="InfoPage--termDescription" dangerouslySetInnerHTML={{__html:langArrayHandler(page.needTofind, defaultLang)}}></div>
                </div>
                <div className="InfoPage--term">
                  <div className="InfoPage--termKey">{this.props.lang.SKILS || 'Skils'}:</div>                  
                  <div className="InfoPage--termDescription" dangerouslySetInnerHTML={{__html:langArrayHandler(page.skils, defaultLang)}}></div>
                </div>
                <div className="InfoPage--term">
                  <div className="InfoPage--termKey">{this.props.lang.TAGS || 'Tags'}:</div>                  
                  <div className="InfoPage--termDescription">{langArrayHandler(page.tags, defaultLang).join(', ')}</div>
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