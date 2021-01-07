import React from "react";

/**
 * [Banner description]
 */
class Banner extends React.Component {
  constructor() {
    super();
  }

 /**
  * [render description]
  *
  * @return  {[type]}  [return description]
  */
  render() {
    return (
      <div className="bannerWrapper">
        <span id="nameWelcomeSection"></span>
        <h1 className="bandName bandNameLarge">Foody Buddy</h1>
      </div>
    );
  }
}

export default Banner;
