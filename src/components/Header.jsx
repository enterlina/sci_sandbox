import React from "react";

require("!style-loader!css-loader!sass-loader!./Header.scss");


class Header extends React.Component {
    render() {
        return <header className="Header">
          <a href="#" className="Header-logo link-no-text">SciTech</a>
          <nav className="Header-navigation">
              <li className="hamburger"></li>
              <li><a href="#">Исследования</a></li>
              <li><a href="#">Startups</a></li>
              <li><a href="#" className="Header-activeLink">Люди</a></li>
              <li><a href="#" className="link-no-text icon-tender">Инвестиции</a></li>
              <li><a href="#" className="link-no-text icon-meetup">Митапы</a></li>
              <li><a href="#" className="link-no-text icon-search">Поиск</a></li>
              <li><a href="#" className="link-no-text plasma">Plasma</a></li>
              <li className="lang-selector">
                  <a href="#" className="lang-active">Ru</a>
                  <span>/</span>
                  <a href="#">En</a>
              </li>
          </nav>
      </header>
    }
}

export default Header;