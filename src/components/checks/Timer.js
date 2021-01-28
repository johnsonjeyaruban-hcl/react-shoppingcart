import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 5,
      getInterval: "",
    };
  }

  componentDidMount() {
    console.clear();
    let getInterval = setInterval(() => {
      let currentTimer = this.state.timer - 1;
      this.setState({ timer: currentTimer });
    }, 1000);
    this.setState({ getInterval });
  }

  render() {
    if (this.state.timer === 0) {
      clearInterval(this.state.getInterval);
    }
    return (
      <>
        <div id="wrapperAll">
          <div style={{ fontWeight: "700" }}>{this.state.timer}</div>
          <button onClick={(e) => clearInterval(this.state.getInterval)}>
            Stop Timer
          </button>
        </div>
      </>
    );
  }
}

export default Timer;
