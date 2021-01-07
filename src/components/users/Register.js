import React from "react";
import { postData } from "../../services/api";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
    };
  }

  /**
   * [handleSubmit description]
   *
   * @param   {[type]}  event  [event description]
   *
   * @return  {[type]}         [return description]
   */
  handleSubmit = (event) => {
    event.preventDefault();
    postData('users', this.state)
      .then((response) => {
        let responseObject = response.data;
        let checkResponseObject = responseObject?.id > 0;
        if (checkResponseObject === true) {
          window.location.href = "http://localhost:3000/login";
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { firstName, lastName, userName, password } = this.state;
    const avtImage = 'assets/images/img_avatar2.png';
    return (
      <>
        <div className="parent bodyPart">
          <h2>Customer Register</h2>

          <form name="registerForm" onSubmit={this.handleSubmit}>
            <div className="imgcontainer">
              <img src={avtImage} alt="Avatar" className="avatar" />
            </div>
            <div className="container">
              <div>
                <label>First Name*</label>
                <label
                  className="validationError hide"
                  id="firstNameValidationError"
                >
                  This field is required.
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={firstName}
                  onChange={(event) =>
                    this.setState({ firstName: event.target.value })
                  }
                />
              </div>

              <div>
                <label>Last Name*</label>
                <label
                  className="validationError hide"
                  id="LastNameValidationError"
                >
                  This field is required.
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={lastName}
                  onChange={(event) =>
                    this.setState({ lastName: event.target.value })
                  }
                />
              </div>
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
                  value={userName}
                  onChange={(event) =>
                    this.setState({ userName: event.target.value })
                  }
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
                  value={password}
                  onChange={(event) =>
                    this.setState({ password: event.target.value })
                  }
                  required
                />
              </div>
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default Register;
