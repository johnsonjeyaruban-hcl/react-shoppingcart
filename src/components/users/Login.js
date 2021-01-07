import React from "react";
import { getData } from "../../services/api";

class Login extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
    this.userNameRef = React.createRef();
    this.passwordRef = React.createRef();
    localStorage.removeItem("user");

  }

  /**
   * [handleSubmit description]
   * @param   {[type]}  event  [event description]
   * @return  {[type]}         [return description]
   */
  handleSubmit (event) {
    event.preventDefault();
    let userNameValue = this.userNameRef.current.value;
    let passwordValue = this.passwordRef.current.value;
    let url = `users?userName=${userNameValue}&password=${passwordValue}`;
    getData(url)
      .then((response) => {
        let responseObject = response.data;
        let checkResponseObject = responseObject?.length > 0;
        if (checkResponseObject === true) {
          localStorage.setItem(
            "user",
            JSON.stringify(responseObject[0])
          );
          window.location.href = "http://localhost:3000/";
        }
      })
      .catch((error) => {
        console.log("response catch block", error);
      });
  };

  render() {
    const avtImage = 'assets/images/img_avatar2.png';
    return (
      <React.Fragment>
        <div className="parent bodyPart">
          <h2>Customer Login</h2>

          <form name="loginForm" onSubmit={this.handleSubmit}>
            <div className="imgcontainer">
              <img src={avtImage} alt="Avatar" className="avatar" />
            </div>

            <div className="container">
              <div>
                <label>User Name*</label>
                <label
                  className="validationError hide"
                  id="userNameValidationError"
                >
                  This field is required.
                </label>
                <input
                  type="text"
                  placeholder="Enter Username"
                  name="userName"
                  id="userName"
                  ref={this.userNameRef}
                  required
                />
              </div>

              <div>
                <label>Password*</label>
                <label
                  className="validationError hide"
                  id="passwordValidationError"
                >
                  This field is required.
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  id="password"
                  ref={this.passwordRef}
                  required
                />
              </div>

              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
