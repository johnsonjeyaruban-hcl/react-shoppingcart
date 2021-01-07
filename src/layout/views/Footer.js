import React from "react";

class Footer extends React.Component {
  constructor() {
      super()
  }
  /**
   * [render description]
   *
   * @return  {[type]}  [return description]
   */
  render() {
    return (
        <footer className="mainFooter">
        <div className="container mainFooterContainer">
          <h3 className="bandName">Foody Buddy</h3>
          <ul className="nav footerNav">
            <li><a href="index">HOME</a></li>
            <li><a href="index">FOODS</a></li>
            <li><a href="track">TRACK ORDER</a></li>
            <li><a href="#">ABOUT</a></li>
            <li><a href="#">CONTACT</a></li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
