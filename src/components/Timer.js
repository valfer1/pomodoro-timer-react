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
  render() {
      const { alert: { type, message }, time} = this.state;
      
    return (
      <div>
        
      </div>
    )
  }
}
