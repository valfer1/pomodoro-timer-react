import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(){
        super();

        this.state = {
            alert: {
                type: "",
                message: "Ready?"
            },
						time: 0,
						play: false
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

		setTimeForWork = () => {
			this.setState({
				alert: {
					type: "work",
					message: "Working!"
				},
				time: this.times.defaultTime,
				play: true
			})

			this.restartInterval()
		}

		setTimeForShortBreak = () => {
			this.setState({
				alert: {
					type: "short",
					message: "Short break!"
				},
				time: this.times.shortBreak
			})

			this.restartInterval()
		}

		setTimeForLongBreak = () => {
			this.setState({
				alert: {
					type: "long",
					message: "Long break!"
				},
				time: this.times.longBreak
			})

			this.restartInterval()
		}

		restartInterval = () => {
			clearInterval(this.interval);

			this.interval = setInterval(this.countDown, 1000)
		}

		countDown = () => {
			if (this.state.time === 0) {
				this.setState({
					alert: {
						type: "buz",
						message: "Buzzzzzzz!"
					}
				})
			} else {
				this.setState({
					time: this.state.time - 1
				})
			}
		}

		play = () => {
			if(this.state.play === true) return;

			this.restartInterval();
			this.setState({ play: true })
		}

		pause = () => {
			clearInterval(this.interval)
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
					<button onClick={this.pause}>pause</button>
				</div>
      </div>
    )
  }
}
