import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(){
        super();

        this.state = {
            alert: {
                type: "",
                message: ""
            },
            time: 0
        }

        this.times = {
            defaultTime: 1500, // 25min
            shortBreak: 300, // 5min
            longBreak: 900 // 15min
        }
    }

    componentDidMount() {
        this.setState({
            time: this.times.defaultTime
        })
		}
		
		displayTimer = seconds => {
			const min = Math.floor(seconds % 3600 / 60);
			const sec = Math.floor(seconds % 3600 % 60);

			return `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`
		}

		setTime = newTime => {

		}

		restartInterval = () => {

		}

		countDown = () => {
			
		}

		setTimeForWork = () => {

		}

		setTimeForShortBreak = () => {

		}

		setTimeForLongBreak = () => {

		}

  render() {
      const { alert: { type, message }, time} = this.state;

    return (
      <div>
        <h1>POMODORO TIMER</h1>
				<div className={`alert ${type}`}>
					{message}
				</div>
        <div className="time-container">
					{this.displayTimer(time)}
        </div>
				<div className="btns">
					<button className="start" onClick={this.setTimeForWork}>Start working</button>
					<button className="short" onClick={this.setTimeForShortBreak}>Short break</button>
					<button className="long" onClick={this.setTimeForLongBreak}>Long break</button>
				</div>
      </div>
    )
  }
}
