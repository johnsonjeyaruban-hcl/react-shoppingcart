import React from 'react'

class Timer2 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            time: 5,
            clearIntervalVal: ""
        }
    }

    componentDidMount() {
        let clearIntervalVal = setInterval(() => {
            let currentTime = this.state.time - 1;
            this.setState({time: currentTime})
        }, 1000);
        this.setState({clearIntervalVal})
    }

    render() {
        this.state.time <= 0 && clearInterval(this.state.clearIntervalVal)
        return(
            <>
            <button onClick={() => clearInterval(this.state.clearIntervalVal)}>Stop</button>
            <h1>{this.state.time}</h1>
            </>
        )
    }
}

export default Timer2;