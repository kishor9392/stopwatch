import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    sec: 0,
  }
componentWillUnmount = () => {
    clearInterval(this.timeInterval)
  }

  increase = () => {
    this.setState(prevState => ({sec: prevState.sec + 1}))
  }

  onStart = () => {
    this.timeInterval = setInterval(this.increase, 1000)
  }

  onStop = () => {
    clearInterval(this.timeInterval)
  }

  onReset = () => {
    this.setState({sec: 0})
    clearInterval(this.timeInterval)
  }

  getTime = () => {
    const {sec} = this.state

    const m = Math.floor(sec / 60)

    const s = Math.floor(sec % 60)

    const min1 = m > 9 ? m : `0${m}`
    const sec1 = s > 9 ? s : `0${s}`

    return `${min1}:${sec1}`
  }

  render() {
    return (
      <div className="bg">
        <h1 className="h1">Stopwatch</h1>
        <div className="bg1">
          <div className="bg2">
            <div className="bg3">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="img"
              />
              <p className="p">Timer</p>
            </div>

            <h1 className="h2">{this.getTime()}</h1>

            <div className="bg4">
              <button type="button" className="btn" onClick={this.onStart}>
                Start
              </button>
              <button type="button" className="btn1" onClick={this.onStop}>
                Stop
              </button>
              <button type="button" className="btn2" onClick={this.onReset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
