import React, { Component } from 'react'
import "./Timer.css"

export default class Timer extends Component {
    constructor(){
        super();

        this.state = {
            alert: {
                type: "",
                message: "Ready?"
            },
						time: 0,
						play: false,
						showPlay: false,
						title: "Pomodoro Timer"
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

		setTime = (type, message, time) => {
			this.setState({
				alert: {
					type,
					message
				},
				time,
				play: true,
				showPlay: true,
				// title: this.getTitle(time)
			})
			this.restartInterval()
		}

		componentWillUpdate() {
			document.title = this.state.time === 0 ? "Pomodoro timer" : `${this.getTitle(this.state.time)} | Pomodoro timer`
		}
		
		displayTimer = seconds => {
			const min = Math.floor(seconds % 3600 / 60);
			const sec = Math.floor(seconds % 3600 % 60);

			return `${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}`
		}

		getTitle = (time) => {
			return this.displayTimer(time)
		}

		setTimeForWork = () => {
			this.setTime("work", "Werk!", this.times.defaultTime)
		}

		setTimeForShortBreak = () => {
			this.setTime("short", "Taking a lil' break", this.times.shortBreak)
		}

		setTimeForLongBreak = () => {
			this.setTime("long", "Taking a well deserved long break", this.times.longBreak)
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
					},
					showPlay: false
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

			this.setState({ play: false })
		}

		togglePlay = () => {
			return this.state.play ? this.pause() : this.play()
		}

  render() {
      const { alert: { type, message }, time, title} = this.state;

    return (
      <div className="cont">
        <h1>POMODORO TIMER</h1>
				{title}
        <div className={`time-container ${type}`}>
				<p className="time">
					{this.displayTimer(time)}
				</p>
				<div>
					<p>
						{message}
					</p>
				</div>
				<button className={`toggle`} disabled={!this.state.showPlay && true } onClick={this.togglePlay}>{this.state.play ? <i class="fas fa-pause-circle"></i> : <i class="fas fa-play-circle"></i>}</button>
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
