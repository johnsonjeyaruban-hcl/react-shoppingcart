import React from "react";
import Banner from "./Banner";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      logInOutText: "LOGIN",
    };
    let user = JSON.parse(localStorage.getItem("user"));
    //+--Optional chaing use in order to reduce number of codes
    this.logInOutText = user?.id ? "LOGOUT" : "LOGIN";
  }

  componentDidMount() {
    console.log("props", this.props);
    if (this.logInOutText == "LOGOUT") {
      //window.location.href = "http://localhost:3000/products";
    }
  }
  /**
   * [render description]
   *
   * @return  {[type]}  [return description]
   */
  render() {
    return (
      <header className="mainHeader">
        <nav className="mainNav nav">
          <ul>
            <li>
              <a href="index">HOME</a>
            </li>
            <li>
              <a href="products">FOODS</a>
            </li>
            <li>
              <a href="orders">TRACK ORDER</a>
            </li>
            <li>
              <a className="loginOutText" href="login">
                {this.logInOutText}
              </a>
            </li>
            <li>
              <a className="loginOutText" href="register">
                REGISTER
              </a>
            </li>
          </ul>
        </nav>
        <Banner />
      </header>
    );
  }
}

export default Header;
